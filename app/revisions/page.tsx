import { SiteHeader } from "@/components/site-header"
import { FooterWithProvinces } from "@/components/footer-with-provinces"

export default function RevisionPolicyPage() {
  return (
    <>
      <SiteHeader />
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-10 shadow-xl">
              <div className="relative space-y-12">
                <header className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight text-lime-300">Kebijakan Layanan</h1>
                  <p className="text-neutral-400 text-lg">
                    Kebijakan layanan Sahabat Rentcar Nusa untuk memastikan transparansi dan kepuasan pelanggan dalam
                    setiap transaksi rental mobil.
                  </p>
                </header>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">1. Kebijakan Perubahan Booking</h2>
                  <p className="text-neutral-300">
                    Kami memahami bahwa rencana perjalanan dapat berubah. Berikut ketentuan perubahan booking:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-400">
                    <li>Perubahan tanggal atau waktu: Gratis jika dilakukan H-2 sebelum keberangkatan</li>
                    <li>Perubahan jenis kendaraan: Dikenakan selisih harga jika upgrade</li>
                    <li>Perubahan rute: Disesuaikan dengan tarif baru berdasarkan jarak tempuh</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">2. Kebijakan Penggantian Kendaraan</h2>
                  <p className="text-neutral-300">Jika terjadi masalah teknis pada kendaraan yang disewa:</p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-400">
                    <li>Penggantian kendaraan dalam waktu maksimal 2 jam</li>
                    <li>Kendaraan pengganti setara atau lebih baik tanpa biaya tambahan</li>
                    <li>Kompensasi waktu tunggu sesuai dengan ketentuan yang berlaku</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">3. Kebijakan Layanan Driver</h2>
                  <p className="text-neutral-300">Standar layanan driver profesional kami:</p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-400">
                    <li>Driver berpengalaman minimal 5 tahun</li>
                    <li>Berpenampilan rapi dan berperilaku sopan</li>
                    <li>Menguasai rute dan destinasi wisata lokal</li>
                    <li>Siap membantu kebutuhan perjalanan dalam batas kewajaran</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">4. Kebijakan Kebersihan Kendaraan</h2>
                  <p className="text-neutral-300">Komitmen kami terhadap kebersihan dan kenyamanan:</p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-400">
                    <li>Kendaraan dibersihkan dan disanitasi sebelum setiap penyewaan</li>
                    <li>Interior dan eksterior dalam kondisi bersih dan wangi</li>
                    <li>Perlengkapan standar: tissue, hand sanitizer, air mineral</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">5. Kebijakan Komplain dan Feedback</h2>
                  <p className="text-neutral-300">Kami menghargai setiap masukan dari pelanggan:</p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-400">
                    <li>Komplain akan ditanggapi dalam waktu maksimal 24 jam</li>
                    <li>Investigasi menyeluruh untuk setiap keluhan yang masuk</li>
                    <li>Kompensasi yang adil jika terbukti ada kesalahan dari pihak kami</li>
                    <li>Feedback positif sangat dihargai untuk peningkatan layanan</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">6. Hubungi Kami</h2>
                  <p className="text-neutral-300">Untuk pertanyaan mengenai kebijakan layanan, silakan hubungi:</p>
                  <p className="text-neutral-300">
                    WhatsApp:{" "}
                    <a href="https://wa.me/6281234567890" className="text-lime-300 underline">
                      +62 812-3456-7890
                    </a>
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
