/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react-hooks/static-components */
// import { useEffect, useMemo, useState } from "react";
// import { DayPicker } from "react-day-picker";
// import "react-day-picker/dist/style.css";
// import { format } from "date-fns";

// export default function AppointmentPopupLike({ open, onClose }) {
//   // Meeting type: online/offline
//   const [meetingType, setMeetingType] = useState("online");

//   // selected date (calendar)
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   // animation states
//   const [mounted, setMounted] = useState(false);
//   const [show, setShow] = useState(false);

//   // ✅ Example slot data (later you can load from API)
//   // key format: yyyy-MM-dd
//   const slotData = useMemo(
//     () => ({
//       "2026-02-18": ["9:00 pm", "9:30 pm", "10:00 pm"],
//       "2026-02-19": ["2:00 pm", "3:00 pm", "3:30 pm"],
//       "2026-02-20": ["11:00 am", "11:30 am"],
//     }),
//     []
//   );

//   useEffect(() => {
//     if (open) {
//       // eslint-disable-next-line react-hooks/set-state-in-effect
//       setMounted(true);
//       requestAnimationFrame(() => setShow(true));
//       document.body.style.overflow = "hidden";

//       // ✅ cleanup in case component unmounts while open
//       return () => {
//         document.body.style.overflow = "";
//       };
//     } else {
//       setShow(false);
//       const t = setTimeout(() => setMounted(false), 220);
//       document.body.style.overflow = "";

//       return () => {
//         clearTimeout(t);
//         document.body.style.overflow = "";
//       };
//     }
//   }, [open]);

//   // ESC close
//   useEffect(() => {
//     if (!open) return;
//     const onKeyDown = (e) => e.key === "Escape" && onClose();
//     window.addEventListener("keydown", onKeyDown);
//     return () => window.removeEventListener("keydown", onKeyDown);
//   }, [open, onClose]);

//   // ✅ safe now (all hooks already ran)
//   if (!mounted) return null;

//   // ✅ Put your real data here
//   const zoomLink = "https://zoom.us/j/123456789?pwd=xxxx";
//   const officeAddressTitle = "Office Address";
//   const officeAddressLine = "House 12, Road 5, Dhanmondi, Dhaka 1209";

//   const dateKey = format(selectedDate, "yyyy-MM-dd");
//   const availableSlots = slotData[dateKey] || [];

//   return (
//     <div className="fixed inset-0 z-[9999] flex items-center justify-center">
//       {/* overlay */}
//       <button
//         aria-label="Close overlay"
//         onClick={onClose}
//         className={`
//           absolute inset-0 bg-black/60
//           transition-opacity duration-200
//           ${show ? "opacity-100" : "opacity-0"}
//         `}
//       />

//       {/* popup */}
//       <div
//         className={`
//           relative z-10 w-[980px] max-w-[95vw] bg-white shadow-2xl border overflow-hidden
//           transition-all duration-200 ease-out
//           ${show ? "opacity-100 scale-100" : "opacity-0 scale-95"}
//         `}
//       >
//         {/* top content */}
//         <div className="flex h-[520px]">
//           {/* LEFT */}
//           <div
//             className={`
//               w-[44%] bg-[#071a4a] text-white px-10 py-10
//               transition-transform duration-200 ease-out
//               ${show ? "translate-x-0" : "-translate-x-2"}
//             `}
//           >
//             {/* avatar */}
//             <div className="flex justify-center">
//               <div className="h-16 w-16 rounded-full bg-white/20 grid place-items-center overflow-hidden">
//                 <div className="h-14 w-14 rounded-full bg-white/40" />
//               </div>
//             </div>

//             <h2 className="mt-4 text-center text-[22px] leading-tight font-medium">
//               Meet with our Founder - Ivan <br /> Fortuna
//             </h2>

//             {/* Calendar (react-day-picker) */}
//             <div className="mt-8">
//               {/* Small custom styles for DayPicker inside dark panel */}
//               <style>{`
//                 .rdp { --rdp-accent-color: #ffffff; --rdp-background-color: rgba(255,255,255,.15); }
//                 .rdp-caption_label { color: rgba(255,255,255,.95); font-weight: 600; }
//                 .rdp-nav_button { color: rgba(255,255,255,.8); }
//                 .rdp-head_cell { color: rgba(255,255,255,.75); font-weight: 700; font-size: 11px; }
//                 .rdp-day { color: rgba(255,255,255,.75); }
//                 .rdp-day_selected { background: #ffffff !important; color: #071a4a !important; }
//                 .rdp-day_today { color: #ffffff; font-weight: 700; }
//               `}</style>

//               <DayPicker
//                 mode="single"
//                 selected={selectedDate}
//                 onSelect={(d) => d && setSelectedDate(d)}
//                 disabled={{ before: new Date() }}
//               />
//             </div>
//           </div>

//           {/* RIGHT */}
//           <div
//             className={`
//               w-[56%] px-10 py-10
//               transition-transform duration-200 ease-out
//               ${show ? "translate-x-0" : "translate-x-2"}
//             `}
//           >
//             <div className="text-[13px] text-gray-700 space-y-5">
//               {/* Meeting Type */}
//               <div>
//                 <div className="font-semibold text-gray-800">Meeting Type</div>

