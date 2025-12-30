"use client"

import type React from "react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { QuotePopup } from "@/components/quote-popup"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, MessageCircle, Headphones, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    service: "",
  })
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

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  try {
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        elevatorType: formData.service, // mapping
        message: formData.message,
      }),
    })

    const data = await res.json()

    if (!res.ok) {
      throw new Error(data.error || "Failed to submit")
    }
alert("Form has been submitted. We will contact you soon.")
    // optional: clear form after success
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    })
  } catch (error) {
    console.error("Contact form submit error:", error)
    alert("Failed to send message. Please try again.")
  }
}


  return (
    <div className="min-h-screen">
      <Navbar onQuoteClick={() => setIsQuotePopupOpen(true)} />
      <QuotePopup isOpen={isQuotePopupOpen} onClose={() => setIsQuotePopupOpen(false)} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-slide-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-balance">Get In Touch</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to discuss your elevator needs? Our team of experts is here to help you find the perfect solution.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button size="lg" onClick={() => setIsQuotePopupOpen(true)} className="group">
                Quick Quote
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+91-9590373137">
                  <Phone className="mr-2 w-4 h-4" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: <Phone className="w-6 h-6" />,
                title: "Call Us",
                description: "Speak with our team",
                action: "+91-9590373137",
                link: "tel:+91-9590373137",
              },
              {
                icon: <Mail className="w-6 h-6" />,
                title: "Email Us",
                description: "Send us a message",
                action: "Oneproelevators@gmail.com",
                link: "mailto:Oneproelevators@gmail.com",
              },
              {
                icon: <MessageCircle className="w-6 h-6" />,
                title: "Live Chat",
                description: "Chat with support",
                action: "Start Chat",
                link: "https://api.whatsapp.com/send/?phone=919590373137&text=hi&type=phone_number&app_absent=0",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="animate-on-scroll opacity-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto group-hover:bg-accent/30 transition-colors">
                    <div className="text-accent">{item.icon}</div>
                  </div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  <a
                    href={item.link}
                    className="inline-block text-accent font-medium hover:underline group-hover:translate-x-1 transition-transform"
                  >
                    {item.action}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-on-scroll opacity-0">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-2">Send Us a Message</h2>
                  <p className="text-muted-foreground mb-6">
                    Fill out the form and we'll get back to you within 24 hours
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interested In</Label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                      >
                        <option value="">Select a service</option>
                        <option value="new-installation">New Installation</option>
                        <option value="modernization">Modernization</option>
                        <option value="maintenance">Maintenance</option>
                        <option value="repair">Repair Service</option>
                        <option value="consultation">Consultation</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your elevator needs..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full group">
                      Submit Request
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 animate-on-scroll opacity-0" style={{ animationDelay: "0.2s" }}>
              <div>
                <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We're here to answer your questions and provide expert guidance on all your elevator needs.
                </p>
              </div>

              <div className="space-y-4">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Headquarters</h3>
                      <p className="text-muted-foreground">
                       #63, 7th cross 
                        <br />
                        Vinayaka Layout , Nayandahalli
                        <br />
                        Bangalore - 560039
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Phone Numbers</h3>
                      <p className="text-muted-foreground">
                        91-9590373137
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email Addresses</h3>
                      <p className="text-muted-foreground">
                       Oneproelevators@gmail.com
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 8:00 AM - 6:00 PM
                        <br />
                        Saturday: 9:00 AM - 2:00 PM
                        <br />
                        Sunday: Closed
                        <br />
                        Emergency Support: Available 24/7
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Headphones className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">24/7 Emergency Support</h3>
                      <p className="text-primary-foreground/90 mb-4 leading-relaxed">
                        Need immediate assistance? Our emergency response team is always ready to help.
                      </p>
                      <Button variant="secondary" size="sm" asChild>
                        <a href="tel:91-9590373137">Call Emergency Line</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="animate-on-scroll opacity-0">
            <h2 className="text-3xl font-bold text-center mb-8">Visit Our Office</h2>
            <div className="w-full h-[80vh] rounded-lg overflow-hidden shadow-xl">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.423396496812!2d77.5191686!3d12.9447371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f20b0c5ed23%3A0x30e55a77e42a57ce!2sONE%20PRO%20ELEVATORS!5e0!3m2!1sen!2sin!4v1767084982860!5m2!1sen!2sin"
    className="w-full h-full border-0"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>

            
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
