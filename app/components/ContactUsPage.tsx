import ContactSectionOne from "./ContactSectionOne";
import ContactSectionTwo from "./ContactSectionTwo";
import ContactSectionThree from "./ContactSectionThree";

export default function ContactUsPage() {
  return (
    <div className="flex flex-1 flex-col font-sans">
      <main className="flex-1">
        <ContactSectionOne />
        <ContactSectionTwo />
        <ContactSectionThree />
      </main>
    </div>
  );
}
