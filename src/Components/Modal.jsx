// /* eslint-disable react-hooks/set-state-in-effect */
// /* eslint-disable react-hooks/static-components */
// import { useEffect, useMemo, useState } from "react";
// import { DayPicker } from "react-day-picker";
// import "react-day-picker/dist/style.css";
// import { format } from "date-fns";

// export default function AppointmentPopupLike({ open, onClose }) {
//   const [meetingType, setMeetingType] = useState("online");
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [selectedHour, setSelectedHour] = useState("");
//   const [selectedTime, setSelectedTime] = useState(null);

//   const [mounted, setMounted] = useState(false);
//   const [show, setShow] = useState(false);

//   // ✅ live "now"
//   const [now, setNow] = useState(() => new Date());

//   // helpers (NOT hooks)
//   const isSameDay = (a, b) =>
//     a.getFullYear() === b.getFullYear() &&
//     a.getMonth() === b.getMonth() &&
//     a.getDate() === b.getDate();

//   const slotDateTime = (date, hhmm) => {
//     const [h, m] = hhmm.split(":").map(Number);
//     const d = new Date(date);
//     d.setHours(h, m, 0, 0);
//     return d;
//   };

//   const slotData = useMemo(
//     () => ({
//       // Feb 2026
//       "2026-02-18": ["20:00", "20:30", "21:00", "21:30", "22:00"],
//       "2026-02-19": [
//         "09:00",
//         "09:30",
//         "10:00",
//         "10:30",
//         "14:00",
//         "14:30",
//         "15:00",
//       ],
//       "2026-02-20": [
//         "11:00",
//         "11:30",
//         "12:00",
//         "12:30",
//         "16:00",
//         "16:30",
//         "17:00",
//       ],
//       "2026-02-21": [
//         "09:00",
//         "09:30",
//         "13:00",
//         "13:30",
//         "14:00",
//         "15:30",
//         "16:00",
//       ],
//       "2026-02-22": [
//         "10:00",
//         "10:30",
//         "11:00",
//         "14:00",
//         "14:30",
//         "15:00",
//         "16:30",
//       ],
//       "2026-02-23": [
//         "09:00",
//         "09:30",
//         "11:00",
//         "11:30",
//         "14:00",
//         "14:30",
//         "15:30",
//       ],
//       "2026-02-24": [
//         "09:00",
//         "09:30",
//         "10:00",
//         "10:30",
//         "11:00",
//         "11:30",
//         "12:00",
//         "12:30",
//         "14:00",
//         "14:30",
//         "15:00",
//         "15:30",
//         "16:00",
//         "16:30",
//         "17:00",
//       ],
//       "2026-02-25": [
//         "09:00",
//         "10:00",
//         "10:30",
//         "13:00",
//         "13:30",
//         "16:00",
//         "16:30",
//       ],
//       "2026-02-26": [
//         "09:30",
//         "10:00",
//         "11:30",
//         "12:00",
//         "14:00",
//         "15:00",
//         "17:00",
//       ],
//       "2026-02-27": [
//         "09:00",
//         "09:30",
//         "10:00",
//         "15:00",
//         "15:30",
//         "16:00",
//         "16:30",
//       ],
//       "2026-02-28": [
//         "10:00",
//         "10:30",
//         "11:00",
//         "14:30",
//         "15:00",
//         "15:30",
//         "16:00",
//       ],

//       // March 2026
//       "2026-03-01": [
//         "09:00",
//         "09:30",
//         "10:00",
//         "10:30",
//         "14:00",
//         "14:30",
//         "15:00",
//       ],
//       "2026-03-02": [
//         "11:00",
//         "11:30",
//         "12:00",
//         "15:00",
//         "15:30",
//         "16:00",
//         "17:00",
//       ],
//       "2026-03-03": [
//         "09:00",
//         "10:00",
//         "10:30",
//         "11:00",
//         "14:00",
//         "16:00",
//         "16:30",
//       ],
//       "2026-03-04": [
//         "09:30",
//         "10:00",
//         "12:00",
//         "12:30",
//         "14:30",
//         "15:00",
//         "17:00",
//       ],
//       "2026-03-05": [
//         "09:00",
//         "09:30",
//         "10:30",
//         "11:00",
//         "13:00",
//         "13:30",
//         "16:30",
//       ],
//       "2026-03-06": [
//         "10:00",
//         "10:30",
//         "11:00",
//         "14:00",
//         "14:30",
//         "15:30",
//         "16:00",
//       ],
//       "2026-03-07": [
//         "09:00",
//         "09:30",
//         "11:30",
//         "12:00",
//         "14:00",
//         "15:00",
//         "16:30",
//       ],
//       "2026-03-08": [
//         "09:00",
//         "10:00",
//         "10:30",
//         "12:00",
//         "14:30",
//         "15:00",
//         "17:00",
//       ],
//     }),
//     [],
//   );

