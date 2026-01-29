import teamImg from "../../assets/img/CLS_Team.webp";
import { FaPhoneAlt } from "react-icons/fa";

export default function CompanyPortfolio() {
  return (
    <section id="companygroup" className="py-20 bg-white">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Our Company
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Outer Box */}
        <div className="relative bg-gray-100 rounded-xl p-10 md:p-14 overflow-hidden">
          {/* Border Effect */}
          <div className="absolute inset-0 border border-purple-400 rounded-xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
            {/* LEFT TEXT */}
            <div className="z-10">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Brauchen Sie Hilfe? Kein Problem
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed max-w-lg">
                Unsere ausgebildeten Verkaufsberater helfen Ihnen dabei, die
                richtige Lösung für Ihre Bedürfnisse zu schaffen.
              </p>

              <div className="flex items-center gap-3 text-xl font-semibold text-black">
                <FaPhoneAlt />
                <a href="tel:+496217163591" className="hover:underline">
                  0621-71-63-591
                </a>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative z-10 flex justify-center lg:justify-end">
              <img
                src={teamImg}
                alt="CLS Team"
                className="max-w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// import teamImg from "../../assets/img/CLS_Team.webp";

// export default function CompanyPortfolio() {
//   return (
//     <section id="companygroup" className="py-24 bg-white">
//       {/* Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-semibold text-gray-800">Our Company</h2>
//       </div>

//       <div className="max-w-7xl mx-auto px-6">
//         {/* Wrapper */}
//         <div className="company-frame-wrap">
//           {/* Purple Border */}
//           <div className="company-frame"></div>

//           {/* Gray Box */}
//           <div className="relative bg-gray-50 rounded-xl py-14 px-12 z-10">
//             <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
//               {/* LEFT */}
//               <div>
//                 <h3 className="text-2xl md:text-3xl font-semibold mb-4">
//                   Brauchen Sie Hilfe? Kein Problem
//                 </h3>

//                 <p className="text-gray-600 mb-6 leading-relaxed max-w-xl">
//                   Unsere ausgebildeten Verkaufsberater helfen Ihnen dabei, die
//                   richtige Lösung für Ihre Bedürfnisse zu schaffen.
//                 </p>

//                 <div className="flex items-center gap-3 text-xl font-medium">
//                   <span className="icon-phone"></span>

//                   <a href="tel:+496217163591" className="hover:underline">
//                     0621-71-63-591
//                   </a>
//                 </div>
//               </div>

//               {/* RIGHT */}
//               <div className="flex justify-center lg:justify-end">
//                 <img
//                   src={teamImg}
//                   alt="CLS Team"
//                   className="max-w-full h-auto"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
