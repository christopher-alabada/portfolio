import { NextResponse } from "next/server";
import { Resend } from "resend";
import { CreateEmailOptions } from "resend/build/src/emails/interfaces";
import { ResendResponse } from "./types";
import { EmailTemplate, EmailTemplateProps } from "@/components/EmailTemplate";
import { contactFormSchema } from "@/validation/contactForm";
import { ZodError } from "zod";

function createSendMailData(
  emailValues: EmailTemplateProps
): CreateEmailOptions {
  return {
    from: `email address <${process.env.NEXT_PUBLIC_RESEND_FROM_EMAIL}>`,
    to: process.env.NEXT_PUBLIC_RESEND_EMAIL as string,
    subject: "Portfolio Message 🍻🚀",
    text: "You've got a message!",
    react: EmailTemplate(emailValues),
  };
}

export async function POST(request: Request) {
  try {
    const emailValues = await request.json();
    const validatedData = contactFormSchema.parse(emailValues);
    const sendEmailData = createSendMailData(validatedData);

    const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
    const data = (await resend.emails.send(
      sendEmailData
    )) as Partial<ResendResponse>;

    if (data.statusCode && data.statusCode !== 200) {
      return NextResponse.json(data, { status: data.statusCode });
    } else {
      return NextResponse.json(data, { status: 200 });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      const errorMessage = {
        error: error.message,
      };
      console.log("Failed to send email:", errorMessage);
    }
    if (error instanceof ZodError) {
      return NextResponse.json({ error }, { status: 400 });
    }
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
