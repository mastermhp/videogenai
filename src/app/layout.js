import { ToastProvider } from "./components/providers"
import "./globals.css"
import { Inter } from "next/font/google"
// import { ToastProvider } from "@/components/providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "AI Video Generator",
  description: "Generate professional videos with AI",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  )
}

