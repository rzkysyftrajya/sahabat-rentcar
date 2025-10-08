import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { LogoMarquee } from "@/components/logo-marquee";
import { Services } from "@/components/services";
import { FooterWithProvinces } from "@/components/footer-with-provinces";
import Script from "next/script";

// ✅ Force static generation for low TTFB
export const dynamic = "force-static";

export default function Page() {
  const servicesStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPageElement",
    "@id": "https://sahabatrentcar.com/#services",
    name: "Layanan Rental Mobil",
    description:
      "Layanan rental mobil lengkap - Lepas Kunci, Dengan Driver, dan Paket Wisata untuk semua kebutuhan perjalanan Anda",
    url: "https://sahabatrentcar.com/#services",
    mainEntity: {
      "@type": "Service",
      name: "Layanan Rental Mobil Sahabat Rentcar Nusa",
      description:
        "Layanan rental mobil profesional dengan berbagai pilihan paket",
      provider: {
        "@type": "Organization",
        name: "Sahabat Rentcar Nusa",
      },
      serviceType: [
        "Rental Mobil Lepas Kunci",
        "Rental Mobil Dengan Driver",
        "Paket Wisata",
      ],
    },
  };

  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://sahabatrentcar.com/",
    name: "Sahabat Rentcar Nusa | Rental Mobil Terpercaya di Indonesia",
    description:
      "Sewa mobil mudah dan terpercaya di seluruh Nusantara. Pilihan lengkap dari Avanza, Innova, Xenia hingga Pajero dengan harga terjangkau dan pelayanan terbaik.",
    url: "https://sahabatrentcar.com/",
    mainEntity: {
      "@type": "Organization",
      name: "Sahabat Rentcar Nusa",
      url: "https://sahabatrentcar.com",
      sameAs: [
        "https://twitter.com/sahabatrentcar",
        "https://www.youtube.com/@sahabatrentcar",
        "https://instagram.com/sahabatrentcar",
        "https://threads.com/sahabatrentcar",
      ],
    },
    hasPart: [
      {
        "@type": "WebPageElement",
        "@id": "https://sahabatrentcar.com/#services",
        name: "Services Section",
        url: "https://sahabatrentcar.com/#services",
      },
    ],
  };

  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <SiteHeader />
        <Hero />
        <Features />
        <LogoMarquee />
        <Services />
        <FooterWithProvinces />
      </main>

      {/* JSON-LD structured data */}
      <Script
        id="structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([pageStructuredData, servicesStructuredData]),
        }}
      />
    </>
  );
}
