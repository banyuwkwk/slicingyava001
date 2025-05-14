import Image from "next/image";
import React from "react";


const diseases = [
  { img: "/images/Obesitas.png", title: "Obesity" },
  { img: "/images/Diabetes2.png", title: "Type 2\nDiabetes" },
  { img: "/images/Diabetes.png", title: "Gestational\nDiabetes" },
  { img: "/images/Metabolic.png", title: "Metabolic\nSyndrome" },
  { img: "/images/PCOS.png", title: "PCOS (Polycystic\nOvary Syndrome)" },
  { img: "/images/Jantung.png", title: "Heart Disease\n& Stroke" },
];

const Page2Sect = () => {
  return (
    <div className="min-h-screen bg-[#fff8f0] py-16 px-4 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-[#4b0000]">
        STABLE BLOOD SUGAR
      </h1>
      <h2 className="text-3xl md:text-4xl font-bold text-[#f94144] mt-2">
        HEALTHIER LIFE
      </h2>
      <p className="mt-6 max-w-3xl mx-auto text-[#333]">
        Research shows that a diet that supports stable blood sugar levels (Low
        Glycemic Index) reduces the incidence of diet-related diseases,
        including:
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
        {diseases.map((disease, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 relative mb-3">
              <Image
                src={disease.img}
                alt={disease.title}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="text-sm font-semibold whitespace-pre-line text-[#333]">
              {disease.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page2Sect;