//                 <div className="mt-2 inline-flex border border-gray-300 rounded overflow-hidden">
//                   <button
//                     type="button"
//                     onClick={() => setMeetingType("online")}
//                     className={`px-6 py-2 text-[12px] ${
//                       meetingType === "online"
//                         ? "bg-gray-200 text-gray-900"
//                         : "bg-white text-gray-600"
//                     }`}
//                   >
//                     Online
//                   </button>

//                   <button
//                     type="button"
//                     onClick={() => setMeetingType("offline")}
//                     className={`px-6 py-2 text-[12px] border-l border-gray-300 ${
//                       meetingType === "offline"
//                         ? "bg-gray-200 text-gray-900"
//                         : "bg-white text-gray-600"
//                     }`}
//                   >
//                     Offline
//                   </button>
//                 </div>
//               </div>

//               {/* Meeting location (dynamic) */}
//               <div>
//                 <div className="font-semibold text-gray-800">
//                   Meeting location
//                 </div>

//                 {meetingType === "online" ? (
//                   <div className="mt-1 flex items-center gap-2 text-gray-600">
//                     <span>📹</span>
//                     <a
//                       href={zoomLink}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="text-[#0aa6a6] font-semibold hover:underline"
//                     >
//                       Zoom Meeting Link
//                     </a>
//                   </div>
//                 ) : (
//                   <div className="mt-1 flex items-start gap-2 text-gray-600">
//                     <span className="mt-[2px]">📍</span>
//                     <div>
//                       <div className="font-semibold text-gray-800">
//                         {officeAddressTitle}
//                       </div>
//                       <div className="text-gray-600">{officeAddressLine}</div>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* times */}
//               <div>
//                 <div className="font-semibold text-gray-800">
//                   What time works best?
//                 </div>

//                 <div className="mt-1 text-gray-600">
//                   Showing times for{" "}
//                   <span className="font-semibold">
//                     {format(selectedDate, "MMMM d, yyyy")}
//                   </span>
//                 </div>

//                 <div className="mt-2 text-[#0aa6a6] text-[12px] font-semibold">
//                   UTC +06:00 Bishkek, Dacca, Dhaka, Kashgar ▾
//                 </div>

//                 <div className="mt-4 space-y-3">
//                   {availableSlots.length > 0 ? (
//                     availableSlots.map((t) => (
//                       <button
//                         key={t}
//                         type="button"
//                         className="w-full h-[46px] border border-gray-300 rounded bg-white text-gray-800 hover:border-[#071a4a] transition"
//                       >
//                         {t}
//                       </button>
//                     ))
//                   ) : (
//                     <div className="text-sm text-gray-500">
//                       No available slots for this date.
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* bottom section */}
//         <div
//           className={`
//             border-t px-10 py-8 bg-white
//             transition-opacity duration-200
//             ${show ? "opacity-100" : "opacity-0"}
//           `}
//         >
//           <h3 className="text-[26px] font-semibold text-gray-900">
//             Haven’t found the best time?
//           </h3>
//           <p className="mt-1 text-gray-500 text-sm">
//             Feel free to use any alternative option below
//           </p>

//           <div className="mt-6 flex flex-wrap items-center gap-10 text-sm">
//             <div className="flex items-center gap-2">
//               <span>🇨🇾</span>
//               <span className="font-semibold">+357 25 123992</span>
//             </div>

//             <div className="flex items-center gap-2">
//               <span>🇺🇦</span>
//               <span className="font-semibold">+38 (093) 971 55 23</span>
//             </div>

//             <div className="flex items-center gap-2">
//               <span>✉️</span>
//               <span className="font-semibold">i@urlaunched.com</span>
//             </div>
//           </div>
//         </div>

//         {/* close */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 h-9 w-9 rounded-md hover:bg-gray-100 grid place-items-center"
//           aria-label="Close"
//           type="button"
//         >
//           ✕
//         </button>
//       </div>
//     </div>
//   );
// }

