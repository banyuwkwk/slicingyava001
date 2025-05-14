import Head from "next/head";
import Image from "next/image";

const Page3Sect = () => {
  return (
    <>
      <Head>
        <title>YAVA Bali</title>
        <meta name="description" content="Nourishing you the YAVA way" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section - Full Width */}
      <section className="bg-white py-16 w-full">
        <div className="text-center px-6">
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            NOURISHING YOU <br />
            <span className="text-yellow-500">THE YAVA WAY</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            All YAVA foods use Palm Sugar and ingredients like whole oats and cashews,
            working together to create low-GI recipes for stable blood sugar levels.
          </p>
        </div>
      </section>

      {/* Bar Charts (as GIFs) - Full Width Background */}
      <div className="bg-white w-full py-12 px-6">
        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-6xl mx-auto">

          {/* Chart 1 - Regular Cereal */}
          <div className="bg-white p-6 rounded shadow-md w-full md:w-1/2">
            <h2 className="text-xl font-bold mb-6 text-yellow-500">"REGULAR SUGAR" CEREAL</h2>
            <Image
              src="/images/cereal.gif"
              alt='"Regular Sugar" Cereal Chart'
              width={500}
              height={300}
              className="w-full"
            />
          </div>

          {/* Chart 2 - YAVA Granola */}
          <div className="bg-white p-6 rounded shadow-md w-full md:w-1/2">
            <h2 className="text-xl font-bold mb-6 text-yellow-500">YAVA GRANOLA INGREDIENTS</h2>
            <Image
              src="/images/granola.gif"
              alt='YAVA Granola Ingredients Chart'
              width={500}
              height={300}
              className="w-full"
            />
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-gray-600 max-w-6xl mx-auto">
          <p className="text-sm">
            Even a 10-point difference on the GI scale significantly impacts your body.
          </p>
        </div>
      </div>
    </>
  );
};

export default Page3Sect;