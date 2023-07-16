import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function Navigation() {
    const pathname = usePathname()
    return (
        <nav className="navigation">
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
                <li className={`navigation__item ${pathname.includes("/contact") ? "active" : ""}`}>
                    <Link href={"/contact"}>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation