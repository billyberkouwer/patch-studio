import { NextResponse } from "next/server";
import { validate } from "deep-email-validator";
import nodemailer from "nodemailer";

export async function POST(req: Request, res: Response) {
  const formData = await req.formData();
  const email = formData.get("email") as string | undefined;
  const firstName = formData.get("firstName") as string | undefined;
  const lastName = formData.get("lastName") as string | undefined;
  const hdn = formData.get("hdn") as string | undefined;
  const subject = formData.get("subject") as string | undefined;
  const message = formData.get("message") as string | undefined;

  if (email) {
    let validateEmail = await validate(email);
    if (
      (!validateEmail?.reason || validateEmail?.reason === "smtp") &&
      !hdn &&
      firstName &&
      lastName &&
      subject &&
      message
    ) {
      const transporter = nodemailer.createTransport({
        host: process.env.MAILTRAP_HOST,
        port: 587,
        secure: false,
        auth: {
          user: process.env.MAILTRAP_USER,
          pass: process.env.MAILTRAP_PASS,
        },
      });

      const mailOptions = {
        from: process.env.MAILTRAP_EMAIL,
        to: process.env.CONTACT_FORM_EMAIL,
        replyTo: email,
        subject: subject,
        html: `<html>
                  <body>
                    <h3>You have a new message sent from your website contact form.</h3>
                    <h1>${subject}</h1>
                    <h3>${firstName + " " + lastName}</h3>
                    <h3>${email}</h3>
                    <p>${message}</p>
                  </body>
                </html>`,
      };

      transporter.sendMail(mailOptions, (error: any, info: any) => {
        if (error) {
          console.log("Error:" + error);
          return NextResponse.json({ status: 500, error: { ...error } });
        } else {
          console.log("Message sent: " + info.response);
          return NextResponse.json({
            status: 200,
            message: "Message sent! " + info.response,
          });
        }
      });
    } else if (hdn) {
      return NextResponse.json({
        status: 500,
        message: "The hidden field was filled in - this is probably a bot.",
      });
    } else {
      return NextResponse.json({
        status: 500,
        message: "A field was missing or the email was invalid.",
      });
    }
  }

  return NextResponse.json({
    status: 500,
    message: "No email was provided.",
  });
}