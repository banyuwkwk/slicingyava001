'use client';

import Image from 'next/image';

const PageSect =() => {
  return ( 
  <main className="min-h-screen bg-amber-50 p-6 flex items-center justify-center"> 
<div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center"> 
  {/* Gambar grafik */} 
  <div className="bg-white shadow-lg rounded-2xl p-4"> 
    <img src="/images/glikemik.gif" alt="Grafik"
    
    width={600} height={400} className="rounded-xl w-full h-auto" /> 
    </div>

{/* Teks Penjelasan */}
    <div className="text-left space-y-4">
      <h1 className="text-4xl font-extrabold text-red-800">STABLE ENERGY</h1>
      <h2 className="text-3xl font-bold text-orange-500">BETTER CHOICE</h2>
      <p className="text-gray-700">
        Not all sugars affect your body the same way! High-GI foods cause blood sugar to spike quickly—like a roller coaster—leading to an energy crash and hunger soon after.
      </p>
      <p className="text-gray-700">
        But with low-GI foods like lontar sugar, blood sugar rises gradually and stays stable, giving you longer-lasting energy without sudden crashes.
      </p>
      <p className="text-gray-700">
        Choosing low-GI foods helps maintain steady energy levels and overall well-being.
      </p>
    </div>
  </div>
</main>

); }

export default PageSect;