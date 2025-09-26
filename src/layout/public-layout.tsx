import Header from "src/components/header";
import Footer from "src/components/footer";
import AuthHandler from "src/handlers/auth-handler";
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
