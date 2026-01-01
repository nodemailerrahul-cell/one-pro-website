"use client"

import Link from "next/link"
import { useState } from "react"
import {
  Menu,
  X,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
} from "lucide-react"
import { FaPinterestP } from "react-icons/fa"

import { Button } from "@/components/ui/button"
import Image from "next/image"

interface NavbarProps {
  onQuoteClick?: () => void
}

export function Navbar({ onQuoteClick }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/products", label: "Products" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">

      {/* ================= TOP INFO BAR ================= */}
      <div className="bg-primary text-primary-foreground text-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center py-2">

            {/* LEFT – EMAIL */}
            <div className="hidden sm:flex flex-1">
              <a
                href="mailto:info@oneproelevators.com"
                className="flex items-center gap-2 hover:underline"
              >
                <Mail size={16} />
                info@oneproelevators.com
              </a>
            </div>

            {/* CENTER – SOCIAL ICONS */}
            <div className="hidden sm:flex flex-1 justify-center">
              <div className="flex items-center gap-4">
                <a href="https://www.facebook.com/share/14KeoHgnXcW/" aria-label="Facebook" className="hover:opacity-80">
                  <Facebook size={16} />
                </a>
                <a href="https://x.com/oneproelevators" aria-label="X" className="hover:opacity-80">
                  <Twitter size={16} />
                </a>
                <a href="https://youtube.com/@oneproelevators?si=G7fzdnvD_xL1uFZO" aria-label="YouTube" className="hover:opacity-80">
                  <Youtube size={16} />
                </a>
                <a href="https://pin.it/1IMYHNqFn" aria-label="Pinterest" className="hover:opacity-80">
                  <FaPinterestP size={14} />
                </a>
                <a href="https://www.instagram.com/oneproelevators" aria-label="Instagram" className="hover:opacity-80">
                  <Instagram size={16} />
                </a>
              </div>
            </div>

            {/* RIGHT – CONTACT NUMBERS */}
            <div className="hidden sm:flex flex-1 justify-end items-center gap-3">
              <span className="font-medium">Contact Us</span>
              <a href="tel:9590373137" className="hover:underline">
                9590373137
              </a>
              <span>/</span>
              <a href="tel:9980603137" className="hover:underline">
                9980603137
              </a>
            </div>

            {/* MOBILE – CENTER CALL */}
            <div className="sm:hidden w-full flex items-center justify-center gap-2 whitespace-nowrap font-semibold text-xs">
              Contact Us
              <Phone size={14} />
              <a href="tel:9590373137" className="underline">
                9590373137
              </a>
              <span>/</span>
              <a href="tel:9980603137" className="underline">
                9980603137
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <div className="bg-background/95 backdrop-blur-md shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="One Pro Elevators Logo"
                width={140}
                height={40}
                priority
                className="h-16 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground/80 hover:text-foreground transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
                </Link>
              ))}
              <Button size="lg" onClick={onQuoteClick}>
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground/80 hover:text-foreground py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                size="lg"
                className="w-full"
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  onQuoteClick?.()
                }}
              >
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
