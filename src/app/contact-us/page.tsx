import ContactUsForm from "./component/contact-us-form";
import ContactUsInformation from "./component/contact-us-information";
import ContactUsLocation from "./component/contact-us-location";
import ContactUsTitle from "./component/contact-us-title";

export default function ContactUs() {
  return (
    <div className="pb-14">
      <ContactUsTitle />
      <ContactUsLocation />
      <ContactUsForm />
      <ContactUsInformation />
    </div>
  );
}
