import { SiteHeader } from "@/components/site-header"
import { FooterWithProvinces } from "@/components/footer-with-provinces"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Car, Users, Shield, Clock, Star, MessageCircle } from "lucide-react"

export default function AboutPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sahabat Rentcar Nusa",
    url: "https://sahabatrentcar.com",
    logo: "https://sahabatrentcar.com/logo.png",
    description:
      "Sahabat Rentcar Nusa adalah penyedia layanan rental mobil terpercaya di seluruh Indonesia dengan armada lengkap dan pelayanan terbaik.",
    sameAs: ["https://www.instagram.com/sahabatrentcar", "https://www.facebook.com/sahabatrentcar"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jakarta",
      addressRegion: "DKI Jakarta",
      addressCountry: "ID",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+62-812-3456-7890",
        contactType: "customer service",
      },
    ],
    areaServed: [
      { "@type": "Place", name: "Jakarta" },
      { "@type": "Place", name: "Bandung" },
      { "@type": "Place", name: "Surabaya" },
      { "@type": "Place", name: "Bali" },
      { "@type": "Place", name: "Yogyakarta" },
    ],
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* SEO Schema for Google + LLMs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <SiteHeader />

      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-12 lg:px-20 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Tentang <span className="text-lime-300">Sahabat Rentcar Nusa</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-8">
            Mitra terpercaya untuk semua kebutuhan rental mobil Anda di seluruh Nusantara dengan komitmen pada kualitas,
            keamanan, dan kepuasan pelanggan.
          </p>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden liquid-glass mx-auto max-w-4xl">
            <Image
              src="/placeholder.svg?height=400&width=800&text=Sahabat+Rentcar+Fleet"
              alt="Armada Sahabat Rentcar Nusa"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Mengapa Memilih <span className="text-lime-300">Sahabat Rentcar?</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Car className="w-12 h-12 text-lime-400" />,
                title: "Armada Lengkap",
                desc: "Pilihan kendaraan dari city car hingga bus pariwisata untuk semua kebutuhan perjalanan Anda.",
              },
              {
                icon: <Shield className="w-12 h-12 text-lime-400" />,
                title: "Keamanan Terjamin",
                desc: "Semua kendaraan diasuransikan dan menjalani perawatan rutin untuk keamanan maksimal.",
              },
              {
                icon: <Users className="w-12 h-12 text-lime-400" />,
                title: "Driver Berpengalaman",
                desc: "Tim driver profesional yang berpengalaman dan menguasai rute di seluruh Indonesia.",
              },
              {
                icon: <Clock className="w-12 h-12 text-lime-400" />,
                title: "Layanan 24/7",
                desc: "Siap melayani kebutuhan rental mobil Anda kapan saja, di mana saja.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="liquid-glass p-6 text-center hover:scale-105 transform transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <div className="container mx-auto">
          <div className="liquid-glass rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Dipercaya Ribuan <span className="text-lime-300">Pelanggan</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-lime-300 mb-2">500+</div>
                <div className="text-gray-300">Kendaraan</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-lime-300 mb-2">10K+</div>
                <div className="text-gray-300">Pelanggan Puas</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-lime-300 mb-2">25+</div>
                <div className="text-gray-300">Kota Layanan</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-lime-300 mb-2">4.9</div>
                <div className="text-gray-300">Rating Pelanggan</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Layanan <span className="text-lime-300">Kami</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Rental Harian",
                desc: "Solusi praktis untuk kebutuhan perjalanan harian dengan harga terjangkau dan fleksibilitas tinggi.",
                features: ["Driver berpengalaman", "BBM included", "Asuransi lengkap"],
              },
              {
                title: "Rental Mingguan",
                desc: "Paket hemat untuk perjalanan bisnis atau liburan keluarga dengan durasi lebih panjang.",
                features: ["Diskon khusus", "Maintenance included", "Support 24/7"],
              },
              {
                title: "Rental Bulanan",
                desc: "Solusi ekonomis untuk kebutuhan kendaraan jangka panjang dengan layanan premium.",
                features: ["Harga terbaik", "Full service", "Penggantian kendaraan"],
              },
            ].map((service, index) => (
              <Card key={index} className="liquid-glass p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.desc}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300">
                      <Star className="w-4 h-4 text-lime-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-lime-400 text-black hover:bg-lime-300">Pelajari Lebih Lanjut</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Siap Memulai Perjalanan Anda?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk mendapatkan penawaran terbaik dan konsultasi gratis untuk kebutuhan rental mobil
            Anda.
          </p>
          <Button asChild className="bg-lime-400 text-black hover:bg-lime-300 px-8 py-4 text-lg">
            <Link href="https://wa.me/6281234567890">
              <MessageCircle className="w-5 h-5 mr-2" />
              Hubungi Kami Sekarang
            </Link>
          </Button>
        </div>
      </section>

      <FooterWithProvinces />
    </div>
  )
}
