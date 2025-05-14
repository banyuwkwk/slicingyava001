import React from "react";
import Image from "next/image";
import Head from "next/head";

const Footer = () => {
  const storeIcons = ["blibli", "lazada", "shopee", "tiktokshop", "tokopedia"];

  return (
    <>
      <Head>
        {/* Load Poppins font with weights 400, 500, 600, 700 */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins :wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Define custom font WildWords */}
        <style jsx>{`
          @font-face {
            font-family: 'WildWords';
            src: url('/fonts/WildWordsLowerBold.ttf') format('truetype');
            font-weight: bold;
          }
          @font-face {
            font-family: 'WildWords';
            src: url('/fonts/WildWordsLowerSemibold.ttf') format('truetype');
            font-weight: 600;
          }
          @font-face {
            font-family: 'WildWords';
            src: url('/fonts/WildWordsLowerMedium.ttf') format('truetype');
            font-weight: 500;
          }
          @font-face {
            font-family: 'WildWords';
            src: url('/fonts/WildWordsLowerRegular.ttf') format('truetype');
            font-weight: normal;
          }

          body {
            font-family: 'Poppins', sans-serif;
          }
        `}</style>
      </Head>

      <footer className="bg-[#FFF6EF] text-black pt-12">
        {/* Informasi & Navigasi */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-12">
          {/* Info Perusahaan */}
          <div>
            <img src="/images/logo-yava.png" alt="YAVA" className="w-40 mb-4" />
            <p className="font-semibold text-lg">PT EAST INDO FAIR TRADING</p>
            <p className="text-sm">Jl. Padang Galak No.20 A, Kesiman Petilan – Denpasar, 80237, Indonesia</p>
            <p className="text-sm">Phone: (+62) 0361-4721486</p>
            <p className="text-sm">Email: info@yavabali.com</p>
            <div className="flex gap-3 mt-4">
              <img src="/images/instagram.png" alt="Instagram" className="w-8 h-8" />
              <img src="/images/facebook.png" alt="Facebook" className="w-8 h-8" />
              <img src="/images/youtube.png" alt="YouTube" className="w-8 h-8" />
            </div>
          </div>

          {/* Navigasi Link */}
          <div>
            <h3 className="font-semibold mb-2 text-lg">Navigation</h3>
            <ul className="space-y-1 text-sm">
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

          {/* Meet Us - Toko */}
          <div>
            <h3 className="font-semibold mb-2 text-lg">Meet Us</h3>
            <div className="flex flex-col gap-3">
              {storeIcons.map((store) => (
                <div key={store} className="relative w-[100px] h-[70px]">
                  <Image
                    src={`/images/${store}.png`}
                    alt={store}
                    fill
                    className="object-contain"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              ))}
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
    </>
  );
};

export default Footer;