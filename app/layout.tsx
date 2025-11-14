import type { Metadata } from "next";
import "./globals.css";
import React from 'react'
import {montserrat} from '@/styles/font'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import {ThemeProvider} from 'next-themes'
import MenuMobile from '@/components/ui/MenuMobile'
import HeaderProvider from '@/components/providers/HeaderProvider'
import Preloader from '@/components/ui/Preloader'

export const metadata: Metadata = {
  title: "Корочки.есть",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`antialiased ${montserrat.className} bg-[#EAEAEA] dark:bg-[#0D0D0D]`}>
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
        <HeaderProvider>
          <Preloader/>
          <Header/>
          {children}
          <Footer/>
        </HeaderProvider>
      </ThemeProvider>
      </body>
    </html>
  );
}
