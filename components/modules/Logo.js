import Link from 'next/link'
import React from 'react'

function Logo() {
    return (
        <Link href={"/"} className="logo">
            <p>Zangi</p>
            <p>Abadi</p>
        </Link>
    )
}

export default Logo