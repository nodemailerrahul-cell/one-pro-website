import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Youtube } from "lucide-react"
import { FaPinterestP } from "react-icons/fa"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
  <Image
    src="/logo.png"
    alt="One Pro Elevators Logo"
    width={140}
    height={40}
    priority
    className="h-16 w-auto object-contain invert brightness-0 contrast-200"
  />
</div>

            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Leading the vertical transportation industry with innovative elevator solutions and exceptional service.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/14KeoHgnXcW/" className="hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://x.com/oneproelevators" className="hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/oneproelevators" className="hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com/@oneproelevators?si=G7fzdnvD_xL1uFZO" className="hover:text-accent transition-colors">
                <Youtube size={20} />
              </a>
              <a href="https://pin.it/1IMYHNqFn" className="hover:text-accent transition-colors">
                         <FaPinterestP size={20} />

              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-primary-foreground/80">Elevator Manufacturing</li>
              <li className="text-primary-foreground/80">Installation Services</li>
              <li className="text-primary-foreground/80">Maintenance & Repair</li>
              <li className="text-primary-foreground/80">Modernization</li>
              <li className="text-primary-foreground/80">24/7 Emergency Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">#63, 7th cross , Vinayaka Layout , Nayandahalli Mysore Road , Bangalore - 560039</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="flex-shrink-0" />
                <span className="text-primary-foreground/80">+91-9590373137</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="flex-shrink-0" />
                <span className="text-primary-foreground/80">info@oneproelevators.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
          <p>© 2025 One Pro Elevators. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-accent transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
