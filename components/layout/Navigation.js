import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { GrClose } from 'react-icons/gr'
import LangIcon from '../element/LangIcon'
import LangButton from '../element/LangButton'

function Navigation({ show, setShow, footer }) {
    const pathname = usePathname()
    const t = useTranslations("menu")



    const closeHandler = () => {
        setShow(false)
    }

    return (
        <nav className={`navigation ${show === true && "active"}`}>
           <div className="navigation__hamburger-close" onClick={closeHandler} >
                <GrClose className={`text-2x text-white ${show === false || footer === true ? "hidden" : ""}`} />
            </div>
            <ul className="navigation__menu">
                <li className={`navigation__item ${pathname === "/" || pathname === "" ? "active" : ""}`}>
                    <Link href={"/"}>{t("home")}</Link>
                </li>
                <li className={`navigation__item ${pathname.includes("/about") ? "active" : ""}`}>
                    <Link href={"/about"}>{t("about")}</Link>
                </li>
                <li className={`navigation__item ${pathname.includes("/works") ? "active" : ""}`}>
                    <Link href={"/works "}>{t("works")}</Link>
                </li>
                <li className={`navigation__item ${pathname.includes("/credential") ? "active" : ""}`}>
                    <Link href={"/credential"}>{t("credential")}</Link>
                </li>
                <li className={`navigation__item ${pathname.includes("/contact") ? "active" : ""}`}>
                    <Link href={"/contact"}>{t("contact")}</Link>
                </li>
                <li className={``}>
                    <LangButton /> 
                </li>
            </ul>
        </nav >
    )
}

export default Navigation