import Footer from "../Footer";
import Header from "../Header";
// import Transition from "../transition/Transition";

const Layout = ({ children, className = "" }) => {
  return (
    <>
      <Header />
        <main className={className}>{children}</main>
      <Footer />
      {/* <Transition /> */}
    </>
  )
};

export default Layout;
