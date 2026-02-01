// import {
//   FaMapMarkerAlt,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaClock,
//   FaFacebookF,
//   FaLinkedinIn,
//   FaInstagram,
//   FaTwitter,
//   FaArrowUp,
// } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-gray-300 pt-16">

//       {/* Main Footer */}
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

//         {/* Address */}
//         <div className="flex gap-4">
//           <FaMapMarkerAlt className="text-green-400 text-2xl mt-1" />

//           <div>
//             <h4 className="text-white font-semibold mb-2">
//               Address
//             </h4>

//             <p>A108 Adam Street</p>
//             <p>New York, NY 535022</p>
//           </div>
//         </div>

//         {/* Contact */}
//         <div className="flex gap-4">
//           <FaPhoneAlt className="text-green-400 text-2xl mt-1" />

//           <div>
//             <h4 className="text-white font-semibold mb-2">
//               Contact
//             </h4>

//             <p>
//               Phone: +1 5589 55488 55
//             </p>

//             <p>
//               Email: info@example.com
//             </p>
//           </div>
//         </div>

//         {/* Opening Hours */}
//         <div className="flex gap-4">
//           <FaClock className="text-green-400 text-2xl mt-1" />

//           <div>
//             <h4 className="text-white font-semibold mb-2">
//               Opening Hours
//             </h4>

//             <p>Mon-Sat: 11AM - 11PM</p>
//             <p>Sunday: Closed</p>
//           </div>
//         </div>

//         {/* Social */}
//         <div>
//           <h4 className="text-white font-semibold mb-3">
//             Follow Us
//           </h4>

//           <div className="flex gap-4 text-xl">

//             <a href="#" className="hover:text-green-400">
//               <FaTwitter />
//             </a>

//             <a href="#" className="hover:text-green-400">
//               <FaFacebookF />
//             </a>

//             <a href="#" className="hover:text-green-400">
//               <FaInstagram />
//             </a>

//             <a href="#" className="hover:text-green-400">
//               <FaLinkedinIn />
//             </a>

//           </div>
//         </div>

//       </div>

//       {/* Bottom */}
//       <div className="border-t border-gray-700 mt-12 py-6 text-center text-sm">

//         <p>
//           © {new Date().getFullYear()}{" "}
//           <span className="font-semibold text-white">
//             CLS Security
//           </span>{" "}
//           — All Rights Reserved
//         </p>

//         <p className="mt-1 text-gray-400">
//           Designed by BootstrapMade
//         </p>

//       </div>

//       {/* Scroll To Top */}
//       <ScrollTop />

//     </footer>
//   );
// }

// /* ================= Scroll Top ================= */

// function ScrollTop() {
//   const scrollTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <button
//       onClick={scrollTop}
//       className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
//     >
//       <FaArrowUp />
//     </button>
//   );
// }

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Address */}
        <div className="flex gap-4">
          <FaMapMarkerAlt className="text-green-500 text-xl mt-1" />

          <div>
            <h4 className="text-white font-semibold mb-2">Address</h4>
            <p>A108 Adam Street</p>
            <p>New York, NY 535022</p>
          </div>
        </div>

        {/* Contact */}
        <div className="flex gap-4">
          <FaPhoneAlt className="text-green-500 text-xl mt-1" />

          <div>
            <h4 className="text-white font-semibold mb-2">Contact</h4>

            <p>
              Phone: <span className="text-white">+1 5589 55488 55</span>
            </p>

            <p>
              Email: <span className="text-white">info@example.com</span>
            </p>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="flex gap-4">
          <FaClock className="text-green-500 text-xl mt-1" />

          <div>
            <h4 className="text-white font-semibold mb-2">Opening Hours</h4>

            <p>Mon - Sat: 11AM - 11PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-white font-semibold mb-4">Follow Us</h4>

          <div className="flex gap-4">
            <a href="#" className="social-icon">
              <FaFacebookF />
            </a>

            <a href="#" className="social-icon">
              <FaTwitter />
            </a>

            <a href="#" className="social-icon">
              <FaInstagram />
            </a>

            <a href="#" className="social-icon">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 py-6 text-center text-sm">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">CLS Security</span> All
          Rights Reserved
        </p>

        <p className="mt-1 text-gray-400">Designed by You 😎</p>
      </div>
    </footer>
  );
}
