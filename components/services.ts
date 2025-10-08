import {
  Car,
  Users,
  MapPin,
  Clock,
  Shield,
  Star,
  LucideIcon,
} from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  popular: boolean;
  ctaText: string;
}

export interface AdditionalService {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const servicesData: Service[] = [
  {
    title: "Lepas Kunci",
    description: "Sewa mobil tanpa driver untuk kebebasan maksimal",
    icon: Car,
    features: [
      "Mobil terawat dan bersih",
      "Asuransi comprehensive",
      "24/7 roadside assistance",
      "Flexible pickup location",
    ],
    popular: false,
    ctaText: "Sewa Sekarang",
  },
  {
    title: "Dengan Driver",
    description: "Sewa mobil dengan driver berpengalaman dan profesional",
    icon: Users,
    features: [
      "Driver berpengalaman",
      "Mengenal rute lokal",
      "Pelayanan ramah",
      "Biaya BBM included",
    ],
    popular: true,
    ctaText: "Pesan Driver",
  },
  {
    title: "Paket Wisata",
    description: "Paket lengkap untuk perjalanan wisata yang tak terlupakan",
    icon: MapPin,
    features: [
      "Itinerary tersusun",
      "Guide lokal",
      "Destinasi terpopuler",
      "All-in package",
    ],
    popular: false,
    ctaText: "Lihat Paket",
  },
];

export const additionalServicesData: AdditionalService[] = [
  {
    icon: Clock,
    title: "Layanan 24/7",
    description: "Siap melayani kapan saja Anda membutuhkan",
  },
  {
    icon: Shield,
    title: "Asuransi Lengkap",
    description: "Perlindungan menyeluruh untuk keamanan perjalanan",
  },
  {
    icon: Star,
    title: "Rating Terbaik",
    description: "Dipercaya ribuan pelanggan di seluruh Indonesia",
  },
];
