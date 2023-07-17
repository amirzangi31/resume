import React from "react";
import SiteLoader from "../modules/SiteLoader";
import Image from "next/image";
import Link from "next/link";

function WorksPage() {
  return (
    <>
      <SiteLoader />
      <header>
        <div className="flex justify-between items-center gap-2  sm:w-8/12 mx-auto">
          <Image
            width={400}
            height={400}
            alt="star"
            src={"/star-2.png"}
            className="w-16"
          />
          <p className="uppercase text-white font-bold big-text">
            all-projects
          </p>
          <Image
            width={400}
            height={400}
            alt="star"
            src={"/star-2.png"}
            className="w-16"
          />
        </div>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4    gap-4        ">
        <div className="card ">
            <Link href={"/"} className="z-50">
              <Image
                src="/project1.jpeg"
                width={400}
                height={400}
                alt="sign"
                className="w-full rounded-3xl"
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
        <div className="card ">
            <Link href={"/"} className="z-50">
              <Image
                src="/project5.jpeg"
                width={400}
                height={400}
                alt="sign"
                className="w-full rounded-3xl"
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
        <div className="card ">
            <Link href={"/"} className="z-50">
              <Image
                src="/project3.jpeg"
                width={400}
                height={400}
                alt="sign"
                className="w-full rounded-3xl"
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
        <div className="card ">
            <Link href={"/"} className="z-50">
              <Image
                src="/project4.jpeg"
                width={400}
                height={400}
                alt="sign"
                className="w-full rounded-3xl"
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
      </section>
    </>
  );
}

export default WorksPage;
