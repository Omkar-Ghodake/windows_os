import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import backgroundImage from '@/assets/wallpapers/windows/default_wallpaper.jpg'
import Taskbar from '@/components/Taskbar'
import Trademark from '@/components/Trademark'

const noto_Sans = Noto_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Windows 11',
  description: 'Windows 11 clone by Omkar Ghodake',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${noto_Sans.className} select-none`}>
        <Image
          src={backgroundImage.src}
          alt=''
          fill
          objectFit='cover'
          className='-z-50'
        />
        {children}

        <Trademark />
        <Taskbar />
      </body>
    </html>
  )
}
