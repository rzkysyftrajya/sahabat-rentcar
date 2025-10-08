"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import Image from "next/image"

export function LogoMarquee() {
  const [pausedRow, setPausedRow] = useState<string | null>(null)

  // Partner/Client logos with colors and content
  const logos = [
    { name: "Toyota", content: "T", color: "text-red-500", bg: "bg-red-500" },
    { name: "Daihatsu", content: "D", color: "text-blue-500", bg: "bg-blue-500" },
    { name: "Mitsubishi", content: "M", color: "text-red-600", bg: "bg-red-600" },
    { name: "Honda", content: "H", color: "text-black", bg: "bg-gray-200" },
    { name: "Suzuki", content: "S", color: "text-blue-600", bg: "bg-blue-600" },
    { name: "Isuzu", content: "I", color: "text-orange-500", bg: "bg-orange-500" },
    { name: "Nissan", content: "N", color: "text-gray-700", bg: "bg-gray-700" },
    { name: "Hyundai", content: "H", color: "text-blue-700", bg: "bg-blue-700" },
  ]

  const secondRowLogos = [
    { name: "Grab", content: "G", color: "text-green-500", bg: "bg-green-500" },
    { name: "Gojek", content: "🟢", color: "text-green-600" },
    { name: "Traveloka", content: "T", color: "text-blue-500", bg: "bg-blue-500" },
    { name: "Tiket.com", content: "🎫", color: "text-orange-500" },
    { name: "Pegipegi", content: "P", color: "text-purple-500", bg: "bg-purple-500" },
    { name: "Agoda", content: "A", color: "text-red-500", bg: "bg-red-500" },
    { name: "Booking.com", content: "B", color: "text-blue-600", bg: "bg-blue-600" },
    { name: "Expedia", content: "E", color: "text-yellow-500", bg: "bg-yellow-500" },
  ]

  const LogoCard = ({ logo, rowId }: { logo: any; rowId: string }) => (
    <div
      className="flex-shrink-0 mx-3"
      onMouseEnter={() => setPausedRow(rowId)}
      onMouseLeave={() => setPausedRow(null)}
    >
      <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center">
        {logo.image ? (
          <div className="relative w-16 h-8 sm:w-20 sm:h-10 lg:w-24 lg:h-12">
            <Image
              src={logo.image || "/placeholder.svg"}
              alt={logo.name}
              fill
              className="object-contain opacity-90"
              sizes="(min-width: 1024px) 128px, (min-width: 640px) 112px, 96px"
            />
          </div>
        ) : logo.bg ? (
          <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${logo.bg} flex items-center justify-center`}>
            <span className={`text-sm sm:text-lg font-bold text-white`}>{logo.content}</span>
          </div>
        ) : (
          <span className={`text-lg sm:text-xl lg:text-2xl font-semibold ${logo.color}`}>{logo.content}</span>
        )}
      </div>
    </div>
  )

  return (
    <section className="text-white py-16 sm:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center justify-between mb-12 sm:flex-row sm:items-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl text-center sm:text-left">
            Dipercaya oleh <span className="text-lime-300">ribuan</span>
            <br />
            pelanggan
          </h2>
          <Button variant="outline" className="mt-4 sm:mt-0 liquid-glass hover:liquid-glass-enhanced bg-transparent">
            <a href="https://wa.link/65mf3i" target="_blank" rel="noopener noreferrer">
              Hubungi Kami
            </a>
          </Button>
        </div>

        {/* Logo Marquee */}
        <div className="relative">
          {/* First Row - Scrolling Right */}
          <div className="flex overflow-hidden mb-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div
              className={`flex animate-scroll-right whitespace-nowrap ${pausedRow === "first" ? "animation-play-state-paused" : ""}`}
              style={{
                animationPlayState: pausedRow === "first" ? "paused" : "running",
                width: "max-content",
              }}
            >
              {/* Triple the logos for seamless loop */}
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <LogoCard key={`first-${index}`} logo={logo} rowId="first" />
              ))}
            </div>
          </div>

          {/* Second Row - Scrolling Left */}
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div
              className={`flex animate-scroll-left whitespace-nowrap ${pausedRow === "second" ? "animation-play-state-paused" : ""}`}
              style={{
                animationPlayState: pausedRow === "second" ? "paused" : "running",
                width: "max-content",
              }}
            >
              {/* Triple the logos for seamless loop */}
              {[...secondRowLogos, ...secondRowLogos, ...secondRowLogos].map((logo, index) => (
                <LogoCard key={`second-${index}`} logo={logo} rowId="second" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
