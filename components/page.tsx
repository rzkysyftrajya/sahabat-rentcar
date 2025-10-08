import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { Services } from "@/components/services";
import { FooterWithProvinces } from "@/components/footer-with-provinces";

export const metadata: Metadata = {
  title: "Layanan Rental Mobil Lengkap | Sahabat Rentcar Nusa",
  description:
    "Kami menyediakan layanan rental mobil lepas kunci, sewa mobil dengan driver profesional, hingga paket wisata lengkap di seluruh Indonesia. Solusi transportasi untuk setiap kebutuhan Anda.",
  keywords:
    "layanan rental mobil, sewa mobil lepas kunci, sewa mobil dengan driver, paket wisata mobil, sahabat rentcar nusa",
};

export default function LayananPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SiteHeader />
      <main>
        <Services />
      </main>
      <FooterWithProvinces />
    </div>
  );
}
