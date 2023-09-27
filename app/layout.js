import Footer from '@/components/layout/Footer'
import './globals.css'
import Header from '@/components/layout/Header'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Amirmohammad Zangiabadi',
  description: 'resume mr.amirmohammad zangiabadi',
  icons : {icon : "./favicon.ico"}
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${inter.className} base`}>
        
        <Header />
        <main >
          <div className="container mx-auto p-4">
            {children}
          </div>
        </main>
        <Footer /> 
      </body>
    </html>
  )
}
