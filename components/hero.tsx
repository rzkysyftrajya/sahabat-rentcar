import { Button } from "@/components/ui/button";
import Image from "next/image";
import LazyVideo from "./lazy-video";

export function Hero() {
  const buttonNew = (
    <Button
      asChild
      className="rounded-full bg-lime-400 px-6 text-black hover:bg-lime-300"
    >
      <a
        href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20sewa%20mobil.%20Bisa%20minta%20informasi%20lengkapnya?"
        target="_blank"
        rel="noopener noreferrer"
      >
        Sewa Mobil Sekarang
      </a>
    </Button>
  );

  return (
    <section className="relative isolate overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-14 sm:py-20">
          <div className="mb-5 flex items-center gap-2">
            <Image
              src="/icons/skitbit-white.svg"
              alt="Sahabat Rentcar Nusa logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <p className="text-sm uppercase tracking-[0.25em] text-lime-300/80">
              sahabat rentcar nusa
            </p>
          </div>
          <h1 className="mt-3 text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block">RENTAL MOBIL</span>
            <span className="block text-lime-300 drop-shadow-[0_0_20px_rgba(132,204,22,0.35)]">
              TERPERCAYA
            </span>
            <span className="block">DI NUSANTARA</span>
          </h1>
          <div className="mt-6">{buttonNew}</div>

          {/* Car showcase grid */}
          <div className="mt-10 grid w-full gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {carData.map((car, i) => {
              const visibility =
                i <= 2
                  ? "block"
                  : i === 3
                  ? "hidden md:block"
                  : i === 4
                  ? "hidden xl:block"
                  : "hidden";

              return (
                <div key={i} className={visibility}>
                  <CarCard
                    title={car.title}
                    sub={car.sub}
                    tone={car.tone}
                    gradient={car.gradient}
                    videoSrc={car.videoSrc}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function CarCard({
  title = "Avanza",
  sub = "Mobil keluarga terpopuler untuk perjalanan nyaman.",
  tone = "keluarga",
  gradient = "from-[#0f172a] via-[#14532d] to-[#052e16]",
  videoSrc,
}: {
  title?: string;
  sub?: string;
  tone?: string;
  gradient?: string;
  videoSrc?: string;
}) {
  return (
    <div className="relative rounded-[28px] glass-border bg-neutral-900 p-2">
      <div className="relative aspect-[9/19] w-full overflow-hidden rounded-2xl bg-black">
        <LazyVideo
          src={videoSrc ?? "/videos/avanza-web.mp4"}
          className="absolute inset-0 h-full w-full object-cover"
          autoplay={true}
          loop={true}
          muted={true}
          playsInline={true}
          aria-label={`${title} - ${sub}`}
        />

        <div className="relative z-10 p-3">
          <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/20" />
          <div className="space-y-1 px-1">
            <div className="text-3xl font-bold leading-snug text-white/90">
              {title}
            </div>
            <p className="text-xs text-white/70">{sub}</p>
            <div className="mt-3 inline-flex items-center rounded-full bg-black/40 px-2 py-0.5 text-[10px] uppercase tracking-wider text-lime-300">
              {tone}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const carData = [
  {
    title: "Avanza",
    sub: "Mobil keluarga terpopuler untuk perjalanan nyaman.",
    tone: "keluarga",
    gradient: "from-[#0b0b0b] via-[#0f172a] to-[#020617]",
    videoSrc: "/videos/avanza-web.mp4",
  },
  {
    title: "Innova",
    sub: "Kendaraan premium untuk perjalanan bisnis.",
    tone: "premium",
    gradient: "from-[#0b1a0b] via-[#052e16] to-[#022c22]",
  },
  {
    title: "Xenia",
    sub: "Pilihan ekonomis untuk kebutuhan harian.",
    tone: "ekonomis",
    gradient: "from-[#001028] via-[#0b355e] to-[#052e5e]",
    videoSrc: "/videos/avanza-web.mp4",
  },
  {
    title: "Pajero",
    sub: "SUV tangguh untuk petualangan Anda.",
    tone: "adventure",
    gradient: "from-[#0b0b0b] via-[#1f2937] to-[#0b1220]",
  },
  {
    title: "Hiace",
    sub: "Kapasitas besar untuk grup dan keluarga.",
    tone: "group",
    gradient: "from-[#0b0b0b] via-[#111827] to-[#052e16]",
  },
];