import { useEffect, useMemo, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

export default function AppointmentPopupLike({ open, onClose }) {
  // Meeting type: online/offline
  const [meetingType, setMeetingType] = useState("online");

  // selected date (calendar)
  const [selectedDate, setSelectedDate] = useState(new Date());

  // selected time (slot)
  const [selectedTime, setSelectedTime] = useState(null);

  // animation states
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);

  // ✅ Example slot data (later you can load from API)
  // key format: yyyy-MM-dd
  // (Use "08:00" style strings if you want it to look exactly like your screenshot)
  const slotData = useMemo(
    () => ({
      "2026-02-18": ["20:00", "20:30", "21:00", "21:30", "22:00"],
      "2026-02-24": ["08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "14:00", "14:30", "15:00", "15:30"],
      "2026-02-23": ["11:00", "11:30", "12:00", "12:30", "14:00", "14:30"],
    }),
    []
  );

  // reset time when date changes
  useEffect(() => {
    setSelectedTime(null);
  }, [selectedDate]);

  useEffect(() => {
    if (open) {
      setMounted(true);
      requestAnimationFrame(() => setShow(true));
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = "";
      };
    } else {
      setShow(false);
      const t = setTimeout(() => setMounted(false), 220);
      document.body.style.overflow = "";

      return () => {
        clearTimeout(t);
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  // ESC close
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  // ✅ safe now (all hooks already ran)
  if (!mounted) return null;

  // ✅ Put your real data here
  const zoomLink = "https://zoom.us/j/123456789?pwd=xxxx";
  const officeAddressTitle = "Office Address";
  const officeAddressLine = "House 12, Road 5, Dhanmondi, Dhaka 1209";

  const dateKey = format(selectedDate, "yyyy-MM-dd");
  const availableSlots = slotData[dateKey] || [];

  // helper: parse "08:30" or "9:00 pm"
  const toMinutes = (timeStr) => {
    const s = timeStr.trim().toLowerCase();
    const hasAmPm = s.includes("am") || s.includes("pm");

    if (hasAmPm) {
      const [t, ap] = s.split(" ");
      let [h, m] = t.split(":").map(Number);
      if (ap === "pm" && h !== 12) h += 12;
      if (ap === "am" && h === 12) h = 0;
      return h * 60 + m;
    }

    const [h, m] = s.split(":").map(Number);
    return h * 60 + m;
  };

  // Morning = 06:00–11:59
  const morningSlots = availableSlots.filter((t) => {
    const mins = toMinutes(t);
    return mins >= 6 * 60 && mins < 12 * 60;
  });

  // Evening = 12:00+
  const eveningSlots = availableSlots.filter((t) => {
    const mins = toMinutes(t);
    return mins >= 12 * 60;
  });

  const SlotGrid = ({ title, slots }) => {
    if (!slots.length) return null;

    return (
      <div className="mt-5">
        <div className="text-[12px] font-semibold tracking-wide text-gray-900">
          {title}
        </div>

        <div className="mt-3 grid grid-cols-4 gap-3">
          {slots.map((t) => {
            const active = selectedTime === t;

            return (
              <button
                key={t}
                type="button"
                onClick={() => setSelectedTime(t)}
                className={[
                  "h-10 rounded-md border text-[12px] font-medium transition",
                  "shadow-[0_1px_0_rgba(0,0,0,0.03)]",
                  active
                    ? "bg-[#0b2a66] text-white border-[#0b2a66]"
                    : "bg-white text-gray-800 border-gray-200 hover:border-[#0b2a66]",
                ].join(" ")}
              >
                {t}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

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

            {/* Calendar (react-day-picker) */}
            <div className="mt-8">
              {/* Small custom styles for DayPicker inside dark panel */}
              <style>{`
                .rdp { --rdp-accent-color: #ffffff; --rdp-background-color: rgba(255,255,255,.15); }
                .rdp-caption_label { color: rgba(255,255,255,.95); font-weight: 600; }
                .rdp-nav_button { color: rgba(255,255,255,.8); }
                .rdp-head_cell { color: rgba(255,255,255,.75); font-weight: 700; font-size: 11px; }
                .rdp-day { color: rgba(255,255,255,.75); }
                .rdp-day_selected { background: #ffffff !important; color: #071a4a !important; }
                .rdp-day_today { color: #ffffff; font-weight: 700; }
              `}</style>

              <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={(d) => d && setSelectedDate(d)}
                disabled={{ before: new Date() }}
              />
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

              {/* Meeting location (dynamic) */}
              <div>
                <div className="font-semibold text-gray-800">
                  Meeting location
                </div>

                {meetingType === "online" ? (
                  <div className="mt-1 flex items-center gap-2 text-gray-600">
                    <span>📹</span>
                    <a
                      href={zoomLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#0aa6a6] font-semibold hover:underline"
                    >
                      Zoom Meeting Link
                    </a>
                  </div>
                ) : (
                  <div className="mt-1 flex items-start gap-2 text-gray-600">
                    <span className="mt-[2px]">📍</span>
                    <div>
                      <div className="font-semibold text-gray-800">
                        {officeAddressTitle}
                      </div>
                      <div className="text-gray-600">{officeAddressLine}</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Schedule slots like your screenshot */}
              <div>
                <div className="font-semibold text-gray-800">
                  Select Date &amp; Time
                </div>

                <div className="mt-1 text-gray-600">
                  Showing times for{" "}
                  <span className="font-semibold">
                    {format(selectedDate, "MMMM d, yyyy")}
                  </span>
                </div>

                {availableSlots.length > 0 ? (
                  <>
                    <SlotGrid title="MORNING" slots={morningSlots} />
                    <SlotGrid title="EVENING" slots={eveningSlots} />

                    {selectedTime && (
                      <div className="mt-5 text-sm text-gray-700">
                        Selected:{" "}
                        <span className="font-semibold">
                          {format(selectedDate, "MMM d, yyyy")} • {selectedTime}
                        </span>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="mt-4 text-sm text-gray-500">
                    No available slots for this date.
                  </div>
                )}
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
          type="button"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

