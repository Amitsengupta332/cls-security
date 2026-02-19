import { useEffect, useState } from "react";
import { useNetworkStatus } from "../hooks/useNetworkStatus";

export default function AppointmentPopupLike({ open, onClose }) {
  const { online, checking } = useNetworkStatus();

  // "Meeting Type" toggle (your existing state)
  const [meetingType, setMeetingType] = useState("online"); // online | offline

  // animation states
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);

  // ✅ Replace with your real Zoom link
  const zoomUrl = "https://zoom.us/j/123456789?pwd=YOURCODE";

  // ✅ Offline address (stored locally / hard-coded)
  const offlineAddress = {
    title: "Office Address",
    line1: "House 12, Road 7",
    line2: "Dhaka, Bangladesh",
    phone: "+880 1X XXX XXXX",
    email: "support@yourcompany.com",
  };

  useEffect(() => {
    if (open) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMounted(true);
      requestAnimationFrame(() => setShow(true));
      document.body.style.overflow = "hidden";
    } else {
      setShow(false);
      const t = setTimeout(() => setMounted(false), 220);
      document.body.style.overflow = "";
      return () => clearTimeout(t);
    }
  }, [open]);

  // ESC close
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!mounted) return null;

  const times = ["9:00 pm", "9:30 pm", "10:00 pm"];

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* overlay */}
      <button
        aria-label="Close overlay"
        onClick={onClose}
        className={`
          absolute inset-0 bg-black/60
          transition-opacity duration-200
          ${show ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* popup */}
      <div
        className={`
          relative z-10 w-[980px] max-w-[95vw] bg-white shadow-2xl border overflow-hidden
          transition-all duration-200 ease-out
          ${show ? "opacity-100 scale-100" : "opacity-0 scale-95"}
        `}
      >
        {/* top content */}
        <div className="flex h-[520px]">
          {/* LEFT */}
          <div
            className={`
              w-[44%] bg-[#071a4a] text-white px-10 py-10
              transition-transform duration-200 ease-out
              ${show ? "translate-x-0" : "-translate-x-2"}
            `}
          >
            {/* avatar */}
            <div className="flex justify-center">
              <div className="h-16 w-16 rounded-full bg-white/20 grid place-items-center overflow-hidden">
                <div className="h-14 w-14 rounded-full bg-white/40" />
              </div>
            </div>

            <h2 className="mt-4 text-center text-[22px] leading-tight font-medium">
              Meet with our Founder - Ivan <br /> Fortuna
            </h2>

            {/* month */}
            <div className="mt-6 flex items-center justify-center gap-4 text-[18px] font-semibold">
              <button className="text-white/70 hover:text-white">‹</button>
              <span>February 2026</span>
              <button className="text-white/70 hover:text-white">›</button>
            </div>

            {/* calendar */}
            <div className="mt-8">
              <div className="grid grid-cols-7 gap-2 text-center text-[11px] font-semibold text-white/85">
                {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((d) => (
                  <div key={d}>{d}</div>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-7 gap-3 text-center text-[12px] text-white/70">
                {[
                  "",
                  "",
                  "",
                  "",
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "9",
                  "10",
                  "11",
                  "12",
                  "13",
                  "14",
                  "15",
                  "16",
                  "17",
                  "18",
                  "19",
                  "20",
                  "21",
                  "22",
                  "23",
                  "24",
                  "25",
                  "26",
                  "27",
                  "28",
                  "",
                  "",
                  "",
                ].map((v, i) => (
                  <div key={i} className="h-8 grid place-items-center">
                    {v === "18" ? (
                      <span className="h-9 w-9 rounded-full bg-white text-[#071a4a] font-semibold grid place-items-center">
                        18
                      </span>
                    ) : (
                      <span className="h-9 w-9 rounded-full hover:bg-white/10 grid place-items-center">
                        {v}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div
            className={`
              w-[56%] px-10 py-10
              transition-transform duration-200 ease-out
              ${show ? "translate-x-0" : "translate-x-2"}
            `}
          >
            <div className="text-[13px] text-gray-700 space-y-5">
              {/* Meeting Type */}
              <div>
                <div className="font-semibold text-gray-800">Meeting Type</div>
                <div className="mt-2 inline-flex border border-gray-300 rounded overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setMeetingType("online")}
                    className={`px-6 py-2 text-[12px] ${
                      meetingType === "online"
                        ? "bg-gray-200 text-gray-900"
                        : "bg-white text-gray-600"
                    }`}
                  >
                    Online
                  </button>
                  <button
                    type="button"
                    onClick={() => setMeetingType("offline")}
                    className={`px-6 py-2 text-[12px] border-l border-gray-300 ${
                      meetingType === "offline"
                        ? "bg-gray-200 text-gray-900"
                        : "bg-white text-gray-600"
                    }`}
                  >
                    Offline
                  </button>
                </div>
              </div>

              {/* Status */}
              <div className="text-[12px]">
                {checking ? (
                  <span className="text-gray-500">Checking connectivity…</span>
                ) : online ? (
                  <span className="text-green-600 font-semibold">Online</span>
                ) : (
                  <span className="text-red-600 font-semibold">Offline</span>
                )}
              </div>

              {/* Meeting location */}
              <div>
                <div className="font-semibold text-gray-800">
                  Meeting location
                </div>

                {checking ? (
                  <div className="mt-1 text-gray-500">Checking…</div>
                ) : online ? (
                  <div className="mt-1 flex items-center gap-2 text-gray-600">
                    <span>📍</span>
                    <span>Zoom</span>
                  </div>
                ) : (
                  <div className="mt-1 flex items-center gap-2 text-gray-600">
                    <span>📍</span>
                    <span>Office</span>
                  </div>
                )}
              </div>

              {/* Main action block */}
              <div>
                <div className="font-semibold text-gray-800">
                  What time works best?
                </div>

                <div className="mt-1 text-gray-600">
                  Showing times for{" "}
                  <span className="font-semibold">February 18, 2026</span>
                </div>

                <div className="mt-2 text-[#0aa6a6] text-[12px] font-semibold">
                  UTC +06:00 Bishkek, Dacca, Dhaka, Kashgar ▾
                </div>

                {/* ✅ Conditional UI */}
                <div className="mt-4">
                  {checking ? (
                    <div className="text-gray-500 text-sm">
                      Checking connectivity…
                    </div>
                  ) : online ? (
                    <>
                      {/* time buttons (design-only) */}
                      <div className="space-y-3">
                        {times.map((t) => (
                          <button
                            key={t}
                            type="button"
                            className="w-full h-[46px] border border-gray-300 rounded bg-white text-gray-800 hover:border-[#071a4a] transition"
                          >
                            {t}
                          </button>
                        ))}
                      </div>

                      {/* ✅ adaptive single action button */}
                      <button
                        type="button"
                        onClick={() => window.open(zoomUrl, "_blank")}
                        className="mt-4 w-full h-[46px] bg-blue-600 hover:bg-blue-700 text-white rounded transition"
                      >
                        Zoom Meeting
                      </button>
                    </>
                  ) : (
                    <div className="border border-gray-300 bg-gray-50 rounded p-4">
                      <div className="font-semibold text-gray-800">
                        {offlineAddress.title}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        {offlineAddress.line1}
                        <br />
                        {offlineAddress.line2}
                      </div>

                      <div className="mt-3 text-sm text-gray-700">
                        <div>📞 {offlineAddress.phone}</div>
                        <div>✉️ {offlineAddress.email}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom section */}
        <div
          className={`
            border-t px-10 py-8 bg-white
            transition-opacity duration-200
            ${show ? "opacity-100" : "opacity-0"}
          `}
        >
          <h3 className="text-[26px] font-semibold text-gray-900">
            Haven’t found the best time?
          </h3>
          <p className="mt-1 text-gray-500 text-sm">
            Feel free to use any alternative option below
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-10 text-sm">
            <div className="flex items-center gap-2">
              <span>🇨🇾</span>
              <span className="font-semibold">+357 25 123992</span>
            </div>

            <div className="flex items-center gap-2">
              <span>🇺🇦</span>
              <span className="font-semibold">+38 (093) 971 55 23</span>
            </div>

            <div className="flex items-center gap-2">
              <span>✉️</span>
              <span className="font-semibold">i@urlaunched.com</span>
            </div>
          </div>
        </div>

        {/* close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 h-9 w-9 rounded-md hover:bg-gray-100 grid place-items-center"
          aria-label="Close"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
