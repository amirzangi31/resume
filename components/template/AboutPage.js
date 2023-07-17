import React from "react";
import SiteLoader from "../modules/SiteLoader";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { PiTelegramLogoDuotone } from "react-icons/pi";

function AboutPage() {
  return (
    <>
      <SiteLoader />
      <header className="flex justify-between items-center flex-col md:flex-row md:items-start gap-4">
        <div className="w-8/12 md:w-4/12 card">
          <div className="overflow-hidden rounded-3xl image-box">
            <Image
              src={"/me2.png"}
              alt="dsa"
              width={400}
              height={400}
              className="w-full"
            />
          </div>
        </div>
        <div className="w-full md:w-8/12  ">
          <div className="flex justify-between items-center gap-2    ">
            <Image
              width={400}
              height={400}
              alt="star"
              src={"/star-2.png"}
              className="w-16"
            />
            <p className="uppercase text-white font-bold big-text">
              self-summary
            </p>
            <Image
              width={400}
              height={400}
              alt="star"
              src={"/star-2.png"}
              className="w-16"
            />
          </div>

          <div className="card relative block">
            <Image
              src={"/icon2.png"}
              width={40}
              height={40}
              alt="icon"
              className="absolute top-0 left-10"
            />
            <span className="mt-20 flex justify-between items-center ">
              <span>
                <p className="uppercase text-secondary text-xl font-bold">
                  Amir mohammad zangiabadi
                </p>
                <p className="text-white">
                  I am a San francisco-based product designer with a focus on
                  web design, illustration, a visual development. I have a
                  diverse range of experience having worked across various
                  fields and industries.
                </p>
              </span>
            </span>
          </div>
        </div>
      </header>
      <section className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="card">
          <p className="uppercase text-white ">EXPERIENCE</p>
          <div className="mt-2">
            <p>2007 - 2017</p>
            <p className="text-white font-bold text-lg">
              Framer Designer & Developer
            </p>
            <p>Bluebase Designs</p>
          </div>
          <div className="mt-2">
            <p>2007 - 2017</p>
            <p className="text-white font-bold text-lg">
              Framer Designer & Developer
            </p>
            <p>Bluebase Designs</p>
          </div>
        </div>
        <div className="card">
          <p className="uppercase text-white ">EDUCATION</p>
          <div className="mt-2">
            <p>2007 - 2017</p>
            <p className="text-white font-bold text-lg">
              Framer Designer & Developer
            </p>
            <p>Bluebase Designs</p>
          </div>
          <div className="mt-2">
            <p>2007 - 2017</p>
            <p className="text-white font-bold text-lg">
              Framer Designer & Developer
            </p>
            <p>Bluebase Designs</p>
          </div>
        </div>
      </section>
      <section className="flex justify-between items-start flex-col md:flex-row gap-2 mt-4">
        <Link href={"/"} className="card w-full md:w-3/12">
          <Image
            src="/my-works.png"
            width={400}
            height={400}
            alt="sign"
            className="w-full"
          />
          <div className="flex justify-between items-start gap-2">
            <div className="flex justify-between items-start flex-col gap-2">
              <p className="uppercase text-xs font-bold">show case</p>
              <p className="text-white text-xl font-bold capitalize">
                projects
              </p>
            </div>
          </div>
        </Link>

        <Link href={"/contact"} className="card relative block w-full md:w-6/12">
          <Image
            src={"/icon2.png"}
            width={40}
            height={40}
            alt="icon"
            className="absolute top-0 left-10"
          />
          <span className="mt-20 flex justify-between items-center ">
            <span>
              <p className="uppercase text-white text-3xl font-bold">lets</p>
              <p className="uppercase text-white text-3xl font-bold">
                works <span className="lowercase text-secondary">togather</span>
              </p>
            </span>
          </span>
        </Link>

        <Link href={"/"} className="card w-full md:w-3/12">
          <Image
            src="/sign.png"
            width={400}
            height={400}
            alt="sign"
            className="w-full"
          />
          <div className="flex justify-between items-start gap-2">
            <div className="flex justify-between items-start flex-col gap-2">
              <p className="uppercase text-xs font-bold">more about me</p>
              <p className="text-white text-xl font-bold capitalize">
                credential
              </p>
            </div>
          </div>
        </Link>
      </section>
    </>
  );
}

export default AboutPage;
