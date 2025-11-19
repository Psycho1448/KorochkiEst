import type { Metadata } from "next";
import "./globals.css";
import React from 'react'
import {montserrat} from '@/styles/font'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import {ThemeProvider} from 'next-themes'
import HeaderProvider from '@/components/providers/HeaderProvider'
import Preloader from '@/components/ui/Preloader'
import PendingProvider from '@/components/providers/PendingProvider'
import NotifyProvider from '@/components/providers/NotifyProvider'
import Notify from '@/components/ui/Notify'
import DataUserProvider from '@/components/providers/DataUserProvider'

export const metadata: Metadata = {
  title: "Корочки.есть | Главная",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`antialiased ${montserrat.className} bg-[#EAEAEA] dark:bg-[#0D0D0D] flex flex-col items-center`}>
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
        <HeaderProvider>
          <PendingProvider>
            <NotifyProvider>
              <DataUserProvider>
                <Preloader/>
                <Header/>
                <Notify/>
                {children}
                <Footer/>
              </DataUserProvider>
            </NotifyProvider>
          </PendingProvider>
        </HeaderProvider>
      </ThemeProvider>
      </body>
    </html>
  );
}
