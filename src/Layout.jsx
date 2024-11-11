import { useLocation } from "react-router-dom";
import Footer from "./components/Footer"; 
import Header from "./components/header";


const Layout = ({ children }) => {
  const location = useLocation(); 

  const hideHeaderFooter = location.pathname.includes("/preview");

  return (
    <>
      {!hideHeaderFooter && <Header />}{" "}
      <main>{children}</main>
      {!hideHeaderFooter && <Footer />}{" "}
    </>
  );
};

export default Layout;
