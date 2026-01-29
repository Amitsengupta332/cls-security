import { useState } from "react";
import { FaPlay } from "react-icons/fa";

import youtubeImg from "../../assets/img/security-youtube.jpg";

export default function CategoryWithTab() {
  const tabs = [
    {
      id: "camera",
      label: "ÜBERWACHUNGSKAMERA",
      order: ["text", "video"],
    },
    {
      id: "alarm",
      label: "ALARMTECHNIK",
      order: ["video", "text"],
    },
    {
      id: "record",
      label: "AUFZEICHNUNGSGERÄTE",
      order: ["text", "video"],
    },
  ];

  const [active, setActive] = useState(tabs[0]);

  /* ================= TEXT BLOCK ================= */
  const TextBox = () => (
    <div className="bg-white rounded-xl shadow-lg p-10">
      <h3 className="text-2xl font-bold mb-4">
        Kostenlose Standortbesichtigung und Entwurfsvorschlag für CCTV-Systeme!
      </h3>

      <p className="italic text-gray-600 mb-6 leading-relaxed">
        Safeguard Systems sind Experten für CCTV-Kamerasysteme für Unternehmen
        und Gewerbe. Kontaktieren Sie uns noch heute für ein KOSTENLOSES,
        unverbindliches Angebot und eine Standortbesichtigung.
      </p>

      <ul className="space-y-4 mb-8">
        {[
          "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          "Duis aute irure dolor in reprehenderit in voluptate velit.",
          "Duis aute irure dolor in reprehenderit in voluptate velit.",
        ].map((item, i) => (
          <li key={i} className="flex gap-3 items-start">
            <span className="w-4 h-4 bg-lime-500 mt-1"></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="flex gap-4 flex-wrap">
        <a
          href="#"
          className="border-2 border-lime-500 text-lime-600 px-6 py-3 font-medium hover:bg-lime-500 hover:text-white transition"
        >
          0621 7163591
        </a>

        <a
          href="#"
          className="border-2 border-lime-500 text-lime-600 px-6 py-3 font-medium hover:bg-lime-500 hover:text-white transition"
        >
          TERMIN
        </a>
      </div>
    </div>
  );

  /* ================= VIDEO BLOCK ================= */
  const VideoBox = () => (
    <div className="relative rounded-xl overflow-hidden shadow-lg">
      <img
        src={youtubeImg}
        alt="Youtube"
        className="w-full h-[420px] object-cover"
      />

      <div className="absolute inset-0 bg-black/25"></div>

      <a
        href="https://www.youtube.com/watch?v=nrJtHemSPW4"
        target="_blank"
        rel="noreferrer"
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-24 h-24 border-2 border-lime-400 rounded-full flex items-center justify-center">
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
            <FaPlay className="text-white ml-1" />
          </div>
        </div>

        <span className="absolute bottom-6 right-6 text-white font-medium">
          Watch Our Intro!
        </span>
      </a>
    </div>
  );

  /* ================= MAIN ================= */
  return (
    <section id="categoryWithTab" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">

          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab)}
              className={`
                px-8 py-3 uppercase italic font-semibold
                border-2 border-lime-500
                skew-x-[-12deg]
                transition
                ${
                  active.id === tab.id
                    ? "bg-lime-500 text-white"
                    : "text-lime-600 hover:bg-lime-100"
                }
              `}
            >
              <span className="skew-x-[12deg] inline-block">
                {tab.label}
              </span>
            </button>
          ))}

        </div>

        {/* Content */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">

          {active.order.map((item, i) =>
            item === "text" ? <TextBox key={i} /> : <VideoBox key={i} />
          )}

        </div>

      </div>
    </section>
  );
}