//   // ✅ hour dropdown options: 9 AM - 5 PM (9-17)
//   const hourOptions = useMemo(
//     () =>
//       Array.from({ length: 9 }, (_, i) => 9 + i).map((h) => ({
//         value: String(h),
//         label: `${h === 12 ? 12 : h > 12 ? h - 12 : h}:00 ${
//           h >= 12 ? "PM" : "AM"
//         }`,
//       })),
//     [],
//   );

//   // ✅ available slots for selected date
//   const availableSlots = useMemo(() => {
//     const key = format(selectedDate, "yyyy-MM-dd");
//     return slotData[key] || [];
//   }, [slotData, selectedDate]);

//   // ✅ slot is past only when selectedDate is today
//   const isPastSlot = useMemo(() => {
//     const today = isSameDay(selectedDate, now);
//     return (hhmm) => {
//       if (!today) return false;
//       return slotDateTime(selectedDate, hhmm) <= now;
//     };
//   }, [selectedDate, now]);

//   // ✅ dropdown disable by CURRENT TIME + slot existence
//   const hourOptionsWithDisabled = useMemo(() => {
//     const isToday = isSameDay(selectedDate, now);
//     const currentHour = now.getHours();

//     return hourOptions.map((opt) => {
//       const hour = Number(opt.value);

//       // slot exists?
//       const hourSlots = availableSlots.filter(
//         (t) => Number(t.split(":")[0]) === hour,
//       );
//       const disabledByNoSlots = hourSlots.length === 0;

//       // time-based disable (today only)
//       // ex: now 12:30 => 9..12 disabled, 13.. enabled (if slots exist)
//       const disabledByTime = isToday ? hour <= currentHour : false;

//       return { ...opt, disabled: disabledByNoSlots || disabledByTime };
//     });
//   }, [hourOptions, availableSlots, selectedDate, now]);

//   // ✅ filtered slots by selected hour
//   const filteredSlots = useMemo(() => {
//     if (!selectedHour) return [];
//     return availableSlots.filter(
//       (t) => Number(t.split(":")[0]) === Number(selectedHour),
//     );
//   }, [availableSlots, selectedHour]);

//   // reset time when date changes
//   useEffect(() => {
//     setSelectedTime(null);
//     setSelectedHour("");
//   }, [selectedDate]);

//   // update now every 30 seconds while open
//   useEffect(() => {
//     if (!open) return;
//     setNow(new Date());
//     const id = setInterval(() => setNow(new Date()), 30 * 1000);
//     return () => clearInterval(id);
//   }, [open]);

//   // if selected hour becomes disabled, reset
//   useEffect(() => {
//     if (!selectedHour) return;
//     const found = hourOptionsWithDisabled.find((h) => h.value === selectedHour);
//     if (found?.disabled) {
//       setSelectedHour("");
//       setSelectedTime(null);
//     }
//   }, [selectedHour, hourOptionsWithDisabled]);

//   useEffect(() => {
//     if (open) {
//       setMounted(true);
//       requestAnimationFrame(() => setShow(true));
//       document.body.style.overflow = "hidden";
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

//   useEffect(() => {
//     if (!open) return;
//     const onKeyDown = (e) => e.key === "Escape" && onClose();
//     window.addEventListener("keydown", onKeyDown);
//     return () => window.removeEventListener("keydown", onKeyDown);
//   }, [open, onClose]);

//   // ✅ safe early return (NO hooks below)
//   if (!mounted) return null;

