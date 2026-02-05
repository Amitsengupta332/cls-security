import { useEffect, useRef, useState } from "react";
import logo from "../../assets/img/CLS-SECURITY-NEW-LOGO-2024.png";

import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  FiSearch,
  FiUser,
  FiShoppingCart,
  FiX,
  FiChevronRight,
} from "react-icons/fi";
import { HiBars3 } from "react-icons/hi2";

export default function Navbar() {
  const headerRef = useRef(null);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const [activeMenu, setActiveMenu] = useState(null);

  const [engLevel1, setEngLevel1] = useState(null); // "page2"
  const [engLevel2, setEngLevel2] = useState(null); // "page23"

  const hoverTimer = useRef(null);

  const [mob, setMob] = useState({
    engineering: false,
    engPage2: false,
    engPage23: false,
    consulting: false,
    industries: false,
  });

  const closeAllDesktop = () => {
    setActiveMenu(null);
    setEngLevel1(null);
    setEngLevel2(null);
  };

  const openMenuDelayed = (key) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => {
      setActiveMenu(key);
    }, 130);
  };

  const closeMenuDelayed = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => {
      closeAllDesktop();
    }, 130);
  };

  const toggleMob = (key) => {
    setMob((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  useEffect(() => {
    const onScroll = () => {
      if (!headerRef.current) return;
      if (window.scrollY > 80) {
        headerRef.current.classList.add("bg-[rgba(27,26,26,0.85)]");
      } else {
        headerRef.current.classList.remove("bg-[rgba(27,26,26,0.85)]");
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const esc = (e) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setSearchOpen(false);
        closeAllDesktop();
      }
    };
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  useEffect(() => {
    const click = (e) => {
      if (!headerRef.current?.contains(e.target)) {
        closeAllDesktop();
      }
    };
    document.addEventListener("mousedown", click);
    return () => document.removeEventListener("mousedown", click);
  }, []);

  return (
    <header
      id="header"
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-50 text-white transition-all duration-300"
    >
      {/* ================= TOPBAR ================= */}
      {/* <div className="hidden md:block bg-[#1b1a1a]"> */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-12 items-center py-2 text-[14px]">
            <div className="col-span-4">
              <a href="#" className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#9c0]" />
                <span>+0621 7163591</span>
              </a>
            </div>

            <div className="col-span-4 text-right">
              <div className="inline-flex items-center gap-3">
                <SocialIcon>
                  <FaFacebookF className="text-[18px]" />
                </SocialIcon>
                <SocialIcon>
                  <FaLinkedinIn className="text-[18px]" />
                </SocialIcon>
                <SocialIcon>
                  <FaXTwitter className="text-[18px]" />
                </SocialIcon>
                <SocialIcon>
                  <FaInstagram className="text-[18px]" />
                </SocialIcon>
              </div>
            </div>

            <div className="col-span-4 text-right">
              <div className="inline-flex gap-2">
                <a href="#" className="btn-transparent-global">
                  <span className="btn-inner">B2B</span>
                </a>
                <a href="#contact" className="btn-transparent-global">
                  <span className="btn-inner">Get A Quote</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= NAV ================= */}
      {/* <nav className="bg-[rgba(27,26,26,0.70)]"> */}
      <nav className="">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="md:hidden flex justify-end py-2">
            <button
              onClick={() => setMobileOpen((s) => !s)}
              className="p-2"
              aria-label="toggle mobile menu"
            >
              {mobileOpen ? <FiX size={22} /> : <HiBars3 size={24} />}
            </button>
          </div>

          <div className="flex items-center justify-between py-3 md:py-4">
            <a href="#" className="block">
              <img
                src={logo}
                alt="CLS Security"
                className="h-[52px] object-contain"
              />
            </a>

            {/* ================= DESKTOP MENU ================= */}
            <ul className="hidden md:flex items-center gap-[26px] text-[13px] font-medium tracking-[.01em]">
              {/* Engineering */}
              <li
                className="relative"
                onMouseEnter={() => openMenuDelayed("eng")}
                onMouseLeave={closeMenuDelayed}
              >
                <button className="menu-link">Engineering</button>
                <span className="menu-caret">▾</span>

                {activeMenu === "eng" && (
                  <div className="dropdown-root dropdown-anim">
                    <a href="#" className="drop-item">
                      Page 1
                    </a>

                    {/* Page 2 nested */}
                    <div
                      className="relative pr-2" // ✅ hover bridge (right side)
                      onMouseEnter={() => setEngLevel1("page2")}
                      onMouseLeave={() => {
                        setEngLevel1(null);
                        setEngLevel2(null);
                      }}
                    >
                      <a href="#" className="drop-item drop-flex">
                        <span>Page 2</span>
                        <FiChevronRight />
                      </a>

                      {engLevel1 === "page2" && (
                        <div className="dropdown-sub dropdown-anim left-full top-0 ml-0 pl-2">
                          <a href="#" className="drop-item">
                            Page 2.1
                          </a>
                          <a href="#" className="drop-item">
                            Page 2.2
                          </a>

                          {/* Page 2.3 nested */}
                          <div
                            className="relative pr-2"
                            onMouseEnter={() => setEngLevel2("page23")}
                            onMouseLeave={() => setEngLevel2(null)}
                          >
                            <a href="#" className="drop-item drop-flex">
                              <span>Page 2.3</span>
                              <FiChevronRight />
                            </a>

                            {engLevel2 === "page23" && (
                              <div className="dropdown-sub dropdown-anim left-full top-0 ml-0 pl-2">
                                {["Page 2.1", "Page 2.2", "Page 2.3", "Page 2.4"].map(
                                  (x) => (
                                    <a key={x} href="#" className="drop-item">
                                      {x}
                                    </a>
                                  )
                                )}
                              </div>
                            )}
                          </div>

                          <a href="#" className="drop-item">
                            Page 2.4
                          </a>
                        </div>
                      )}
                    </div>

                    <a href="#" className="drop-item">
                      Page 3
                    </a>
                    <a href="#" className="drop-item">
                      Page 4
                    </a>
                  </div>
                )}
              </li>

              {/* Consulting */}
              <li
                className="relative"
                onMouseEnter={() => openMenuDelayed("con")}
                onMouseLeave={closeMenuDelayed}
              >
                <button className="menu-link">Consulting</button>
                <span className="menu-caret">▾</span>
              </li>

              {activeMenu === "con" && (
                <MegaMenu
                  onMouseEnter={() => openMenuDelayed("con")}
                  onMouseLeave={closeMenuDelayed}
                  leftLinks={[
                    "Innovation Consulting",
                    "Product Design",
                    "Technology Enabled",
                    "Technology Enabled",
                    "AI and ML Consulting",
                  ]}
                  middleLinks={[
                    "Data-driven Transformation",
                    "CRM Consulting",
                    "CRM Consulting",
                    "CRM Consulting",
                    "Mega menu item",
                  ]}
                  quote="*instinctools' work has led to a continuously growing and satisfied customer base, as the client's SaaS offering has low churn rates. The team delivers on time and within budget, proactively asking how to help the client and providing new ideas."
                  author="Sebastian Belle, Head of Engineering of Lawpilots GmbH"
                />
              )}

              {/* Industries */}
              <li
                className="relative"
                onMouseEnter={() => openMenuDelayed("ind")}
                onMouseLeave={closeMenuDelayed}
              >
                <button className="menu-link">Industries</button>
                <span className="menu-caret">▾</span>
              </li>

              {activeMenu === "ind" && (
                <MegaMenu
                  onMouseEnter={() => openMenuDelayed("ind")}
                  onMouseLeave={closeMenuDelayed}
                  leftLinks={[
                    "Healthcare",
                    "Healthcare",
                    "Manufacturing",
                    "Logistics",
                    "Automotive",
                    "Entertainment and Media",
                  ]}
                  middleLinks={[
                    "Ecommerce",
                    "Ad-Tech",
                    "Cryptocurrency",
                    "Education and E-learning",
                    "Technology",
                  ]}
                  quote="* The team is dependable when it comes to managing time and finances, consistently staying within the designated budget."
                  author="Sebastian Belle, Head of Engineering of Lawpilots GmbH"
                />
              )}

              {["Clients", "Insights", "Approach", "About us"].map((m) => (
                <li key={m}>
                  <a href="#" className="menu-link">
                    {m}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-5">
              <button onClick={() => setSearchOpen(true)} aria-label="open search">
                <FiSearch className="text-[20px] hover:text-[#9c0]" />
              </button>
              <a href="#" className="hover:text-[#9c0]" aria-label="user">
                <FiUser className="text-[20px]" />
              </a>
              <a href="#" className="hover:text-[#9c0]" aria-label="cart">
                <FiShoppingCart className="text-[20px]" />
              </a>
            </div>
          </div>

          {/* ================= MOBILE MENU ================= */}
          {mobileOpen && (
            <div className="md:hidden bg-[#1b1a1a] rounded-md p-3 mb-3">
              {/* Engineering */}
              <button
                onClick={() => toggleMob("engineering")}
                className="w-full flex items-center justify-between py-2 px-3 rounded hover:bg-white/10"
              >
                <span>Engineering</span>
                <span className={`transition-transform ${mob.engineering ? "rotate-180" : ""}`}>
                  ▾
                </span>
              </button>

              <Accordion open={mob.engineering}>
                <a href="#" className="mob-item">
                  Page 1
                </a>

                <button
                  onClick={() => toggleMob("engPage2")}
                  className="mob-item flex items-center justify-between w-full"
                >
                  <span>Page 2</span>
                  <span className={`transition-transform ${mob.engPage2 ? "rotate-180" : ""}`}>
                    ▾
                  </span>
                </button>

                <Accordion open={mob.engPage2} inner>
                  <a href="#" className="mob-item">
                    Page 2.1
                  </a>
                  <a href="#" className="mob-item">
                    Page 2.2
                  </a>

                  <button
                    onClick={() => toggleMob("engPage23")}
                    className="mob-item flex items-center justify-between w-full"
                  >
                    <span>Page 2.3</span>
                    <span className={`transition-transform ${mob.engPage23 ? "rotate-180" : ""}`}>
                      ▾
                    </span>
                  </button>

                  <Accordion open={mob.engPage23} inner>
                    {["Page 2.1", "Page 2.2", "Page 2.3", "Page 2.4"].map((x) => (
                      <a key={x} href="#" className="mob-item">
                        {x}
                      </a>
                    ))}
                  </Accordion>

                  <a href="#" className="mob-item">
                    Page 2.4
                  </a>
                </Accordion>

                <a href="#" className="mob-item">
                  Page 3
                </a>
                <a href="#" className="mob-item">
                  Page 4
                </a>
              </Accordion>

              {/* Rest */}
              {["Clients", "Insights", "Approach", "About us"].map((m) => (
                <a key={m} href="#" className="block py-2 px-3 rounded hover:bg-white/10">
                  {m}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* ================= SEARCH MODAL ================= */}
      <div
        className={`
          fixed left-0 right-0 top-0 z-[999]
          h-[15%] min-h-[140px]
          bg-[linear-gradient(180deg,#171e2a,rgba(23,30,42,.82))]
          transition-all duration-300
          ${searchOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"}
        `}
      >
        <div className="absolute left-1/2 top-[60px] -translate-x-1/2 w-[56%] max-w-[900px]">
          <input
            autoFocus
            className="
              w-full bg-transparent text-white
              border-b border-white/20
              px-8 py-3 text-[15px]
              outline-none
              placeholder:text-white/30
            "
            placeholder="e.g. Business Intelligence"
          />
        </div>

        <button
          onClick={() => setSearchOpen(false)}
          className="absolute right-[6rem] top-[30px] h-8 w-8"
        >
          <FiX className="text-white text-[26px]" />
        </button>

        <button
          className="
            absolute right-[11rem] top-[38px]
            h-[42px] w-[132px]
            uppercase text-white
            bg-[#809cd0]
            skew-x-[-12deg]
            overflow-hidden
            transition-all duration-300
            hover:text-[#9c0]
          "
        >
          <span className="skew-x-[12deg] relative z-10">Search</span>
          <span className="absolute inset-0 bg-white w-0 hover:w-full transition-all duration-300" />
        </button>
      </div>

      {/* ================= INTERNAL CSS HELPERS ================= */}
      <style>{`
        .menu-link{
          position:relative;
          display:inline-block;
          padding-bottom:6px;
          transition:color .25s ease;
        }
        .menu-link:hover{ color:#9c0; }
        .menu-link::after{
          content:"";
          position:absolute;
          left:0;
          bottom:0;
          height:2px;
          width:0;
          background:#9c0;
          transition:width .25s ease;
        }
        .menu-link:hover::after{ width:100%; }
        .menu-caret{ margin-left:6px; font-size:12px; opacity:.9; }

        /* ✅ main dropdown only (root) */
        .dropdown-root{
          position:absolute;
          top:100%;
          margin-top:12px;
          width:224px;
          background:#fff;
          color:#000;
          box-shadow:0 10px 30px rgba(0,0,0,.15);
          padding:6px 0;
          z-index:60;
        }

        /* ✅ nested dropdown only (sub) */
        .dropdown-sub{
          position:absolute;
          top:0;
          margin-top:0;
          width:224px;
          background:#fff;
          color:#000;
          box-shadow:0 10px 30px rgba(0,0,0,.15);
          padding:6px 0;
          z-index:70;
          pointer-events:auto;
        }

        .drop-item{
          padding:10px 16px;
          font-size:14px;
          transition:background .2s ease;
          white-space:nowrap;
          display:block;
        }
        .drop-flex{
          display:flex !important;
          align-items:center;
          justify-content:space-between;
        }
        .drop-item:hover{ background:#f3f3f3; }

        .dropdown-anim{
          animation: fadeSlide .25s ease both;
          transform-origin: top;
        }
        @keyframes fadeSlide{
          from{ opacity:0; transform:translateY(10px); }
          to{ opacity:1; transform:translateY(0); }
        }

        .btn-transparent-global{
          position:relative;
          display:inline-flex;
          justify-content:center;
          align-items:center;
          transform:skewX(-12deg);
          height:41px;
          padding:0 20px;
          background:#9c0;
          color:#fff;
          text-transform:uppercase;
          font-weight:600;
          overflow:hidden;
          transition:all .3s ease;
        }
        .btn-transparent-global::before{
          content:"";
          position:absolute;
          left:0; top:0;
          width:0; height:100%;
          background:#8cbb00;
          transition:all .3s ease;
          z-index:0;
        }
        .btn-transparent-global:hover::before{ width:100%; }
        .btn-inner{ position:relative; z-index:1; transform:skewX(12deg); }

        .social-icons{
          width:40px; height:40px;
          display:inline-flex;
          justify-content:center;
          align-items:center;
          position:relative;
          border-radius:50%;
          overflow:hidden;
          transition:background .2s,color .2s;
        }
        .social-icons::before{
          content:"";
          position:absolute;
          inset:0;
          background:#9c0;
          z-index:-1;
          border-radius:50%;
          transform:translate(100%,100%);
          transition:all .4s;
        }
        .social-icons:hover::before{
          transform:translate(0);
          animation:anim .4s linear;
        }
        @keyframes anim{
          0%,100%{width:100%;height:100%;}
          50%{width:50%;height:50%;}
        }

        .mob-item{
          display:block;
          padding:10px 12px;
          border-radius:8px;
          transition:background .2s ease;
        }
        .mob-item:hover{ background:rgba(255,255,255,.08); }
      `}</style>
    </header>
  );
}

function SocialIcon({ children }) {
  return (
    <a href="#" className="social-icons">
      {children}
    </a>
  );
}

function MegaMenu({
  onMouseEnter,
  onMouseLeave,
  leftLinks,
  middleLinks,
  quote,
  author,
}) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="
        absolute left-1/2 top-full
        -translate-x-1/2
        w-screen
        bg-[#f3f5f9] text-black
        shadow-xl z-40
        border-t border-gray-200
      "
      style={{
        animationName: "fadeSlideMega",
        animationDuration: "0.25s",
        animationTimingFunction: "ease",
        animationFillMode: "both",
      }}
    >
      <div className="mx-auto max-w-[1140px] px-6 py-8">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-3 space-y-3 text-sm">
            {leftLinks.map((i) => (
              <a key={i} href="#" className="block hover:underline">
                {i}
              </a>
            ))}
          </div>

          <div className="col-span-3 space-y-3 text-sm">
            {middleLinks.map((i) => (
              <a key={i} href="#" className="block hover:underline">
                {i}
              </a>
            ))}
          </div>

          <div className="col-span-6 bg-[#edf0f7] skew-x-[-15deg] px-8 py-6">
            <div className="skew-x-[12deg]">
              <p className="italic text-sm text-gray-600 leading-relaxed">
                {quote}
              </p>

              <div className="flex items-center gap-4 mt-5">
                <img
                  src="https://cdn-hokdj.nitrocdn.com/xTVZIceRirelUWcvTeSrIReGRrnfbTIP/assets/images/optimized/rev-7cec5d5/www.instinctools.com/wp-content/uploads/2022/03/lawpilots-logo-size2.png"
                  className="h-8"
                  alt=""
                />
                <span className="text-xs text-gray-600">{author}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideMega{
          from{ opacity:0; transform:translate(-50%, 10px); }
          to{ opacity:1; transform:translate(-50%, 0); }
        }
      `}</style>
    </div>
  );
}

function Accordion({ open, inner = false, children }) {
  return (
    <div
      className={`
        overflow-hidden transition-all duration-300
        ${open ? "max-h-[900px] opacity-100" : "max-h-0 opacity-0"}
        ${inner ? "pl-3" : "pl-0"}
      `}
    >
      <div className={`${inner ? "border-l border-white/10 ml-3" : ""}`}>
        {children}
      </div>
    </div>
  );
}


     className="
            relative hidden sm:block

            [&_.swiper-button-next]:h-[34px]
            [&_.swiper-button-next]:w-[34px]
            [&_.swiper-button-next]:bg-[#9c0]
            [&_.swiper-button-next]:skew-x-[-12deg]
            [&_.swiper-button-next]:right-[10px]
            [&_.swiper-button-next]:top-[110px]

            [&_.swiper-button-prev]:h-[34px]
            [&_.swiper-button-prev]:w-[34px]
            [&_.swiper-button-prev]:bg-[#9c0]
            [&_.swiper-button-prev]:skew-x-[-12deg]
            [&_.swiper-button-prev]:left-[10px]
            [&_.swiper-button-prev]:top-[110px]

            /* ✅ IMPORTANT: remove Swiper default arrows (they come from ::after) */
            [&_.swiper-button-next::after]:content-none
            [&_.swiper-button-prev::after]:content-none
          "