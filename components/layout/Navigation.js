import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { GrClose } from 'react-icons/gr'

function Navigation({ show, setShow, footer }) {
    const pathname = usePathname()

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
                    <Link href={"/"}>Home</Link>
                </li>
                <li className={`navigation__item ${pathname.includes("/about") ? "active" : ""}`}>
                    <Link href={"/about"}>About</Link>
                </li>
                <li className={`navigation__item ${pathname.includes("/works") ? "active" : ""}`}>
                    <Link href={"/works "}>Works</Link>
                </li>
                <li className={`navigation__item ${pathname.includes("/credential") ? "active" : ""}`}>
                    <Link href={"/credential"}>Credential</Link>
                </li>
                <li className={`navigation__item ${pathname.includes("/contact") ? "active" : ""}`}>
                    <Link href={"/contact"}>Contact</Link>
                </li>
            </ul>
        </nav >
    )
}

export default Navigation