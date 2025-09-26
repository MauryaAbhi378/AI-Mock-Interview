import { Sheet, SheetContent, SheetTrigger } from "components/ui/sheet";
import { cn } from "lib/utils"
import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";
import NavigationRoutes from "./navigation-routes";
import { useAuth } from "@clerk/clerk-react";

const ToggleContainer = () => {
  const { userId } = useAuth();
  return (
    <Sheet>
      <SheetTrigger className="block md:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <nav className="mt-4 pl-3">
          <NavigationRoutes isMobile />
          {userId && (
            <NavLink
              to={"/generate"}
              className={({ isActive }) =>
                cn(
                  "textbase text-neutral-600",
                  isActive && "text-neutral-900 font-semibold"
                )
              }
            >
              Take an Interview
            </NavLink>
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default ToggleContainer;
