import { useLocale } from 'next-intl'
import Image from 'next/image'
import React from 'react'
import { useTranslations } from 'use-intl'

const WorkCard = ({image , titleF , titleE , github , live , modal , setActiveM}) => {
    const local = useLocale()
    const t = useTranslations("worksPage")

  return (
    <div className="card card-project ">
          <div className="image-box__project">
            <Image
              src={image}
              width={400}
              height={400}
              alt={titleE}
              className="w-full rounded-3xl"
            />
          </div>

          <div className="flex justify-between items-start gap-2 mt-2">
            <div className="flex justify-between items-start flex-col gap-2">
              <p className="uppercase text-xs font-bold">{t("show")}</p>
              <p className="text-white text-xl  font-bold capitalize">
               {local === "en" ? titleE : titleF}
              </p>
            </div>
          </div>
          <div >
            <button
              type="button"
              className="btn btn-primary text-center w-full"
              onClick={() => setActiveM(modal)}

            >
              {t("details")}
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <a
              href={live}
              className="btn-sm btn-secondary text-center"
              rel="noreferrer"
              target="_blank"
            >
              {t("live")}
            </a>
            <a
              rel="noreferrer"
              target="_blank"

              href={github}
              className="btn-sm btn-secondary text-center"
            >
              {t("github")}
            </a>
          </div>
        </div>
  )
}

export default WorkCard