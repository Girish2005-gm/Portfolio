import type React from "react"
import type { Metadata } from "next/types"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import { Suspense } from "react"
import Loading from "@/components/loading"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Girish Kumar - Full Stack Developer | Software Engineer",
  description: "Portfolio website of Girish Kumar, showcasing full-stack projects and skills.",
  icons: {
    icon: [
      { url: '/coder-in-hoodie-logo.png', sizes: 'any', type: 'image/x-icon' },
      { url: '/coder-in-hoodie-logo.png', sizes: '16x16', type: 'image/png' },
      { url: '/coder-in-hoodie-logo.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/coder-in-hoodie-logo.png',
  },
  openGraph: {
    title: "Girish Kumar - Full Stack Developer",
    description: "Portfolio website of Girish Kumar, showcasing full-stack projects and skills.",
    url: "https://portfolio-girish-kumar.vercel.app",
    siteName: "Girish Kumar Portfolio",
    images: [
      {
        url: "/og-image.png", // Yeh image tu public folder mein daal
        width: 1200,
        height: 630,
        alt: "Girish Portfolio OG Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Girish Kumar - Full Stack Developer",
    description: "Explore projects and experience of Girish Kumar, a skilled React and Node developer.",
    images: ["/og-image.png"],
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Suspense fallback={<Loading />}>
            <Header />
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
            <footer className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} Girish Kumar. All rights reserved.
            </footer>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}