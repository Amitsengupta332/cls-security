import { FaPlay } from "react-icons/fa";
import youtubeImg from "../../assets/img/security-youtube.jpg";

export default function TextYoutube() {
  const list = [
    "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit.",
    "Duis aute irure dolor in reprehenderit in voluptate velit. Duis aute irure dolor in reprehenderit in voluptate velit.",
  ];

  return (
    <section id="textwith_youtube" className="py-[60px] bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-y-10 xl:grid-cols-2 xl:gap-x-10 items-start">
          {/* ================= LEFT TEXT ================= */}
          <div className="content">
            <div className="relative bg-white shadow-[0_5px_83px_0_rgba(27,26,26,0.12)] p-[42px]">
              <h3 className="text-[28px] font-bold text-black leading-snug mb-4">
                Kostenlose Standortbesichtigung und Entwurfsvorschlag für
                CCTV-Systeme!
              </h3>

              <p className="italic text-black/70 leading-relaxed mb-6">
                Safeguard Systems sind Experten für CCTV-Kamerasysteme für
                Unternehmen und Gewerbe. Kontaktieren Sie uns noch heute für ein
                KOSTENLOSES, unverbindliches Angebot und eine
                Standortbesichtigung.
              </p>

              {/* LIST */}
              <ul className="mb-[35px] space-y-[10px]">
                {list.map((item, i) => (
                  <li key={i} className="flex items-start">
                    {/* globalbtn */}
                    <span className="mt-[7px] mr-[10px] inline-block h-[10px] px-[8px] bg-[#9c0] skew-x-[-12deg]" />
                    <span className="text-black leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {/* BUTTONS (global-button + btn-main) */}
              <div className="flex flex-wrap items-center gap-3">
                <GlobalButton href="#services" text="0621 7163591" />
                <GlobalButton href="#services" text="Termin" />
              </div>
            </div>
          </div>

          {/* ================= RIGHT YOUTUBE ================= */}
          <div className="relative youtubelinks self-start">
            {/* image wrapper like PHP: padding 11 + shadow */}
            <div className="rounded-[5px] shadow-[0_5px_83px_0_rgba(3,43,86,0.12)] p-[11px] bg-white">
              <img
                src={youtubeImg}
                alt="YouTube Preview"
                className="w-full   xl:h-[450px] rounded-[5px] object-cover"
              />
              {/*   className="w-full h-[320px] md:h-[420px] xl:h-[450px] rounded-[5px] object-cover" */}
            </div>

            {/* video btn absolute like PHP (left:40%, top:35%) */}
            <a
              href="https://www.youtube.com/watch?v=nrJtHemSPW4"
              target="_blank"
              rel="noreferrer"
              className="absolute left-[40%] top-[35%] flex items-center h-[60px] pl-[60px]">
              {/* player */}
              <div
                className="
                  absolute left-0 top-0
                  w-[60px] h-[60px] rounded-full
                  bg-red-600
                  flex items-center justify-center
                  text-white
                  shadow-[0_0_0_2px_rgba(101,181,48,0.5)]
                  animate-ripple
                  transition-all duration-300
                  hover:bg-[#65b530]
                  before:content-['']
                  before:absolute before:top-[-17px] before:left-[-17px]
                  before:w-[calc(100%+30px)] before:h-[calc(100%+30px)]
                  before:rounded-full before:border before:border-white
                ">
                <FaPlay className="text-[18px] ml-[2px]" />
              </div>

              {/* title */}
              <span className="ml-[20px] max-w-[90px] text-left leading-[1.3] text-white font-medium">
                Watch Our Intro!
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Global Button (Tailwind) ---------- */
function GlobalButton({ href, text }) {
  return (
    <a
      href={href}
      className="
        relative inline-flex items-center justify-center
        h-[45px] px-[40px]
        border-[2px] border-[#9c0]
        text-[#9c0] font-bold uppercase text-[14px] leading-[22px] tracking-[.03em]
        skew-x-[-12deg]
        overflow-hidden
        transition-all duration-300
        hover:text-white hover:border-[#8cbb00]
        before:content-['']
        before:absolute before:left-0 before:top-0
        before:h-full before:w-0
        before:bg-[#8cbb00]
        before:transition-all before:duration-300
        hover:before:w-full
      ">
      <span className="relative z-10 skew-x-[12deg] flex items-center gap-[10px]">
        {text}
      </span>
    </a>
  );
}
