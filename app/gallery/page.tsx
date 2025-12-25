"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { QuotePopup } from "@/components/quote-popup"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"
import { ArrowRight, Download, Share2 } from "lucide-react"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isQuotePopupOpen, setIsQuotePopupOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-scale-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "commercial", label: "Commercial" },
    { id: "residential", label: "Residential" },
    { id: "healthcare", label: "Healthcare" },
    { id: "industrial", label: "Industrial" },
  ]

  const galleryImages = [
    { query: "luxury+hotel+elevator+lobby", title: "Luxury Hotel Installation", category: "commercial" },
    { query: "modern+office+building+elevator", title: "Corporate Office Tower", category: "commercial" },
    { query: "glass+panoramic+elevator+exterior", title: "Glass Panoramic Elevator", category: "commercial" },
    { query: "residential+apartment+elevator+interior", title: "Residential Complex", category: "residential" },
    { query: "hospital+medical+elevator", title: "Medical Facility", category: "healthcare" },
    { query: "shopping+mall+elevator+design", title: "Retail Center", category: "commercial" },
    { query: "industrial+factory+freight+elevator", title: "Industrial Facility", category: "industrial" },
    { query: "modern+elevator+control+panel", title: "Advanced Controls", category: "commercial" },
    { query: "elevator+machine+room+technology", title: "Machine Room", category: "industrial" },
    { query: "luxury+residential+elevator+wood", title: "Custom Wood Finishes", category: "residential" },
    { query: "stainless+steel+elevator+interior", title: "Stainless Steel Design", category: "commercial" },
    { query: "elevator+installation+construction", title: "Installation Process", category: "industrial" },
    { query: "modern+hospital+elevator+interior", title: "Hospital Elevator", category: "healthcare" },
    { query: "luxury+apartment+elevator", title: "Luxury Apartment", category: "residential" },
    { query: "corporate+lobby+elevator+design", title: "Corporate Lobby", category: "commercial" },
  ]

  const filteredImages =
    selectedCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  return (
    <div className="min-h-screen">
      <Navbar onQuoteClick={() => setIsQuotePopupOpen(true)} />
      <QuotePopup isOpen={isQuotePopupOpen} onClose={() => setIsQuotePopupOpen(false)} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-slide-in-up">
            <Badge className="bg-accent text-accent-foreground">5000+ Successful Installations</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-balance">Project Gallery</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our portfolio of stunning elevator installations across various industries and applications.
            </p>
            <Button size="lg" onClick={() => setIsQuotePopupOpen(true)} className="group">
              Start Your Project
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="transition-all"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 group cursor-pointer relative overflow-hidden rounded-lg aspect-square"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setSelectedImage(galleryImages.indexOf(image))}
              >
                <img
                  src={`/.jpg?key=gallery${index}&height=400&width=400&query=${image.query}`}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-primary-foreground w-full">
                    <h3 className="font-bold text-lg">{image.title}</h3>
                    <div className="flex items-center justify-between mt-2">
                      <Badge variant="secondary" className="text-xs">
                        {categories.find((c) => c.id === image.category)?.label}
                      </Badge>
                      <Share2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-on-scroll opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Impressed by Our Work?</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join thousands of satisfied clients who trust One Pro Elevators for their vertical transportation needs.
            </p>
            <div className="grid grid-cols-3 gap-8 py-8">
              <div>
                <div className="text-4xl font-bold text-accent mb-2">500+</div>
                <div className="text-muted-foreground">Commercial Projects</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">2000+</div>
                <div className="text-muted-foreground">Residential Units</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <div className="text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => setIsQuotePopupOpen(true)} className="group">
                Get Your Free Quote
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="group bg-transparent">
                <Download className="mr-2 w-4 h-4" />
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl w-full">
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-accent transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img
              src={`/.jpg?key=lightbox&height=800&width=1200&query=${galleryImages[selectedImage].query}`}
              alt={galleryImages[selectedImage].title}
              className="w-full h-auto rounded-lg animate-scale-in"
            />
            <div className="text-white text-center mt-4">
              <h3 className="text-2xl font-bold">{galleryImages[selectedImage].title}</h3>
              <p className="text-white/80 mt-2">
                {categories.find((c) => c.id === galleryImages[selectedImage].category)?.label}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
