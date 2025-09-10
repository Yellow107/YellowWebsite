import dynamic from "next/dynamic";
import Whatsapp from "../Whatsapp";
import { ImageObjectJsonLd, OrganizationJsonLd, WebsiteJsonLd } from "@/lib/json-ld";

const DynamicHeader = dynamic(() => import('../Header'), {
  ssr: true,
})

const DynaminFooter = dynamic(() => import('../Footer'), {
  ssr: true,
})

const Layout = ({ children }) => {
  return (
    <>
      <OrganizationJsonLd />
      <WebsiteJsonLd />
      <ImageObjectJsonLd />
      <DynamicHeader />
      {children}
      <Whatsapp />
      <DynaminFooter />
    </>
  )
};

export default Layout;
