"use client";

import Image from "next/image";

const Footer = () => {
  const storeIcons = ["Blibli", "Lazada (1)", "Shopee", "Tiktok (1)", "Tokopedia (1)"];

  return (
    <footer
      className="bg-[#FFF6EF] text-black pt-12"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Konten Utama */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-12">
        {/* Info Perusahaan (Kiri) */}
        <div>
          <Image
            src="/footerdown/Logo - Original.png"
            alt="YAVA Logo"
            width={128}
            height={40}
            className="w-32 mb-4"
          />
          <p className="font-semibold text-base">PT EAST INDO FAIR TRADING</p>
          <p className="text-sm">
            Jl. Padang Galak No.20 A, Kesiman Petilan – Denpasar, 80237, Indonesia
          </p>
          <p className="text-sm">Phone: (+62) 0361-4721486</p>
          <p className="text-sm">Email: info@yavabali.com</p>
          <div className="flex gap-3 mt-4">
            <Image
              src="/footerdown/instagram.png"
              alt="Instagram"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <Image
              src="/footerdown/facebook.png"
              alt="Facebook"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <Image
              src="/footerdown/youtube.png"
              alt="YouTube"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </div>
        </div>

        {/* Navigation & Meet Us (Bersebelahan - Kanan) */}
        <div className="md:col-span-2 flex flex-col sm:flex-row justify-between gap-8">
          {/* Navigation (Di Kiri) */}
          <div className="w-full sm:w-1/2">
            <h3 className="font-semibold mb-2 text-base">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-orange-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Lontar Sugar
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Ingredients
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Company
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  YAVAKataMereka
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  News & Event
                </a>
              </li>
            </ul>
          </div>

          {/* Meet Us (Di Kanan) */}
          <div className="w-full sm:w-1/2">
            <h3 className="font-semibold mb-2 text-base">Meet Us</h3>
            <div className="flex flex-col gap-4">
              {storeIcons.map((store) => (
                <div key={store} className="relative w-[50px] h-[40px]">
                  <Image
                    src={`/footerimage/${store}.png`}
                    alt={store}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bawah */}
      <div
        className="bg-orange-500 text-white text-center py-3 text-sm"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        © 2025 Yava. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;