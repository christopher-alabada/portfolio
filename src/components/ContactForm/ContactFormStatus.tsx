import { ISendingFormState, SendingFormState } from "./types";

export default function ContactFormStatus({ sendingForm }: ISendingFormState) {
  let status = "";
  let redText = "";

  if (sendingForm === SendingFormState.SENDING) {
    status = "Sending...";
  }

  if (sendingForm === SendingFormState.SENT) {
    status = "Your message was sent. Thanks! 🍻";
  }

  if (sendingForm === SendingFormState.ERROR) {
    status = "Oops an error..Please try again later.";
    redText = "text-reddish";
  }

  if (sendingForm === SendingFormState.VALIDATION_ERROR) {
    status = "Uh oh..please check form errors.";
    redText = "text-reddish";
  }

  return <div className={`italic text-sm ${redText}`}>{status}</div>;
}
