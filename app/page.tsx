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
  Target,BadgeCheck,
  ShieldCheck,Gauge,Settings,
} from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function HomePage() {
  const statsRef = useRef<HTMLDivElement>(null)
  const [statsVisible, setStatsVisible] = useState(false)
  const [isQuotePopupOpen, setIsQuotePopupOpen] = useState(false)
  
  useEffect(() => {
  if (!statsRef.current) return

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setStatsVisible(true)
        observer.disconnect()
      }
    },
    { threshold: 0.4 }
  )

  observer.observe(statsRef.current)

  return () => observer.disconnect()
}, [])

const useCountUp = (target: number, active: boolean, duration = 1500) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return

    let startTime: number | null = null

    const animate = (time: number) => {
      if (!startTime) startTime = time
      const progress = Math.min((time - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [active, target, duration])

  return count
}

const installations = useCountUp(800, statsVisible)
const experience = useCountUp(30, statsVisible)
const satisfaction = useCountUp(99, statsVisible)
const support = useCountUp(24, statsVisible)


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
      <Navbar onQuoteClick={() => setIsQuotePopupOpen(true)} />x
      <FloatingCTA />
      <QuotePopup isOpen={isQuotePopupOpen} onClose={() => setIsQuotePopupOpen(false)} />

      {/* Hero Section */}
{/* Hero Section */}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
  {/* Video Background */}
  <video
    className="absolute inset-0 w-full h-full object-cover"
    src="/hero-1.mp4"
    autoPlay
    loop
    muted
    playsInline
  />
<div className="absolute inset-0 bg-black/40 z-[1]" />

  <div className="container mx-auto px-4 py-32 relative z-10">
    <div className="max-w-4xl mx-auto text-center space-y-8">
     <span className="inline-block px-6 py-2 bg-primary text-white rounded-full text-lg font-medium">
  Welcome to One Pro Elevators
</span>

<h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
  Built on Quality.
</h1>

<p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
  One Pro Elevators delivers customized elevator and escalator solutions for homes, offices, hospitals, and industries, integrating advanced safety features, smooth ride quality, and space‑saving engineering in every project
</p>


      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          size="lg"
          className="text-lg px-8 py-6"
          onClick={() => setIsQuotePopupOpen(true)}
        >
          Get Free Quote
          <ArrowRight className="ml-2" />
        </Button>

        <Button
          asChild
          size="lg"
          variant="outline"
          className="text-lg px-8 py-6 border-white text-black hover:bg-white hover:text-black"
        >
          <Link href="/products">Explore Products</Link>
        </Button>
      </div>
    </div>
  </div>
</section>



      {/* Stats Section */}
<section className="py-20 bg-background" ref={statsRef}>
  <div className="container mx-auto px-4">

    {/* OUR VALUES HEADING */}
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-on-scroll opacity-0">
      Our Values
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

      <div className="text-center animate-on-scroll opacity-0 p-6 rounded-lg hover:bg-muted transition-colors">
        <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
          {installations}+
        </div>
        <div className="text-muted-foreground">Installations</div>
      </div>

      <div className="text-center animate-on-scroll opacity-0 p-6 rounded-lg hover:bg-muted transition-colors">
        <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
          {experience}+
        </div>
        <div className="text-muted-foreground">Years Experience</div>
      </div>

      <div className="text-center animate-on-scroll opacity-0 p-6 rounded-lg hover:bg-muted transition-colors">
        <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
          {satisfaction}%
        </div>
        <div className="text-muted-foreground">Client Satisfaction</div>
      </div>

      <div className="text-center animate-on-scroll opacity-0 p-6 rounded-lg hover:bg-muted transition-colors">
        <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
          {support}/7
        </div>
        <div className="text-muted-foreground">Support Available</div>
      </div>

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
{/* ================= ABOUT SECTION ================= */}
<section className="py-24 bg-background">
  <div className="container mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      
      {/* LEFT IMAGE */}
      <div className="animate-on-scroll opacity-0">
        <div className="relative h-[520px] rounded-2xl overflow-hidden shadow-xl">
          <img
            src="/modern-elevator-manufacturing-facility.jpg"
            alt="About One Pro Elevators Bangalore"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div
        className="space-y-6 animate-on-scroll opacity-0"
        style={{ animationDelay: "0.2s" }}
      >
        <span className="inline-block px-4 py-2 rounded-full bg-accent/15 text-accent text-sm font-semibold">
          About One Pro Elevators
        </span>

        <h2 className="text-4xl md:text-5xl font-bold text-balance">
          Trusted Elevator Experts in Bangalore
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed">
          One Pro Elevators is a Bengaluru-based elevator company specializing in
          elevator installation, AMC maintenance, modernization, and repairs for
          residential, commercial, and hospital buildings.
        </p>

        <p className="text-lg text-muted-foreground leading-relaxed">
          With decades of combined industry experience, we deliver safe,
          reliable, and compliant elevator solutions across Bangalore including
          Whitefield, Electronic City, Hebbal, Yelahanka, and Sarjapur Road.
        </p>

        {/* FEATURES */}
        <div className="grid sm:grid-cols-2 gap-4 pt-4">
          {[
            {
              icon: <Target className="w-6 h-6" />,
              title: "Precision Engineering",
            },
            {
              icon: <Users className="w-6 h-6" />,
              title: "Local Service Team",
            },
            {
              icon: <Award className="w-6 h-6" />,
              title: "Safety & Compliance",
            },
            {
              icon: <TrendingUp className="w-6 h-6" />,
              title: "Modern Technology",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 bg-muted/40 rounded-xl"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent/15 text-accent">
                {item.icon}
              </div>
              <p className="font-semibold">{item.title}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-6 flex flex-wrap gap-4">
          <Button
            size="lg"
            onClick={() => setIsQuotePopupOpen(true)}
            className="group"
          >
            Get Free Consultation
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button size="lg" variant="outline" asChild>
            <Link href="/about">Learn More About Us</Link>
          </Button>
        </div>
      </div>
    </div>
  </div>
</section>
{/* ================= END ABOUT SECTION ================= */}


{/* ================= SERVICES PREVIEW ================= */}
<section className="py-24 bg-muted/50">
  <div className="container mx-auto px-4">
    <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Our Elevator Services
      </h2>
      <p className="text-lg text-muted-foreground leading-relaxed">
        End-to-end elevator solutions — from installation to lifelong
        maintenance & support.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          title: "New Installation",
          icon: <BadgeCheck className="h-8 w-8" />,
          text: "Custom-designed elevators engineered for safety and performance.",
        },
        {
          title: "Maintenance & AMC",
          icon: <ShieldCheck className="h-8 w-8" />,
          text: "Preventive maintenance with 24/7 breakdown support.",
        },
        {
          title: "Modernization",
          icon: <Clock className="h-8 w-8" />,
          text: "Upgrade old elevators with modern technology & safety.",
        },
        {
          title: "Emergency Repairs",
          icon: <Users className="h-8 w-8" />,
          text: "Fast-response technicians with genuine spare parts.",
        },
      ].map((item, index) => (
        <Card
          key={index}
          className="animate-on-scroll opacity-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
        >
          <CardContent className="p-8 text-center space-y-4">
            <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {item.text}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>

    <div className="text-center mt-12 animate-on-scroll opacity-0">
      <Button size="lg" asChild>
        <Link href="/services">
          View All Services
        </Link>
      </Button>
    </div>
  </div>
</section>
{/* ================= END SERVICES PREVIEW ================= */}

{/* ================= PRODUCTS PREVIEW ================= */}
<section className="py-24 bg-background">
  <div className="container mx-auto px-4">

    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Our Elevator Products
      </h2>
      <p className="text-lg text-muted-foreground leading-relaxed">
        Designed for safety, performance, and long-term reliability across
        residential, commercial, and industrial buildings.
      </p>
    </div>

    {/* Grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          title: "Passenger Elevator",
          image: "/images/home-lift/7.jpeg",
          points: [
            { icon: Users, text: "6–20 Persons" },
            { icon: Gauge, text: "Up to 1 m/s" },
          ],
        },
        {
          title: "Home Elevator",
          image: "/images/home-lift/1.jpeg",
          points: [
            { icon: ShieldCheck, text: "Safe & Silent" },
            { icon: Settings, text: "Single / 3 Phase" },
          ],
        },
        {
          title: "Hospital Elevator",
          image: "/hospital-stretcher-elevator.jpg",
          points: [
            { icon: Users, text: "Stretcher Ready" },
            { icon: ShieldCheck, text: "Emergency Mode" },
          ],
        },
        {
          title: "Goods Elevator",
          image: "/images/goods-lift/1.jpeg",
          points: [
            { icon: Users, text: "500 kg +" },
            { icon: Settings, text: "Industrial Use" },
          ],
        },
      ].map((item, index) => (
        <Card
          key={index}
          className="animate-on-scroll opacity-0 overflow-hidden hover:shadow-xl transition-all duration-300"
        >
          <img
            src={item.image}
            alt={item.title}
            className="h-44 w-full object-cover"
          />

          <CardContent className="p-6 space-y-4">
            <h3 className="text-xl font-bold">{item.title}</h3>

            <div className="space-y-2 text-sm">
              {item.points.map((p, i) => (
                <div key={i} className="flex items-center gap-2">
                  <p.icon className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">{p.text}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>

    {/* CTA */}
    <div className="text-center mt-12 animate-on-scroll opacity-0">
      <Button size="lg" asChild className="group">
        <Link href="/products">
          View All Elevator Products
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </Button>
    </div>
  </div>
</section>
{/* ================= END PRODUCTS PREVIEW ================= */}
{/* ================= GALLERY PREVIEW ================= */}
<section className="py-24 bg-muted/50">
  <div className="container mx-auto px-4">

    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Elevator  Gallery
      </h2>
      <p className="text-lg text-muted-foreground leading-relaxed">
        A glimpse of our elevators across residential,
        commercial, hospital, and industrial projects.
      </p>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {[
        "/images/home-lift/1.jpeg",
        "/images/hospital/1.jpeg",
        "/images/goods-lift/1.jpeg",
        "/images/panoramic-lift/1.jpeg",
        "/images/glass-lift/1.jpeg",
        "/images/dumbwaiter-lift/1.jpeg",
        "/images/home-lift/2.jpeg",
        "/images/panoramic-lift/2.jpeg",
      ].map((src, index) => (
        <div
          key={index}
          className="group overflow-hidden rounded-xl animate-on-scroll opacity-0"
        >
          <img
            src={src}
            alt="Elevator installation by One Pro Elevators"
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      ))}
    </div>

    {/* CTA */}
    <div className="text-center mt-12 animate-on-scroll opacity-0">
      <Button size="lg" asChild className="group">
        <Link href="/gallery">
          View Full Gallery
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </Button>
    </div>

  </div>
</section>
{/* ================= END GALLERY PREVIEW ================= */}

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

<section className="py-24 bg-muted/50 relative overflow-hidden">
  {/* subtle background accent */}
  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10 pointer-events-none" />

  <div className="container mx-auto px-4 relative z-10">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      {/* LEFT CONTENT */}
      <div className="animate-on-scroll opacity-0">
        <span className="inline-block mb-4 px-4 py-2 rounded-full bg-accent/15 text-accent font-semibold text-sm">
          Why One Pro Elevators
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
          Engineering Vertical Mobility with Precision & Trust
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
          At One Pro Elevators, we blend decades of industry expertise with modern
          engineering to deliver safe, reliable, and future-ready elevator solutions
          for homes, hospitals, industries, and high-rise buildings.
        </p>

        {/* FEATURES */}
        <div className="space-y-4">
          {[
            {
              icon: <Award className="w-6 h-6" />,
              title: "Certified Quality & Compliance",
              text: "ISO-certified processes, global safety standards, and award-winning designs.",
            },
            {
              icon: <Users className="w-6 h-6" />,
              title: "Expert Engineering Team",
              text: "200+ skilled professionals across design, installation, and servicing.",
            },
            {
              icon: <Zap className="w-6 h-6" />,
              title: "Energy-Efficient Technology",
              text: "Low-power drives, regenerative systems, and eco-friendly components.",
            },
            {
              icon: <TrendingUp className="w-6 h-6" />,
              title: "Proven Track Record",
              text: "5,000+ successful installations across residential, commercial & industrial projects.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex gap-4 p-5 bg-background/80 backdrop-blur rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/15 text-accent">
                {item.icon}
              </div>
              <div>
                <h4 className="font-semibold mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA + STATS */}
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6">
          <Button
            size="lg"
            className="group"
            onClick={() => setIsQuotePopupOpen(true)}
          >
            Get a Free Consultation
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>

          <div className="flex gap-6 text-sm">
            <div>
              <p className="text-2xl font-bold">30+</p>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <p className="text-2xl font-bold">800+</p>
              <p className="text-muted-foreground">Installations</p>
            </div>
            <div>
              <p className="text-2xl font-bold">24/7</p>
              <p className="text-muted-foreground">Service Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div
        className="animate-on-scroll opacity-0"
        style={{ animationDelay: "0.2s" }}
      >
        <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="/modern-elevator-engineering.jpg"
            alt="One Pro Elevators Engineering"
            className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700"
          />

          {/* floating badge */}
          <div className="absolute bottom-6 left-6 bg-background/90 backdrop-blur px-5 py-4 rounded-xl shadow-lg">
            <p className="font-semibold">Trusted by Builders & Architects</p>
            <p className="text-sm text-muted-foreground">
              Residential • Commercial • Industrial
            </p>
          </div>
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
