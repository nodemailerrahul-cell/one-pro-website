"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { QuotePopup } from "@/components/quote-popup"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Users, Award, TrendingUp, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"


export default function AboutPage() {
  const [isQuotePopupOpen, setIsQuotePopupOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in-up")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar onQuoteClick={() => setIsQuotePopupOpen(true)} />
      <QuotePopup
        isOpen={isQuotePopupOpen}
        onClose={() => setIsQuotePopupOpen(false)}
      />

      {/* HERO */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-slide-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-balance">
              About One Pro Elevators
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              One Pro Elevators is a Bengaluru-based elevator company delivering
              dependable elevator installation, AMC maintenance, modernization,
              and repair services across residential and commercial buildings in
              Bangalore.
            </p>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll opacity-0">
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <img
                  src="/modern-elevator-manufacturing-facility.jpg"
                  alt="Elevator installation and maintenance facility in Bangalore by One Pro Elevators"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div
              className="space-y-6 animate-on-scroll opacity-0"
              style={{ animationDelay: "0.2s" }}
            >
              <h2 className="text-4xl font-bold">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in Bengaluru, One Pro Elevators was built with a clear
                goal: to provide safe, efficient, and long-lasting elevator
                solutions designed for Bangalore’s residential and commercial
                infrastructure.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We have successfully executed elevator installation and AMC
                maintenance projects across Whitefield, Electronic City,
                Yelahanka, Hebbal, Sarjapur Road, and other parts of Bangalore.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our commitment to safety, local compliance, and fast response
                times has made us a preferred elevator partner for builders,
                facility managers, and property owners in Bengaluru.
              </p>
              <Button
                size="lg"
                onClick={() => setIsQuotePopupOpen(true)}
                className="group"
              >
                Work With Us
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The principles that guide every elevator project we deliver in
              Bangalore.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="w-12 h-12" />,
                title: "Precision Engineering",
                description:
                  "Every elevator is engineered and installed with accuracy for smooth performance.",
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Local Customer Focus",
                description:
                  "Quick support, transparent pricing, and reliable AMC service in Bangalore.",
              },
              {
                icon: <Award className="w-12 h-12" />,
                title: "Safety & Compliance",
                description:
                  "Strict adherence to Karnataka Lift Rules and safety norms.",
              },
              {
                icon: <TrendingUp className="w-12 h-12" />,
                title: "Modern Solutions",
                description:
                  "Upgrading elevators with modern technology and efficient systems.",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="animate-on-scroll opacity-0 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="text-accent mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-on-scroll opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              Certified & Trusted in Bangalore
            </h2>

            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Our elevators are installed and maintained in full compliance with
              Karnataka state safety regulations and industry standards.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
              {[
                "ISO 9001:2015 Certified",
                "BIS & IS Standards",
                "Karnataka Lift Rules Compliant",
                "Lift Inspector Approved",
              ].map((cert, index) => (
                <div
                  key={index}
                  className="p-6 bg-primary-foreground/10 rounded-xl backdrop-blur-sm"
                >
                  <div className="text-lg md:text-xl font-bold tracking-wide">
                    {cert}
                  </div>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              variant="secondary"
              onClick={() => setIsQuotePopupOpen(true)}
              className="mt-8 group font-semibold"
            >
              Start Your Bangalore Project
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
