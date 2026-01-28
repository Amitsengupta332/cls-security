import { useState, useEffect } from "react";
import logo from "../../assets/img/CLS-SECURITY-NEW-LOGO-2024.png";

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

  // Scroll detect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div >
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300
      ${scrolled ? "bg-black shadow-lg" : "bg-transparent"}`}>
        {/* ================= TOPBAR ================= */}
        <div
          className={`text-white text-sm transition-all duration-300
        ${scrolled ? "bg-black" : "bg-transparent"}`}>
          <div className="container mx-auto  px-28 py-2 flex items-center justify-between">
            {/* Phone */}
            <div className="flex items-center gap-2">
              <FaPhoneAlt size={13} />
              <span>+0621 7163591</span>
            </div>

            {/* Social */}
            <div className="hidden md:flex gap-4">
              <FaFacebookF className="cursor-pointer hover:text-green-400" />
              <FaLinkedinIn className="cursor-pointer hover:text-green-400" />
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button className="border border-white/60 px-3 py-1 rounded text-xs hover:bg-white hover:text-black transition">
                B2B
              </button>

              <button className="border border-white/60 px-3 py-1 rounded text-xs hover:bg-white hover:text-black transition">
                Get Quote
              </button>
            </div>
          </div>
        </div>

        {/* ================= MAIN NAV ================= */}
        <nav>
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between py-4 text-white">
              {/* Logo */}
              <img
                src={logo}
                alt="CLS Security"
                className="h-9 object-contain"
              />

              {/* Desktop Menu */}
              <ul className="hidden md:flex flex-1 justify-center gap-7 text-sm font-medium">
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
                    <a href="#" className="hover:text-green-400 transition">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Icons */}
              <div className="flex items-center gap-4 text-lg">
                <FaSearch className="cursor-pointer hover:text-green-400" />
                <FaUser className="cursor-pointer hover:text-green-400" />
                <FaShoppingCart className="cursor-pointer hover:text-green-400" />

                {/* Mobile */}
                <button
                  onClick={() => setMobileOpen(!mobileOpen)}
                  className="md:hidden text-xl">
                  {mobileOpen ? <FaTimes /> : <FaBars />}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
              <div className="md:hidden bg-black text-white border-t border-white/20">
                <ul className="flex flex-col text-center py-4 space-y-3 text-sm">
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
                        className="block py-2 hover:bg-white/10"
                        onClick={() => setMobileOpen(false)}>
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
    </div>
  );
}
