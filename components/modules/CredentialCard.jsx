import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CredentialCard = () => {
    const t = useTranslations("homePage")
  return (
    <Link href={"/credential"} className="card" >
    <Image
      src="/sign.png"
      width={400}
      height={400}
      alt="sign"
      className="w-full"
    />
    <div className="flex justify-between items-start gap-2">
      <div className="flex justify-between items-start flex-col gap-2">
        <p className="uppercase text-xs font-bold"> {t("tcredential")} </p>
        <p className="text-white text-xl font-bold capitalize">
          {t("credential")}
        </p>
      </div>

    </div>
  </Link>
  )
}

export default CredentialCard