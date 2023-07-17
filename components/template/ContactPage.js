import React from "react";
import SiteLoader from "../modules/SiteLoader";
import Link from "next/link";

import { CiMail, CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { PiTelegramLogoLight , PiWhatsappLogoThin } from "react-icons/pi";

function ContactPage() {
  return (
    <>
      <SiteLoader />
      <section className="flex justify-between items-start gap-2 flex-col md:flex-row">
        <div className="w-full md:w-4/12">
          <p className="text-white uppercase">contact info</p>
          <div className="flex justify-between items-start gap-2 mt-4">
            <div className="card ">
              <CiMail className="text-2xl text-white " />
            </div>
            <div className="mr-auto">
              <p className="uppercase">mail us</p>
              <a href="mail:zangiabadi1378888@gmail.com" className="text-white">
                zangiabadi1378888@gmail.com
              </a>
            </div>
          </div>
          <div className="flex justify-between items-start gap-2 mt-4">
            <div className="card">
              <BsTelephone className="text-2xl text-white " />
            </div>
            <div className="mr-auto">
              <p className="uppercase">contact us</p>
              <a href="tel:09339727560" className="text-white">
                +989339727560
              </a>
            </div>
          </div>
          <div className="flex justify-between items-start gap-2 mt-4">
            <div className="card">
              <CiLocationOn className="text-2xl text-white " />
            </div>
            <div className="mr-auto">
              <p className="uppercase">location </p>
              <p className="text-white">kerman , iran</p>
            </div>
          </div>
          <p className="text-white uppercase mt-4">social media</p>
          <div className="flex justify-between items-start mt-4">
            <Link
              href={"/"}
              className="card hover:bg-white  transition-all duration-500 text-white hover:text-secondary"
            >
              <FaInstagram className="text-3xl" />
            </Link>
            <Link
              href={"/"}
              className="card hover:bg-white  transition-all duration-500 text-white hover:text-secondary"
            >
              <PiTelegramLogoLight className="text-3xl" />
            </Link>
            <Link
              href={"/"}
              className="card hover:bg-white  transition-all duration-500 text-white hover:text-secondary"
            >
              <PiWhatsappLogoThin className="text-3xl" />
            </Link>
          </div>
        </div>
        <div className="w-full md:w-8/12"></div>
      </section>
    </>
  );
}

export default ContactPage;
