
import GoogleMap from "@/components/contact/GoogleMap";
import "./page.scss";
import ContactForm from "@/components/contact/ContactFrom";

export default function Page() {
  return (
    <div className="page__wrapper --fixed-height">
      <section className="contact__wrapper">
        <div className="contact__container">
          <div className="block-1__wrapper"></div>
          <div className="block-2__wrapper">
            <address>
              The Archives, <br />
              Unit 10 The High Cross Centre, Fountayne Rd, <br />
              LONDON <br />
              N15 4QN
            </address>
            <div className="social-links__wrapper">
              <a href="http://instagram.com/patch_studio__">Instagram</a>
              <a href="mailto:info@patchstudio.uk">Email</a>
            </div>
          </div>
          <div className="block-3__wrapper">
            <ContactForm />
          </div>
          <div className="block-4__wrapper">
            <GoogleMap />
          </div>
        </div>
      </section>
    </div>
  );
}
