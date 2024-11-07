"use client";

import { useEffect, useState } from "react";
import "./contact-form.scss";
import Link from "next/link";

function handleFormStateUpdate(
  key: string,
  value: string,
  setValue: (arg: any) => void
) {
  setValue((curr: any) => {
    return {
      ...curr,
      [key]: value,
    };
  });
}

type FormDataType = {
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  subject: string | undefined;
  hdn: string | undefined;
  message: string | undefined;
};

export default function ContactForm() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [emailSendSuccess, setEmailSendSuccess] = useState<null | boolean>(
    null
  );
  const [formData, setFormData] = useState<FormDataType>({
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    subject: undefined,
    hdn: undefined,
    message: undefined,
  });

  useEffect(() => {
    if (hasSubmitted) {
      const submitData = new FormData();
      for (var key in formData) {
        if (formData[key as keyof FormDataType] !== undefined) {
          submitData.append(key, formData[key as keyof FormDataType] as string);
        }
      }

      fetch("/api/node-mailer", {
        method: "POST",
        body: submitData,
      })
        .then((res) => {
          if (res.status === 200) {
            setEmailSendSuccess(true);
          } else {
            setEmailSendSuccess(false);
          }
        })
        .catch((err) => {
          setEmailSendSuccess(false);
          console.error(err);
        });

      setFormData({
        firstName: undefined,
        lastName: undefined,
        email: undefined,
        subject: undefined,
        hdn: undefined,
        message: undefined,
      });

      setHasSubmitted(false);
    }
  }, [hasSubmitted, formData]);

  return (
    <div className="contact-form__wrapper">
      <div className="contact-form__container">
        {emailSendSuccess === null ? (
          <form
            style={{ opacity: hasSubmitted ? 0 : 1 }}
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              if (
                formData.firstName &&
                formData.lastName &&
                formData.message &&
                formData.subject &&
                !formData.hdn
              ) {
                setHasSubmitted(true);
              }
            }}
          >
            <div className="name__container">
              <input
                type="text"
                className="first-name"
                placeholder="First Name"
                onChange={(e) =>
                  handleFormStateUpdate(
                    "firstName",
                    e.target.value,
                    setFormData
                  )
                }
              ></input>
              <input
                type="text"
                className="last-name"
                placeholder="Last Name"
                onChange={(e) =>
                  handleFormStateUpdate("lastName", e.target.value, setFormData)
                }
              ></input>
            </div>
            <input
              type="email"
              className="email"
              placeholder="Your Email"
              onChange={(e) =>
                handleFormStateUpdate("email", e.target.value, setFormData)
              }
            ></input>
            <input
              type="text"
              className="subject"
              placeholder="Subject Line"
              onChange={(e) =>
                handleFormStateUpdate("subject", e.target.value, setFormData)
              }
            ></input>
            <input
              type="text"
              className="--hdn"
              placeholder="Subject Line"
              onChange={(e) =>
                handleFormStateUpdate("hdn", e.target.value, setFormData)
              }
            ></input>
            <textarea
              name="message"
              className="message"
              placeholder="Message"
              onChange={(e) =>
                handleFormStateUpdate("message", e.target.value, setFormData)
              }
            ></textarea>
            <input type="submit" className="button bold" value="send" />
          </form>
        ) : emailSendSuccess === true ? (
          <div className="email-response__container">
            <p>
              Thanks for getting in touch! Your email has been received and we
              will be in touch soon.
            </p>
          </div>
        ) : emailSendSuccess === false ? (
          <div className="email-response__container">
            <p>
              There was an issue sending your message. Please contact us with us
              using our email{" "}
              <span>
                <Link href="mailto:info@patchstudio.uk">
                  info@patchstudio.uk
                </Link>
              </span>
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
