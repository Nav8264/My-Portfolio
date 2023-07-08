import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children, nav, setNav }) => {
  return (
    <>
      <div>
        <div className="">
          <Navbar nav={nav} setNav={setNav} />
        </div>
        <div className="min-h-screen">{children}</div>
        <div className=" ">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
