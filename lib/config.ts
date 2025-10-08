export const siteConfig = {
  name: "Sahabat Rentcar Nusa",
  url: "https://sahabatrentcar.com",
  description:
    "Sewa mobil mudah dan terpercaya di seluruh Nusantara. Pilihan lengkap dari Avanza, Innova, Xenia hingga Pajero dengan harga terjangkau dan pelayanan terbaik.",
  whatsappNumber: "6281234567890",
  links: {
    twitter: "https://twitter.com/sahabatrentcar",
    youtube: "https://www.youtube.com/@sahabatrentcar",
    instagram: "https://instagram.com/sahabatrentcar",
    threads: "https://threads.com/sahabatrentcar",
  },
};

export type SiteConfig = typeof siteConfig;

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}
