import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Car, Users, Fuel, Settings, Star, MessageCircle } from "lucide-react";
import { fleetData, type FleetVehicle } from "@/lib/fleet";
import { getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Armada Kendaraan - Sahabat Rentcar Nusa",
  description:
    "Pilihan lengkap kendaraan rental terbaik untuk kebutuhan perjalanan Anda di seluruh Nusantara. Dari mobil keluarga hingga SUV premium.",
  keywords:
    "rental mobil, sewa mobil, armada kendaraan, mobil keluarga, SUV, MPV, Indonesia",
};

export default function ArmadaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SiteHeader />

      <main className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Armada <span className="text-lime-300">Kendaraan</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Pilihan lengkap kendaraan berkualitas tinggi untuk semua kebutuhan
            perjalanan Anda
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleetData.map((vehicle, index) => (
            <VehicleCard key={index} vehicle={vehicle} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="liquid-glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">
              Butuh Bantuan Memilih Kendaraan?
            </h2>
            <p className="text-gray-300 mb-6">
              Tim kami siap membantu Anda menemukan kendaraan yang tepat sesuai
              kebutuhan dan budget
            </p>
            <Button
              asChild
              className="bg-lime-400 text-black hover:bg-lime-300 px-8 py-3"
            >
              <Link
                href={getWhatsAppUrl(
                  "Halo, saya butuh bantuan memilih kendaraan."
                )}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Konsultasi Gratis
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}

function VehicleCard({ vehicle }: { vehicle: FleetVehicle }) {
  return (
    <div className="liquid-glass rounded-2xl overflow-hidden group hover:scale-[1.02] transition-all duration-300">
      {/* Vehicle Image */}
      <div className="relative h-48 overflow-hidden bg-gray-800">
        <Image
          src={vehicle.image || "/placeholder.svg"}
          alt={vehicle.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-lime-400 text-black font-medium">
            {vehicle.category}
          </Badge>
        </div>
        <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/50 rounded-full px-2 py-1">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-white text-sm">{vehicle.rating}</span>
        </div>
      </div>

      {/* Vehicle Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{vehicle.name}</h3>
        <p className="text-gray-300 text-sm mb-4">{vehicle.description}</p>

        {/* Specifications */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2 text-gray-300">
            <Users className="w-4 h-4" />
            <span className="text-sm">{vehicle.capacity} Penumpang</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Fuel className="w-4 h-4" />
            <span className="text-sm">{vehicle.fuel}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Settings className="w-4 h-4" />
            <span className="text-sm">{vehicle.transmission}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Car className="w-4 h-4" />
            <span className="text-sm">{vehicle.year}</span>
          </div>
        </div>

        {/* Features */}
        <div className="mb-6">
          <h4 className="text-white font-medium mb-2">Fasilitas:</h4>
          <div className="flex flex-wrap gap-2">
            {vehicle.features.map((feature, idx) => (
              <Badge
                key={idx}
                variant="outline"
                className="text-xs border-gray-600 text-gray-300"
              >
                {feature}
              </Badge>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-lime-300">
              Rp {vehicle.pricePerDay.toLocaleString("id-ID")}
            </div>
            <div className="text-gray-400 text-sm">per hari</div>
          </div>
          <Button asChild className="bg-lime-400 text-black hover:bg-lime-300">
            <Link
              href={getWhatsAppUrl(
                `Halo, saya tertarik untuk menyewa ${vehicle.name}`
              )}
            >
              Sewa Sekarang
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
