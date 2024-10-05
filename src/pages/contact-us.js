
import Layout from "@/components/Layout";
import Pagehero from '@/components/contact/Pagehero';
import Address from '@/components/contact/Address';
import { titleAnim, paraAnim, lineAnim, fadeIn, fadeUp } from '@/components/gsapAnimations';
import ContactForm from "@/components/contact/ContactForm";
import MetaData from "@/components/Metadata";
import { WebpageJsonLd } from "@/lib/json-ld";

export default function Contact() {

  titleAnim();
  paraAnim();
  lineAnim();
  fadeIn();
  fadeUp();

  const metadata = {
    title: "Contact Our Agency In Dubai, UAE Today - Yellow Agency",
    description: "Talk to us, email us, visit us, work with us! Contact Yellow agency in Dubai for questions & feedback or simply stop by Yellow for coffee today.",
    img: "home.png",
    date_published: "2017-10-22T06:17",
    date_modified: "2024-08-01T12:32",
    slug: "contact-us"
  }

  return (
    <>
      <MetaData metadata={metadata} />
      <WebpageJsonLd metadata={metadata} />
      <Layout>
        <Pagehero />
        <ContactForm />
        <Address />
      </Layout>
    </>
  )
}


