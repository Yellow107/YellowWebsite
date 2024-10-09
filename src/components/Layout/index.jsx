import dynamic from "next/dynamic";

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
        <main className={className}>{children}</main>
      <DynaminFooter />
    </>
  )
};

export default Layout;
