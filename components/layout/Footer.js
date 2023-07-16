"use client";

import React from "react";
import Logo from "../modules/Logo";
import Navigation from "./Navigation";

function Footer() {
  return (
    <footer>
      <div className="container mx-auto py-4 flex justify-between items-center px-2">
        <div className="w-full mx-auto">
          <div className="flex justify-center items-center w-full">
            <Logo />
          </div>
          <div className="flex justify-center items-center w-full mt-4">
            <Navigation />
          </div>
          <div className="w-full text-center mt-5 ">
            <p>© All rights reserved by <span className="text-white underline">Amirmohammad Zangiabadi</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
