import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { FooterWithProvinces } from "@/components/footer-with-provinces"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { MapPin, Phone, Star, Users, Car, Clock, CheckCircle } from "lucide-react"

interface ProvinceData {
  name: string
  slug: string
  description: string
  capital: string
  popularDestinations: string[]
  specialOffers: string[]
  fleetHighlights: string[]
  testimonial: {
    name: string
    location: string
    rating: number
    comment: string
  }
  localInfo: {
    bestTime: string
    language: string
    currency: string
    timezone: string
  }
  heroImage: string
  attractions: string[]
}

// Province data with unique content for each
const provincesData: Record<string, ProvinceData> = {
  "dki-jakarta": {
    name: "DKI Jakarta",
    slug: "dki-jakarta",
    description:
      "Ibukota Indonesia dengan kehidupan metropolitan yang dinamis. Nikmati kemudahan rental mobil untuk eksplorasi bisnis dan wisata di Jakarta.",
    capital: "Jakarta",
    popularDestinations: ["Monas", "Kota Tua", "Ancol", "TMII", "Grand Indonesia"],
    specialOffers: ["Diskon 20% rental mingguan", "Gratis antar-jemput bandara", "Paket wisata Jakarta 3D2N"],
    fleetHighlights: ["Toyota Innova Premium", "Honda Civic Executive", "Mitsubishi Pajero Sport"],
    testimonial: {
      name: "Budi Santoso",
      location: "Jakarta Selatan",
      rating: 5,
      comment:
        "Pelayanan sangat memuaskan! Mobil bersih dan driver profesional. Sangat membantu untuk meeting bisnis di Jakarta.",
    },
    localInfo: {
      bestTime: "Sepanjang tahun",
      language: "Bahasa Indonesia, Betawi",
      currency: "Rupiah (IDR)",
      timezone: "WIB (UTC+7)",
    },
    heroImage: "/placeholder.svg?height=400&width=800&text=Jakarta+Skyline",
    attractions: ["Monumen Nasional", "Museum Fatahillah", "Dunia Fantasi", "Ragunan Zoo", "Istiqlal Mosque"],
  },
  "sumatera-utara": {
    name: "Sumatera Utara",
    slug: "sumatera-utara",
    description:
      "Provinsi dengan keindahan Danau Toba dan budaya Batak yang kaya. Jelajahi Medan, Danau Toba, dan destinasi menarik lainnya dengan kendaraan terpercaya.",
    capital: "Medan",
    popularDestinations: ["Medan", "Danau Toba", "Berastagi", "Parapat", "Samosir"],
    specialOffers: ["Paket wisata Danau Toba 3D2N", "Diskon 15% untuk rombongan", "Sewa bulanan harga spesial"],
    fleetHighlights: ["Toyota Innova Crysta", "Mitsubishi Pajero Sport", "Toyota Hiace untuk grup"],
    testimonial: {
      name: "Robert Siahaan",
      location: "Medan",
      rating: 5,
      comment: "Mobil nyaman untuk ke Danau Toba! Driver ramah dan tahu tempat wisata terbaik. Sangat puas!",
    },
    localInfo: {
      bestTime: "Mei - September",
      language: "Bahasa Indonesia, Batak",
      currency: "Rupiah (IDR)",
      timezone: "WIB (UTC+7)",
    },
    heroImage: "/placeholder.svg?height=400&width=800&text=Lake+Toba+Sumatra",
    attractions: ["Danau Toba", "Istana Maimun", "Masjid Raya Medan", "Air Terjun Sipiso-piso", "Bukit Lawang"],
  },
  "jawa-barat": {
    name: "Jawa Barat",
    slug: "jawa-barat",
    description:
      "Provinsi dengan keindahan alam pegunungan dan budaya Sunda yang kaya. Jelajahi Bandung, Bogor, dan destinasi menarik lainnya dengan kendaraan terpercaya.",
    capital: "Bandung",
    popularDestinations: ["Bandung", "Bogor", "Sukabumi", "Garut", "Cianjur"],
    specialOffers: ["Paket wisata Bandung-Lembang", "Diskon 15% untuk rombongan", "Sewa bulanan harga spesial"],
    fleetHighlights: ["Toyota Avanza Veloz", "Daihatsu Xenia", "Toyota Hiace untuk grup"],
    testimonial: {
      name: "Sari Dewi",
      location: "Bandung",
      rating: 5,
      comment: "Mobil nyaman untuk jalan-jalan ke Lembang dan Ciwidey. Harga terjangkau dan pelayanan ramah!",
    },
    localInfo: {
      bestTime: "April - Oktober",
      language: "Bahasa Indonesia, Sunda",
      currency: "Rupiah (IDR)",
      timezone: "WIB (UTC+7)",
    },
    heroImage: "/placeholder.svg?height=400&width=800&text=Bandung+Mountains",
    attractions: ["Tangkuban Perahu", "Kawah Putih", "Kebun Raya Bogor", "Trans Studio Bandung", "Saung Angklung Udjo"],
  },
  bali: {
    name: "Bali",
    slug: "bali",
    description:
      "Pulau Dewata dengan pantai eksotis dan budaya Hindu yang memukau. Rental mobil terbaik untuk menjelajahi keindahan Bali dari Ubud hingga Nusa Dua.",
    capital: "Denpasar",
    popularDestinations: ["Ubud", "Kuta", "Sanur", "Nusa Dua", "Canggu"],
    specialOffers: ["Paket honeymoon 5D4N", "Gratis guide lokal", "Diskon 25% season rendah"],
    fleetHighlights: ["Toyota Innova Crysta", "Honda BR-V", "Suzuki Ertiga"],
    testimonial: {
      name: "Made Wirawan",
      location: "Ubud",
      rating: 5,
      comment:
        "Perfect untuk honeymoon! Mobil bersih, AC dingin, dan driver yang sangat membantu menjelaskan tempat wisata.",
    },
    localInfo: {
      bestTime: "April - September",
      language: "Bahasa Indonesia, Bali",
      currency: "Rupiah (IDR)",
      timezone: "WITA (UTC+8)",
    },
    heroImage: "/placeholder.svg?height=400&width=800&text=Bali+Rice+Terraces",
    attractions: ["Tanah Lot", "Uluwatu Temple", "Tegallalang Rice Terrace", "Mount Batur", "Sekumpul Waterfall"],
  },
  "jawa-timur": {
    name: "Jawa Timur",
    slug: "jawa-timur",
    description:
      "Provinsi dengan kekayaan sejarah dan alam yang menawan. Dari Surabaya hingga Malang, nikmati perjalanan nyaman dengan armada terlengkap.",
    capital: "Surabaya",
    popularDestinations: ["Surabaya", "Malang", "Batu", "Bromo", "Ijen"],
    specialOffers: ["Paket adventure Bromo-Ijen", "City tour Surabaya", "Diskon grup 10+ orang"],
    fleetHighlights: ["Mitsubishi Pajero Sport", "Toyota Fortuner", "Isuzu MU-X"],
    testimonial: {
      name: "Andi Prasetyo",
      location: "Surabaya",
      rating: 5,
      comment: "Mobil tangguh untuk ke Bromo! Driver berpengalaman dan tahu rute terbaik. Highly recommended!",
    },
    localInfo: {
      bestTime: "Mei - September",
      language: "Bahasa Indonesia, Jawa",
      currency: "Rupiah (IDR)",
      timezone: "WIB (UTC+7)",
    },
    heroImage: "/placeholder.svg?height=400&width=800&text=Mount+Bromo",
    attractions: ["Mount Bromo", "Ijen Crater", "Tumpak Sewu Waterfall", "Jatim Park", "Selecta Recreation Park"],
  },
  aceh: {
    name: "Aceh",
    slug: "aceh",
    description:
      "Serambi Mekah dengan keindahan alam dan budaya Islam yang kental. Jelajahi Banda Aceh dan destinasi bersejarah lainnya.",
    capital: "Banda Aceh",
    popularDestinations: ["Banda Aceh", "Sabang", "Takengon", "Calang", "Meulaboh"],
    specialOffers: ["Paket wisata sejarah tsunami", "Diskon 20% rental mingguan", "Tour Sabang spesial"],
    fleetHighlights: ["Toyota Avanza", "Daihatsu Xenia", "Mitsubishi Pajero Sport"],
    testimonial: {
      name: "Ahmad Yusuf",
      location: "Banda Aceh",
      rating: 5,
      comment: "Pelayanan memuaskan untuk tour sejarah. Driver sangat informatif tentang sejarah Aceh.",
    },
    localInfo: {
      bestTime: "Juni - Agustus",
      language: "Bahasa Indonesia, Aceh",
      currency: "Rupiah (IDR)",
      timezone: "WIB (UTC+7)",
    },
    heroImage: "/placeholder.svg?height=400&width=800&text=Aceh+Mosque",
    attractions: ["Masjid Raya Baiturrahman", "Museum Tsunami", "Pantai Lampuuk", "Pulau Weh", "Gunung Leuser"],
  },
  "sumatera-barat": {
    name: "Sumatera Barat",
    slug: "sumatera-barat",
    description:
      "Ranah Minang dengan keindahan alam dan budaya Minangkabau yang unik. Nikmati perjalanan ke Padang dan sekitarnya.",
    capital: "Padang",
    popularDestinations: ["Padang", "Bukittinggi", "Payakumbuh", "Solok", "Sawahlunto"],
    specialOffers: ["Paket kuliner Padang", "Diskon 15% grup wisata", "Tour Jam Gadang spesial"],
    fleetHighlights: ["Toyota Innova", "Honda BR-V", "Mitsubishi Xpander"],
    testimonial: {
      name: "Siti Rahma",
      location: "Padang",
      rating: 5,
      comment: "Mobil nyaman untuk jalan-jalan ke Bukittinggi. Driver ramah dan tahu tempat makan enak!",
    },
    localInfo: {
      bestTime: "Mei - September",
      language: "Bahasa Indonesia, Minang",
      currency: "Rupiah (IDR)",
      timezone: "WIB (UTC+7)",
    },
    heroImage: "/placeholder.svg?height=400&width=800&text=Bukittinggi+Minang",
    attractions: ["Jam Gadang", "Ngarai Sianok", "Istana Pagaruyung", "Danau Maninjau", "Pantai Air Manis"],
  },
  riau: {
    name: "Riau",
    slug: "riau",
    description:
      "Provinsi dengan kekayaan budaya Melayu dan industri minyak. Jelajahi Pekanbaru dan destinasi menarik lainnya.",
    capital: "Pekanbaru",
    popularDestinations: ["Pekanbaru", "Dumai", "Bengkalis", "Kampar", "Siak"],
    specialOffers: ["Paket bisnis Pekanbaru", "Diskon corporate", "Antar jemput bandara gratis"],
    fleetHighlights: ["Toyota Camry", "Honda Accord", "Toyota Innova"],
    testimonial: {
      name: "Budi Hartono",
      location: "Pekanbaru",
      rating: 5,
      comment: "Sangat membantu untuk keperluan bisnis. Mobil executive dan driver profesional.",
    },
    localInfo: {
      bestTime: "Sepanjang tahun",
      language: "Bahasa Indonesia, Melayu",
      currency: "Rupiah (IDR)",
      timezone: "WIB (UTC+7)",
    },
    heroImage: "/placeholder.svg?height=400&width=800&text=Pekanbaru+City",
    attractions: [
      "Masjid Agung An-Nur",
      "Taman Rekreasi Alam Mayang",
      "Istana Siak",
      "Danau Buatan",
      "Candi Muara Takus",
    ],
  },
  "kepulauan-riau": {
    name: "Kepulauan Riau",
    slug: "kepulauan-riau",
    description: "Provinsi kepulauan dengan Batam sebagai pusat industri dan Bintan sebagai destinasi wisata.",
    capital: "Tanjung Pinang",
    popularDestinations: ["Batam", "Bintan", "Tanjung Pinang", "Karimun", "Natuna"],
    specialOffers: ["Paket wisata Bintan", "Diskon ferry + rental", "Tour pulau spesial"],
    fleetHighlights: ["Toyota Avanza", "Honda Mobilio", "Mitsubishi Xpander"],
    testimonial: {
      name: "Lina Wijaya",
      location: "Batam",
      rating: 5,
      comment: "Perfect untuk liburan di Bintan! Mobil bersih dan driver tahu tempat wisata terbaik.",
    },
    localInfo: {
      bestTime: "Maret - Oktober",
      language: "Bahasa Indonesia, Melayu",
      currency: "Rupiah (IDR)",
      timezone: "WIB (UTC+7)",
    },
    heroImage: "/placeholder.svg?height=400&width=800&text=Bintan+Beach",
    attractions: [
      "Pantai Trikora",
      "Lagoi Bay",
      "Penyengat Island",
      "Barelang Bridge",
      "Vihara Ksitigarbha Bodhisattva",
    ],
  },
  jambi: {
    name: "Jambi",
    slug: "jambi",
    description:
      "Provinsi dengan warisan Kerajaan Melayu dan keindahan alam Kerinci. Nikmati perjalanan sejarah dan alam.",
    capital: "Jambi",
    popularDestinations: ["Jambi", "Sungai Penuh", "Muaro Jambi", "Kerinci", "Bungo"],
    specialOffers: ["Paket wisata Kerinci", "Tour candi Muaro Jambi", "Diskon grup keluarga"],
    fleetHighlights: ["Toyota Innova", "Mitsubishi Pajero Sport", "Daihatsu Terios"],
    testimonial: {
      name: "Dedi Kurniawan",
      location: "Jambi",
      rating: 5,
      comment: "Mobil tangguh untuk ke Kerinci. Driver berpengalaman dengan medan pegunungan.",
    },
    localInfo: {
      bestTime: "April - Oktober",
      language: "Bahasa Indonesia, Jambi",
      currency: "Rupiah (IDR)",
      timezone: "WIB (UTC+7)",
    },
    heroImage: "/placeholder.svg?height=400&width=800&text=Kerinci+Mountain",
    attractions: [
      "Candi Muaro Jambi",
      "Gunung Kerinci",
      "Danau Kerinci",
      "Taman Nasional Kerinci Seblat",
      "Gentala Arasy",
    ],
  },
  "sumatera-selatan": {
    name: "Sumatera Selatan",
    slug: "sumatera-selatan",
    description: "Bumi Sriwijaya dengan warisan sejarah maritim dan kuliner khas Palembang yang terkenal.",
    capital: "Palembang",
    popularDestinations: ["Palembang", "Lubuklinggau", "Prabumulih", "Lahat", "Muara Enim"],
    specialOffers: ["Paket kuliner Palembang", "Tour Sriwijaya heritage", "Diskon 20% mingguan"],
    fleetHighlights: ["Toyota Innova", "Honda BR-V", "Mitsubishi Xpander"],
    testimonial: {
      name: "Rini Sari",
      location: "Palembang",
      rating: 5,
      comment: "Sempurna untuk tour kuliner! Driver tahu tempat pempek dan tekwan terenak di Palembang.",
    },
    localInfo: {
      bestTime: "Mei - September",
      language: "Bahasa Indonesia, Palembang",
      currency: "Rupiah (IDR)",
      timezone: "WIB (UTC+7)",
    },
    heroImage: "/placeholder.svg?height=400&width=800&text=Palembang+Ampera",
    attractions: [
      "Jembatan Ampera",
      "Masjid Agung Palembang",
      "Museum Balaputra Dewa",
      "Pulau Kemaro",
      "Benteng Kuto Besak",
    ],
  },
  "bangka-belitung": {
    name: "Bangka Belitung",
    slug: "bangka-belitung",
    description:
      "Provinsi kepulauan dengan pantai eksotis dan batu granit yang unik. Destinasi wisata bahari terpopuler.",
    capital: "Pangkal Pinang",
    popularDestinations: ["Pangkal Pinang", "Tanjung Pandan", "Muntok", "Sungailiat", "Toboali"],
    specialOffers: ["Paket island hopping", "Tour Laskar Pelangi", "Diskon honeymoon"],
    fleetHighlights: ["Toyota Avanza", "Daihatsu Xenia", "Honda Mobilio"],
    testimonial: {
      name: "Andi Setiawan",
      location: "Belitung",
      rating: 5,
      comment: "Mobil nyaman untuk tour Belitung! Driver ramah dan tahu spot foto terbaik di pantai.",
    },
    localInfo: {
      bestTime: "Maret - Oktober",
      language: "Bahasa Indonesia, Hakka",
      currency: "Rupiah (IDR)",
      timezone: "WIB (UTC+7)",
    },
    heroImage: "/placeholder.svg?height=400&width=800&text=Belitung+Beach",
    attractions: [
      "Pantai Tanjung Tinggi",
      "Pulau Lengkuas",
      "Museum Kata Andrea Hirata",
      "Danau Kaolin",
      "Pantai Tanjung Kelayang",
    ],
  },
  bengkulu: {
    name: "Bengkulu",
    slug: "bengkulu",
    description:
      "Bumi Rafflesia dengan pantai yang indah dan sejarah kolonial. Jelajahi keindahan alam dan budaya Bengkulu.",
    capital: "Bengkulu",
    popularDestinations: ["Bengkulu", "Curup", "Argamakmur", "Manna", "Kaur"],
    specialOffers: ["Paket wisata pantai", "Tour Fort Marlborough", "Diskon keluarga"],
    fleetHighlights: ["Toyota Avanza", "Daihatsu Xenia", "Mitsubishi Xpander"],
    testimonial: {
      name: "Yuni Kartika",
      location: "Bengkulu",
      rating: 5,
      comment: "Pelayanan baik untuk wisata pantai. Mobil bersih dan driver informatif tentang sejarah Bengkulu.",
    },
    localInfo: {
      bestTime: "April - Oktober",
      language: "Bahasa Indonesia, Rejang",
      currency: "Rupiah (IDR)",
      timezone: "WIB (UTC+7)",
    },
    heroImage: "/placeholder.svg?height=400&width=800&text=Bengkulu+Beach",
    attractions: ["Fort Marlborough", "Pantai Panjang", "Rumah Bung Karno", "Danau Dendam Tak Sudah", "Bukit Kaba"],
  },
  lampung: {
    name: "Lampung",
    slug: "lampung",
    description:
      "Gerbang Sumatera dengan keindahan alam dan budaya yang beragam. Nikmati perjalanan dari Bandar Lampung ke destinasi menarik.",
    capital: "Bandar Lampung",
    popularDestinations: ["Bandar Lampung", "Metro", "Kotabumi", "Liwa", "Krui"],
    specialOffers: ["Paket wisata Krakatau", "Tour Way Kambas", "Diskon ferry + rental"],
    fleetHighlights: ["Toyota Innova", "Honda BR-V", "Mitsubishi Pajero Sport"],
    testimonial: {
      name: "Eko Prasetyo",
      location: "Bandar Lampung",
      rating: 5,
      comment: "Mobil tangguh untuk ke Way Kambas! Driver berpengalaman dan tahu jalur terbaik.",
    },
    localInfo: {
      bestTime: "April - Oktober",
      language: "Bahasa Indonesia, Lampung",
      currency: "Rupiah (IDR)",
      timezone: "WIB (UTC+7)",
    },
    heroImage: "/placeholder.svg?height=400&width=800&text=Lampung+Krakatau",
    attractions: ["Krakatau", "Way Kambas National Park", "Pantai Mutun", "Danau Ranau", "Museum Lampung"],
  },
  "jawa-tengah": {
    name: "Jawa Tengah",
    slug: "jawa-tengah",
    description:
      "Jantung budaya Jawa dengan candi bersejarah dan tradisi yang kaya. Jelajahi Semarang, Solo, dan Yogyakarta.",
    capital: "Semarang",
    popularDestinations: ["Semarang", "Solo", "Magelang", "Purwokerto", "Tegal"],
    specialOffers: ["Paket wisata candi", "Tour Borobudur-Prambanan", "Diskon grup pelajar"],
    fleetHighlights: ["Toyota Innova", "Honda BR-V", "Mitsubishi Xpander"],
    testimonial: {
      name: "Slamet Riyadi",
      location: "Solo",
      rating: 5,
      comment: "Perfect untuk wisata budaya! Driver sangat paham sejarah candi dan tradisi Jawa.",
    },
    localInfo: {
      bestTime: "April - Oktober",
      language: "Bahasa Indonesia, Jawa",
      currency: "Rupiah (IDR)",
      timezone: "WIB (UTC+7)",
    },
    heroImage: "/placeholder.svg?height=400&width=800&text=Borobudur+Temple",
    attractions: ["Candi Borobudur", "Candi Prambanan", "Keraton Solo", "Lawang Sewu", "Dieng Plateau"],
  },
  "di-yogyakarta": {
    name: "DI Yogyakarta",
    slug: "di-yogyakarta",
    description: "Kota Gudeg dan pusat budaya Jawa. Nikmati wisata istana, candi, dan kuliner khas Yogyakarta.",
    capital: "Yogyakarta",
    popularDestinations: ["Yogyakarta", "Bantul", "Sleman", "Kulon Progo", "Gunung Kidul"],
    specialOffers: ["Paket wisata Jogja", "Tour Keraton-Taman Sari", "Diskon pelajar"],
    fleetHighlights: ["Toyota Avanza", "Honda Mobilio", "Daihatsu Xenia"],
    testimonial: {
      name: "Dwi Astuti",
      location: "Yogyakarta",
      rating: 5,
      comment: "Mobil nyaman untuk keliling Jogja! Driver ramah dan tahu tempat kuliner terenak.",
    },
    localInfo: {
      bestTime: "April - Oktober",
      language: "Bahasa Indonesia, Jawa",
      currency: "Rupiah (IDR)",
      timezone: "WIB (UTC+7)",
    },
    heroImage: "/placeholder.svg?height=400&width=800&text=Yogyakarta+Keraton",
    attractions: ["Keraton Yogyakarta", "Taman Sari", "Malioboro Street", "Pantai Parangtritis", "Goa Jomblang"],
  },
  banten: {
    name: "Banten",
    slug: "banten",
    description:
      "Provinsi dengan sejarah Kesultanan Banten dan pantai yang indah. Jelajahi Serang, Tangerang, dan sekitarnya.",
    capital: "Serang",
    popularDestinations: ["Serang", "Tangerang", "Cilegon", "Pandeglang", "Lebak"],
    specialOffers: ["Paket wisata Ujung Kulon", "Tour Baduy", "Diskon corporate"],
    fleetHighlights: ["Toyota Innova", "Honda BR-V", "Mitsubishi Pajero Sport"],
    testimonial: {
      name: "Hendra Gunawan",
      location: "Tangerang",
      rating: 5,
      comment: "Mobil tangguh untuk ke Ujung Kulon! Driver berpengalaman dengan medan off-road.",
    },
    localInfo: {
      bestTime: "April - Oktober",
      language: "Bahasa Indonesia, Sunda",
      currency: "Rupiah (IDR)",
      timezone: "WIB (UTC+7)",
    },
    heroImage: "/placeholder.svg?height=400&width=800&text=Ujung+Kulon",
    attractions: [
      "Ujung Kulon National Park",
      "Pantai Anyer",
      "Masjid Agung Banten",
      "Benteng Speelwijk",
      "Baduy Village",
    ],
  },
  "nusa-tenggara-barat": {
    name: "Nusa Tenggara Barat",
    slug: "nusa-tenggara-barat",
    description:
      "Pulau Lombok dengan pantai eksotis dan Gunung Rinjani yang menawan. Destinasi wisata bahari terpopuler.",
    capital: "Mataram",
    popularDestinations: ["Mataram", "Lombok", "Sumbawa", "Senggigi", "Gili Islands"],
    specialOffers: ["Paket wisata Lombok", "Tour Gili Islands", "Diskon honeymoon"],
    fleetHighlights: ["Toyota Avanza", "Honda BR-V", "Mitsubishi Xpander"],
    testimonial: {
      name: "Baiq Sari",
      location: "Lombok",
      rating: 5,
      comment: "Perfect untuk honeymoon di Lombok! Mobil nyaman dan driver tahu spot foto terbaik.",
    },
    localInfo: {
      bestTime: "April - Oktober",
      language: "Bahasa Indonesia, Sasak",
      currency: "Rupiah (IDR)",
      timezone: "WITA (UTC+8)",
    },
    heroImage: "/placeholder.svg?height=400&width=800&text=Lombok+Beach",
    attractions: ["Gili Trawangan", "Mount Rinjani", "Senggigi Beach", "Pink Beach", "Sekotong"],
  },
  "nusa-tenggara-timur": {
    name: "Nusa Tenggara Timur",
    slug: "nusa-tenggara-timur",
    description:
      "Provinsi dengan keindahan Pulau Komodo dan budaya yang beragam. Jelajahi Flores, Kupang, dan destinasi eksotis lainnya.",
    capital: "Kupang",
    popularDestinations: ["Kupang", "Flores", "Ende", "Maumere", "Labuan Bajo"],
    specialOffers: ["Paket wisata Komodo", "Tour Flores", "Diskon adventure"],
    fleetHighlights: ["Toyota Innova", "Mitsubishi Pajero Sport", "Isuzu MU-X"],
    testimonial: {
      name: "Maria Fernandez",
      location: "Flores",
      rating: 5,
      comment: "Mobil tangguh untuk adventure ke Komodo! Driver sangat membantu dan informatif.",
    },
    localInfo: {
      bestTime: "April - Oktober",
      language: "Bahasa Indonesia, Flores",
      currency: "Rupiah (IDR)",
      timezone: "WITA (UTC+8)",
    },
    heroImage: "/placeholder.svg?height=400&width=800&text=Komodo+Island",
    attractions: ["Komodo National Park", "Kelimutu Lake", "Pink Beach Komodo", "Padar Island", "Cunca Rami Waterfall"],
  },
}

