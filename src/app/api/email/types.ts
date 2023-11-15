import { CreateEmailResponse } from "resend/build/src/emails/interfaces";

export interface IResendError {
  statusCode: number;
  message: string;
  name: string;
}

export type ResendResponse = CreateEmailResponse & IResendError;
