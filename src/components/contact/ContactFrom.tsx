import "./contact-form.scss";

export default function ContactForm() {
  return (
    <div className="contact-form__wrapper">
      <div className="contact-form__container">
        <form className="contact-form">
          <div className="name__container">
            <input type="text" className="first-name" placeholder="First Name"></input>
            <input type="text" className="last-name" placeholder="Last Name"></input>
          </div>
          <input type="email" className="email" placeholder="Your Email"></input>
          <input type="text" className="subject" placeholder="Subject Line"></input>
          <input type="text" className="message" placeholder="Message"></input>
          <input type="submit" className="button bold" value="send" />
        </form>
      </div>
    </div>
  );
}
