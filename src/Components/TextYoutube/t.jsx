import { FaPlay } from "react-icons/fa";

import youtubeImg from "../../assets/img/security-youtube.jpg";

export default function TextYoutube() {
  return (
    <section id="textwith_youtube" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-xl shadow-lg p-10 grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
          {/* ================= LEFT ================= */}
          <div>
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
              Kostenlose Standortbesichtigung und Entwurfsvorschlag für
              CCTV-Systeme!
            </h2>

            {/* Subtitle */}
            <p className="italic text-gray-600 mb-6 leading-relaxed">
              Safeguard Systems sind Experten für CCTV-Kamerasysteme für
              Unternehmen und Gewerbe. Kontaktieren Sie uns noch heute für ein
              KOSTENLOSES, unverbindliches Angebot und eine
              Standortbesichtigung.
            </p>

            {/* List */}
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-4 h-4 bg-green-500 mt-2"></span>
                <span>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-4 h-4 bg-green-500 mt-2"></span>
                <span>
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-4 h-4 bg-green-500 mt-2"></span>
                <span>
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                </span>
              </li>
            </ul>

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap">
              <a
                href="#"
                className="border-2 border-green-500 text-green-500 px-8 py-3 font-medium hover:bg-green-500 hover:text-white transition">
                0621 7163591
              </a>

              <a
                href="#"
                className="border-2 border-green-500 text-green-500 px-8 py-3 font-medium hover:bg-green-500 hover:text-white transition">
                TERMIN
              </a>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="relative rounded-xl overflow-hidden">
            {/* Image */}
            <img
              src={youtubeImg}
              alt="Youtube"
              className="w-full h-[420px] object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Play Button */}
            <a
              href="https://www.youtube.com/watch?v=nrJtHemSPW4"
              target="_blank"
              rel="noreferrer"
              className="absolute inset-0 flex items-center justify-center">
              {/* Outer Ring */}
              <div className="w-24 h-24 border-2 border-green-400 rounded-full flex items-center justify-center animate-pulse">
                {/* Inner Button */}
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                  <FaPlay className="text-white ml-1 text-lg" />
                </div>
              </div>

              {/* Text */}
              <span className="absolute bottom-6 right-6 text-white font-medium">
                Watch Our Intro!
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


     <div className="relative youtubelinks self-start">
            {/* image wrapper like PHP: padding 11 + shadow */}
            <div className="rounded-[5px] shadow-[0_5px_83px_0_rgba(3,43,86,0.12)] p-[11px] bg-white">
              <img
                src={youtubeImg}
                alt="YouTube Preview"
                className="w-full rounded-[5px] object-cover"
              />
            </div>

            {/* video btn absolute like PHP (left:40%, top:35%) */}
            <a
              href="https://www.youtube.com/watch?v=nrJtHemSPW4"
              target="_blank"
              rel="noreferrer"
              className="absolute left-[40%] top-[35%] flex items-center h-[60px] pl-[60px]"
            >
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
                "
              >
                <FaPlay className="text-[18px] ml-[2px]" />
              </div>

              {/* title */}
              <span className="ml-[20px] max-w-[90px] text-left leading-[1.3] text-white font-medium">
                Watch Our Intro!
              </span>
            </a>
          </div>