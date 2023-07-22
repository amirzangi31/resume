import React from "react";
import SiteLoader from "../modules/SiteLoader";
import Link from "next/link";

import { CiMail, CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { PiTelegramLogoLight, PiWhatsappLogoThin } from "react-icons/pi";
import Image from "next/image";

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
              <a href="mailto:zangiabadi1378888@gmail.com" className="text-white">
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
          <div className="flex justify-start gap-2 items-start mt-4">
            <a
              rel="noreferrer"
              target="_blank"
              href={"https://www.instagram.com/a_m__i___rrr"}
              className="card hover:bg-white  transition-all duration-500 text-white hover:text-secondary"
            >
              <FaInstagram className="text-3xl" />
            </a>
            <a
              href={"https://www.t.me/amir_zzzzz7"}
              rel="noreferrer"
              target="_blank"
              className="card hover:bg-white  transition-all duration-500 text-white hover:text-secondary"
            >
              <PiTelegramLogoLight className="text-3xl" />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href={"https://wa.me/+989339727560?text=Hello Newsunweb"}
              className="card hover:bg-white  transition-all duration-500 text-white hover:text-secondary"
            >
              <PiWhatsappLogoThin className="text-3xl" />
            </a>
          </div>
          <div className="mt-5">

            <a
              href={"/resume.pdf"}
              className="btn btn-primary w-full block text-center"
              download
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="w-full md:w-8/12">
          <div className="form">
            <Image
              src={"/icon2.png"}
              width={40}
              height={40}
              alt="icon"
              className="absolute top-0 right-10"
            />
            <p className="text-3xl text-white font-bold">
              Let’s work <span className="text-secondary">together</span>.
            </p>
            <div className="mt-12">
              <div className="form__control">
                <input type="text" placeholder="Name*" />
              </div>
              <div className="form__control">
                <input type="text" placeholder="Email*" />
              </div>
              <div className="form__control">
                <input type="text" placeholder="Your Subject*" />
              </div>
              <div className="form__control">
                <textarea placeholder="Your Message *" cols="30" rows="7"></textarea>
              </div>
              <button type="button" className="btn btn-primary w-full capitalize">send message</button>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}

export default ContactPage;
