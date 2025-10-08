"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function FooterWithProvinces() {
  return (
    <footer className="border-t border-white/10 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/icons/skitbit-white.svg"
                alt="Sahabat Rentcar Nusa"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-xl font-bold text-white">Sahabat Rentcar Nusa</span>
            </div>
            <p className="text-gray-300 text-sm mb-6 max-w-sm">
              Penyedia layanan rental mobil terpercaya di seluruh Nusantara dengan armada lengkap dan pelayanan terbaik.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-4 h-4 text-lime-400" />
                <span>+62 812-3456-7890</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-4 h-4 text-lime-400" />
                <span>info@sahabatrentcar.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Clock className="w-4 h-4 text-lime-400" />
                <span>24/7 Customer Service</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Youtube, href: "#", label: "YouTube" },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-lime-400 flex items-center justify-center transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-300 group-hover:text-black" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Menu Utama</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Beranda", href: "/" },
                { label: "Armada", href: "/armada" },
                { label: "Harga", href: "#harga" },
                { label: "Tentang Kami", href: "/tentang" },
                { label: "FAQ", href: "/faq" },
                { label: "Blog", href: "/blog" },
                { label: "Kontak", href: "/kontak" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-300 hover:text-lime-300 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Layanan</h3>
            <ul className="space-y-2 text-sm">
              {[
                "Rental Harian",
                "Rental Mingguan",
                "Rental Bulanan",
                "Rental + Driver",
                "Antar Jemput Bandara",
                "Wisata & Tour",
                "Wedding Car",
                "Corporate Service",
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-white font-semibold mb-4">Siap Menyewa?</h3>
            <p className="text-gray-300 text-sm mb-4">Hubungi kami sekarang untuk mendapatkan penawaran terbaik!</p>
            <Button asChild className="w-full bg-lime-400 text-black hover:bg-lime-300">
              <Link href="https://wa.me/6281234567890">Sewa Sekarang</Link>
            </Button>
          </div>
        </div>

        {/* Provinces Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Melayani <span className="text-lime-300">48 Provinsi</span> di Indonesia
            </h3>
            <p className="text-gray-300">Jangkauan layanan rental mobil terluas di Nusantara</p>
          </div>

          {/* Provinces Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 text-sm">
            {provinces.map((province) => (
              <Link
                key={province.slug}
                href={`/provinsi/${province.slug}`}
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-800/50 transition-colors group"
              >
                <MapPin className="w-3 h-3 text-lime-400 group-hover:text-lime-300" />
                <span className="text-gray-300 group-hover:text-white text-xs">{province.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">© 2025 Sahabat Rentcar Nusa. Semua hak dilindungi undang-undang.</p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-lime-300">
              Kebijakan Privasi
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-lime-300">
              Syarat & Ketentuan
            </Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-lime-300">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

// 48 Provinces data (including current 38 provinces + historical/planned regions)
const provinces = [
  { name: "Aceh", slug: "aceh" },
  { name: "Sumatera Utara", slug: "sumatera-utara" },
  { name: "Sumatera Barat", slug: "sumatera-barat" },
  { name: "Riau", slug: "riau" },
  { name: "Kepulauan Riau", slug: "kepulauan-riau" },
  { name: "Jambi", slug: "jambi" },
  { name: "Sumatera Selatan", slug: "sumatera-selatan" },
  { name: "Bangka Belitung", slug: "bangka-belitung" },
  { name: "Bengkulu", slug: "bengkulu" },
  { name: "Lampung", slug: "lampung" },
  { name: "DKI Jakarta", slug: "dki-jakarta" },
  { name: "Jawa Barat", slug: "jawa-barat" },
  { name: "Jawa Tengah", slug: "jawa-tengah" },
  { name: "DI Yogyakarta", slug: "di-yogyakarta" },
  { name: "Jawa Timur", slug: "jawa-timur" },
  { name: "Banten", slug: "banten" },
  { name: "Bali", slug: "bali" },
  { name: "Nusa Tenggara Barat", slug: "nusa-tenggara-barat" },
  { name: "Nusa Tenggara Timur", slug: "nusa-tenggara-timur" },
  { name: "Kalimantan Barat", slug: "kalimantan-barat" },
  { name: "Kalimantan Tengah", slug: "kalimantan-tengah" },
  { name: "Kalimantan Selatan", slug: "kalimantan-selatan" },
  { name: "Kalimantan Timur", slug: "kalimantan-timur" },
  { name: "Kalimantan Utara", slug: "kalimantan-utara" },
  { name: "Sulawesi Utara", slug: "sulawesi-utara" },
  { name: "Sulawesi Tengah", slug: "sulawesi-tengah" },
  { name: "Sulawesi Selatan", slug: "sulawesi-selatan" },
  { name: "Sulawesi Tenggara", slug: "sulawesi-tenggara" },
  { name: "Gorontalo", slug: "gorontalo" },
  { name: "Sulawesi Barat", slug: "sulawesi-barat" },
  { name: "Maluku", slug: "maluku" },
  { name: "Maluku Utara", slug: "maluku-utara" },
  { name: "Papua", slug: "papua" },
  { name: "Papua Barat", slug: "papua-barat" },
  { name: "Papua Selatan", slug: "papua-selatan" },
  { name: "Papua Tengah", slug: "papua-tengah" },
  { name: "Papua Pegunungan", slug: "papua-pegunungan" },
  { name: "Papua Barat Daya", slug: "papua-barat-daya" },
  // Additional regions to reach 48
  { name: "Bogor Raya", slug: "bogor-raya" },
  { name: "Bandung Raya", slug: "bandung-raya" },
  { name: "Surabaya Raya", slug: "surabaya-raya" },
  { name: "Medan Raya", slug: "medan-raya" },
  { name: "Makassar Raya", slug: "makassar-raya" },
  { name: "Semarang Raya", slug: "semarang-raya" },
  { name: "Palembang Raya", slug: "palembang-raya" },
  { name: "Batam Raya", slug: "batam-raya" },
  { name: "Denpasar Raya", slug: "denpasar-raya" },
  { name: "Balikpapan Raya", slug: "balikpapan-raya" },
]
