import { SiteHeader } from "@/components/site-header"
import { FooterWithProvinces } from "@/components/footer-with-provinces"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Syarat dan Ketentuan — Sahabat Rentcar Nusa",
  description: "Syarat dan ketentuan layanan rental mobil Sahabat Rentcar Nusa.",
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
  },
}

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-10 shadow-xl">
              <div className="relative space-y-12">
                <header className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight text-lime-300">Syarat dan Ketentuan</h1>
                  <p className="text-neutral-400 text-lg">
                    Selamat datang di Sahabat Rentcar Nusa. Dengan menggunakan layanan kami, Anda menyetujui syarat dan
                    ketentuan berikut. Mohon baca dengan seksama.
                  </p>
                </header>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">1. Ketentuan Umum</h2>
                  <p className="text-neutral-300">
                    Syarat dan Ketentuan ini mengatur penggunaan layanan rental mobil Sahabat Rentcar Nusa. Dengan
                    menggunakan layanan kami, Anda menerima ketentuan ini secara penuh.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">2. Persyaratan Penyewa</h2>
                  <p className="text-neutral-300">
                    Untuk dapat menyewa kendaraan, penyewa harus memenuhi persyaratan berikut:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-400">
                    <li>Berusia minimal 21 tahun untuk penyewa</li>
                    <li>Memiliki KTP/identitas yang masih berlaku</li>
                    <li>Menyerahkan jaminan berupa KTP asli atau deposit sesuai ketentuan</li>
                    <li>Mengisi formulir sewa dan menyetujui syarat dan ketentuan</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">3. Tanggung Jawab Penyewa</h2>
                  <p className="text-neutral-300">
                    Penyewa bertanggung jawab penuh atas kendaraan selama masa sewa, termasuk:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-400">
                    <li>Kerusakan yang terjadi akibat kelalaian atau kesalahan penyewa</li>
                    <li>Tilang atau pelanggaran lalu lintas selama masa sewa</li>
                    <li>Kehilangan atau kerusakan aksesoris kendaraan</li>
                    <li>Biaya parkir, tol, dan BBM (jika tidak termasuk dalam paket)</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">4. Pembayaran dan Pembatalan</h2>
                  <p className="text-neutral-300">Ketentuan pembayaran dan pembatalan:</p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-400">
                    <li>DP minimal 30% dari total biaya sewa</li>
                    <li>Pelunasan dilakukan sebelum atau saat pengambilan kendaraan</li>
                    <li>Pembatalan H-1 dikenakan biaya 50% dari DP</li>
                    <li>Pembatalan di hari H tidak ada pengembalian DP</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">5. Asuransi dan Kecelakaan</h2>
                  <p className="text-neutral-300">
                    Semua kendaraan diasuransikan dengan asuransi comprehensive. Dalam hal terjadi kecelakaan:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-400">
                    <li>Segera laporkan ke pihak Sahabat Rentcar dan pihak berwajib</li>
                    <li>Penyewa wajib membantu proses klaim asuransi</li>
                    <li>Biaya yang tidak ditanggung asuransi menjadi tanggung jawab penyewa</li>
                    <li>Own Risk (OR) sesuai dengan ketentuan asuransi</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">6. Keterlambatan Pengembalian</h2>
                  <p className="text-neutral-300">
                    Keterlambatan pengembalian kendaraan akan dikenakan denda sesuai ketentuan:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-400">
                    <li>Toleransi keterlambatan maksimal 2 jam</li>
                    <li>Keterlambatan 2-6 jam dikenakan denda 25% dari tarif harian</li>
                    <li>Keterlambatan lebih dari 6 jam dikenakan tarif penuh 1 hari</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">7. Perubahan Ketentuan</h2>
                  <p className="text-neutral-300">
                    Sahabat Rentcar Nusa berhak mengubah syarat dan ketentuan ini sewaktu-waktu. Perubahan akan berlaku
                    sejak dipublikasikan di website ini.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">8. Hubungi Kami</h2>
                  <p className="text-neutral-300">
                    Jika ada pertanyaan mengenai syarat dan ketentuan ini, silakan hubungi kami di:
                  </p>
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
