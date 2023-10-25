import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LetsCard = () => {
    const l = useTranslations("LETS")
  return (
    <Link href={"/contact"} className="card relative block w-full">
    <Image src={"/icon2.png"} width={40} height={40} alt="icon" className="absolute top-0 left-10 rtl:right-10" />
    <span className="mt-20 flex justify-between items-center " >
      <span>
        <p className="uppercase text-white text-3xl font-bold">{l("one")}</p>
        <p className="uppercase text-white text-3xl font-bold">{l("two")} <span className="lowercase text-secondary">{l("three")}</span></p>
      </span>
    </span>
  </Link>
  )
}

export default LetsCard