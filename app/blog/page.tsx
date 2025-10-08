import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { FooterWithProvinces } from "@/components/footer-with-provinces"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowRight, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog - Tips & Panduan Rental Mobil | Sahabat Rentcar Nusa",
  description:
    "Tips perjalanan, panduan rental mobil, dan informasi destinasi wisata terbaik di Indonesia. Baca artikel terbaru dari Sahabat Rentcar Nusa.",
  keywords: "blog rental mobil, tips perjalanan, panduan wisata, destinasi Indonesia, rental mobil tips",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SiteHeader />

      <main className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Blog <span className="text-lime-300">Sahabat Rentcar</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Tips perjalanan, panduan rental mobil, dan informasi destinasi wisata terbaik di seluruh Nusantara
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <Card className="liquid-glass overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Tips+Rental+Mobil"
                  alt="Tips Rental Mobil"
                  width={600}
                  height={400}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <Badge className="bg-lime-400 text-black mb-4">Featured</Badge>
                <h2 className="text-2xl font-bold text-white mb-4">
                  10 Tips Penting Sebelum Rental Mobil untuk Perjalanan Anda
                </h2>
                <p className="text-gray-300 mb-6">
                  Panduan lengkap untuk memilih rental mobil yang tepat, mulai dari memilih jenis kendaraan hingga tips
                  menghemat biaya perjalanan.
                </p>
                <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>15 Januari 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>Tim Sahabat Rentcar</span>
                  </div>
                </div>
                <Button className="bg-lime-400 text-black hover:bg-lime-300">
                  Baca Selengkapnya
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="liquid-glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Butuh Konsultasi Perjalanan?</h2>
            <p className="text-gray-300 mb-6">
              Tim kami siap membantu merencanakan perjalanan terbaik Anda dengan rekomendasi kendaraan dan rute yang
              tepat
            </p>
            <Button asChild className="bg-lime-400 text-black hover:bg-lime-300 px-8 py-3">
              <Link href="https://wa.me/6281234567890">
                <MessageCircle className="w-5 h-5 mr-2" />
                Konsultasi Gratis
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <FooterWithProvinces />
    </div>
  )
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Card className="liquid-glass overflow-hidden group hover:scale-[1.02] transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-lime-400 text-black font-medium">{post.category}</Badge>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{post.title}</h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

        <div className="flex items-center gap-4 mb-4 text-xs text-gray-400">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="w-3 h-3" />
            <span>{post.author}</span>
          </div>
        </div>

        <Button
          variant="outline"
          className="w-full border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black bg-transparent"
        >
          Baca Artikel
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </Card>
  )
}

interface BlogPost {
  title: string
  excerpt: string
  image: string
  category: string
  date: string
  author: string
}

const blogPosts: BlogPost[] = [
  {
    title: "Destinasi Wisata Terbaik di Jawa Barat untuk Liburan Keluarga",
    excerpt:
      "Jelajahi keindahan Jawa Barat mulai dari Bandung, Bogor, hingga Garut dengan kendaraan rental yang nyaman dan aman.",
    image: "/placeholder.svg?height=300&width=400&text=Jawa+Barat+Wisata",
    category: "Destinasi",
    date: "12 Januari 2025",
    author: "Andi Pratama",
  },
  {
    title: "Panduan Lengkap Rental Mobil untuk Perjalanan Bisnis",
    excerpt:
      "Tips memilih kendaraan yang tepat untuk perjalanan bisnis, mulai dari sedan executive hingga MPV premium.",
    image: "/placeholder.svg?height=300&width=400&text=Business+Travel",
    category: "Tips",
    date: "10 Januari 2025",
    author: "Sari Dewi",
  },
  {
    title: "Rute Terbaik Jakarta-Bandung: Panduan Perjalanan Darat",
    excerpt:
      "Pilihan rute tercepat dan ternyaman untuk perjalanan Jakarta-Bandung, termasuk tempat istirahat yang direkomendasikan.",
    image: "/placeholder.svg?height=300&width=400&text=Jakarta+Bandung+Route",
    category: "Panduan",
    date: "8 Januari 2025",
    author: "Budi Santoso",
  },
  {
    title: "Keuntungan Rental Mobil dengan Driver vs Self Drive",
    excerpt:
      "Perbandingan lengkap antara rental mobil dengan driver dan self drive, beserta kelebihan dan kekurangan masing-masing.",
    image: "/placeholder.svg?height=300&width=400&text=Driver+vs+Self+Drive",
    category: "Tips",
    date: "5 Januari 2025",
    author: "Made Wirawan",
  },
  {
    title: "Wisata Kuliner Bali: Panduan Lengkap dengan Rental Mobil",
    excerpt:
      "Jelajahi surga kuliner Bali dari Denpasar hingga Ubud dengan kendaraan rental yang memudahkan perjalanan Anda.",
    image: "/placeholder.svg?height=300&width=400&text=Bali+Culinary+Tour",
    category: "Destinasi",
    date: "3 Januari 2025",
    author: "Kadek Sari",
  },
  {
    title: "Checklist Penting Sebelum Mengambil Mobil Rental",
    excerpt:
      "Daftar lengkap hal-hal yang harus diperiksa sebelum mengambil mobil rental untuk memastikan perjalanan yang aman dan nyaman.",
    image: "/placeholder.svg?height=300&width=400&text=Car+Rental+Checklist",
    category: "Panduan",
    date: "1 Januari 2025",
    author: "Eko Prasetyo",
  },
]
