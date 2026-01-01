"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect } from "react"

export default function PrivacyPage() {
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
                Privacy Policy
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
                  <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    One Pro Elevators (“we”, “our”, or “us”) is committed to
                    protecting your privacy. This Privacy Policy explains how we
                    collect, use, disclose, and safeguard your information when
                    you visit our website or interact with our services in
                    accordance with applicable Indian laws.
                  </p>
                </section>

                {/* 2 */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    2. Information We Collect
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We may collect personal and business information that you
                    voluntarily provide to us, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Name, phone number, email address</li>
                    <li>Company or building details</li>
                    <li>Project and service requirements</li>
                    <li>Billing and payment-related information</li>
                    <li>Communication records and enquiries</li>
                  </ul>
                </section>

                {/* 3 */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    3. How We Use Your Information
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The information collected is used to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Provide elevator installation, maintenance, and support services</li>
                    <li>Respond to enquiries and service requests</li>
                    <li>Process quotations, orders, and payments</li>
                    <li>Improve our services and customer experience</li>
                    <li>Send service-related updates and communications</li>
                    <li>Comply with legal and regulatory requirements</li>
                  </ul>
                </section>

                {/* 4 */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    4. Information Sharing
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We do not sell or rent your personal information. Information
                    may be shared only with trusted service partners, government
                    authorities when required by law, or to protect our legal
                    rights, safety, and property.
                  </p>
                </section>

                {/* 5 */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement reasonable technical and organizational
                    safeguards to protect your information against unauthorized
                    access, misuse, or disclosure. While we strive to protect
                    your data, no method of electronic transmission is
                    completely secure.
                  </p>
                </section>

                {/* 6 */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    6. Cookies & Website Analytics
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our website may use cookies or similar technologies to
                    improve functionality and analyze traffic. You can control
                    cookie preferences through your browser settings.
                  </p>
                </section>

                {/* 7 */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">7. Your Rights</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Subject to applicable Indian laws, you may request:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Access to your personal data</li>
                    <li>Correction of inaccurate information</li>
                    <li>Deletion of data (where legally permissible)</li>
                    <li>Withdrawal of consent for communications</li>
                  </ul>
                </section>

                {/* 8 */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">8. Data Retention</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Personal information is retained only as long as necessary
                    for business, legal, or regulatory purposes and is securely
                    deleted thereafter.
                  </p>
                </section>

                {/* 9 */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    9. Children’s Privacy
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our services are intended for business and property owners.
                    We do not knowingly collect personal information from
                    individuals under 18 years of age.
                  </p>
                </section>

                {/* 10 */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">
                    10. Changes to This Policy
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    This Privacy Policy may be updated periodically. Any changes
                    will be reflected on this page with a revised “Last
                    updated” date.
                  </p>
                </section>

                {/* 11 */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">11. Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about this Privacy Policy or how
                    your data is handled, please contact us:
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
                    Email: info@oneproelevators.com
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
