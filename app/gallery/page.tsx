"use client"

import { useState } from "react"
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
  { id: "home-lift", label: "Home Lift" },
  { id: "hospital", label: "Hospital Lift" },
  { id: "goods-lift", label: "Goods Lift" },
  { id: "panoramic-lift", label: "Panoramic Lift" },
  { id: "dumbwaiter-lift", label: "Dumbwaiter Lift" },
{ id: "glass-lift", label: "Glass Lift" },
]

/* =========================
   ELEVATOR TYPES
========================= */
const elevatorTypes = [
  { id: "home-lift", title: "Home Lift", count: 12 },
  { id: "hospital", title: "Hospital Lift", count: 4 },
  { id: "goods-lift", title: "Goods Lift", count:  8},
  { id: "panoramic-lift", title: "Panoramic Lift", count: 7 },
  { id: "dumbwaiter-lift", title: "Dumbwaiter Lift", count: 5 },
  { id: "glass-lift", title: "Glass Lift", count: 7 },
]

/* =========================
   GALLERY IMAGES
========================= */
const galleryImages = elevatorTypes.flatMap((type) =>
  Array.from({ length: type.count }, (_, i) => ({
    id: `${type.id}-${i + 1}`,
    src: `/images/${type.id}/${i + 1}.jpeg`,
    title: type.title,
    category: type.id,
  }))
)


export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null)
  const [isQuotePopupOpen, setIsQuotePopupOpen] = useState(false)

  /* =========================
     FILTER LOGIC
  ========================= */
  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter(
          (img) => img.category === selectedCategory
        )

  const selectedImage = galleryImages.find(
    (img) => img.id === selectedImageId
  )

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
            Explore Passenger, Home, Hospital, Goods, Panoramic and Dumbwaiter elevators.
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
              onClick={() => {
                setSelectedCategory(cat.id)
                setSelectedImageId(null)
              }}
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
          {filteredImages.map((img) => (
            <div
              key={img.id}
              className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
              onClick={() => setSelectedImageId(img.id)}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-end">
                <div className="p-4 text-white w-full">
                  <h3 className="font-semibold">{img.title}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <Badge variant="secondary">
                      {
                        categories.find(
                          (c) => c.id === img.category
                        )?.label
                      }
                    </Badge>
                    <Share2 size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {filteredImages.length === 0 && (
            <p className="col-span-full text-center text-muted-foreground">
              No elevators found for this category.
            </p>
          )}
        </div>
      </section>

      {/* =========================
         LIGHTBOX
      ========================= */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImageId(null)}
        >
          <img
            src={selectedImage.src}
            alt={selectedImage.title}
            className="max-w-6xl w-full rounded-xl"
          />
        </div>
      )}

      <Footer />
    </div>
  )
}
