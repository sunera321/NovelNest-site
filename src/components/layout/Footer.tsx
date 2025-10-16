'use client'

import Link from 'next/link'
import { FaBook, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'For Authors', href: '#authors' },
      { name: 'For Readers', href: '#readers' },
      { name: 'Pricing', href: '#pricing' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Contact', href: '#contact' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' },
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'FAQs', href: '#' },
    ],
  }


  return (
    <footer className="text-white bg-primary">
      {/* Contact & Feedback Section - Top */}
    

      {/* Main Footer Content */}
      <div className="py-12 container-custom md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-4 space-x-2">
              <div className="p-2 rounded-lg bg-gradient-to-br from-secondary to-cyan">
                <FaBook className="text-2xl text-white" />
              </div>
              <span className="text-2xl font-bold font-display">NovelNest</span>
            </Link>
            <p className="max-w-sm mb-6 text-gray-300">
              A digital storytelling platform that streamlines the user experience of both authors and readers. 
              Write, publish, and discover amazing stories.
            </p>
            
          </div>

          {/* Product Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 transition-colors hover:text-cyan"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 transition-colors hover:text-cyan"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 transition-colors hover:text-cyan"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="py-6 container-custom">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-300 md:flex-row">
            <p>© {currentYear} NovelNest. All rights reserved.</p>
            <div className="flex items-center gap-1">
              <span>Made with</span>
              <span className="text-lg text-red-500">❤</span>
              <span>for storytellers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
