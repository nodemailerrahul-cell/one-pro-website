"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { QuotePopup } from "@/components/quote-popup"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Share2 } from "lucide-react"

/* =========================
   CATEGORIES
========================= */
const categories = [
  { id: "all", label: "All Elevators" },
  { id: "passenger-lift", label: "Passenger Lift" },
  { id: "home-lift", label: "Home Lift" },
  { id: "hospital", label: "Hospital Lift" },
  { id: "goods-lift", label: "Goods Lift" },
  { id: "panoramic-lift", label: "Panoramic Lift" },
  { id: "dumbwaiter-lift", label: "Dumbwaiter Lift" },
]

/* =========================
   ELEVATOR TYPES
========================= */
const elevatorTypes = [
  { id: "home-lift", title: "Home Lift" },
  { id: "hospital", title: "Hospital Lift" },
  { id: "goods-lift", title: "Goods Lift" },
  { id: "panoramic_lift", title: "Panoramic Lift" },
  { id: "dumbwaiter-lift", title: "Dumbwaiter Lift" },
]

/* =========================
   AUTO-GENERATE IMAGES
========================= */
const galleryImages = elevatorTypes.flatMap((type) =>
  [1, 2, 3, 4].map((num) => ({
    src: `/images/${type.id}/${num}.jpeg`,
    title: type.title,
    category: type.id,
  }))
)

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isQuotePopupOpen, setIsQuotePopupOpen] = useState(false)

  /* =========================
     SCROLL ANIMATION
  ========================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-scale-in")
          }
        })
      },
      { threshold: 0.1 }
    )

    document
      .querySelectorAll(".animate-on-scroll")
      .forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  /* =========================
     FILTER
  ========================= */
  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory)

  return (
    <div className="min-h-screen">
      <Navbar onQuoteClick={() => setIsQuotePopupOpen(true)} />
      <QuotePopup
        isOpen={isQuotePopupOpen}
        onClose={() => setIsQuotePopupOpen(false)}
      />

      {/* =========================
         HERO
      ========================= */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 text-center space-y-6">
          <Badge className="bg-accent text-accent-foreground">
            Trusted Elevator Experts
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold">
            Elevators Gallery
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our range of Passenger, Home, Hospital, Goods, Panoramic and
            Dumbwaiter elevators installed across residential, commercial and
            industrial projects.
          </p>

          <Button size="lg" onClick={() => setIsQuotePopupOpen(true)}>
            Get Free Quote
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* =========================
         FILTER BUTTONS
      ========================= */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={selectedCategory === cat.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </Button>
          ))}
        </div>
      </section>

      {/* =========================
         GALLERY GRID
      ========================= */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((img, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-end">
                <div className="p-4 text-white w-full">
                  <h3 className="font-semibold">{img.title}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <Badge variant="secondary">
                      {categories.find((c) => c.id === img.category)?.label}
                    </Badge>
                    <Share2 size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================
         LIGHTBOX
      ========================= */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={filteredImages[selectedImage].src}
            alt={filteredImages[selectedImage].title}
            className="max-w-6xl w-full rounded-xl"
          />
        </div>
      )}

      <Footer />
    </div>
  )
}
