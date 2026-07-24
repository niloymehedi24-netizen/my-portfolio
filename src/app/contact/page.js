import ContactHero from "@/components/contact/ContactHero";
import ContactCards from "@/components/contact/ContactCards";
import ContactForm from "@/components/contact/ContactForm";
import Availability from "@/components/contact/Availability";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactCards />
      <ContactForm />
      <Availability />
    </>
  );
}