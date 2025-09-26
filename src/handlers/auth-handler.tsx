import { db } from "config/firebase.config";
import LoaderPage from "pages/loader";
import type { User } from "types";
import { useAuth, useUser } from "@clerk/clerk-react";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AuthHandler = () => {
  const { isSignedIn } = useAuth();
  const { user } = useUser();

  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storeUserData = async () => {
      if (isSignedIn && user) {
        setLoading(true);
        try {
          const userSnap = await getDoc(doc(db, "users", user.id));
          if (!userSnap.exists()) {
            const userData: User = {
              id: user.id,
              name: user.firstName || user.lastName || "Anonymous",
              email: user.primaryEmailAddress?.emailAddress || "N/A",
              imageUrl: user.imageUrl,
              createdAt: serverTimestamp(),
              updatedAt: serverTimestamp(),
            };

            await setDoc(doc(db, "users", user.id), userData);
          }
        } catch (err) {
          console.log("Error during storing data in firbase", err);
        } finally {
          setLoading(false);
        }
      }
    };

    storeUserData();
  }, [isSignedIn, user, navigate, pathname]);

  if (loading) {
    return <LoaderPage />;
  }
  return null;
};

export default AuthHandler;
