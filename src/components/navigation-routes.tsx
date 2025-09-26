import { NavLink } from "react-router-dom";
import { cn } from "lib/utils";
import MainRoutes from "lib/helper";

interface NavigationRouteProps {
  isMobile?: boolean;
}

const NavigationRoutes = ({ isMobile = false }: NavigationRouteProps) => {
  return (
    <ul
      className={cn(
        "flex items-center gap-6",
        isMobile && "items-start flex-col gap-5 mb-5"
      )}
    >
      {MainRoutes.map((route) => (
        <NavLink
          key={route.label}
          to={route.href}
          className={({ isActive }) =>
            cn(
              "textbase text-neutral-600",
              isActive && "text-neutral-900 font-semibold"
            )
          }
        >
          {route.label}
        </NavLink>
      ))}
    </ul>
  );
};

export default NavigationRoutes;
