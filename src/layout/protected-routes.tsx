import LoaderPage from "@/routes/loader";
import { useAuth } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }: { children: React.ReactNode }) => {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) <LoaderPage />;

  if (!isSignedIn) <Navigate to={"/signin"} replace />;

  return children;
};

export default ProtectedRoutes;