//   const zoomLink = "https://zoom.us/j/123456789?pwd=xxxx";
//   const officeAddressTitle = "Office Address";
//   const officeAddressLine = "House 12, Road 5, Dhanmondi, Dhaka 1209";

//   const SlotGrid = ({ slots }) => {
//     if (!slots.length) {
//       return (
//         <div className="mt-4 text-sm text-gray-500">
//           No slots available for this hour.
//         </div>
//       );
//     }

//     return (
//       <div className="mt-4 grid grid-cols-4 gap-3">
//         {slots.map((t) => {
//           const active = selectedTime === t;
//           const disabled = isPastSlot(t);

//           return (
//             <button
//               key={t}
//               type="button"
//               disabled={disabled}
//               onClick={() => !disabled && setSelectedTime(t)}
//               className={[
//                 "h-10 rounded-md border text-[12px] font-medium transition",
//                 "shadow-[0_1px_0_rgba(0,0,0,0.03)]",
//                 disabled
//                   ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
//                   : active
//                     ? "bg-[#0b2a66] text-white border-[#0b2a66]"
//                     : "bg-white text-gray-800 border-gray-200 hover:border-[#0b2a66]",
//               ].join(" ")}
//               title={disabled ? "This time has already passed" : undefined}>
//               {t}
//             </button>
//           );
//         })}
//       </div>
//     );
//   };

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
//         `}>
//         <div className="flex h-[520px]">
//           {/* LEFT */}
//           <div className="w-[44%] bg-[#071a4a] text-white px-10 py-10">
//             <div className="flex justify-center">
//               <div className="h-16 w-16 rounded-full bg-white/20 grid place-items-center overflow-hidden">
//                 <div className="h-14 w-14 rounded-full bg-white/40" />
//               </div>
//             </div>

//             <h2 className="mt-4 text-center text-[22px] leading-tight font-medium">
//               Meet with our Founder - Ivan <br /> Fortuna
//             </h2>

//             <div className="mt-8">
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
//           <div className="w-[56%] px-10 py-10">
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
//                     }`}>
//                     Online
//                   </button>

//                   <button
//                     type="button"
//                     onClick={() => setMeetingType("offline")}
//                     className={`px-6 py-2 text-[12px] border-l border-gray-300 ${
//                       meetingType === "offline"
//                         ? "bg-gray-200 text-gray-900"
//                         : "bg-white text-gray-600"
//                     }`}>
//                     Offline
//                   </button>
//                 </div>
//               </div>

//               {/* Meeting location */}
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
//                       className="text-[#0aa6a6] font-semibold hover:underline">
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

//               {/* Date & Time */}
//               <div>
//                 <div className="font-semibold text-gray-800">
//                   Select Date &amp; Time
//                 </div>

//                 <div className="mt-1 text-gray-600">
//                   Showing times for{" "}
//                   <span className="font-semibold">
//                     {format(selectedDate, "MMMM d, yyyy")}
//                   </span>
//                 </div>

//                 {availableSlots.length > 0 ? (
//                   <>
//                     <div className="mt-4">
//                       <label className="block text-[12px] font-semibold text-gray-800">
//                         Select hour
//                       </label>
//                       <select
//                         value={selectedHour}
//                         onChange={(e) => {
//                           setSelectedHour(e.target.value);
//                           setSelectedTime(null);
//                         }}
//                         className="mt-2 w-full h-11 rounded-md border border-gray-300 bg-white px-3 text-[13px] text-gray-800">
//                         <option value="" disabled>
//                           Select hour (9 AM - 5 PM)
//                         </option>

//                         {hourOptionsWithDisabled.map((o) => (
//                           <option
//                             key={o.value}
//                             value={o.value}
//                             disabled={o.disabled}>
//                             {o.label} {o.disabled ? "(Unavailable)" : ""}
//                           </option>
//                         ))}
//                       </select>
//                     </div>

//                     {selectedHour ? (
//                       <SlotGrid slots={filteredSlots} />
//                     ) : (
//                       <div className="mt-4 text-sm text-gray-500">
//                         Please select an hour to view available slots.
//                       </div>
//                     )}

