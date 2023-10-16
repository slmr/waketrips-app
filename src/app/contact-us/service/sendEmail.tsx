import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import ContactUsEmail from "../component/email-template";
import { ContactUsFormValues } from "../component/contact-us-form";

export async function sendMail(
  subject: string,
  toEmail: string,
  payload: ContactUsFormValues
) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  const emailHtml = render(<ContactUsEmail {...payload} />);

  const options = {
    from: process.env.NODEMAILER_EMAIL,
    to: toEmail,
    subject: subject,
    html: emailHtml,
  };

  try {
    const response = await transporter.sendMail(options);
    return response;
  } catch (error) {
    return error;
  }
}
