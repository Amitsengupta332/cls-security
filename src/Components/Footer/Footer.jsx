import { useEffect, useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <footer id="footer" className="bg-[#1b1a1a] text-white/80 pt-12">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto  px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-8">
            {/* Address */}
            <div className="flex gap-4">
              <FaMapMarkerAlt className="text-[#9c0] text-[22px] mt-1 shrink-0" />
              <div>
                <h4 className="text-white font-semibold text-[16px] mb-2">
                  Address
                </h4>
                <p className="leading-relaxed">A108 Adam Street</p>
                <p className="leading-relaxed">New York, NY 535022</p>
              </div>
            </div>

            {/* Contact */}
            <div className="flex gap-4">
              <FaPhoneAlt className="text-[#9c0] text-[22px] mt-1 shrink-0" />
              <div>
                <h4 className="text-white font-semibold text-[16px] mb-2">
                  Contact
                </h4>
                <p className="leading-relaxed">
                  <strong className="text-white">Phone:</strong>{" "}
                  <span className="text-white/85">+1 5589 55488 55</span>
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">Email:</strong>{" "}
                  <span className="text-white/85">info@example.com</span>
                </p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="flex gap-4">
              <FaClock className="text-[#9c0] text-[22px] mt-1 shrink-0" />
              <div>
                <h4 className="text-white font-semibold text-[16px] mb-2">
                  Opening Hours
                </h4>
                <p className="leading-relaxed">
                  <strong className="text-white">Mon-Sat:</strong>{" "}
                  <span className="text-white/85">11AM - 23PM</span>
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">Sunday:</strong>{" "}
                  <span className="text-white/85">Closed</span>
                </p>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-white font-semibold text-[16px] mb-3">
                Follow Us
              </h4>

              <div className="flex items-center gap-3">
                {/* PHP "ex4" rotation feel on hover */}
                <a href="#" className="social-icons ex4" aria-label="X">
                  <FaXTwitter className="text-[18px]" />
                </a>
                <a href="#" className="social-icons ex4" aria-label="Facebook">
                  <FaFacebookF className="text-[18px]" />
                </a>
                <a href="#" className="social-icons ex4" aria-label="Instagram">
                  <FaInstagram className="text-[18px]" />
                </a>
                <a href="#" className="social-icons ex4" aria-label="LinkedIn">
                  <FaLinkedinIn className="text-[18px]" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="border-t border-white/10 mt-10 pt-6 pb-8 text-center text-[14px]">
            <p className="text-white/80">
              © <span>Copyright</span>{" "}
              <strong className="px-1 text-white">CLS Security</strong>{" "}
              <span>All Rights Reserved</span>
            </p>

            <p className="mt-1 text-white/60">
              Designed by{" "}
              <a href="#" className="text-[#9c0] hover:underline">
                BootstrapMade
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll Top Button (same SVG like PHP) */}
      <ScrollTop />

      {/* Internal CSS helpers (same style you used earlier) */}
      <style>{`
        /* ===== social-icons (from your custom.css) ===== */
        .social-icons{
          width:40px;
          height:40px;
          display:inline-flex;
          justify-content:center;
          align-items:center;
          position:relative;
          border-radius:50%;
          overflow:hidden;
          transition:background .2s,color .2s;
          color:#fff;
        }

        .social-icons::before{
          content:"";
          position:absolute;
          top:0;left:0;
          width:100%;
          height:100%;
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

        /* ===== ex4 icon rotate (from your responsive.css) ===== */
        .ex4:hover svg{
          transition: all 600ms cubic-bezier(0.99, 0, 0.57, 0.94);
          transform: rotate(360deg);
        }
      `}</style>
    </>
  );
}

/* ================= Scroll Top ================= */
function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 350);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={goTop}
      aria-label="Scroll to top"
      className={`
        fixed right-6 bottom-6 z-[999]
        transition-all duration-300
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
      `}
    >
      <svg
        version="1.1"
        viewBox="0 0 24.1 64"
        className="h-[64px] w-[24px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            fill="#99CA3C"
            d="M12,24L12,24C5.9,24,0.9,29,0.9,35.1v16.7c0,6.1,5,11.1,11.1,11.1h0c6.1,0,11.1-5,11.1-11.1V35.1
            C23.1,29,18.1,24,12,24z M21.6,51.8c0,5.3-4.3,9.6-9.6,9.6c-5.3,0-9.6-4.3-9.6-9.6V35.1c0-5.3,4.3-9.6,9.6-9.6
            c5.3,0,9.6,4.3,9.6,9.6V51.8z"
          />
          <path
            fill="#99CA3C"
            d="M12,29.3c-0.4,0-0.8,0.4-0.8,0.8v4.6c0,0.4,0.4,0.8,0.8,0.8s0.8-0.4,0.8-0.8v-4.6C12.8,29.7,12.4,29.3,12,29.3z"
          />
          <path
            fill="#99CA3C"
            d="M5.7,16.1c0.1,0,0.2,0,0.3-0.1l6.2-6.2l6.1,6.1c0.2,0.2,0.4,0.2,0.6,0s0.2-0.4,0-0.6l-6.6-6.6l-6.7,6.7
            c-0.2,0.2-0.2,0.4,0,0.6C5.5,16,5.6,16.1,5.7,16.1z"
          />
          <path
            fill="#99CA3C"
            d="M5.7,7.9c0.1,0,0.2,0,0.3-0.1l6.2-6.2l6.1,6.1c0.2,0.2,0.4,0.2,0.6,0c0.2-0.2,0.2-0.4,0-0.6l-6.6-6.6L5.4,7.2
            c-0.2,0.2-0.2,0.4,0,0.6C5.5,7.8,5.6,7.9,5.7,7.9z"
          />
        </g>
      </svg>
    </button>
  );
}
