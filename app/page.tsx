"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { QuotePopup } from "@/components/quote-popup"
import { FloatingCTA } from "@/components/floating-cta"
import {
  ArrowRight,
  Building2,
  Wrench,
  Shield,
  Clock,
  Star,
  CheckCircle2,
  Users,
  Award,
  Zap,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
} from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function HomePage() {
  const statsRef = useRef<HTMLDivElement>(null)
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
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar onQuoteClick={() => setIsQuotePopupOpen(true)} />
      <FloatingCTA onQuoteClick={() => setIsQuotePopupOpen(true)} />
      <QuotePopup isOpen={isQuotePopupOpen} onClose={() => setIsQuotePopupOpen(false)} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-accent/20">
        <div className="absolute inset-0 bg-[url('/modern-elevator-shaft-architecture.jpg')] bg-cover bg-center opacity-10" />

        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block animate-slide-in-up">
              <span className="px-4 py-2 bg-accent/20 text-primary-foreground rounded-full text-sm font-medium">
                Elevating Excellence Since 1995
              </span>
            </div>

            <h1
              className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight animate-slide-in-up text-balance"
              style={{ animationDelay: "0.1s" }}
            >
              Innovative Elevator Solutions
            </h1>

            <p
              className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed animate-slide-in-up max-w-3xl mx-auto"
              style={{ animationDelay: "0.2s" }}
            >
              Premium manufacturing, installation, and service for vertical transportation systems that move your world
              upward.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6 group"
                onClick={() => setIsQuotePopupOpen(true)}
              >
                Get Free Quote
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link href="/products">Explore Products</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div
          className="absolute bottom-10 left-10 w-20 h-20 bg-accent/20 rounded-full animate-float"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-32 right-20 w-32 h-32 bg-primary-foreground/10 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-32 right-32 w-16 h-16 bg-accent/30 rounded-full animate-float"
          style={{ animationDelay: "4s" }}
        />
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background" ref={statsRef}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "5000+", label: "Installations" },
              { number: "30+", label: "Years Experience" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center animate-on-scroll opacity-0 p-6 rounded-lg hover:bg-muted transition-colors"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Comprehensive Elevator Solutions</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From manufacturing to maintenance, we provide end-to-end elevator services tailored to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Building2 className="w-12 h-12" />,
                title: "Manufacturing",
                description:
                  "State-of-the-art elevator systems designed and built with precision engineering and quality materials.",
              },
              {
                icon: <Wrench className="w-12 h-12" />,
                title: "Installation & Service",
                description:
                  "Expert installation teams and comprehensive maintenance programs to keep your elevators running smoothly.",
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Safety First",
                description:
                  "Industry-leading safety standards with rigorous testing and certification processes for every unit.",
              },
              {
                icon: <Clock className="w-12 h-12" />,
                title: "24/7 Emergency Support",
                description: "Round-the-clock emergency response team ready to address any urgent elevator issues.",
              },
              {
                icon: <Star className="w-12 h-12" />,
                title: "Modernization",
                description: "Upgrade your existing elevators with cutting-edge technology and improved efficiency.",
              },
              {
                icon: <CheckCircle2 className="w-12 h-12" />,
                title: "Quality Assurance",
                description:
                  "Rigorous quality control at every stage ensuring reliable and long-lasting elevator systems.",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="animate-on-scroll opacity-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="text-accent mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-on-scroll opacity-0">
            <Button size="lg" onClick={() => setIsQuotePopupOpen(true)} className="group">
              Start Your Project Today
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Our Process</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From consultation to installation, we guide you through every step
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We assess your needs and provide expert recommendations",
              },
              {
                step: "02",
                title: "Design",
                description: "Custom elevator solutions tailored to your specifications",
              },
              {
                step: "03",
                title: "Installation",
                description: "Professional installation by certified technicians",
              },
              {
                step: "04",
                title: "Support",
                description: "Ongoing maintenance and 24/7 emergency service",
              },
            ].map((process, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-6xl font-bold text-accent/20 group-hover:text-accent/40 transition-colors mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll opacity-0">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Why Choose One Pro Elevators?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We combine decades of expertise with cutting-edge technology to deliver elevator solutions that exceed
                expectations.
              </p>
              <div className="space-y-4">
                {[
                  { icon: <Award className="w-6 h-6" />, text: "Industry-leading certifications and awards" },
                  { icon: <Users className="w-6 h-6" />, text: "Experienced team of 200+ professionals" },
                  { icon: <Zap className="w-6 h-6" />, text: "Energy-efficient and eco-friendly solutions" },
                  { icon: <TrendingUp className="w-6 h-6" />, text: "Proven track record of 5000+ installations" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-background rounded-lg">
                    <div className="text-accent">{item.icon}</div>
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="mt-8 group" onClick={() => setIsQuotePopupOpen(true)}>
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="animate-on-scroll opacity-0" style={{ animationDelay: "0.2s" }}>
              <div className="relative h-[600px] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="/modern-elevator-engineering.jpg"
                  alt="One Pro Elevators Engineering"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Trusted by leading developers and property owners worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
  {
    quote:
      "One Pro Elevators delivered exceptional quality and reliable service. Our commercial building’s elevators have been operating smoothly for more than 5 years.",
    author: "Ramesh Kumar",
    role: "Real Estate Developer",
    company: "Shree Balaji Constructions",
  },
  {
    quote:
      "The installation process was seamless, and their maintenance team is extremely responsive. Choosing One Pro Elevators was the right decision for our hospital.",
    author: "Dr. Ananya Rao",
    role: "Head of Facilities",
    company: "Sai Care Multispeciality Hospital",
  },
  {
    quote:
      "Excellent craftsmanship and strong attention to detail. The panoramic elevators have become a standout feature of our premium residential tower.",
    author: "Arjun Mehta",
    role: "Principal Architect",
    company: "Mehta & Associates Architects",
  },
]
.map((testimonial, index) => (
              <Card
                key={index}
                className="animate-on-scroll opacity-0 hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6 italic">{`"${testimonial.quote}"`}</p>
                  <div>
                    <div className="font-bold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-accent">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Get answers to common questions about our elevator solutions
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
  {
    question: "How long does elevator installation take?",
    answer:
      "Elevator installation in India typically takes 3–6 weeks, depending on the building structure, number of floors, and customization requirements. A detailed project timeline is shared after site inspection.",
  },
  {
    question: "Do you offer maintenance packages?",
    answer:
      "Yes, we provide Annual Maintenance Contracts (AMC) that include routine servicing, preventive maintenance, safety checks, and priority breakdown support.",
  },
  {
    question: "What certifications do your elevators have?",
    answer:
      "Our elevators comply with Indian Lift Rules, BIS standards, ISO 9001 certification, and applicable state safety authority approvals.",
  },
  {
    question: "Can you modernize existing elevators?",
    answer:
      "Yes, we offer complete elevator modernization services, including controller upgrades, door systems, cabins, and safety components to meet current Indian safety norms.",
  },
  {
    question: "What warranty do you provide?",
    answer:
      "All new elevator installations come with a standard 12–24 months warranty covering parts and workmanship, with extended warranty options available under AMC plans.",
  },
]
.map((faq, index) => (
              <Card
                key={index}
                className="animate-on-scroll opacity-0 hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-on-scroll opacity-0">
            <p className="text-muted-foreground mb-4">{"Still have questions?"}</p>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern.jpg')] bg-cover bg-center opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-on-scroll opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Ready to Elevate Your Building?</h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Get in touch with our team to discuss your elevator needs and receive a customized solution.
            </p>

            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="font-bold">Call Us</div>
                <a href="tel:+91-9590373137" className="text-primary-foreground/80 hover:text-primary-foreground">
                  +91-9590373137
                </a>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="font-bold">Email Us</div>
                <a href="mailto:Oneproelevators@gmail.com" className="text-primary-foreground/80 hover:text-primary-foreground">
                 Oneproelevators@gmail.com
                </a>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="font-bold">Visit Us</div>
                <div className="text-primary-foreground/80">#63, 7th cross , Vinayaka Layout , Nayandahalli B'lore - 560039</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6"
                onClick={() => setIsQuotePopupOpen(true)}
              >
                Get Free Quote
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link href="/products">View Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
