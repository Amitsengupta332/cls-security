// import { useState } from "react";
// import logo from "../../assets/img/CLS-SECURITY-NEW-LOGO-2024.png";

// // React Icons
// import {
//   FaPhoneAlt,
//   FaFacebookF,
//   FaLinkedinIn,
//   FaSearch,
//   FaUser,
//   FaShoppingCart,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";

// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   return (
//     <header className="fixed top-0 w-full z-50 bg-white shadow">
//       {/* ================= TOPBAR ================= */}
//       <div className="bg-gray-900 text-white text-sm">
//         <div className="container mx-auto px-4 py-2 flex items-center justify-between">
//           {/* Phone */}
//           <div className="flex items-center gap-2">
//             <FaPhoneAlt />
//             <span>+0621 7163591</span>
//           </div>

//           {/* Social */}
//           <div className="hidden md:flex gap-4">
//             <FaFacebookF className="cursor-pointer hover:text-blue-400" />
//             <FaLinkedinIn className="cursor-pointer hover:text-blue-400" />
//           </div>

//           {/* Buttons */}
//           <div className="flex gap-3">
//             <button className="border px-4 py-1 rounded hover:bg-white hover:text-black">
//               B2B
//             </button>

//             <button className="border px-4 py-1 rounded hover:bg-white hover:text-black">
//               Get A Quote
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* ================= MAIN NAV ================= */}
//       <nav  >
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between py-4">
//             {/* Logo */}
//             <img
//               src={logo}
//               alt="CLS Security"
//               className="h-10 max-w-[160px] object-contain"
//             />

//             {/* Desktop Menu (Center) */}
//           <ul className="hidden md:flex flex-1 justify-center gap-8 font-medium">
//               {[
//                 "Engineering",
//                 "Consulting",
//                 "Industries",
//                 "Clients",
//                 "Insights",
//                 "Approach",
//                 "About us",
//               ].map((item) => (
//                 <li key={item}>
//                   <a href="#" className="hover:text-blue-600 transition">
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>

//             {/* Right Icons + Mobile Btn */}
//             <div className="flex items-center gap-4 text-xl">
//               <FaSearch className="cursor-pointer hover:text-blue-600" />
//               <FaUser className="cursor-pointer hover:text-blue-600" />
//               <FaShoppingCart className="cursor-pointer hover:text-blue-600" />

//               {/* Mobile Button */}
//               <button
//                 onClick={() => setMobileOpen(!mobileOpen)}
//                 className="md:hidden text-2xl">
//                 {mobileOpen ? <FaTimes /> : <FaBars />}
//               </button>
//             </div>
//           </div>

//           {/* ================= MOBILE MENU ================= */}
//           {mobileOpen && (
//             <div className="md:hidden border-t bg-white">
//               <ul className="flex flex-col text-center py-4 space-y-3 font-medium">
//                 {[
//                   "Engineering",
//                   "Consulting",
//                   "Industries",
//                   "Clients",
//                   "Insights",
//                   "Approach",
//                   "About us",
//                 ].map((item) => (
//                   <li key={item}>
//                     <a
//                       href="#"
//                       className="block py-2 hover:bg-gray-100"
//                       onClick={() => setMobileOpen(false)}>
//                       {item}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// }


import { useState, useEffect } from "react";
import logo from "../../assets/img/CLS-SECURITY-NEW-LOGO-2024.png";

// React Icons
import {
  FaPhoneAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow text-black" : "bg-transparent text-white"
      }`}
    >
      {/* ================= TOPBAR ================= */}
      <div
        className={`text-sm transition ${
          scrolled ? "bg-gray-900 text-white" : "bg-black/40 backdrop-blur"
        }`}
      >
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">

          {/* Phone */}
          <div className="flex items-center gap-2">
            <FaPhoneAlt />
            <span>+0621 7163591</span>
          </div>

          {/* Social */}
          <div className="hidden md:flex gap-4">
            <FaFacebookF className="cursor-pointer hover:text-green-400" />
            <FaLinkedinIn className="cursor-pointer hover:text-green-400" />
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button className="border px-4 py-1 rounded hover:bg-white hover:text-black transition">
              B2B
            </button>

            <button className="border px-4 py-1 rounded hover:bg-white hover:text-black transition">
              Get A Quote
            </button>
          </div>

        </div>
      </div>

      {/* ================= MAIN NAV ================= */}
      <nav>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">

            {/* Logo */}
            <img
              src={logo}
              alt="CLS Security"
              className="h-10 max-w-[160px] object-contain"
            />

            {/* Desktop Menu */}
            <ul
              className={`hidden md:flex flex-1 justify-center gap-8 font-medium transition ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              {[
                "Engineering",
                "Consulting",
                "Industries",
                "Clients",
                "Insights",
                "Approach",
                "About us",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-green-400 transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Right Icons */}
            <div
              className={`flex items-center gap-4 text-xl transition ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              <FaSearch className="cursor-pointer hover:text-green-400" />
              <FaUser className="cursor-pointer hover:text-green-400" />
              <FaShoppingCart className="cursor-pointer hover:text-green-400" />

              {/* Mobile Btn */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden text-2xl"
              >
                {mobileOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>

          </div>

          {/* ================= MOBILE MENU ================= */}
          {mobileOpen && (
            <div className="md:hidden border-t bg-white">
              <ul className="flex flex-col text-center py-4 space-y-3 font-medium text-black">

                {[
                  "Engineering",
                  "Consulting",
                  "Industries",
                  "Clients",
                  "Insights",
                  "Approach",
                  "About us",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="block py-2 hover:bg-gray-100"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                ))}

              </ul>
            </div>
          )}

        </div>
      </nav>
    </header>
  );
}
