import Image from "next/image";
import Link from "next/link";

const StoreFooter = () => {
  return (
    <footer className="bg-white py-10 mt-[-40px] sm:mt-[-60px] md:mt-[-80px] relative z-10" style={{ backgroundColor: "#FDF5E6" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h2 className="text-xl font-medium text-gray-800 self-start">
            Available in Your Favorite Stores
          </h2>

          <div className="flex flex-wrap justify-center md:justify-end gap-12">
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <Image
                src="/footerimage/Blibli.png"
                alt="Blibli"
                width={100}
                height={40}
                className="object-contain"
              />
            </Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <Image
                src="/footerimage/Lazada (1).png"
                alt="Lazada"
                width={100}
                height={40}
                className="object-contain"
              />
            </Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <Image
                src="/footerimage/Shopee.png"
                alt="Shopee"
                width={100}
                height={40}
                className="object-contain"
              />
            </Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <Image
                src="/footerimage/Tiktok (1).png"
                alt="TikTok Shop"
                width={100}
                height={40}
                className="object-contain"
              />
            </Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <Image
                src="/footerimage/Tokopedia.png"
                alt="Tokopedia"
                width={100}
                height={40}
                className="object-contain"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default StoreFooter;