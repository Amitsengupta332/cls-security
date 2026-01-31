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
    <div>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300
      ${scrolled ? "bg-black shadow-lg" : "bg-transparent"}`}>
        {/* ================= TOPBAR ================= */}
        <div
          className={`text-white text-sm transition-all duration-300
        ${scrolled ? "bg-black" : "bg-transparent"}`}>
          <div className="container mx-auto  lg:px-28 py-2 flex items-center justify-between">
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
          <div className="container mx-auto lg:px-24">
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

fix this code : 
import { useEffect, useRef, useState } from "react";
import logo from "../../assets/img/CLS-SECURITY-NEW-LOGO-2024.png";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiSearch, FiUser, FiShoppingCart, FiX } from "react-icons/fi";
import { HiBars3 } from "react-icons/hi2";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null); // "Engineering" | "Consulting" | "Industries"
  const headerRef = useRef(null);

  // Close dropdown on outside click (desktop)
  useEffect(() => {
    const onClick = (e) => {
      if (!headerRef.current) return;
      if (!headerRef.current.contains(e.target)) setOpenMenu(null);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  // ESC close
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setSearchOpen(false);
        setOpenMenu(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Sticky bg on scroll (template-like)
  useEffect(() => {
    const onScroll = () => {
      const should = window.scrollY > 80;
      // dark bg with blur similar feel
      if (headerRef.current) {
        headerRef.current.dataset.scrolled = should ? "1" : "0";
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const topLinks = [
    { icon: <FaFacebookF />, href: "#", label: "Facebook" },
    { icon: <FaLinkedinIn />, href: "#", label: "LinkedIn" },
    {
      icon: <span className="text-[13px] font-semibold">X</span>,
      href: "#",
      label: "X",
    },
    {
      icon: <span className="text-[13px] font-semibold">IG</span>,
      href: "#",
      label: "Instagram",
    },
  ];

  return (
    <header
      ref={headerRef}
      className="
        fixed top-0 left-0 right-0 z-50
        transition-colors duration-300
        data-[scrolled=1]:bg-[rgba(21,17,13,0.85)]
        data-[scrolled=1]:backdrop-blur
      "
      data-scrolled="0">
      {/* TOPBAR */}
      <div className="hidden md:block text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-10">
          <div className="flex items-center justify-between py-2 text-[14px]">
            {/* phone */}
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-[#9c0]" />
              <a href="#" className="hover:text-[#9c0] transition">
                +0621 7163591
              </a>
            </div>

            {/* socials */}
            <div className="flex items-center gap-3">
              {topLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  aria-label={l.label}
                  className="grid h-8 w-8 place-items-center rounded-full hover:bg-white/10 hover:text-[#9c0] transition">
                  {l.icon}
                </a>
              ))}
            </div>

            {/* buttons */}
            {/* Buttons (match PHP look) */}
            <div className="flex items-center gap-2">
              {/* Outer skew container */}
              <div className="flex overflow-hidden rounded-sm bg-[#99cc00] skew-x-[-12deg]">
                <a
                  href="#"
                  className="px-4 py-2 text-white text-[13px] font-semibold uppercase
                 hover:bg-[#8cbb00] transition
                 skew-x-[12deg] flex items-center">
                  B2B
                </a>

                {/* divider */}
                <div className="w-[1px] bg-white/50 my-2" />

                <a
                  href="#contact"
                  className="px-4 py-2 text-white text-[13px] font-semibold uppercase
                 hover:bg-[#8cbb00] transition
                 skew-x-[12deg] flex items-center">
                  GET A QUOTE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <nav className="text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-10">
          <div className="flex items-center justify-between py-4">
            {/* Mobile toggle */}
            <button
              className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-white/10 transition"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu">
              {mobileOpen ? <FiX size={22} /> : <HiBars3 size={24} />}
            </button>

            {/* Logo */}
            <a href="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt="CLS Security"
                className="h-12 w-auto object-contain"
              />
            </a>

            {/* Desktop menu */}
            <ul className="hidden md:flex items-center gap-7 text-[15px] font-medium">
              {/* Engineering dropdown */}
              <li className="relative">
                <button
                  className="hover:text-[#9c0] transition"
                  onMouseEnter={() => setOpenMenu("Engineering")}
                  onClick={() =>
                    setOpenMenu(
                      openMenu === "Engineering" ? null : "Engineering",
                    )
                  }>
                  Engineering <span className="ml-1">▾</span>
                </button>

                {openMenu === "Engineering" && (
                  <div
                    className="absolute left-0 top-full mt-3 w-56 rounded-lg bg-white text-black shadow-lg border border-black/10"
                    onMouseLeave={() => setOpenMenu(null)}>
                    <a className="block px-4 py-2 hover:bg-black/5" href="#">
                      Page 1
                    </a>

                    <div className="relative group">
                      <a
                        className="flex items-center justify-between px-4 py-2 hover:bg-black/5"
                        href="#">
                        Page 2 <span>▸</span>
                      </a>

                      {/* nested */}
                      <div className="absolute left-full top-0 ml-2 hidden w-56 rounded-lg bg-white shadow-lg border border-black/10 group-hover:block">
                        <a
                          className="block px-4 py-2 hover:bg-black/5"
                          href="#">
                          Page 2.1
                        </a>
                        <a
                          className="block px-4 py-2 hover:bg-black/5"
                          href="#">
                          Page 2.2
                        </a>
                        <div className="relative group/sub">
                          <a
                            className="flex items-center justify-between px-4 py-2 hover:bg-black/5"
                            href="#">
                            Page 2.3 <span>▸</span>
                          </a>
                          <div className="absolute left-full top-0 ml-2 hidden w-56 rounded-lg bg-white shadow-lg border border-black/10 group-hover/sub:block">
                            <a
                              className="block px-4 py-2 hover:bg-black/5"
                              href="#">
                              Page 2.1
                            </a>
                            <a
                              className="block px-4 py-2 hover:bg-black/5"
                              href="#">
                              Page 2.2
                            </a>
                            <a
                              className="block px-4 py-2 hover:bg-black/5"
                              href="#">
                              Page 2.3
                            </a>
                            <a
                              className="block px-4 py-2 hover:bg-black/5"
                              href="#">
                              Page 2.4
                            </a>
                          </div>
                        </div>
                        <a
                          className="block px-4 py-2 hover:bg-black/5"
                          href="#">
                          Page 2.4
                        </a>
                      </div>
                    </div>

                    <a className="block px-4 py-2 hover:bg-black/5" href="#">
                      Page 3
                    </a>
                    <a className="block px-4 py-2 hover:bg-black/5" href="#">
                      Page 4
                    </a>
                  </div>
                )}
              </li>

              {/* Consulting mega menu */}
              <li className="relative">
                <button
                  className="hover:text-[#9c0] transition"
                  onMouseEnter={() => setOpenMenu("Consulting")}
                  onClick={() =>
                    setOpenMenu(openMenu === "Consulting" ? null : "Consulting")
                  }>
                  Consulting <span className="ml-1">▾</span>
                </button>

                {openMenu === "Consulting" && (
                  <div
                    className="absolute left-1/2 top-full mt-3 w-[min(1100px,calc(100vw-2rem))] -translate-x-1/2 rounded-xl bg-[#f3f5f9] text-black shadow-xl border border-black/10"
                    onMouseLeave={() => setOpenMenu(null)}>
                    <div className="grid grid-cols-12 gap-6 p-6">
                      <div className="col-span-12 md:col-span-3 space-y-2">
                        {[
                          "Innovation Consulting",
                          "Product Design",
                          "Technology Enabled",
                          "Technology Enabled",
                          "AI and ML Consulting",
                        ].map((t) => (
                          <a
                            key={t}
                            href="#"
                            className="block text-[14px] hover:underline">
                            {t}
                          </a>
                        ))}
                      </div>

                      <div className="col-span-12 md:col-span-3 space-y-2">
                        {[
                          "Data-driven Transformation",
                          "CRM Consulting",
                          "CRM Consulting",
                          "CRM Consulting",
                          "Mega menu item",
                        ].map((t) => (
                          <a
                            key={t}
                            href="#"
                            className="block text-[14px] hover:underline">
                            {t}
                          </a>
                        ))}
                      </div>

                      {/* Quote panel */}
                      <div className="col-span-12 md:col-span-6 rounded-xl bg-[#edf0f7] p-6">
                        <div className="text-[14px] italic text-[#4f4f4f]">
                          *instinctools&apos; work has led to a continuously
                          growing and satisfied customer base...
                        </div>
                        <div className="mt-4 flex items-center gap-4">
                          <img
                            className="h-10 w-auto object-contain"
                            src="https://cdn-hokdj.nitrocdn.com/xTVZIceRirelUWcvTeSrIReGRrnfbTIP/assets/images/optimized/rev-7cec5d5/www.instinctools.com/wp-content/uploads/2022/03/lawpilots-logo-size2.png"
                            alt=""
                          />
                          <div className="text-[12px] text-[#4f4f4f]">
                            Sebastian Belle, Head of Engineering of Lawpilots
                            GmbH
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              {/* Industries mega menu */}
              <li className="relative">
                <button
                  className="hover:text-[#9c0] transition"
                  onMouseEnter={() => setOpenMenu("Industries")}
                  onClick={() =>
                    setOpenMenu(openMenu === "Industries" ? null : "Industries")
                  }>
                  Industries <span className="ml-1">▾</span>
                </button>

                {openMenu === "Industries" && (
                  <div
                    className="absolute left-1/2 top-full mt-3 w-[min(1100px,calc(100vw-2rem))] -translate-x-1/2 rounded-xl bg-[#f3f5f9] text-black shadow-xl border border-black/10"
                    onMouseLeave={() => setOpenMenu(null)}>
                    <div className="grid grid-cols-12 gap-6 p-6">
                      <div className="col-span-12 md:col-span-3 space-y-2">
                        {[
                          "Healthcare",
                          "Healthcare",
                          "Manufacturing",
                          "Logistics",
                          "Automotive",
                          "Entertainment and Media",
                        ].map((t) => (
                          <a
                            key={t}
                            href="#"
                            className="block text-[14px] hover:underline">
                            {t}
                          </a>
                        ))}
                      </div>

                      <div className="col-span-12 md:col-span-3 space-y-2">
                        {[
                          "Ecommerce",
                          "Ad-Tech",
                          "Cryptocurrency",
                          "Education and E-learning",
                          "Technology",
                        ].map((t) => (
                          <a
                            key={t}
                            href="#"
                            className="block text-[14px] hover:underline">
                            {t}
                          </a>
                        ))}
                      </div>

                      <div className="col-span-12 md:col-span-6 rounded-xl bg-[#edf0f7] p-6">
                        <div className="text-[14px] italic text-[#4f4f4f]">
                          * The team is dependable when it comes to managing
                          time and finances...
                        </div>
                        <div className="mt-4 flex items-center gap-4">
                          <img
                            className="h-10 w-auto object-contain"
                            src="https://cdn-hokdj.nitrocdn.com/xTVZIceRirelUWcvTeSrIReGRrnfbTIP/assets/images/optimized/rev-7cec5d5/www.instinctools.com/wp-content/uploads/2022/03/lawpilots-logo-size2.png"
                            alt=""
                          />
                          <div className="text-[12px] text-[#4f4f4f]">
                            Sebastian Belle, Head of Engineering of Lawpilots
                            GmbH
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              {["Clients", "Insights", "Approach", "About us"].map((t) => (
                <li key={t}>
                  <a className="hover:text-[#9c0] transition" href="#">
                    {t}
                  </a>
                </li>
              ))}
            </ul>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button
                className="grid h-10 w-10 place-items-center rounded-full hover:bg-white/10 hover:text-[#9c0] transition"
                onClick={() => setSearchOpen(true)}
                aria-label="Search">
                <FiSearch size={18} />
              </button>
              <a
                className="grid h-10 w-10 place-items-center rounded-full hover:bg-white/10 hover:text-[#9c0] transition"
                href="#"
                aria-label="User">
                <FiUser size={18} />
              </a>
              <a
                className="grid h-10 w-10 place-items-center rounded-full hover:bg-white/10 hover:text-[#9c0] transition"
                href="#"
                aria-label="Cart">
                <FiShoppingCart size={18} />
              </a>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <div className="md:hidden pb-4">
              <div className="rounded-xl border border-white/10 bg-black/60 backdrop-blur p-3 text-white">
                {[
                  "Engineering",
                  "Consulting",
                  "Industries",
                  "Clients",
                  "Insights",
                  "Approach",
                  "About us",
                ].map((t) => (
                  <a
                    key={t}
                    href="#"
                    className="block rounded-lg px-3 py-2 hover:bg-white/10">
                    {t}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Search modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-xl rounded-2xl bg-white p-4 text-black shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold">Search</div>
              <button
                onClick={() => setSearchOpen(false)}
                className="rounded-lg p-2 hover:bg-black/5">
                <FiX />
              </button>
            </div>
            <div className="mt-3">
              <input
                className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-[#9c0]"
                placeholder="e.g. Business Intelligence"
              />
              <button className="mt-3 w-full rounded-xl bg-[#9c0] py-3 font-semibold text-black hover:opacity-90">
                Search
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
