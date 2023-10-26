"use client"

import React, { useState } from "react";
import SiteLoader from "../modules/SiteLoader";
import Image from "next/image";
import Modal from "../modules/Modal";
import worksData from "@/data/worksData";
import WorkCard from "../modules/WorkCard";
import { useTranslations } from "next-intl";









function WorksPage() {
  const t = useTranslations("worksPage")
  const [activeModal, setActiveModal] = useState(0)



  return (
    <>
      {/* matrix */}
      <Modal show={activeModal === 1} setShow={setActiveModal}>
        <div className="text-white">
          <p className="my-4">
            <span>Next js : </span>
            {t("nextjs")}
          </p>
          <p className="my-4">
            <span>SSG : </span>
            {t("ssg")}

          </p>
          <p className="my-4">
            <span>SSR : </span>

            {t("ssr")}

          </p>
          <p className="my-4">
            <span>ISR : </span>

            {t("isr")}

          </p>

          <p className="my-4">
            <span>PAGES : </span>

            {t("pages")}

          </p>

          <p className="my-4">
            <span>TAILWIND : </span>

            {t("tailwind")}
.
          </p>

          <p className="my-4">
            <span>REDUX : </span>

            {t("redux")}

          </p>

          <p className="my-4">
            <span>TIPTAP : </span>

            {t("tiptap")}

          </p>

          <p className="my-4">
            <span>NEXT AUTH : </span>

            {t("nextauth")}

          </p>
          <p className="my-4">
            <span>AXIOS : </span>

            {t("axios")}

          </p>

        </div>
      </Modal>
      {/* matrix */}


      {/* store (react) */}
      <Modal show={activeModal === 2} setShow={setActiveModal}>
        <div className="text-white">




          <p className="my-4">
            <span>REACT : </span>
            {t("react")}



          </p>
          <p className="my-4">
            <span>REACT ROUTER DOM : </span>

            {t("reactrouterdom")}
           


          </p>

          <p className="my-4">
            <span>MATERIAL UI  : </span>

            {t("materialui")}
            

          </p>

          <p className="my-4">
            <span>REDUX : </span>

            {t("redux")}

          </p>


          <p className="my-4">
            <span>AXIOS : </span>

            {t("axios")}

          </p>

        </div>
      </Modal>
      {/* store (react) */}

      {/* packages */}
      <Modal show={activeModal === 3} setShow={setActiveModal}>
        <div className="text-white">
        <p className="my-4">
            <span>REACT : </span>
            {t("react")}



          </p>
          <p className="my-4">
            <span>REACT ROUTER DOM : </span>

            {t("reactrouterdom")}
           


          </p>

          <p className="my-4">
            <span>MATERIAL UI  : </span>

            {t("materialui")}
            

          </p>
          <p className="my-4">
            <span>GRAPHQL : </span>
               {t("graphql")}
           </p>
          <p className="my-4">
            <span>HYGRAPH : </span>
             {t("hygraph")}
          </p>




        </div>
      </Modal>
      {/* packages */}

      {/* form */}
      <Modal show={activeModal === 4} setShow={setActiveModal}>
        <div className="text-white">
          <p className="my-4">
            <span>REACT : </span>

            {t("react")}

          </p>
        </div>
      </Modal>
      {/* form */}

      {/* resume */}
      <Modal show={activeModal === 5} setShow={setActiveModal}>
        <div className="text-white">
          <p className="my-4">
            <span>Next js : </span>
                        {t("nextjs")}

          </p>
          <p className="my-4">
            <span>SSG : </span>
                       {t("ssg")}

          </p>
          <p className="my-4">
            <span>TAILWIND : </span>

                {t("tailwind")}

          </p>
        </div>
      </Modal>
      {/* resume */}

      {/* amlak */}
      <Modal show={activeModal === 6} setShow={setActiveModal}>
        <div className="text-white">
          <p className="my-4">
            <span>Next js : </span>
            {t("nextjs")}
          </p>
          <p className="my-4">
            <span>SSR : </span>

            {t("ssr")}
            
          </p>
          <p className="my-4">
            <span>LAST VERSION NEXT : </span>
            {t("lastestnext")}
            
          </p>
          <p className="my-4">
            <span>NEXT AUTH : </span>

            {t("nextauth")}
           
          </p>
          <p className="my-4">
            <span>GENERATE META DATA : </span>

            {t("generatemeta")}

          </p>
          <p className="my-4">
            <span>MONGO DB: </span>

            {t("mongo")}

            
          </p>
        </div>
      </Modal>
      {/* amlak */}




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
            {t("title")}
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
        
      {worksData.map((item , index) => (
          <WorkCard key={item.id}  {...item} modal={index+1} setActiveM={setActiveModal}  /> 
      ))}



        {/* <div className="card card-project ">
          <div className="image-box__project">
            <Image
              src="/project1.png"
              width={400}
              height={400}
              alt="sign"
              className="w-full rounded-3xl"
            />
          </div>

          <div className="flex justify-between items-start gap-2 mt-2">
            <div className="flex justify-between items-start flex-col gap-2">
              <p className="uppercase text-xs font-bold">show case</p>
              <p className="text-white text-xl font-bold capitalize">
                matrix store (nextjs)
              </p>
            </div>
          </div>
          <div >
            <button
              type="button"
              className="btn btn-primary text-center w-full"
              onClick={() => setActiveModal(1)}
            >
              Details
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <a
              href="https://matrixstore-zangiabadi.iran.liara.run/"
              className="btn-sm btn-secondary text-center"
              rel="noreferrer"
              target="_blank"
            >
              Live
            </a>
            <a
              rel="noreferrer"
              target="_blank"

              href="https://github.com/amirzangi31/ecommerce_next"
              className="btn-sm btn-secondary text-center"
            >
              Source
            </a>
          </div>
        </div>

        <div className="card card-project ">
          <div className="image-box__project">
            <Image
              src="/project2.png"
              width={400}
              height={400}
              alt="sign"
              className="w-full rounded-3xl"
            />
          </div>

          <div className="flex justify-between items-start gap-2 mt-2">
            <div className="flex justify-between items-start flex-col gap-2">
              <p className="uppercase text-xs font-bold">show case</p>
              <p className="text-white text-xl font-bold capitalize">
                store (react js)
              </p>
            </div>
          </div>
          <div >
            <button
              type="button"
              className="btn btn-primary text-center w-full"
              onClick={() => setActiveModal(2)}

            >
              Details
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <a
              href="https://zangiabadi-shop.netlify.app"
              className="btn-sm btn-secondary text-center"
              rel="noreferrer"
              target="_blank"
            >
              Live
            </a>
            <a
              rel="noreferrer"
              target="_blank"

              href="https://github.com/amirzangi31/sore_redux"
              className="btn-sm btn-secondary text-center"
            >
              Source
            </a>
          </div>
        </div>

        <div className="card card-project ">
          <div className="image-box__project">
            <Image
              src="/project3.png"
              width={400}
              height={400}
              alt="sign"
              className="w-full rounded-3xl"
            />
          </div>

          <div className="flex justify-between items-start gap-2 mt-2">
            <div className="flex justify-between items-start flex-col gap-2">
              <p className="uppercase text-xs font-bold">show case</p>
              <p className="text-white text-xl font-bold capitalize">
                packages (react js)
              </p>
            </div>
          </div>
          <div >
            <button
              type="button"
              className="btn btn-primary text-center w-full"
              onClick={() => setActiveModal(3)}

            >
              Details
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <a
              href="https://zangiabadi-packages.netlify.app/"
              className="btn-sm btn-secondary text-center"
              rel="noreferrer"
              target="_blank"
            >
              Live
            </a>
            <a
              rel="noreferrer"
              target="_blank"

              href="https://zangiabadi-packages.netlify.app/"
              className="btn-sm btn-secondary text-center"
            >
              Source
            </a>
          </div>
        </div>

        <div className="card card-project ">
          <div className="image-box__project">
            <Image
              src="/project4.png"
              width={400}
              height={400}
              alt="sign"
              className="w-full rounded-3xl"
            />
          </div>

          <div className="flex justify-between items-start gap-2 mt-2">
            <div className="flex justify-between items-start flex-col gap-2">
              <p className="uppercase text-xs font-bold">show case</p>
              <p className="text-white text-xl font-bold capitalize">
                form (react js)
              </p>
            </div>
          </div>
          <div >
            <button
              type="button"
              className="btn btn-primary text-center w-full"
              onClick={() => setActiveModal(4)}

            >
              Details
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <a
              href="https://github.com/amirzangi31/form_project"
              rel="noreferrer"
              target="_blank"
              className="btn-sm btn-secondary text-center"
            >
              Live
            </a>
            <a
              href="https://github.com/amirzangi31/form_project"
              className="btn-sm btn-secondary text-center"
            >
              Source
            </a>
          </div>
        </div>

        <div className="card card-project ">
          <div className="image-box__project">
            <Image
              src="/project5.png"
              width={400}
              height={400}
              alt="sign"
              className="w-full rounded-3xl"
            />
          </div>

          <div className="flex justify-between items-start gap-2 mt-2">
            <div className="flex justify-between items-start flex-col gap-2">
              <p className="uppercase text-xs font-bold">show case</p>
              <p className="text-white text-xl font-bold capitalize">
                resume (next js)
              </p>
            </div>
          </div>
          <div >
            <button
              type="button"
              className="btn btn-primary text-center w-full"
              onClick={() => setActiveModal(5)}

            >
              Details
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <a
              href="https://resume-zangiabdi.vecel.app"
              rel="noreferrer"
              target="_blank"
              className="btn-sm btn-secondary text-center"
            >
              Live
            </a>
            <a
              href="https://github.com/amirzangi31/resume"
              rel="noreferrer"
              target="_blank"
              className="btn-sm btn-secondary text-center"
            >
              Source
            </a>
          </div>
        </div>

        <div className="card card-project ">
          <div className="image-box__project">
            <Image
              src="/project6.png"
              width={400}
              height={400}
              alt="sign"
              className="w-full rounded-3xl"
            />
          </div>

          <div className="flex justify-between items-start gap-2 mt-2">
            <div className="flex justify-between items-start flex-col gap-2">
              <p className="uppercase text-xs font-bold">show case</p>
              <p className="text-white text-xl font-bold capitalize">
                Amlak (next js)
              </p>
            </div>
          </div>
          <div >
            <button
              type="button"
              className="btn btn-primary text-center w-full"
              onClick={() => setActiveModal(6)}

            >
              Details
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <a
              href="https://amlak-zangiabadi.vercel.app"
              rel="noreferrer"
              target="_blank"
              className="btn-sm btn-secondary text-center"
            >
              Live
            </a>
            <a
              href="https://github.com/amirzangi31/amlak_project"
              rel="noreferrer"
              target="_blank"
              className="btn-sm btn-secondary text-center"
            >
              Source
            </a>
          </div>
        </div> */}

      </section>
    </>
  );
}

export default WorksPage;
