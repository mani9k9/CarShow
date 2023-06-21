import { Footer, Navbar } from '@/components'
import './globals.css'




export const metadata = {
  title: 'Car Show',
  description: 'Description of the all the cars',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
