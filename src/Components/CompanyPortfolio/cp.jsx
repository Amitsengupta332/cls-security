// import teamImg from "../../assets/img/CLS_Team.webp";
// import { FaPhoneAlt } from "react-icons/fa";

// export default function CompanyPortfolio() {
//   return (
//     <section id="companygroup" className="py-20 bg-white">
//       {/* Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-3xl md:text-4xl font-semibold text-[#433f39]">
//           Our Company
//         </h2>
//       </div>

//       <div className="max-w-7xl mx-auto px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
//           {/* LEFT (IMPORTANT) */}
//           <div className="companyContactText relative">
//             {/* PURPLE DRAW (HERE ONLY) */}
//             <div className="draw draw_color-left draw_f-left draw_purple-no-opacity active"></div>

//             <div className="groupContactnum">
//               <h4 className="text-2xl font-semibold mb-4">
//                 Brauchen Sie Hilfe? Kein Problem
//               </h4>

//               <p className="text-gray-700 mb-6 leading-relaxed">
//                 Unsere ausgebildeten Verkaufsberater helfen Ihnen dabei, die
//                 richtige Lösung für Ihre Bedürfnisse zu schaffen.
//               </p>

//               <a
//                 href="tel:+496217163591"
//                 className="flex items-center gap-3 text-2xl font-semibold text-black">
//                 <FaPhoneAlt />
//                 0621-71-63-591
//               </a>
//             </div>
//           </div>

//           {/* RIGHT */}
//           <div className="companyGroupPhoto group-card-item flex justify-center lg:justify-end">
//             <img
//               src={teamImg}
//               alt="CLS Team"
//               className="max-w-full h-auto object-contain"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





import teamImg from "../../assets/img/CLS_Team.webp";
import { FaPhoneAlt } from "react-icons/fa";

export default function CompanyPortfolio() {
  return (
    <section id="companygroup" className="py-14 md:py-20 bg-white">
      {/* Title */}
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#433f39]">
          Our Company
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0">
          {/* LEFT */}
          <div className="companyContactText relative">
            {/* PURPLE DRAW */}
            <div className="draw draw_color-left draw_f-left draw_purple-no-opacity active" />

            <div className="groupContactnum">
              <h4 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
                Brauchen Sie Hilfe? Kein Problem
              </h4>

              <p className="text-gray-700 mb-5 md:mb-6 leading-relaxed">
                Unsere ausgebildeten Verkaufsberater helfen Ihnen dabei,
                die richtige Lösung für Ihre Bedürfnisse zu schaffen.
              </p>

              <a
                href="tel:+496217163591"
                className="flex items-center gap-3 text-lg md:text-2xl font-semibold text-black break-words"
              >
                <FaPhoneAlt />
                0621-71-63-591
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="companyGroupPhoto group-card-item flex justify-center lg:justify-end">
            <img
              src={teamImg}
              alt="CLS Team"
              className="w-full max-w-md lg:max-w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}



import teamImg from "../../assets/img/CLS_Team.webp";
import { FaPhoneAlt } from "react-icons/fa";
import "./CompanyPortfolio.css";

export default function CompanyPortfolio() {
  return (
    <section id="companygroup" className="py-20 bg-white">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-semibold text-[#433f39]">Our Company</h2>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="relative">
          {/* ✅ ONE draw around BOTH cards */}
          <div className="draw draw_color-left draw_f-left draw_purple-no-opacity active" />

          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch relative z-10">
            {/* LEFT */}
            <div className="companyContactText">
              <div className="groupContactnum">
                <h4 className="text-2xl font-semibold mb-4">
                  Brauchen Sie Hilfe? Kein Problem
                </h4>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Unsere ausgebildeten Verkaufsberater helfen Ihnen dabei, die
                  richtige Lösung für Ihre Bedürfnisse zu schaffen.
                </p>

                <a href="tel:+496217163591">
                  <FaPhoneAlt className="mr-3" />
                  0621-71-63-591
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <div className="companyGroupPhoto group-card-item flex justify-center">
              <img src={teamImg} alt="CLS Team" />
            </div>
          </div>
        </div>

        {/* <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
 
          <div className="companyContactText relative">
            <div className="draw draw_color-left draw_f-left draw_purple-no-opacity active" />

            <div className="groupContactnum">
              <h4 className="text-2xl font-semibold mb-4">
                Brauchen Sie Hilfe? Kein Problem
              </h4>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Unsere ausgebildeten Verkaufsberater helfen Ihnen dabei, die
                richtige Lösung für Ihre Bedürfnisse zu schaffen.
              </p>

              <a href="tel:+496217163591">
                <FaPhoneAlt className="mr-3" />
                0621-71-63-591
              </a>
            </div>
          </div>

    
          <div className="companyGroupPhoto group-card-item flex justify-center">
            <img src={teamImg} alt="CLS Team" />
          </div>
        </div> */}
      </div>
    </section>
  );
}
