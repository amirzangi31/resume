"use client";


import { usePathname } from "next/navigation";
import Logo from "../modules/Logo";
import Navigation from "./Navigation";
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import { useEffect, useState } from "react";
import Link from "next/link";
function Header() {
  const [showMenu, setShowMenu] = useState(false)

  const pathname = usePathname()

  const showMenuHandler = () => {
    setShowMenu(!showMenu)
  }

  useEffect(() => {
      setShowMenu(false)
  } , [pathname])




  return (
    <header>
      <div className="container mx-auto p-4 flex justify-between items-center ">
        <Logo />
        <Navigation show={showMenu} setShow={setShowMenu} />
        <div className="navigation__hamburger-btn" onClick={showMenuHandler}>
          <GiHamburgerMenu className="text-2xl" />
        </div>
        <div className="hidden md:block">
          <a href={"/resume.pdf"}  className="btn btn-primary font-bold" download>Resume</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
