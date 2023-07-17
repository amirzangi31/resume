import SiteLoader from "@/components/modules/SiteLoader";
import Image from "next/image";
import Link from "next/link";

import { FaInstagram } from "react-icons/fa";
import { PiTelegramLogoDuotone } from "react-icons/pi";

export default function HomePage() {
  return (
    <>
      <SiteLoader />
      <div className="row grid gap-4 grid-cols-1 md:grid-cols-2 ">
        <div>
          <Link
            href={"/about"}
            className="card flex justify-between items-center  flex-col gap-2 md:flex-row  h-full"
          >
            <div className="overflow-hidden rounded-tl-3xl rounded-br-3xl w-50 image-box">
              <Image src={"/me.png"} alt="dsa" width={200} height={200} />
            </div>
            <div className=" px-2 flex-1 text-center md:text-left">
              <p className="uppercase">a web designer</p>
              <p className="text-xl text-white font-bold">Amir mohammad</p>
              <p className="text-xl text-white font-bold">Zangi Abadi</p>
              <p className="capitalize">I am a front-end developer in Kerman</p>
              
            </div>
          </Link>
        </div>
        <div className="flex justify-between items-center gap-2 flex-col">
          <div className="card-one p-4 text-center text-white w-full  capitalize font-bold">
            hello! wellcome to my website
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2  h-full ">
            <Link href={"/"} className="card">
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
            <Link href={"/"} className="card">
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
          </div>
        </div>
      </div>
      <div className="row-one flex justify-between items-start flex-col md:flex-row-reverse gap-4 mt-4">
        <div className="card w-full md:w-3/12 h-full">
          <div className="card flex justify-between items-center">
            <Link
              href={"/"}
              className="p-4 border border-white rounded-full text-white z-50 transition-all duration-300 hover:bg-white hover:text-primary"
            >
              <FaInstagram className="text-3xl" />
            </Link>
            <Link
              href={"/"}
              className="p-4 border border-white rounded-full text-white z-50 transition-all duration-300 hover:bg-white hover:text-primary"
            >
              <PiTelegramLogoDuotone className="text-3xl" />
            </Link>
          </div>
          <Link
            href={"/"}
            className="flex justify-between items-start gap-2 mt-1"
          >
            <div className="flex justify-between items-start flex-col gap-2">
              <p className="uppercase text-xs font-bold">stay with me</p>
              <p className="text-white text-xl font-bold capitalize">
                profiles
              </p>
            </div>
           
          </Link>
        </div>
        <div className="card w-full md:w-9/12 h-full flex  justify-between items-start flex-col md:flex-row gap-4">
          <div className="card w-full md:w-4/12 h-full flex justify-center items-center flex-col gap-2">
            <p className="text-3xl text-white text-center">01</p>
            <p className="text-sm uppercase text-primary  text-center">asdkbvasdklb</p>
          </div>
          <div className="card w-full md:w-4/12 h-full flex justify-center items-center flex-col gap-2">
            <p className="text-3xl text-white text-center">01</p>
            <p className="text-sm uppercase text-primary  text-center">asdkbvasdklb</p>
          </div>
          <div className="card w-full md:w-4/12 h-full flex justify-center items-center flex-col gap-2">
            <p className="text-3xl text-white text-center">01</p>
            <p className="text-sm uppercase text-primary  text-center">asdkbvasdklb</p>
          </div>
        </div>
      </div>
      <div className="row mt-4 block ">
        <Link href={"/contact"} className="card relative block">
            <Image src={"/icon2.png"} width={40} height={40} alt="icon" className="absolute top-0 left-10" />
            <span  className="mt-20 flex justify-between items-center " >
                <span>
                    <p className="uppercase text-white text-3xl font-bold">lets</p>
                    <p className="uppercase text-white text-3xl font-bold">works <span className="lowercase text-secondary">togather</span></p>
                </span>
                
            </span>
        </Link>
      </div>
    </>
  );
}
 