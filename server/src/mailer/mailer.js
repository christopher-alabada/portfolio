const config = require('../../config.js');
const SendGrid = require('@sendgrid/mail');
SendGrid.setApiKey(process.env.SENDGRID_API_KEY);


// DEFAULT mail values
const fromEmail = `chris.topher.la portfolio <${config.email.from}>`;
const subjectEmail = "A message from chris.topher.la - " + new Date();
const textEmail = "Hi! You got a message from chris.topher.la. Please login to check message.";
const htmlEmail = "<p>Hi!</p><p>You got a message from chris.topher.la. Please login to check message.</p>";


// The actual mail. You can override this.
const mail = {
  to: config.email.to,
  from: fromEmail,
  subject: subjectEmail,
  text: textEmail,
  html: htmlEmail
};

module.exports = {
  mail: mail,
  sendEmail: () => SendGrid.send(mail)
};