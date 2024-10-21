import dynamic from "next/dynamic";
import Whatsapp from "../Whatsapp";

const DynamicHeader = dynamic(() => import('../Header'), {
  ssr: false,
})

const DynaminFooter = dynamic(() => import('../Footer'), {
  ssr: false,
})

const Layout = ({ children, className = "" }) => {
  return (
    <>
      <DynamicHeader />
        <main className={className}>
          {children}
          <Whatsapp />
        </main>
      <DynaminFooter />
    </>
  )
};

export default Layout;
