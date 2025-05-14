import Head from "next/head";
import Image from "next/image";

const Page5Sect = () => {
  return (
    <>
      <Head>
        <title>YAVA Bali - Lontar Sugar Benefits</title>
        <meta name="description" content="Learn about the benefits of Lontar Sugar." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main Content */}
      <main className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-12">

          {/* Section 1: GulaRamah™ */}
          <section className="mb-16">
            <h1 className="text-4xl font-bold mb-4 leading-tight text-center text-gray-800">
              WHAT IS <br />
              <span className="text-orange-500">GULARAMAH?™</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              GulaRamah™ is a type of sugar that helps maintain stable blood sugar levels, is made from natural ingredients, and tastes delicious! One example is Lontar Sugar (Gula Lontar), which belongs to the category of body-friendly sugars.
            </p>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
              {/* Column 1: To qualify as GulaRamah™ */}
              <div>
                <h2 className="text-xl font-bold mb-4 border-b-2 border-gray-700 pb-2">
                  To qualify as GulaRamah™
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Have a low glycemic index</li>
                  <li>Come from natural sources, not factory-made substitutes</li>
                  <li>Be free from sugar alcohols</li>
                  <li>Be vegan and taste great</li>
                </ul>
              </div>

              {/* Column 2: Examples of GulaRamah™ */}
              <div>
                <h2 className="text-xl font-bold mb-4 border-b-2 border-gray-700 pb-2">
                  Examples of GulaRamah™
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Coconut sugar, palm sugar, and other palm-based sugars</li>
                  <li>Date sugar</li>
                  <li>Maple syrup</li>
                  <li>Lontar sugar (Gula Lontar) from the Palmyra tree</li>
                </ul>
              </div>

              {/* Column 3: Sugars that are NOT GulaRamah™ */}
              <div>
                <h2 className="text-xl font-bold mb-4 border-b-2 border-gray-700 pb-2">
                  Sugars that are NOT GulaRamah™
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>White and brown sugar</li>
                  <li>Corn syrup</li>
                  <li>Sugar alcohols</li>
                  <li>Artificial sweeteners</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2: Lontar Sugar Nutrient Rich & Low GI */}
          <section className="mb-16">
            <h1 className="text-4xl font-bold mb-4 leading-tight text-center text-gray-800">
              LONTAR SUGAR <br />
              <span className="text-orange-500">NUTRIENT RICH & LOW GI</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl mx-auto mb-10">
              Compared to regular sugar, Lontar sugar is rich in minerals, containing 2.5x more potassium and 50x more calcium than bananas (similar to almonds). It has a lower glycemic index, making it a healthier option for stable blood sugar.
            </p>

            {/* Bar Charts (as GIFs) */}
            <div className="flex flex-col md:flex-row justify-center gap-8">
              {/* Chart 1: Kalium */}
              <div className="bg-white p-4 rounded sa3whadow-md w-full md:w-1/2">
                <Image
                  src="/images/kalium.gif"
                  alt="Kalium Comparison Chart"
                  width={300} // Ukuran lebar yang lebih kecil
                  height={300} // Ukuran tinggi yang lebih kecil
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Chart 2: Kalsium */}
              <div className="bg-white p-4 rounded shadow-md w-full md:w-1/2">
                <Image
                  src="/images/kalsium.gif"
                  alt="Kalsium Comparison Chart"
                  width={300} // Ukuran lebar yang lebih kecil
                  height={300} // Ukuran tinggi yang lebih kecil
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Page5Sect;