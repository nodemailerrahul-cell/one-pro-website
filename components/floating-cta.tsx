"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"

interface FloatingCTAProps {
  onQuoteClick: () => void
}

export function FloatingCTA({ onQuoteClick }: FloatingCTAProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-3 animate-slide-in-right">
      <Button
        size="lg"
        onClick={onQuoteClick}
        className="shadow-lg hover:shadow-xl transition-all hover:scale-105 group"
      >
        <MessageCircle className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
        Get Quote
      </Button>
      <Button
        size="lg"
        variant="secondary"
        asChild
        className="shadow-lg hover:shadow-xl transition-all hover:scale-105 group"
      >
        <a href="tel:+1234567890">
          <Phone className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
          Call Now
        </a>
      </Button>
    </div>
  )
}
