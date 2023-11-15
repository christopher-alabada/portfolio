export interface ISendingEmailState {
  sendingForm: "ready" | "sending" | "sent" | "error";
}

export enum SendingFormState {
  READY = "ready",
  SENDING = "sending",
  SENT = "sent",
  ERROR = "error",
  VALIDATION_ERROR = "validation_error",
}

export interface ISendingFormState {
  sendingForm: SendingFormState;
}

export enum ContactFormErrorMessage {
  NAME = "Oops..your name is required.",
  EMAIL = "Oh, please use a valid email.",
  MESSAGE = "Hey...you forget to say hi 👋🏼",
}

export interface IContactFormValidation {
  name?: ContactFormErrorMessage.NAME;
  email?: ContactFormErrorMessage.EMAIL;
  message?: ContactFormErrorMessage.MESSAGE;
}
