/* eslint-disable @typescript-eslint/no-unused-vars */
import { Twitter, Linkedin, Github, Mail, MapPin, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function FooterComponent() {
  return (
    <footer className="relative bg-[#272626] text-white">
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-8 sm:h-12 md:h-16"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>

      <div className="relative pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Company Logo and Name */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex justify-center items-center mb-3 sm:mb-4">
              <div className="rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                <Image width={40} height={40} src="/logo.svg" alt="logo" className="sm:w-[50px] sm:h-[50px]"/>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Canva</h2>
            </div>
            <p className="text-slate-300 max-w-md mx-auto text-sm sm:text-base px-4">
              Build your design using canvas and templates
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 mb-8 sm:mb-12 text-center sm:text-left">
            {/* Product */}
            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/dashboard" className="text-slate-300 hover:text-white transition-colors text-sm sm:text-base">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-slate-300 hover:text-white transition-colors text-sm sm:text-base">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-slate-300 hover:text-white transition-colors text-sm sm:text-base">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-slate-300 hover:text-white transition-colors text-sm sm:text-base">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-slate-300 hover:text-white transition-colors text-sm sm:text-base">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-slate-300 hover:text-white transition-colors text-sm sm:text-base">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-slate-300 hover:text-white transition-colors text-sm sm:text-base">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-slate-300 hover:text-white transition-colors text-sm sm:text-base">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-400 flex-shrink-0" />
              <span className="text-slate-300 text-sm sm:text-base truncate">aryan1032saxena@gmail.com</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start">
              <X className="w-6 h-6 sm:w-8 sm:h-8 mr-2 text-blue-400 flex-shrink-0" />
              <span className="text-slate-300 text-sm sm:text-base">aryandev_</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start sm:col-span-2 lg:col-span-1">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-400 flex-shrink-0" />
              <span className="text-slate-300 text-sm sm:text-base">Jaipur</span>
            </div>
          </div>

          <div className=" pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="text-slate-400 text-xs sm:text-sm order-2 sm:order-1">
                © 2025 Canva. All rights reserved.
              </div>

              {/* Social Media Links */}
              <div className="flex space-x-4 order-1 sm:order-2">
                <Link
                  href="https://x.com/aryandev_"
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/aryan-saxena12/"
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link
                  href="https://github.com/aryancs01"
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}