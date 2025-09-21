import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="w-screen h-screen overflow-hidden flex items-center justify-center relative">
      <img src="/assets/img/bg.png" alt="Bg" className="absolute opacity-20 w-full h-full object-cover" />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
