"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getWhatsAppUrl } from "@/lib/config";
import { servicesData, additionalServicesData } from "@/lib/data/services";

export function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 text-purple-300 border-purple-300/30"
          >
            Layanan Kami
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Pilihan Layanan{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Terlengkap
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-pretty">
            Dari rental lepas kunci hingga paket wisata lengkap, kami
            menyediakan solusi transportasi untuk setiap kebutuhan perjalanan
            Anda
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className={`liquid-glass-enhanced relative overflow-hidden ${
                  service.popular ? "ring-2 ring-purple-400/50" : ""
                }`}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                      Terpopuler
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <CardTitle className="text-2xl text-white">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-lg">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-300"
                      >
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3"
                    onClick={() => {
                      const url = getWhatsAppUrl(
                        `Halo, saya tertarik dengan layanan ${service.title}. Bisa minta informasi lebih lanjut?`
                      );
                      window.open(url, "_blank");
                    }}
                  >
                    {service.ctaText}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="grid md:grid-cols-3 gap-8">
          {additionalServicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="liquid-glass-enhanced rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Siap Memulai Perjalanan Anda?
            </h3>
            <p className="text-gray-300 mb-6">
              Hubungi kami sekarang untuk konsultasi gratis dan dapatkan
              penawaran terbaik
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-3"
              onClick={() => {
                const url = getWhatsAppUrl(
                  "Halo, saya ingin konsultasi tentang layanan rental mobil. Bisa bantu saya?"
                );
                window.open(url, "_blank");
              }}
            >
              Konsultasi Gratis
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
