import Footer from '@/components/layout/Footer'
import './globals.css'
import Header from '@/components/layout/Header'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider, useLocale  } from 'next-intl'
import { notFound } from 'next/navigation'
import {isRtlLang} from 'rtl-detect';
import iranSans from '@/fonts/iransans'
import Layout from '@/components/layout/Layout'

const inter = Inter({ subsets: ['latin'] })





export const metadata = {
  title: 'Amirmohammad Zangiabadi',
  description: 'resume mr.amirmohammad zangiabadi',
  icons : {icon : "./favicon.ico"}
}

export default  function RootLayout({ children , params }) {

  const local = useLocale()
  
  const dir = isRtlLang(local)
  
  

  if(params.locale !== local){
    return notFound()
  }
 

  return (
    <html lang={local} dir={dir ? "rtl" : "ltr"}>
      <body className={` ${iranSans.className} ${inter.className} base`}>
        
        
          <Layout local={local}>
            {children}
          </Layout>
        
      </body>
    </html>
  )
}
