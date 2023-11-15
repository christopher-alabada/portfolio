import * as React from "react";

export interface EmailTemplateProps {
  name?: string;
  email?: string;
  message?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}): React.ReactNode => {
  const mainStyle = {
    padding: "5px",
    fontFamily: "monospace, sans-serif, Helvetica",
    backgroundColor: "rgb(239 239 239)",
  };

  const cellStyle = {
    verticalAlign: "top",
    padding: "5px",
  };

  return (
    <html>
      <body style={mainStyle}>
        <h2>You&apos;ve got a message!</h2>
        <table>
          <tr>
            <td style={cellStyle}>Name:</td>
            <td style={cellStyle}>{name}</td>
          </tr>
          <tr>
            <td style={cellStyle}>Email:</td>
            <td style={cellStyle}>{email}</td>
          </tr>
          <tr>
            <td style={cellStyle}>Message:</td>
            <td style={cellStyle}>{message}</td>
          </tr>
        </table>
      </body>
    </html>
  );
};