//                     {selectedTime && (
//                       <div className="mt-5 text-sm text-gray-700">
//                         Selected:{" "}
//                         <span className="font-semibold">
//                           {format(selectedDate, "MMM d, yyyy")} • {selectedTime}
//                         </span>
//                       </div>
//                     )}
//                   </>
//                 ) : (
//                   <div className="mt-4 text-sm text-gray-500">
//                     No available slots for this date.
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* close */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 h-9 w-9 rounded-md hover:bg-gray-100 grid place-items-center"
//           aria-label="Close"
//           type="button">
//           ✕
//         </button>
//       </div>
//     </div>
//   );
// }

/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react-hooks/static-components */
import { useEffect, useMemo, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

export default function AppointmentPopupLike({ open, onClose }) {
  const [meetingType, setMeetingType] = useState("online");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedHour, setSelectedHour] = useState("");
  const [selectedTime, setSelectedTime] = useState(null);

  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);

  // ✅ live "now"
  const [now, setNow] = useState(() => new Date());

  // helpers (NOT hooks)
  const isSameDay = (a, b) =>
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();

  const slotDateTime = (date, hhmm) => {
    const [h, m] = hhmm.split(":").map(Number);
    const d = new Date(date);
    d.setHours(h, m, 0, 0);
    return d;
  };

  const slotData = useMemo(
    () => ({
      // Feb 2026
      "2026-02-18": ["20:00", "20:30", "21:00", "21:30", "22:00"],
      "2026-02-19": [
        "09:00",
        "09:30",
        "10:00",
        "10:30",
        "14:00",
        "14:30",
        "15:00",
      ],
      "2026-02-20": [
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "16:00",
        "16:30",
        "17:00",
      ],
      "2026-02-21": [
        "09:00",
        "09:30",
        "13:00",
        "13:30",
        "14:00",
        "15:30",
        "16:00",
      ],
      "2026-02-22": [
        "10:00",
        "10:30",
        "11:00",
        "14:00",
        "14:30",
        "15:00",
        "16:30",
      ],
      "2026-02-23": [
        "09:00",
        "09:30",
        "11:00",
        "11:30",
        "14:00",
        "14:30",
        "15:30",
      ],
      "2026-02-24": [
        "09:00",
        "09:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "14:00",
        "14:30",
        "15:00",
        "15:30",
        "16:00",
        "16:30",
        "17:00",
      ],
      "2026-02-25": [
        "09:00",
        "10:00",
        "10:30",
        "13:00",
        "13:30",
        "16:00",
        "16:30",
      ],
      "2026-02-26": [
        "09:30",
        "10:00",
        "11:30",
        "12:00",
        "14:00",
        "15:00",
        "17:00",
      ],
      "2026-02-27": [
        "09:00",
        "09:30",
        "10:00",
        "15:00",
        "15:30",
        "16:00",
        "16:30",
      ],
      "2026-02-28": [
        "10:00",
        "10:30",
        "11:00",
        "14:30",
        "15:00",
        "15:30",
        "16:00",
      ],

      // March 2026
      "2026-03-01": [
        "09:00",
        "09:30",
        "10:00",
        "10:30",
        "14:00",
        "14:30",
        "15:00",
      ],
      "2026-03-02": [
        "11:00",
        "11:30",
        "12:00",
        "15:00",
        "15:30",
        "16:00",
        "17:00",
      ],
      "2026-03-03": [
        "09:00",
        "10:00",
        "10:30",
        "11:00",
        "14:00",
        "16:00",
        "16:30",
      ],
      "2026-03-04": [
        "09:30",
        "10:00",
        "12:00",
        "12:30",
        "14:30",
        "15:00",
        "17:00",
      ],
      "2026-03-05": [
        "09:00",
        "09:30",
        "10:30",
        "11:00",
        "13:00",
        "13:30",
        "16:30",
      ],
      "2026-03-06": [
        "10:00",
        "10:30",
        "11:00",
        "14:00",
        "14:30",
        "15:30",
        "16:00",
      ],
      "2026-03-07": [
        "09:00",
        "09:30",
        "11:30",
        "12:00",
        "14:00",
        "15:00",
        "16:30",
      ],
      "2026-03-08": [
        "09:00",
        "10:00",
        "10:30",
        "12:00",
        "14:30",
        "15:00",
        "17:00",
      ],
    }),
    [],
  );

  // ✅ hour options: 9 AM - 5 PM (9-17)
  const hourOptions = useMemo(
    () =>
      Array.from({ length: 9 }, (_, i) => 9 + i).map((h) => ({
        value: String(h),
        label: `${h === 12 ? 12 : h > 12 ? h - 12 : h}:00 ${h >= 12 ? "PM" : "AM"}`,
      })),
    [],
  );

  // ✅ available slots for selected date
  const availableSlots = useMemo(() => {
    const key = format(selectedDate, "yyyy-MM-dd");
    return slotData[key] || [];
  }, [slotData, selectedDate]);

  // ✅ slot is past only when selectedDate is today
  const isPastSlot = useMemo(() => {
    const today = isSameDay(selectedDate, now);
    return (hhmm) => {
      if (!today) return false;
      return slotDateTime(selectedDate, hhmm) <= now;
    };
  }, [selectedDate, now]);

  // ✅ hour disable by CURRENT TIME + slot existence
  const hourOptionsWithDisabled = useMemo(() => {
    const isToday = isSameDay(selectedDate, now);
    const currentHour = now.getHours();

    return hourOptions.map((opt) => {
      const hour = Number(opt.value);

      // slot exists?
      const hourSlots = availableSlots.filter(
        (t) => Number(t.split(":")[0]) === hour,
      );
      const disabledByNoSlots = hourSlots.length === 0;

      // time-based disable (today only)
      const disabledByTime = isToday ? hour <= currentHour : false;

      return { ...opt, disabled: disabledByNoSlots || disabledByTime };
    });
  }, [hourOptions, availableSlots, selectedDate, now]);

  // ✅ filtered slots by selected hour
  const filteredSlots = useMemo(() => {
    if (!selectedHour) return [];
    return availableSlots.filter(
      (t) => Number(t.split(":")[0]) === Number(selectedHour),
    );
  }, [availableSlots, selectedHour]);

  // reset time when date changes
  useEffect(() => {
    setSelectedTime(null);
    setSelectedHour("");
  }, [selectedDate]);

  // update now every 30 seconds while open
  useEffect(() => {
    if (!open) return;
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 30 * 1000);
    return () => clearInterval(id);
  }, [open]);

  // if selected hour becomes disabled, reset
  useEffect(() => {
    if (!selectedHour) return;
    const found = hourOptionsWithDisabled.find((h) => h.value === selectedHour);
    if (found?.disabled) {
      setSelectedHour("");
      setSelectedTime(null);
    }
  }, [selectedHour, hourOptionsWithDisabled]);

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

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  // ✅ safe early return (NO hooks below)
  if (!mounted) return null;

  const zoomLink = "https://zoom.us/j/123456789?pwd=xxxx";
  const officeAddressTitle = "Office Address";
  const officeAddressLine = "House 12, Road 5, Dhanmondi, Dhaka 1209";

  const HourGrid = ({ hours }) => {
    return (
      <div className="mt-3">
        <div className="grid grid-cols-5 gap-2">
          {hours.map((h) => {
            const active = selectedHour === h.value;
            const disabled = h.disabled;

            return (
              <button
                key={h.value}
                type="button"
                disabled={disabled}
                onClick={() => {
                  if (disabled) return;
                  setSelectedHour(h.value);
                  setSelectedTime(null);
                }}
                className={[
                  "h-10 rounded-md border text-[12px] font-medium transition",
                  "shadow-[0_1px_0_rgba(0,0,0,0.03)]",
                  disabled
                    ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                    : active
                      ? "bg-[#0b2a66] text-white border-[#0b2a66]"
                      : "bg-white text-gray-800 border-gray-200 hover:border-[#0b2a66]",
                ].join(" ")}
                title={disabled ? "No slots / time passed" : undefined}>
                {h.label}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  const SlotGrid = ({ slots }) => {
    if (!slots.length) {
      return (
        <div className="mt-4 text-sm text-gray-500">
          No slots available for this hour.
        </div>
      );
    }

    return (
      <div className="mt-4 grid grid-cols-4 gap-3">
        {slots.map((t) => {
          const active = selectedTime === t;
          const disabled = isPastSlot(t);

          return (
            <button
              key={t}
              type="button"
              disabled={disabled}
              onClick={() => !disabled && setSelectedTime(t)}
              className={[
                "h-10 rounded-md border text-[12px] font-medium transition",
                "shadow-[0_1px_0_rgba(0,0,0,0.03)]",
                disabled
                  ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                  : active
                    ? "bg-[#0b2a66] text-white border-[#0b2a66]"
                    : "bg-white text-gray-800 border-gray-200 hover:border-[#0b2a66]",
              ].join(" ")}
              title={disabled ? "This time has already passed" : undefined}>
              {t}
            </button>
          );
        })}
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
        `}>
        <div className="flex h-[520px]">
          {/* LEFT */}
          <div className="w-[44%] bg-[#071a4a] text-white px-10 py-10">
            <div className="flex justify-center">
              <div className="h-16 w-16 rounded-full bg-white/20 grid place-items-center overflow-hidden">
                <div className="h-14 w-14 rounded-full bg-white/40" />
              </div>
            </div>

            <h2 className="mt-4 text-center text-[22px] leading-tight font-medium">
              Meet with our Founder - Ivan <br /> Fortuna
            </h2>

            <div className="mt-8">
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
          <div className="w-[56%] px-10 py-10">
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
                    }`}>
                    Online
                  </button>

                  <button
                    type="button"
                    onClick={() => setMeetingType("offline")}
                    className={`px-6 py-2 text-[12px] border-l border-gray-300 ${
                      meetingType === "offline"
                        ? "bg-gray-200 text-gray-900"
                        : "bg-white text-gray-600"
                    }`}>
                    Offline
                  </button>
                </div>
              </div>

              {/* Meeting location */}
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
                      className="text-[#0aa6a6] font-semibold hover:underline">
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

              {/* Date & Time */}
              {/* <div>
                <div className="font-semibold text-gray-800">Select Date &amp; Time</div>

                <div className="mt-1 text-gray-600">
                  Showing times for{" "}
                  <span className="font-semibold">{format(selectedDate, "MMMM d, yyyy")}</span>
                </div>

                {availableSlots.length > 0 ? (
                  <>
            
                    <div className="mt-4">
                      <div className="block text-[12px] font-semibold text-gray-800">
                        Select hour
                      </div>
                      <HourGrid hours={hourOptionsWithDisabled} />
                    </div>

                    {selectedHour ? (
                      <SlotGrid slots={filteredSlots} />
                    ) : (
                      <div className="mt-4 text-sm text-gray-500">
                        Please select an hour to view available slots.
                      </div>
                    )}

          
                    {selectedTime && (
                      <div className="mt-5 text-sm text-gray-700">
                        Available slot:{" "}
                        <span className="font-semibold">
                          {format(selectedDate, "MMM d, yyyy")} • {selectedTime}
                        </span>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="mt-4 text-sm text-gray-500">No available slots for this date.</div>
                )}
              </div> */}

              {/* Date & Time */}
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
                    {/* Select hour */}
                    <div className="mt-4">
                      <div className="block text-[12px] font-semibold text-gray-800">
                        Select hour
                      </div>
                      <HourGrid hours={hourOptionsWithDisabled} />
                    </div>

                    {/* ✅ Bottom section: Available slot label THEN show slots */}
                    {selectedHour ? (
                      <div className="mt-6">
                        <div className="text-[12px] font-semibold text-gray-800">
                          Available slot
                        </div>

                        {/* slots appear under the label */}
                        <SlotGrid slots={filteredSlots} />

                        {/* optional: show selected */}
                        {selectedTime && (
                          <div className="mt-4 text-sm text-gray-700">
                            Selected slot:{" "}
                            <span className="font-semibold">
                              {format(selectedDate, "MMM d, yyyy")} •{" "}
                              {selectedTime}
                            </span>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="mt-4 text-sm text-gray-500">
                        Please select an hour to view available slots.
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

        {/* close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 h-9 w-9 rounded-md hover:bg-gray-100 grid place-items-center"
          aria-label="Close"
          type="button">
          ✕
        </button>
      </div>
    </div>
  );
}
