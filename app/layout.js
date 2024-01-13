import { ContextProvider } from '@/Context'
import { Footer } from '@/components/home/Footer'
import '@styles/global.css'



export const metadata = {
  title: 'Roys Wealth',
  description:'making life easier and faster'
  }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ContextProvider>
        <div className="md:overflow-x-scroll">
            <Hero />
            <MobileHero />
          </div>
        {children}
<Footer/>
        </ContextProvider>
      </body>
    </html>
  )
}
