"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Gauge,
  Users,
  ShieldCheck,
  Settings,
  Building2
} from "lucide-react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { QuotePopup } from "@/components/quote-popup"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

/* =========================
   PRODUCTS
========================= */

const products = [
  {
    title: "Passenger Elevator",
    image: "/pass.jpg",
    description: "High-speed elevators for residential and commercial buildings.",
    highlights: [
      { icon: Gauge, value: "Up to 1 m/s" },
      { icon: Users, value: "6–20 Persons" },
      { icon: ShieldCheck, value: "ARD + UCM" },
      { icon: Settings, value: "MR / MRL" },
    ],
    specs: {
      Speed: "Starts from 1 m/s",
      Capacity: "450 – 1600 kg",
      Material: "SS 304 Grade (1.2mm)",
      Drive: "Traction",
      Control: "VVVF",
      Power: "415V, 3 Phase",
    },
  },

  {
    title: "Goods Elevator",
    image: "/images/goods-lift/1.jpeg",
    description: "Heavy-duty elevators for industrial and warehouse use.",
    highlights: [
      { icon: Users, value: "500 kg +" },
      { icon: Gauge, value: "0.5 m/s" },
      { icon: Settings, value: "MR / MRL" },
      { icon: Building2, value: "Industrial" },
    ],
    specs: {
      Capacity: "500 kg onwards",
      Speed: "Up to 0.5 m/s",
      Drive: "Traction / Hydraulic",
      Cabin: "MS / SS",
      Usage: "Industrial & Maintenance",
    },
  },

  {
    title: "Hospital Elevator",
    image: "/hospital-stretcher-elevator.jpg",
    description: "Smooth and hygienic elevators for patient transport.",
    highlights: [
      { icon: Users, value: "13 Persons" },
      { icon: Gauge, value: "1 m/s" },
      { icon: ShieldCheck, value: "Emergency Mode" },
      { icon: Settings, value: "MR / MRL" },
    ],
    specs: {
      Capacity: "884 kg",
      Speed: "0.75 – 1 m/s",
      Cabin: "SS Hygienic Finish",
      Stretcher: "Compatible",
      Priority: "Emergency Operation",
    },
  },

  {
    title: "Home Elevator",
    image: "/images/home-lift/1.jpeg",
    description: "Compact elevators designed for villas and private homes.",
    highlights: [
      { icon: Users, value: "6 Persons" },
      { icon: Gauge, value: "1 m/s" },
      { icon: Settings, value: "Single / 3 Phase" },
      { icon: ShieldCheck, value: "Safe & Silent" },
    ],
    specs: {
      Capacity: "408 kg",
      Speed: "0.75 – 1 m/s",
      Power: "Single / Three Phase",
      Customization: "Fully Customizable",
      Type: "MR / MRL",
    },
  },

  {
    title: "Panoramic Elevator",
    image: "/images/panoramic-lift/2.jpeg",
    description: "Architectural elevators with scenic glass views.",
    highlights: [
      { icon: Building2, value: "Malls / Hotels" },
      { icon: Users, value: "6–10 Persons" },
      { icon: Gauge, value: "1 m/s" },
      { icon: Settings, value: "Custom Shapes" },
    ],
    specs: {
      Capacity: "408 – 1000 kg",
      Speed: "0.75 – 1 m/s",
      Structure: "Round / Square / Triangle",
      Glass: "Laminated / Toughened",
      Type: "MR / MRL",
    },
  },

  {
    title: "Glass Lift",
    image: "/images/glass-lift/2.jpeg",
    description: "Fully or semi-glass elevators with modern aesthetics.",
    highlights: [
      { icon: Building2, value: "Showrooms" },
      { icon: Users, value: "Custom" },
      { icon: Gauge, value: "1 m/s" },
      { icon: ShieldCheck, value: "Safety Glass" },
    ],
    specs: {
      Structure: "Full / Semi Glass",
      Glass: "Laminated Safety Glass",
      Speed: "Up to 1 m/s",
      Application: "Commercial & Premium Homes",
    },
  },

  {
    title: "Hydraulic Elevator",
    image: "/hydraulic-elevator-mechanism.jpg",
    description: "Cost-effective solution for low-rise buildings.",
    highlights: [
      { icon: Gauge, value: "0.5 m/s" },
      { icon: Users, value: "408–2000 kg" },
      { icon: Settings, value: "Hydraulic Drive" },
      { icon: ShieldCheck, value: "Low Maintenance" },
    ],
    specs: {
      Speed: "Up to 0.5 m/s",
      Capacity: "408 – 2000 kg",
      Floors: "Up to 6",
      Type: "MRL",
      Usage: "Low-rise Buildings",
    },
  },

  {
    title: "Dumbwaiter",
    image: "/kitchen-dumbwaiter-lift.jpg",
    description: "Small service elevators for goods and food transport.",
    highlights: [
      { icon: Building2, value: "Kitchens" },
      { icon: Users, value: "Small Loads" },
      { icon: Settings, value: "Manual / Auto" },
      { icon: ShieldCheck, value: "Compact" },
    ],
    specs: {
      Usage: "Food & Small Goods",
      Material: "Stainless Steel",
      Operation: "Simple Push Button",
      Installation: "Space Saving",
    },
  },
]

export default function ProductsPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false)
  const [activeProduct, setActiveProduct] = useState<any>(null)

  return (
    <div className="min-h-screen bg-background">
      <Navbar onQuoteClick={() => setIsQuoteOpen(true)} />
      <QuotePopup isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />

      {/* HERO */}
      <section className="pt-32 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-primary">
          Elevator Solutions
        </h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
          Engineered for safety, performance and elegance.
        </p>
      </section>

      {/* GRID */}
      <section className="pb-24 max-w-7xl mx-auto px-4 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <motion.div
            key={product.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* CARD */}
            <Card className="h-full flex flex-col rounded-2xl shadow-sm hover:shadow-lg transition-shadow">

              {/* IMAGE */}
              <img
                src={product.image}
                alt={product.title}
                className="h-56 w-full object-cover rounded-t-2xl"
              />

              {/* HEADER */}
              <CardHeader>
                <CardTitle className="text-xl">
                  {product.title}
                </CardTitle>
                <CardDescription>
                  {product.description}
                </CardDescription>
              </CardHeader>

              {/* CONTENT */}
              <CardContent className="flex flex-col flex-grow">

                {/* HIGHLIGHTS */}
                <div className="grid grid-cols-2 gap-3 text-sm mb-6">
                  {product.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2"
                    >
                      <h.icon className="h-4 w-4 text-primary shrink-0" />
                      <span className="font-medium">{h.value}</span>
                    </div>
                  ))}
                </div>

                {/* BUTTONS – CRITICAL FIX */}
                <div className="mt-auto">
                  <div className="grid grid-cols-1 gap-3">
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => setActiveProduct(product)}
                    >
                      View Specs
                    </Button>

                    <Button
                      className="w-full"
                      onClick={() => setIsQuoteOpen(true)}
                    >
                      Get Quote <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>

              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* SPECS MODAL */}
      <Dialog open={!!activeProduct} onOpenChange={() => setActiveProduct(null)}>
        <DialogContent className="max-w-lg">
          {activeProduct && (
            <>
              <DialogHeader>
                <DialogTitle>
                  {activeProduct.title} – Specifications
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-3 text-sm">
                {Object.entries(activeProduct.specs).map(([k, v]) => (
                  <div
                    key={k}
                    className="flex justify-between border-b pb-2"
                  >
                    <span className="text-muted-foreground">{k}</span>
                    <span className="font-medium">{String(v)}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  )
}
