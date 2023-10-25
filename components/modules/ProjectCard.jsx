import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectCard = () => {
    const t = useTranslations("homePage")
  return (
    <Link href={"/works"} className="card" >
              <Image
                src="/my-works.png"
                width={400}
                height={400}
                alt="sign"
                className="w-full"
              />
              <div className="flex justify-between items-start gap-2">
                <div className="flex justify-between items-start flex-col gap-2">
                  <p className="uppercase text-xs font-bold">{t("tproject")}</p>
                  <p className="text-white text-xl font-bold capitalize">
                    {t("project")}
                  </p>
                </div>

              </div>
            </Link>
  )
}

export default ProjectCard