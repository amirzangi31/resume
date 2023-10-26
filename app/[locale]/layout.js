import Footer from '@/components/layout/Footer'
import './globals.css'
import Header from '@/components/layout/Header'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider, useLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import {isRtlLang} from 'rtl-detect';
import iranSans from '@/fonts/iransans'

const inter = Inter({ subsets: ['latin'] })





export const metadata = {
  title: 'Amirmohammad Zangiabadi',
  description: 'resume mr.amirmohammad zangiabadi',
  icons : {icon : "./favicon.ico"}
}

export default async function RootLayout({ children , params }) {

  const local = useLocale()

  const dir = isRtlLang(local)
  
  

  if(params.locale !== local){
    return notFound()
  }
  let messages;
  try {
    messages = (await import(`../../messages/${local}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={local} dir={dir ? "rtl" : "ltr"}>
      <body className={`${inter.className} ${iranSans.className} base`}>
        
        <NextIntlClientProvider locale={local} messages={messages}>
        <Header />
        <main >
          <div className="container mx-auto p-4">
            {children}
          </div>
        </main>
        <Footer /> 
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
