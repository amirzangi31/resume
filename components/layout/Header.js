"use client";


import { usePathname } from "next/navigation";
import Logo from "../modules/Logo";
import Navigation from "./Navigation";
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import { useState } from "react";
import Link from "next/link";
function Header() {
  const [showMenu, setShowMenu] = useState(false)

  const pathname = usePathname()

  const showMenuHandler = () => {
    setShowMenu(!showMenu)
  }



  return (
    <header>
      <div className="container mx-auto p-4 flex justify-between items-center ">
        <Logo />
        <Navigation show={showMenu} setShow={setShowMenu} />
        <div className="navigation__hamburger-btn" onClick={showMenuHandler}>
          <GiHamburgerMenu className="text-2xl" />
        </div>
        <div className="hidden md:block">
          <Link href={"/contact"}  className="btn btn-primary font-bold">Lets talk</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
