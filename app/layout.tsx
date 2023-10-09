import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavigationBar from './components/NavigationBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Centient Technologies',
  description: `Centient Technologies is an innovative company that is dedicated to revolutionizing industries across Africa through the development of cutting-edge AI products,
  data analytics solutions, and big data applications. With a specific focus on sectors like food, social, telecommunication, construction, and retail, Centient Tech aims to leverage the power of data science, big data,
  and AI to drive growth, efficiency, and transformation.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationBar
          logo="/images/logo.jpg"
          companyName="Centient Technologies"
          navItems={["Services", "About", "Contact"]}
        />
        {children}
      </body>
    </html>
  )
}
