import { useEffect, useRef, useState } from "react";
import logo from "../../assets/img/CLS-SECURITY-NEW-LOGO-2024.png";

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiSearch, FiUser, FiShoppingCart, FiX } from "react-icons/fi";
import { HiBars3 } from "react-icons/hi2";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const headerRef = useRef(null);

  /* Scroll BG */
  useEffect(() => {
    const onScroll = () => {
      if (!headerRef.current) return;

      if (window.scrollY > 80) {
        headerRef.current.classList.add("bg-[rgba(21,17,13,0.85)]");
      } else {
        headerRef.current.classList.remove("bg-[rgba(21,17,13,0.85)]");
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ESC Close */
  useEffect(() => {
    const esc = (e) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setSearchOpen(false);
        setActiveMenu(null);
      }
    };

    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  /* Outside click */
  useEffect(() => {
    const click = (e) => {
      if (!headerRef.current?.contains(e.target)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", click);
    return () => document.removeEventListener("mousedown", click);
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-50 text-white transition-all duration-300">
      {/* ================= TOPBAR ================= */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-2 text-sm">
            {/* Phone */}
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#9c0]" />
              <span>+0621 7163591</span>
            </div>

            {/* Social */}
            <div className="flex gap-3 items-center">
              <FaFacebookF className="hover:text-[#9c0] cursor-pointer" />
              <FaLinkedinIn className="hover:text-[#9c0] cursor-pointer" />
              <span className="text-xs font-bold">X</span>
              <span className="text-xs font-bold">IG</span>
            </div>

            {/* Buttons */}
            <div className="flex overflow-hidden skew-x-[-15deg] bg-[#9c0] rounded-sm">
              <a
                href="#"
                className="px-4 py-2 text-xs font-semibold skew-x-[12deg] hover:bg-[#8cbb00]">
                B2B
              </a>

              <div className="w-px bg-white/60 my-2" />

              <a
                href="#contact"
                className="px-4 py-2 text-xs font-semibold skew-x-[12deg] hover:bg-[#8cbb00]">
                GET A QUOTE
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ================= NAV ================= */}
      <nav>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            {/* Mobile */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2">
              {mobileOpen ? <FiX size={22} /> : <HiBars3 size={24} />}
            </button>

            {/* Logo */}
            <img src={logo} className="h-12" alt="CLS" />

            {/* ================= DESKTOP MENU ================= */}
            <ul className="hidden md:flex gap-7 text-[15px] font-medium">
              {/* Engineering */}
              <li
                className="relative"
                onMouseEnter={() => setActiveMenu("eng")}
                onMouseLeave={() => setActiveMenu(null)}>
                <button className="hover:text-[#9c0]">Engineering ▾</button>

                {activeMenu === "eng" && (
                  <div className="absolute left-0 top-full mt-3 w-56 bg-white text-black shadow-lg">
                    {["Page 1", "Page 2", "Page 3", "Page 4"].map((p) => (
                      <a
                        key={p}
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100">
                        {p}
                      </a>
                    ))}
                  </div>
                )}
              </li>

              {/* ================= CONSULTING ================= */}
              {/* <li
                className="relative"
                onMouseEnter={() => setActiveMenu("con")}
                onMouseLeave={() => setActiveMenu(null)}>
                <button className="hover:text-[#9c0]">Consulting ▾</button>

                {activeMenu === "con" && (
                  <div className="absolute left-0 top-full w-screen bg-[#f3f5f9] text-black border-t border-gray-200 shadow-sm">
                    <div className="mx-auto max-w-7xl grid grid-cols-12 gap-6 px-6 py-8">
                      {/* Col 1 */}
              {/* <div className="col-span-3 space-y-3 text-sm">
                        {[
                          "Innovation Consulting",
                          "Product Design",
                          "Technology Enabled",
                          "Technology Enabled",
                          "AI & ML Consulting",
                        ].map((i) => (
                          <a
                            key={i}
                            href="#"
                            className="block hover:text-[#9c0]">
                            {i}
                          </a>
                        ))}
                      </div> */}

              {/* Col 2 */}
              {/* <div className="col-span-3 space-y-3 text-sm">
                        {[
                          "Data-driven Transformation",
                          "CRM Consulting",
                          "CRM Consulting",
                          "CRM Consulting",
                          "Mega menu item",
                        ].map((i) => (
                          <a
                            key={i}
                            href="#"
                            className="block hover:text-[#9c0]">
                            {i}
                          </a>
                        ))}
                      </div> */}

              {/* Quote */}
              {/* <div className="col-span-6 bg-[#edf0f7] skew-x-[-15deg] px-8 py-6">
                        <div className="skew-x-[12deg]">
                          <p className="italic text-sm text-gray-600 leading-relaxed">
                            *instinctools&apos; work has led to a continuously
                            growing and satisfied customer base...
                          </p>

                          <div className="flex items-center gap-4 mt-5">
                            <img
                              src="https://cdn-hokdj.nitrocdn.com/xTVZIceRirelUWcvTeSrIReGRrnfbTIP/assets/images/optimized/rev-7cec5d5/www.instinctools.com/wp-content/uploads/2022/03/lawpilots-logo-size2.png"
                              className="h-8"
                              alt=""
                            />

                            <span className="text-xs text-gray-600">
                              Sebastian Belle, Head of Engineering
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
              {/* )}
              </li> */}

              {/* ================= CONSULTING ================= */}
              <li
                className="relative"
                onMouseEnter={() => setActiveMenu("con")}
                onMouseLeave={() => setActiveMenu(null)}>
                <button className="hover:text-[#9c0]">Consulting ▾</button>
              </li>

              {/* ===== CONSULTING MEGA MENU (OUTSIDE li) ===== */}
              {activeMenu === "con" && (
                <div
                  onMouseEnter={() => setActiveMenu("con")}
                  onMouseLeave={() => setActiveMenu(null)}
                  className="
      absolute left-1/2 top-full
      -translate-x-1/2
      w-screen
      bg-[#f3f5f9] text-black
      shadow-xl z-40
      border-t border-gray-200
    ">
                  {/* centered container */}
                  <div className="mx-auto max-w-[1140px] px-6 py-8">
                    <div className="grid grid-cols-12 gap-6">
                      {/* Col 1 */}
                      <div className="col-span-3 space-y-3 text-sm">
                        {[
                          "Innovation Consulting",
                          "Product Design",
                          "Technology Enabled",
                          "Technology Enabled",
                          "AI & ML Consulting",
                        ].map((i) => (
                          <a key={i} href="#" className="block hover:underline">
                            {i}
                          </a>
                        ))}
                      </div>

                      {/* Col 2 */}
                      <div className="col-span-3 space-y-3 text-sm">
                        {[
                          "Data-driven Transformation",
                          "CRM Consulting",
                          "CRM Consulting",
                          "CRM Consulting",
                          "Mega menu item",
                        ].map((i) => (
                          <a key={i} href="#" className="block hover:underline">
                            {i}
                          </a>
                        ))}
                      </div>

                      {/* Quote */}
                      <div className="col-span-6 bg-[#edf0f7] skew-x-[-15deg] px-8 py-6">
                        <div className="skew-x-[12deg]">
                          <p className="italic text-sm text-gray-600 leading-relaxed">
                            *instinctools&apos; work has led to a continuously
                            growing and satisfied customer base...
                          </p>

                          <div className="flex items-center gap-4 mt-5">
                            <img
                              src="https://cdn-hokdj.nitrocdn.com/xTVZIceRirelUWcvTeSrIReGRrnfbTIP/assets/images/optimized/rev-7cec5d5/www.instinctools.com/wp-content/uploads/2022/03/lawpilots-logo-size2.png"
                              className="h-8"
                              alt=""
                            />

                            <span className="text-xs text-gray-600">
                              Sebastian Belle, Head of Engineering
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* ================= INDUSTRIES ================= */}
              <li
                className="relative"
                onMouseEnter={() => setActiveMenu("ind")}
                onMouseLeave={() => setActiveMenu(null)}>
                <button className="hover:text-[#9c0]">Industries ▾</button>

                {activeMenu === "ind" && (
                  <div
                    onMouseEnter={() => setActiveMenu("ind")}
                    onMouseLeave={() => setActiveMenu(null)}
                    className="
        absolute left-1/2 top-full
        -translate-x-1/2
        w-screen
        bg-[#f3f5f9] text-black
        shadow-xl z-40
        border-t border-gray-200
      ">
                    {/* centered content like Consulting */}
                    <div className="mx-auto max-w-[1140px] px-6 py-8">
                      <div className="grid grid-cols-12 gap-6">
                        {/* Col 1 */}
                        <div className="col-span-3 space-y-3 text-sm">
                          {[
                            "Healthcare",
                            "Healthcare",
                            "Manufacturing",
                            "Logistics",
                            "Automotive",
                            "Entertainment and Media",
                          ].map((i) => (
                            <a
                              key={i}
                              href="#"
                              className="block hover:underline">
                              {i}
                            </a>
                          ))}
                        </div>

                        {/* Col 2 */}
                        <div className="col-span-3 space-y-3 text-sm">
                          {[
                            "Ecommerce",
                            "Ad-Tech",
                            "Cryptocurrency",
                            "Education and E-learning",
                            "Technology",
                          ].map((i) => (
                            <a
                              key={i}
                              href="#"
                              className="block hover:underline">
                              {i}
                            </a>
                          ))}
                        </div>

                        {/* Quote */}
                        <div className="col-span-6 bg-[#edf0f7] skew-x-[-15deg] px-8 py-6">
                          <div className="skew-x-[12deg]">
                            <p className="italic text-sm text-gray-600 leading-relaxed">
                              * The team is dependable when it comes to managing
                              time and finances...
                            </p>

                            <div className="flex items-center gap-4 mt-5">
                              <img
                                src="https://cdn-hokdj.nitrocdn.com/xTVZIceRirelUWcvTeSrIReGRrnfbTIP/assets/images/optimized/rev-7cec5d5/www.instinctools.com/wp-content/uploads/2022/03/lawpilots-logo-size2.png"
                                className="h-8"
                                alt=""
                              />

                              <span className="text-xs text-gray-600">
                                Sebastian Belle
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              {["Clients", "Insights", "Approach", "About us"].map((m) => (
                <li key={m}>
                  <a href="#" className="hover:text-[#9c0]">
                    {m}
                  </a>
                </li>
              ))}
            </ul>

            {/* Right Icons */}
            <div className="flex gap-4">
              <FiSearch
                onClick={() => setSearchOpen(true)}
                className="cursor-pointer hover:text-[#9c0]"
              />
              <FiUser className="cursor-pointer hover:text-[#9c0]" />
              <FiShoppingCart className="cursor-pointer hover:text-[#9c0]" />
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileOpen && (
            <div className="md:hidden bg-black/80 backdrop-blur rounded-xl p-3">
              {[
                "Engineering",
                "Consulting",
                "Industries",
                "Clients",
                "Insights",
                "Approach",
                "About us",
              ].map((m) => (
                <a
                  key={m}
                  href="#"
                  className="block py-2 px-3 rounded hover:bg-white/10">
                  {m}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[60]">
          <div className="bg-white text-black p-6 rounded-xl w-full max-w-md">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold">Search</h3>

              <FiX
                className="cursor-pointer"
                onClick={() => setSearchOpen(false)}
              />
            </div>

            <input
              className="w-full border p-3 rounded mb-3"
              placeholder="Search..."
            />

            <button className="w-full bg-[#9c0] py-2 rounded font-semibold">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
