"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect } from "react"

export default function TermsPage() {
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
      <Navbar />

      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 animate-slide-in-up">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Terms & Conditions
              </h1>
              <p className="text-muted-foreground text-lg">
                Last updated: December 20, 2025
              </p>
            </div>

            <Card
              className="animate-on-scroll opacity-0"
              style={{ animationDelay: "0.1s" }}
            >
              <CardContent className="p-8 space-y-10">
                {/* 1 */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    1. Acceptance of Terms
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing or using the services of One Pro Elevators
                    (“Company”, “we”, “our”, or “us”), you agree to comply with
                    and be bound by these Terms & Conditions. If you do not agree
                    to these terms, you should not use our services.
                  </p>
                </section>

                {/* 2 */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">2. Scope of Services</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    One Pro Elevators provides services including but not limited
                    to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Elevator design, supply, and installation</li>
                    <li>Annual Maintenance Contracts (AMC)</li>
                    <li>Breakdown repair and emergency support</li>
                    <li>Elevator modernization and upgrades</li>
                  </ul>
                </section>

                {/* 3 */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">3. Warranty</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    All new elevator installations carry a standard warranty of
                    12 months covering manufacturing defects, subject to proper
                    usage and maintenance. Warranty does not cover damage caused
                    by misuse, power fluctuations, water ingress, fire, natural
                    calamities, or unauthorized repairs.
                  </p>
                </section>

                {/* 4 */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    4. Installation Responsibilities
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The client is responsible for providing clear site access,
                    required civil work, power supply, and statutory approvals
                    as per local authorities and Indian Lift Rules. Any delays
                    or additional work arising due to site conditions may result
                    in revised timelines or costs.
                  </p>
                </section>

                {/* 5 */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    5. Maintenance & AMC
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Maintenance services are provided under mutually agreed AMC
                    terms. Service frequency, inclusions, and exclusions will be
                    clearly defined in the AMC agreement. AMC cancellation
                    requires a minimum notice period of 30 days in writing.
                  </p>
                </section>

                {/* 6 */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">6. Payment Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Payment terms will be defined in the quotation or service
                    agreement. Delayed payments may attract late fees or
                    suspension of services until dues are cleared.
                  </p>
                </section>

                {/* 7 */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    7. Limitation of Liability
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    One Pro Elevators shall not be liable for any indirect,
                    incidental, or consequential damages. Our total liability,
                    if any, shall be limited to the amount paid for the specific
                    service in dispute.
                  </p>
                </section>

                {/* 8 */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    8. Safety & Compliance
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    All services are carried out in compliance with applicable
                    Indian safety standards and Lift Rules. Clients must ensure
                    that elevators are operated only as intended and maintained
                    regularly.
                  </p>
                </section>

                {/* 9 */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    9. Intellectual Property
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    All designs, drawings, technical documents, and branding are
                    the intellectual property of One Pro Elevators and may not
                    be reused without written consent.
                  </p>
                </section>

                {/* 10 */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    10. Governing Law
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms & Conditions shall be governed by and construed
                    in accordance with the laws of India. Any disputes shall be
                    subject to the jurisdiction of courts in Bengaluru,
                    Karnataka.
                  </p>
                </section>

                {/* 11 */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    11. Contact Information
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For any questions regarding these Terms & Conditions, please
                    contact:
                    <br />
                    <br />
                    <strong>One Pro Elevators</strong>
                    <br />
                    #63, 7th Cross, Vinayaka Layout,
                    <br />
                    Nayandahalli, Mysore Road,
                    <br />
                    Bengaluru – 560039
                    <br />
                    Phone: +91 95903 73137
                    <br />
                    Email: oneproelevators@gmail.com
                  </p>
                </section>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
