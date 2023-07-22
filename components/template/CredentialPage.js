import React from "react";
import SiteLoader from "../modules/SiteLoader";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { PiTelegramLogoLight, PiWhatsappLogoThin } from "react-icons/pi";

function CredentialPage() {
  return (
    <>
      <SiteLoader />
      <section className="flex justify-between items-start flex-col md:flex-row gap-8 relative">
        <div className="card w-full md:w-4/12 profile-card">
          <div className="image-box rounded-3xl overflow-hidden">
            <Image src={"/me.png"} width={400} height={400} alt="profile" />
          </div>
          <div className="mt-6">
            <p className="text-lg text-white font-bold capitalize text-center">
              amir mohammad zangiabadi
            </p>
            <a className="block text-center mt-4" href="/">
              @a_m__i___rrr
            </a>
          </div>
          <div className="flex justify-center items-center gap-2 mt-8">
            <a
              rel="noreferrer"
              target="_blank"
              href={"https://www.instagram.com/a_m__i___rrr"}
              className="social-item">
              <FaInstagram className="text-3xl" />
            </a>
            <a
              href={"https://www.t.me/amir_zzzzz7"}
              rel="noreferrer"
              target="_blank"
              className="social-item">
              <PiTelegramLogoLight className="text-3xl" />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href={"https://wa.me/+989339727560?text=Hello Newsunweb"}
              className="social-item">
            <PiWhatsappLogoThin className="text-3xl" />
          </a>
        </div>
        <div className="mt-8">
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
        <div>
          <p className="text-white font-bold mb-4">ABOUT ME</p>
          <p className="my-8">
            I am Amir Mohammad Zangi Abadi, a programmer and interested in developing web pages, my expertise is in the field of analysis, design and implementation of web programs. For me, quality is important along with speed.
          </p>
          <p className="my-8">
            I am interested in group work because it allows me to participate and exchange ideas with others. I am also able to share my experiences with others and benefit from their experiences. Working in a group is better and more effective to achieve goals and creates a team that supports each other. It gives me a sense of satisfaction and a stronger social connection.
          </p>
          <p>
            What is important to me is the commitment to get the job done as quickly as possible and the ability to achieve the best quality
          </p>
        </div>
        {/* <div className="mt-8">
            <p className="text-white font-bold mb-4">EXPERIENCE</p>
            <div className="my-4">
              <p className="text-text-primary my-2">2007 - 2017</p>
              <p className="text-secondary">Framer Designer & Develope</p>
              <p className="text-text-primary my-2 text-xs font-bold">
                Bluebase Designs
              </p>
              <p className="text-white">
                Sit amet luctussd fav venenatis, lectus magna fringilla inis
                urna, porttitor rhoncus dolor purus non enim praesent in
                elementum sahas facilisis leo, vel fringilla est ullamcorper
                eget nulla facilisi etisam dignissim diam quis enim lobortis
                viverra orci sagittis eu volutpat odio facilisis mauris sit.
              </p>
            </div>
            <div className="my-4">
              <p className="text-text-primary my-2">2007 - 2017</p>
              <p className="text-secondary">Framer Designer & Develope</p>
              <p className="text-text-primary my-2 text-xs font-bold">
                Bluebase Designs
              </p>
              <p className="text-white">
                Sit amet luctussd fav venenatis, lectus magna fringilla inis
                urna, porttitor rhoncus dolor purus non enim praesent in
                elementum sahas facilisis leo, vel fringilla est ullamcorper
                eget nulla facilisi etisam dignissim diam quis enim lobortis
                viverra orci sagittis eu volutpat odio facilisis mauris sit.
              </p>
            </div>
          </div> */}
        <div className="mt-8">
          <p className="text-white font-bold mb-4">EDUCATION</p>
          <div className="my-4">
            <p className="text-text-primary my-2">1395 - 1397</p>
            <p className="text-secondary">Drawing Architecture</p>
            <p className="text-text-primary my-2 text-xs font-bold">
              Shahid Chamran Vocational Technical University, Kerman
            </p>
            <p className="text-white">
              Architecture is the art and science of designing and constructing buildings and other physical structures. It involves the creative process of planning, designing, and constructing spaces that are functional, aesthetically pleasing, and sustainable. Architects use their knowledge of engineering, principles of design, and practical experience to create spaces that meet the needs of individuals and society. They consider various factors such as the site, materials, environmental impact, and cultural context to create structures that are both visually appealing and functional. Architecture plays a crucial role in shaping the built environment and has a significant impact on the way people live, work, and interact with their surroundings.
            </p>
          </div>

        </div>
        <div className="mt-8">
          <p className="text-white font-bold mb-4">SKILLS</p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-text-primary">90%</p>
              <p className="text-white text-lg">HTML</p>
            </div>
            <div>
              <p className="text-sm text-text-primary">85%</p>
              <p className="text-white text-lg">Css</p>
            </div>
            <div>
              <p className="text-sm text-text-primary">80%</p>
              <p className="text-white text-lg">Javascript</p>
            </div>
            <div>
              <p className="text-sm text-text-primary">80%</p>
              <p className="text-white text-lg">React(hooks)</p>
            </div>
            <div>
              <p className="text-sm text-text-primary">80%</p>
              <p className="text-white text-lg">Next js(SSG,SSR)</p>
            </div>
            <div>
              <p className="text-sm text-text-primary">80%</p>
              <p className="text-white text-lg">Redux-toolkit</p>
            </div>  
            <div>
              <p className="text-sm text-text-primary">80%</p>
              <p className="text-white text-lg">MUI</p>
            </div>
            <div>
              <p className="text-sm text-text-primary">85%</p>
              <p className="text-white text-lg">Sass</p>
            </div>
            <div>
              <p className="text-sm text-text-primary">85%</p>
              <p className="text-white text-lg">Tailwind</p>
            </div>
            <div>
              <p className="text-sm text-text-primary">85%</p>
              <p className="text-white text-lg">Bootstrap</p>
            </div>
            <div>
              <p className="text-sm text-text-primary">80%</p>
              <p className="text-white text-lg">Graphql</p>
            </div>
            <div>
              <p className="text-sm text-text-primary">90%</p>
              <p className="text-white text-lg">Git</p>
            </div>
            <div>
              <p className="text-sm text-text-primary">70%</p>
              <p className="text-white text-lg">Mongodb(mongoose)</p>
            </div>
          </div>
        </div>
      </div>
    </section >
    </>
  );
}

export default CredentialPage;
