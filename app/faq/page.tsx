import { SiteHeader } from "@/components/site-header"
import { FooterWithProvinces } from "@/components/footer-with-provinces"

export default function FAQPage() {
  return (
    <>
      <SiteHeader />
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-10 shadow-xl">
              <div className="relative space-y-12">
                <header className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight text-lime-300">Frequently Asked Questions</h1>
                  <p className="text-neutral-400 text-lg">
                    Jawaban untuk pertanyaan yang sering diajukan tentang layanan rental mobil Sahabat Rentcar Nusa.
                  </p>
                </header>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    1. Apa saja jenis kendaraan yang tersedia untuk disewa?
                  </h2>
                  <p className="text-neutral-300">
                    Kami menyediakan berbagai jenis kendaraan mulai dari city car (Honda Brio), MPV keluarga (Toyota
                    Avanza, Daihatsu Xenia), MPV premium (Toyota Innova), SUV (Mitsubishi Pajero Sport), hingga minibus
                    (Toyota Hiace) untuk kebutuhan grup.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">2. Berapa lama minimal rental mobil?</h2>
                  <p className="text-neutral-300">
                    Minimal rental adalah 12 jam untuk paket harian. Kami juga menyediakan paket mingguan dan bulanan
                    dengan harga yang lebih ekonomis untuk kebutuhan jangka panjang.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">3. Apakah sudah termasuk driver dan BBM?</h2>
                  <p className="text-neutral-300">
                    Ya, semua paket rental kami sudah termasuk driver berpengalaman dan BBM. Driver kami menguasai rute
                    di berbagai kota dan siap membantu perjalanan Anda dengan aman dan nyaman.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">4. Bagaimana sistem pembayaran?</h2>
                  <p className="text-neutral-300">
                    Kami menerima pembayaran tunai, transfer bank, dan e-wallet. Untuk booking, cukup DP 30% dan sisanya
                    dapat dibayar saat pengambilan kendaraan. Lihat detail harga di halaman{" "}
                    <a href="/#pricing" className="text-lime-300 underline">
                      pricing
                    </a>
                    .
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">5. Apakah bisa antar-jemput ke lokasi tertentu?</h2>
                  <p className="text-neutral-300">
                    Ya, kami menyediakan layanan antar-jemput ke bandara, hotel, atau lokasi lain sesuai kebutuhan Anda.
                    Untuk area tertentu mungkin ada biaya tambahan yang akan dikonfirmasi saat booking.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    6. Bagaimana jika terjadi kerusakan atau kecelakaan?
                  </h2>
                  <p className="text-neutral-300">
                    Semua kendaraan kami diasuransikan dengan asuransi comprehensive. Dalam hal terjadi kerusakan atau
                    kecelakaan, kami akan menangani klaim asuransi dan menyediakan kendaraan pengganti jika diperlukan.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">7. Apakah tersedia untuk perjalanan luar kota?</h2>
                  <p className="text-neutral-300">
                    Ya, kami melayani perjalanan luar kota ke seluruh Indonesia. Tarif disesuaikan dengan jarak dan
                    durasi perjalanan. Hubungi kami untuk mendapatkan penawaran khusus perjalanan luar kota.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">8. Berapa lama sebelumnya harus booking?</h2>
                  <p className="text-neutral-300">
                    Untuk memastikan ketersediaan kendaraan, kami sarankan booking minimal H-1. Namun untuk kebutuhan
                    mendadak, silakan hubungi kami karena kami akan berusaha menyediakan kendaraan yang tersedia.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    9. Apakah ada diskon untuk rental jangka panjang?
                  </h2>
                  <p className="text-neutral-300">
                    Ya, kami memberikan diskon khusus untuk rental mingguan dan bulanan. Semakin lama durasi rental,
                    semakin besar diskon yang kami berikan. Hubungi kami untuk penawaran terbaik.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">10. Bagaimana cara booking?</h2>
                  <p className="text-neutral-300">
                    Cara termudah adalah melalui WhatsApp di{" "}
                    <a href="https://wa.me/6281234567890" className="text-lime-300 underline">
                      +62 812-3456-7890
                    </a>
                    . Tim kami akan membantu proses booking dan memberikan informasi lengkap sesuai kebutuhan Anda.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterWithProvinces />
    </>
  )
}
