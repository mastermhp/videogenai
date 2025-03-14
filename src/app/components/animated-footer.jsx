"use client"

import Link from "next/link"
import { Video } from "lucide-react"
import { motion } from "framer-motion"

const FooterLink = ({ href, children }) => (
  <motion.div
    whileHover={{ scale: 1.1, color: "#FF7F00" }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <Link href={href} className="text-sm hover:underline underline-offset-4">
      {children}
    </Link>
  </motion.div>
)

export default function AnimatedFooter() {
  return (
    <footer className="border-t py-12 bg-gradient-to-b from-background to-[#FF7F00]/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start"
          >
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Video className="h-8 w-8 text-[#FF7F00]" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF7F00] to-[#FFD700]">
                VideoGenAI
              </span>
            </Link>
            <p className="text-sm text-center md:text-left text-muted-foreground">
              Transforming content creation with AI-powered video generation.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-lg font-semibold mb-4 text-[#FF7F00]">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <FooterLink href="#features">Features</FooterLink>
              <FooterLink href="#pricing">Pricing</FooterLink>
              <FooterLink href="#testimonials">Testimonials</FooterLink>
              <FooterLink href="#demo">Demo</FooterLink>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-lg font-semibold mb-4 text-[#FF7F00]">Connect</h3>
            <div className="flex flex-col gap-2">
              <FooterLink href="#">Contact Us</FooterLink>
              <FooterLink href="#">Support</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="w-full h-px bg-gradient-to-r from-transparent via-[#FF7F00] to-transparent my-8"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} VideoGenAI. All rights reserved.
          </p>
          <div className="flex gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-muted-foreground hover:text-[#FF7F00]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-muted-foreground hover:text-[#FF7F00]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-muted-foreground hover:text-[#FF7F00]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

