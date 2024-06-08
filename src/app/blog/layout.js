// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App Blog',
  description: 'Created by md Ishtiyaque Ahmad',
}

export default function BlogLayout({ children }) {
  return (
    // <html lang="en">
    //   <body>
    <>
        Hello
        {true && <p>Welcome</p>

        }
        {children}
    </>
    //     </body>
    // </html>
  )
}
