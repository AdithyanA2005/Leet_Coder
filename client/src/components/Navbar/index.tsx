import { useState, useContext, useRef } from "react";
import useMenuClose from "../../hooks/useMenuClose";
import AuthContext from "../../context/Auth/AuthContext";
import NavBrand from "./NavBrand";
import NavMenuDesktop from "./NavMenuDesktop";
import HamButtonMobile from "./HamButtonMobile";
import AuthActionsDesktop from "./AuthActionsDesktop";
import Actions from "./Actions";
import ThemeBtn from "./ThemeBtn";
import NavMenuMobile from "./NavMenuMobile";

export interface NavMenuType {
  title: string;
  url: string;
};

export default function Navbar() {
  // Denoting whether mobile navigation is expanded or not
  const [mobNavActive, setMobNavActive] = useState<boolean>(false);

  // Extracting user from AuthContext
  const { user } = useContext(AuthContext);

  // Refence to the Header element containing mobile navigation
  const navBarRef = useRef<HTMLHeadingElement>(null);

  // Burget Btn toggles mobile nav
  const handleBurgerClick = (): void => setMobNavActive(prev => !prev);

  // Main navlinks
  const navMenu: NavMenuType[] = [
    { title: "Home", url: "/" },
    { title: "Problems", url: "/problemset" },
    { title: "About", url: "/about" },
  ];

  // Authentication navlinks
  const authMenu: NavMenuType[] = [
    { title: "Login", url: "/signin" },
    { title: "Register", url: "/signup" },
  ];

  // To close menu on specific actions
  useMenuClose(mobNavActive, setMobNavActive, navBarRef);

  return (
    <header ref={navBarRef} className="fixed z-50 bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm top-0 w-full shadow">
      {/* The main nav bar */}
      <nav className="relative flex items-center justify-between max-w-screen-2xl mx-auto h-14 px-4 sm:px-6 lg:px-8">
        {/* Left Side */}
        <div className="flex items-center gap-10">
          <NavBrand />
          <NavMenuDesktop menu={navMenu} />
        </div>

        {/* Right Side */}
        <div className="flex gap-2">
          {!user && <AuthActionsDesktop menu={authMenu} />}
          {user ? <Actions /> : <ThemeBtn />}
          <HamButtonMobile onClick={handleBurgerClick} />
        </div>
      </nav>

      {/* Expandable Mobile Navigation modal*/}
      {mobNavActive && <NavMenuMobile menu={navMenu.concat(!user ? authMenu : [])} />}
    </header>
  );
};

