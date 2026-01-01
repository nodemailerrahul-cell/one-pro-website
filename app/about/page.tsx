import type { Metadata } from "next"
import AboutClient from "./aboutclient"

export const metadata: Metadata = {
  title:
    "About One Pro Elevators | Elevator Installation & AMC Services in Bangalore",
  description:
    "Learn about One Pro Elevators, a Bangalore-based elevator company offering elevator installation, AMC maintenance, modernization, and repair services across residential and commercial buildings in India.",
  keywords: [
    "One Pro Elevators",
    "elevator company in Bangalore",
    "lift manufacturer Bangalore",
    "elevator installation India",
    "elevator AMC services",
    "lift maintenance Bangalore",
    "elevator service company India",
  ],
  alternates: {
    canonical: "https://www.oneproelevators.com/about",
  },
  openGraph: {
    title:
      "About One Pro Elevators | Trusted Elevator Company in Bangalore",
    description:
      "Trusted elevator installation, AMC maintenance, modernization, and repair services in Bangalore and across India.",
    url: "https://www.oneproelevators.com/about",
    siteName: "One Pro Elevators",
    images: [
      {
        url: "/images/home-lift/3.jpeg",
        width: 1200,
        height: 630,
        alt: "Elevator installation and maintenance facility in Bangalore by One Pro Elevators",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "About One Pro Elevators | Elevator Services in Bangalore",
    description:
      "Elevator installation, AMC, modernization & repair services by One Pro Elevators in Bangalore.",
    images: ["/images/home-lift/3.jpeg"],
  },
}

export default function AboutPage() {
  return <AboutClient />
}
