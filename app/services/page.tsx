"use client"
import { BadgeCheck, Clock, ShieldCheck, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"


export default function ServicesPage() {
  const [isQuotePopupOpen, setIsQuotePopupOpen] = useState(false)
  const services = [
    {
      title: "New Installation",
      description: "Complete design, manufacturing, and installation of state-of-the-art elevator systems.",
      icon: <BadgeCheck className="h-8 w-8 text-primary" />,
      features: ["Custom design", "Precision engineering", "Project management"],
    },
    {
      title: "Maintenance & AMC",
      description: "Preventative maintenance programs to ensure safety and minimize downtime.",
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      features: ["24/7 support", "Scheduled inspections", "Certified technicians"],
    },
    {
      title: "Modernization",
      description: "Upgrading existing elevators with modern technology and aesthetic improvements.",
      icon: <Clock className="h-8 w-8 text-primary" />,
      features: ["Energy efficiency", "Improved safety", "Modern controllers"],
    },
    {
      title: "Repair & Emergency",
      description: "Rapid response team for breakdowns and emergency repair services.",
      icon: <Users className="h-8 w-8 text-primary" />,
      features: ["Fast response", "Expert diagnosis", "Genuine spare parts"],
    },
  ]

  return (
    <>
    <div className="flex flex-col gap-16 py-20 px-4 md:px-8 max-w-7xl mx-auto pt-32">
       <Navbar onQuoteClick={() => setIsQuotePopupOpen(true)} />
      <section className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary">Elevator Services & Support</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We provide end-to-end services from initial design and installation to 24/7 maintenance and modernization.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <Card
            key={index}
            className="group border-primary/10 bg-secondary/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                {service.icon}
              </div>
              <div>
                <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              <ul className="grid grid-cols-2 gap-2">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2 text-sm font-medium">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10 space-y-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Expert Customer Support & Maintenance</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We specialize in providing maintenance services for a wide range of elevators and escalators. Our team
                is composed of 75 highly experienced professionals, including engineers, supervisors, technicians, and
                qualified assistants.
              </p>
              <p>
                We place great emphasis on safety, and all of our staff members are thoroughly trained in international
                safety regulations. We also offer modernization services using the latest technology.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-primary font-medium">
                <ShieldCheck className="h-5 w-5" /> Safety First
              </div>
              <div className="flex items-center gap-2 text-primary font-medium">
                <Users className="h-5 w-5" /> 75+ Experts
              </div>
              <div className="flex items-center gap-2 text-primary font-medium">
                <Clock className="h-5 w-5" /> 24/7 Support
              </div>
              <div className="flex items-center gap-2 text-primary font-medium">
                <BadgeCheck className="h-5 w-5" /> Certified
              </div>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-video rounded-2xl overflow-hidden border-2 border-primary/20">
            <img
              src="/elevator-technician-maintenance-service.jpg"
              alt="Maintenance Service"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

     <section className="max-w-4xl mx-auto w-full space-y-10">
  <div className="text-center space-y-3">
    <h2 className="text-3xl md:text-4xl font-bold">
      Frequently Asked Questions
    </h2>
    <p className="text-muted-foreground max-w-2xl mx-auto">
      Clear answers to common questions about elevator installation,
      maintenance, AMC, and emergency support in India.
    </p>
  </div>

  <Accordion type="single" collapsible className="w-full space-y-4">
    {[
      {
        q: "How can I request elevator maintenance or repair?",
        a: "You can contact our support team via phone, WhatsApp, or the enquiry form on our website. We schedule technician visits based on urgency and location, including same-day support where possible.",
      },
      {
        q: "Do you provide 24/7 emergency breakdown support?",
        a: "Yes. We offer 24/7 emergency support for elevator breakdowns and passenger entrapments. Our response time typically ranges from 30 to 90 minutes depending on your city and service contract.",
      },
      {
        q: "How often should elevators be serviced in India?",
        a: "As per Indian Lift Rules, elevators should be serviced at least once every month. High-usage elevators in apartments, hospitals, and commercial buildings may require more frequent maintenance.",
      },
      {
        q: "Do you offer Annual Maintenance Contracts (AMC)?",
        a: "Yes. We offer flexible AMC plans including basic, comprehensive, and premium options covering preventive maintenance, breakdown support, and genuine spare parts.",
      },
      {
        q: "Are your technicians trained and certified?",
        a: "All our technicians are trained in Indian Lift Rules, safety procedures, and modern elevator systems. Regular skill upgrades and safety training are conducted to ensure compliance and reliability.",
      },
    ].map((item, index) => (
      <AccordionItem
        key={index}
        value={`item-${index}`}
        className="border border-primary/10 rounded-xl px-6 bg-secondary/20 hover:bg-secondary/30 transition-all"
      >
        <AccordionTrigger className="text-left text-lg font-semibold py-5">
          {item.q}
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
          {item.a}
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
</section>


      <section className="text-center py-12 bg-primary text-primary-foreground rounded-2xl space-y-6">
        <h2 className="text-3xl font-bold">Ready to Elevate Your Building?</h2>
        <p className="max-w-2xl mx-auto opacity-90">
          Connect with us today to discuss your project needs and receive a personalized quote for installation or
          maintenance.
        </p>
        <Link href={'/contact'}>
        <Button size="lg" variant="secondary" className="font-bold">
          Contact us Now
        </Button>
        </Link>
      </section>
    
   
    
    </div>
     <Footer/>
    </>
  )
}
