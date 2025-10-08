"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X, Phone, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { getWhatsAppUrl, siteConfig } from "@/lib/config";

export function WhatsAppCTA() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the button after a delay to avoid layout shift
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  const defaultMessage = `Halo ${siteConfig.name}! Saya ingin bertanya tentang rental mobil.`;

  const quickMessages = [
    {
      icon: <Phone className="w-4 h-4" />,
      title: "Tanya Harga",
      message: "Halo! Saya ingin mengetahui harga rental mobil untuk:",
    },
    {
      icon: <Clock className="w-4 h-4" />,
      title: "Cek Ketersediaan",
      message: "Halo! Saya ingin mengecek ketersediaan mobil untuk tanggal:",
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      title: "Info Lokasi",
      message:
        "Halo! Saya ingin tahu lokasi pickup dan info lengkap rental mobil.",
    },
  ];

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Chat Popup */}
          {isOpen && (
            <div className="absolute bottom-16 right-0 w-80 liquid-glass rounded-2xl p-4 shadow-2xl animate-in slide-in-from-bottom-2 duration-300">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Image
                      src="/icons/skitbit-white.svg"
                      alt="Sahabat Rentcar Nusa"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      {siteConfig.name}
                    </h3>
                    <p className="text-xs text-green-400">Online sekarang</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* Welcome Message */}
              <div className="mb-4 p-3 bg-gray-800/50 rounded-lg">
                <p className="text-sm text-gray-300">
                  Halo! 👋 Selamat datang di {siteConfig.name}. Ada yang bisa
                  kami bantu?
                </p>
              </div>

              {/* Quick Actions */}
              <div className="space-y-2">
                {quickMessages.map((item, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start text-left h-auto p-3 border-gray-600 hover:bg-gray-800 bg-transparent"
                    onClick={() => {
                      const url = getWhatsAppUrl(item.message);
                      window.open(url, "_blank");
                      setIsOpen(false);
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-lime-400">{item.icon}</div>
                      <div>
                        <div className="font-medium text-white text-sm">
                          {item.title}
                        </div>
                        <div className="text-xs text-gray-400 truncate">
                          {item.message}
                        </div>
                      </div>
                    </div>
                  </Button>
                ))}
              </div>

              {/* Direct Chat Button */}
              <Button
                className="w-full mt-3 bg-green-600 hover:bg-green-700 text-white"
                onClick={() => {
                  const url = getWhatsAppUrl(defaultMessage);
                  window.open(url, "_blank");
                  setIsOpen(false);
                }}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Mulai Chat
              </Button>
            </div>
          )}

          {/* Main Button */}
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <MessageCircle className="w-6 h-6 text-white" />
            )}
          </Button>

          {/* Notification Badge */}
          {!isOpen && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-xs text-white font-bold">1</span>
            </div>
          )}
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
