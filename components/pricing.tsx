"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

type Feature = { text: string; muted?: boolean }

const ACCENT = "#C6FF3A"

function FeatureItem({ text, muted = false }: Feature) {
  return (
    <li className="flex items-start gap-2">
      <CheckCircle2 className="mt-0.5 h-4 w-4" style={{ color: ACCENT }} />
      <span className={`text-sm ${muted ? "text-neutral-500" : "text-neutral-200"}`}>{text}</span>
    </li>
  )
}

export function Pricing() {
  return (
    <section id="pricing" className="text-white" itemScope itemType="https://schema.org/PriceSpecification">
      <div className="container mx-auto px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="mx-auto mb-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
            style={{ backgroundColor: "rgba(198,255,58,0.12)", color: ACCENT }}
          >
            Paket Harga Rental Mobil
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl" itemProp="name">
            Harga Terjangkau.
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-neutral-400" itemProp="description">
            Tanpa biaya tersembunyi. Hanya layanan rental mobil berkualitas dengan harga yang sesuai budget Anda.
          </p>
          <div className="mt-6">
            <Button
              asChild
              className="rounded-full px-5 text-neutral-900 hover:brightness-95"
              style={{ backgroundColor: "#f2f2f2" }}
            >
              <Link href="https://wa.link/65mf3i" target="_blank">
                Hubungi Sekarang
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {/* Harian */}
          <Card
            className="relative overflow-hidden rounded-2xl liquid-glass shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-300"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <div
              className="absolute right-4 top-11 rounded-full px-2 py-0.5 text-[10px]"
              style={{ backgroundColor: "#1f1f1f", color: "#d4d4d4" }}
            >
              Paling Populer
            </div>

            <CardHeader className="space-y-3 pb-4">
              <div className="text-sm font-semibold text-neutral-200" itemProp="name">
                Paket Harian
              </div>
              <div className="flex items-end gap-2 text-neutral-100">
                <div className="text-xl font-bold tracking-tight" itemProp="price">
                  Rp 300.000
                </div>
                <span className="pb-0.5 text-[11px] text-neutral-400">per hari</span>
                <meta itemProp="priceCurrency" content="IDR" />
              </div>
              <div className="flex gap-2">
                <Button
                  asChild
                  className="flex-1 rounded-full px-4 py-2 text-sm font-medium text-black shadow transition-[box-shadow,transform,filter] active:translate-y-[1px]"
                  style={{ backgroundColor: ACCENT }}
                >
                  <Link href="https://wa.link/65mf3i">Pilih Paket</Link>
                </Button>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <ul className="grid gap-2" itemProp="description">
                {[
                  "Driver berpengalaman included",
                  "BBM untuk dalam kota",
                  "Asuransi kendaraan",
                  "12 jam pemakaian",
                  "Mobil terawat dan bersih",
                  "Customer support 24/7",
                ].map((f, i) => (
                  <FeatureItem key={i} text={f} />
                ))}
              </ul>
            </CardContent>
            <CardFooter />
          </Card>

          {/* Mingguan */}
          <Card
            className="relative overflow-hidden rounded-2xl liquid-glass shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-300"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <CardHeader className="space-y-3 pb-4">
              <div className="text-sm font-semibold text-neutral-200" itemProp="name">
                Paket Mingguan
              </div>
              <div className="flex items-end gap-2 text-neutral-100">
                <div className="text-xl font-bold tracking-tight" itemProp="price">
                  Rp 1.800.000
                </div>
                <span className="pb-0.5 text-[11px] text-neutral-400">per minggu</span>
                <meta itemProp="priceCurrency" content="IDR" />
              </div>

              <div className="flex gap-2">
                <Button
                  asChild
                  className="flex-1 rounded-full px-4 py-2 text-sm font-medium text-black shadow transition-[box-shadow,transform,filter] active:translate-y-[1px]"
                  style={{ backgroundColor: ACCENT }}
                >
                  <Link href="https://wa.link/65mf3i">Pilih Paket</Link>
                </Button>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <ul className="grid gap-2" itemProp="description">
                {[
                  "Driver profesional included",
                  "BBM luar kota included",
                  "Maintenance check berkala",
                  "Fleksibilitas jadwal",
                  "Asuransi comprehensive",
                  "Free car wash 2x",
                ].map((f, i) => (
                  <FeatureItem key={i} text={f} />
                ))}
              </ul>
            </CardContent>
            <CardFooter />
          </Card>

          {/* Bulanan */}
          <Card
            className="relative overflow-hidden rounded-2xl liquid-glass-enhanced shadow-[0_16px_50px_rgba(0,0,0,0.4)] transition-all duration-300"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <CardHeader className="relative space-y-3 pb-4">
              <div className="text-sm font-semibold text-neutral-200" itemProp="name">
                Paket Bulanan
              </div>
              <div className="flex items-end gap-2 text-white">
                <div className="text-xl font-bold tracking-tight" itemProp="price">
                  Rp 6.000.000
                </div>
                <span className="pb-0.5 text-[11px] text-neutral-400">per bulan</span>
                <meta itemProp="priceCurrency" content="IDR" />
              </div>
              <div className="flex gap-2">
                <Button
                  asChild
                  className="flex-1 rounded-full px-4 py-2 text-sm font-medium text-black shadow transition-[box-shadow,transform,filter] active:translate-y-[1px]"
                  style={{ backgroundColor: ACCENT }}
                >
                  <Link href="https://wa.link/65mf3i">Pilih Paket</Link>
                </Button>
              </div>
            </CardHeader>

            <CardContent className="relative pt-0">
              <ul className="grid gap-2" itemProp="description">
                {[
                  "Driver dedicated included",
                  "BBM unlimited dalam provinsi",
                  "Full maintenance & service",
                  "Asuransi all risk",
                  "Priority customer support",
                  "Free replacement jika ada masalah",
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4" style={{ color: ACCENT }} />
                    <span className="text-sm text-neutral-200">{f}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter />
          </Card>
        </div>
      </div>
    </section>
  )
}