const remainingProvinces = [
  "kalimantan-barat",
  "kalimantan-tengah",
  "kalimantan-selatan",
  "kalimantan-timur",
  "kalimantan-utara",
  "sulawesi-utara",
  "sulawesi-tengah",
  "sulawesi-selatan",
  "sulawesi-tenggara",
  "gorontalo",
  "sulawesi-barat",
  "maluku",
  "maluku-utara",
  "papua",
  "papua-barat",
  "papua-selatan",
  "papua-tengah",
  "papua-pegunungan",
  "papua-barat-daya",
  "bogor-raya",
  "bandung-raya",
  "surabaya-raya",
  "medan-raya",
  "makassar-raya",
  "semarang-raya",
  "palembang-raya",
  "batam-raya",
  "denpasar-raya",
  "balikpapan-raya",
]

remainingProvinces.forEach((slug) => {
  if (!provincesData[slug]) {
    const name = slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
    provincesData[slug] = {
      name: name,
      slug: slug,
      description: `Jelajahi keindahan ${name} dengan layanan rental mobil terpercaya. Nikmati perjalanan nyaman dengan armada lengkap dan driver berpengalaman.`,
      capital: name.includes("Raya") ? name.replace(" Raya", "") : name,
      popularDestinations: ["Kota Utama", "Destinasi Wisata", "Tempat Bersejarah", "Alam", "Budaya"],
      specialOffers: ["Diskon 15% rental mingguan", "Paket wisata lokal", "Gratis antar jemput"],
      fleetHighlights: ["Toyota Avanza", "Honda BR-V", "Mitsubishi Xpander"],
      testimonial: {
        name: "Customer Puas",
        location: name,
        rating: 5,
        comment: `Pelayanan memuaskan untuk wisata di ${name}. Mobil nyaman dan driver profesional.`,
      },
      localInfo: {
        bestTime: "Sepanjang tahun",
        language: "Bahasa Indonesia",
        currency: "Rupiah (IDR)",
        timezone:
          slug.includes("papua") || slug.includes("maluku")
            ? "WIT (UTC+9)"
            : slug.includes("kalimantan") || slug.includes("sulawesi") || slug.includes("bali")
              ? "WITA (UTC+8)"
              : "WIB (UTC+7)",
      },
      heroImage: `/placeholder.svg?height=400&width=800&text=${name.replace(" ", "+")}`,
      attractions: ["Tempat Wisata Utama", "Landmark Terkenal", "Alam Indah", "Budaya Lokal", "Kuliner Khas"],
    }
  }
})

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const province = provincesData[params.slug]

  if (!province) {
    return {
      title: "Provinsi Tidak Ditemukan - Sahabat Rentcar Nusa",
    }
  }

  return {
    title: `Rental Mobil ${province.name} - Sahabat Rentcar Nusa`,
    description: province.description,
    keywords: `rental mobil ${province.name}, sewa mobil ${province.capital}, rental mobil murah ${province.name}`,
  }
}

