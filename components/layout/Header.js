"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";
import Logo from "../modules/Logo";
import Navigation from "./Navigation";
function Header() {


const pathname = usePathname()


  return (
    <header>
      <div className="container mx-auto p-4 flex justify-between items-center ">
       <Logo /> 
        <Navigation /> 
        <div>
          <button type="button" className="btn btn-primary font-bold">Lets talk</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
