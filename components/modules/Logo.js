import { useLocale } from 'next-intl'
import Link from 'next/link'


function Logo() {
    const local = useLocale()
    return (
        <Link href={`/${local}`} className="logo">
            <p>Zangi</p>
            <p>Abadi</p>
        </Link>
    )
}

export default Logo