export default function ProvincePage({ params }: { params: { slug: string } }) {
  const province = provincesData[params.slug]

  if (!province) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SiteHeader />

      <main>
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin className="w-6 h-6 text-lime-400" />
                <Badge className="bg-lime-400 text-black font-medium">{province.capital}</Badge>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Rental Mobil <span className="text-lime-300">{province.name}</span>
              </h1>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">{province.description}</p>
              <Button asChild className="bg-lime-400 text-black hover:bg-lime-300 px-8 py-3">
                <Link href={`https://wa.me/6281234567890?text=Halo, saya ingin rental mobil di ${province.name}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  Sewa Sekarang
                </Link>
              </Button>
            </div>

            {/* Hero Image */}
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden liquid-glass">
              <Image
                src={province.heroImage || "/placeholder.svg"}
                alt={`${province.name} landscape`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Special Offers */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Penawaran Khusus <span className="text-lime-300">{province.name}</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {province.specialOffers.map((offer, index) => (
                <Card key={index} className="liquid-glass p-6 text-center">
                  <CheckCircle className="w-12 h-12 text-lime-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">{offer}</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black bg-transparent"
                  >
                    Info Lengkap
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Fleet Highlights */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Armada Unggulan</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {province.fleetHighlights.map((vehicle, index) => (
                <Card key={index} className="liquid-glass p-6">
                  <Car className="w-12 h-12 text-lime-400 mb-4" />
                  <h3 className="text-white font-semibold mb-2">{vehicle}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-300 text-sm">7 Penumpang</span>
                  </div>
                  <Button asChild className="w-full bg-lime-400 text-black hover:bg-lime-300">
                    <Link href={`https://wa.me/6281234567890?text=Saya tertarik dengan ${vehicle} di ${province.name}`}>
                      Pesan Sekarang
                    </Link>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Destinations */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Destinasi Populer</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {province.attractions.map((attraction, index) => (
                <div key={index} className="liquid-glass rounded-lg p-4 text-center">
                  <MapPin className="w-6 h-6 text-lime-400 mx-auto mb-2" />
                  <span className="text-white text-sm">{attraction}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card className="liquid-glass p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(province.testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-white text-lg mb-4">"{province.testimonial.comment}"</blockquote>
                <div className="text-lime-300 font-semibold">{province.testimonial.name}</div>
                <div className="text-gray-400 text-sm">{province.testimonial.location}</div>
              </Card>
            </div>
          </div>
        </section>

        {/* Local Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Informasi Lokal</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="liquid-glass p-6 text-center">
                <Clock className="w-8 h-8 text-lime-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Waktu Terbaik</h3>
                <p className="text-gray-300 text-sm">{province.localInfo.bestTime}</p>
              </Card>
              <Card className="liquid-glass p-6 text-center">
                <MapPin className="w-8 h-8 text-lime-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Bahasa</h3>
                <p className="text-gray-300 text-sm">{province.localInfo.language}</p>
              </Card>
              <Card className="liquid-glass p-6 text-center">
                <span className="text-2xl mb-3 block">💰</span>
                <h3 className="text-white font-semibold mb-2">Mata Uang</h3>
                <p className="text-gray-300 text-sm">{province.localInfo.currency}</p>
              </Card>
              <Card className="liquid-glass p-6 text-center">
                <Clock className="w-8 h-8 text-lime-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Zona Waktu</h3>
                <p className="text-gray-300 text-sm">{province.localInfo.timezone}</p>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <FooterWithProvinces />
    </div>
  )
}

// Generate static params for all provinces
export async function generateStaticParams() {
  return Object.keys(provincesData).map((slug) => ({
    slug,
  }))
}
