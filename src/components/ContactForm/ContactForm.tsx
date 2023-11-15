"use client";
import { FormEvent, useState } from "react";
import ContactFormButton from "@/components/ContactForm/ContactFormButton";
import ContactFormStatus from "@/components/ContactForm/ContactFormStatus";
import {
  SendingFormState,
  ContactFormErrorMessage,
  IContactFormValidation,
} from "@/components/ContactForm/types";
import { contactFormSchema } from "@/validation/contactForm";
import { ZodError, ZodIssue } from "zod";

export default function ContactForm() {
  const [sendingForm, setSendingForm] = useState<SendingFormState>(
    SendingFormState.READY
  );
  const [formValidationMessage, setFormValidationMessage] =
    useState<IContactFormValidation>({});

  function setValidationErrors(issues: ZodIssue[]) {
    const validationMessages: IContactFormValidation = {};
    issues.forEach((issue) => {
      if (issue.path[0] === "name") {
        validationMessages.name = ContactFormErrorMessage.NAME;
      }
      if (issue.path[0] === "email") {
        validationMessages.email = ContactFormErrorMessage.EMAIL;
      }
      if (issue.path[0] === "message") {
        validationMessages.message = ContactFormErrorMessage.MESSAGE;
      }
    });
    setFormValidationMessage(validationMessages);
  }

  async function handleOnSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormValidationMessage({});

    setSendingForm(SendingFormState.SENDING);

    try {
      const formData = new FormData(event.currentTarget);
      const validatedData = contactFormSchema.parse({
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        message: formData.get("message") as string,
      });

      const response = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify(validatedData),
      });

      if (response.status === 200) {
        setSendingForm(SendingFormState.SENT);
      } else if (response.status === 400) {
        setSendingForm(SendingFormState.VALIDATION_ERROR);
      } else {
        setSendingForm(SendingFormState.ERROR);
      }
    } catch (error: unknown) {
      if (error instanceof ZodError) {
        setValidationErrors(error.errors);
        setSendingForm(SendingFormState.VALIDATION_ERROR);
      } else {
        setSendingForm(SendingFormState.ERROR);
      }
    }
  }

  return (
    <form onSubmit={handleOnSubmit} className="col-span-4" id="contact-form">
      <div className="grid grid-cols-4 gap-x-7">
        <div className="col-span-4 md:col-span-2 mb-7">
          <label className="block mb-2 pl-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="What's your name?"
            className="w-full border border-solid border-neutral-300 rounded p-2 text-base text-gray-600 placeholder-gray-300"
          />
          <div className={`italic text-sm text-reddish ml-2 absolute`}>
            {formValidationMessage?.name}
          </div>
        </div>
        <div className="col-span-4 md:col-span-2 mb-7">
          <label className="block mb-2 pl-1">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="and your email?"
            className="w-full border border-solid border-neutral-300 rounded p-2 text-base text-gray-600 placeholder-gray-300"
          />
          <div className={`italic text-sm text-reddish ml-2 absolute`}>
            {formValidationMessage?.email}
          </div>
        </div>
        <div className="col-span-4 mb-7">
          <label className="block mb-2 pl-1">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Say hi! 👋"
            className="w-full border border-solid border-neutral-300 rounded p-2 text-base text-gray-600 placeholder-gray-300 h-24 resize-none"
          ></textarea>
          <div className={`italic text-sm text-reddish ml-2 absolute`}>
            {formValidationMessage?.message}
          </div>
        </div>
        <div className="col-span-4 flex items-center mt-1">
          <ContactFormButton sendingForm={sendingForm} />
          <ContactFormStatus sendingForm={sendingForm} />
        </div>
      </div>
    </form>
  );
}
