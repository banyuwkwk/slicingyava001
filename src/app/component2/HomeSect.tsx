'use client';

import Image from 'next/image';

const HomeSect =() => {
  return (
    <div className="bg-[#fff5e5] min-h-screen font-sans">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4 px-8">
        Home / <span className="text-gray-700">Lontar Sugar</span>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-start justify-center gap-10 px-8">
        {/* Text kiri */}
        <div className="lg:w-1/2 pt-[130px] max-w-md text-[#3c130c]">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-[#3c130c]">LONTAR </span>
            <span className="text-[#f04426]">SUGAR</span>
          </h1>
          <p>
            Lontar sugar, derived from the nectar of lontar palms, boasts a low glycemic index, aiding in stabilizing blood sugar levels.
            Rich in essential minerals like potassium and calcium, it supports overall health. By choosing lontar sugar, you're embracing
            a natural sweetener that aligns with a balanced lifestyle. #SmileAllDay
          </p>
        </div>

        {/* Gambar kanan */}
        <div className="lg:w-1/2">
          <Image
            src="/images/gmb.png"
            alt="Lontar Sugar Visual"
            width={350}
            height={350}
            className="mx-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default HomeSect;