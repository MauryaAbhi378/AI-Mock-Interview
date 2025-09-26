
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AuthHandler from "@/handlers/auth-handler";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div className="w-full">
      <AuthHandler/>
      <Header/>

      <Outlet />

      <Footer />
    </div>
  );
};

export default PublicLayout;
