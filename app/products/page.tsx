"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { QuotePopup } from "@/components/quote-popup"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ChevronRight } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

const products = [
  {
    title: "Passenger Elevator",
    description: "Standard high-speed vertical transport for residential and commercial buildings.",
    features: ["Smooth operation", "Energy efficient", "Smart control"],
    image: "/luxury-passenger-elevator-interior.jpg",
  },
  {
    title: "Goods Elevator",
    description: "Heavy-duty lifting solutions for warehouses, factories, and retail environments.",
    features: ["High capacity", "Durable build", "Safety interlocks"],
    image: "/industrial-freight-elevator.jpg",
  },
  {
    title: "Hospital Elevator",
    description: "Spacious, smooth, and reliable transport optimized for stretchers and medical staff.",
    features: ["Stretcher compatible", "Emergency priority", "Hygienic interiors"],
    image: "/hospital-stretcher-elevator.jpg",
  },
  {
    title: "Home Elevator",
    description: "Compact and elegant residential lifts designed to enhance accessibility and luxury.",
    features: ["Space-saving", "Quiet operation", "Custom finishes"],
    image: "/modern-home-residential-elevator.jpg",
  },
  {
    title: "Hotel Elevator",
    description: "High-performance lifts with premium aesthetics tailored for the hospitality industry.",
    features: ["Fast response", "Luxury cabin", "Keycard access"],
    image: "/luxury-hotel-elevator-lobby.jpg",
  },
  {
    title: "Panoramic Elevator",
    description: "Stunning glass elevators providing a scenic experience for malls and high-rises.",
    features: ["Glass enclosure", "Architectural focus", "Scenic views"],
    image: "/scenic-glass-panoramic-elevator.jpg",
  },
  {
    title: "Dumbwaiter",
    description: "Small freight elevators for kitchens, libraries, and hospitals to move small items.",
    features: ["Compact size", "Easy operation", "Stainless steel"],
    image: "/kitchen-dumbwaiter-lift.jpg",
  },
  {
    title: "Hydraulic Elevator",
    description: "Cost-effective lifting solution for low to mid-rise buildings with smooth operation.",
    features: ["Cost effective", "Reliable drive", "Low maintenance"],
    image: "/hydraulic-elevator-mechanism.jpg",
  },
]

export default function ProductsPage() {
  const [isQuotePopupOpen, setIsQuotePopupOpen] = useState(false)

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar onQuoteClick={() => setIsQuotePopupOpen(true)} />
      <QuotePopup isOpen={isQuotePopupOpen} onClose={() => setIsQuotePopupOpen(false)} />

      <section className="pt-32 pb-20 px-4 md:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-bold text-primary tracking-tight">
              Vertical Transportation Solutions
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto italic">
              Explore our comprehensive range of high-performance elevator systems designed for safety, speed, and
              elegance.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden border-primary/10 bg-secondary/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary font-bold group-hover:text-primary/80 transition-colors">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground min-h-[3rem]">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between space-y-6">
                  <ul className="space-y-2">
                    {product.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-sm font-medium">
                        <ChevronRight className="h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => setIsQuotePopupOpen(true)}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group"
                  >
                    Get a Quote <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 px-4 md:px-8">
        <div className="max-w-full mx-auto bg-primary text-primary-foreground rounded-3xl p-8 md:p-16 text-center space-y-8 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent)]" />
          <h2 className="text-3xl md:text-5xl font-bold relative z-10">Don&apos;t See What You Need?</h2>
          <p className="text-xl opacity-90 relative z-10 max-w-2xl mx-auto">
            We provide custom engineering for specialized building requirements. Contact our experts to design a system
            that fits your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10 pt-4">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => setIsQuotePopupOpen(true)}
              className="font-bold text-lg"
            >
              Custom Engineering Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white/20 hover:bg-white/10 text-white font-bold text-lg"
            >
              Download Full Catalog
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
