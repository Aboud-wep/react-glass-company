import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import LangBar from "./LangBar";
import SearchField from "../Component/SearchField";

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/home";

  return (
    <div
      className={`flex flex-col min-h-screen ${
        isHomePage
          ? "bg-[url('src/assets/Images/HeaderBG.png')] bg-cover bg-center"
          : ""
      }`}
    >
      <LangBar />
      {isHomePage && <SearchField />}
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
