// export default function ProductsToolbar() {
//   return (
//     <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
//       {/* Left side */}
//       <div className="flex items-center gap-4">
//         <div className="flex gap-2">
//           <span className="h-[28px] w-[28px] rounded bg-black" />
//           <span className="h-[28px] w-[28px] rounded bg-black" />
//         </div>

//         <div className="text-[16px] text-[#333]">
//           Artikel <span className="text-[#FF5100]">1</span>-
//           <span className="text-[#FF5100]">12</span> von{" "}
//           <span className="text-[#FF5100]">67</span>
//         </div>
//       </div>

//       {/* Right side */}
//       <div className="flex items-center justify-start md:justify-end gap-3">
//         <label className="text-[#333] text-[15px]" htmlFor="sorter">
//           Sortieren nach
//         </label>

//         <select
//           id="sorter"
//           className="border border-[#ccc] bg-white px-3 py-1 text-[15px] outline-none">
//           <option value="position">Reihenfolge</option>
//           <option value="name">Artikelname</option>
//           <option value="price">Preis</option>
//         </select>

//         <button type="button" className="text-black text-[18px]" title="Sort">
//           ▲
//         </button>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { FaThLarge, FaList, FaArrowCircleUp } from "react-icons/fa";

export default function ProductsToolbar() {
  const [view, setView] = useState("grid");

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      {/* Left side */}
      <div className="flex items-center gap-4">
        {/* View Toggle */}
        <div className="flex gap-2 border border-[#ccc] rounded p-1">
          {/* Grid */}
          <button
            onClick={() => setView("grid")}
            className={`p-1 rounded transition ${
              view === "grid"
                ? "bg-black text-white"
                : "text-black hover:bg-gray-200"
            }`}
            title="Grid View">
            <FaThLarge size={16} />
          </button>

          {/* List */}
          <button
            onClick={() => setView("list")}
            className={`p-1 rounded transition ${
              view === "list"
                ? "bg-black text-white"
                : "text-black hover:bg-gray-200"
            }`}
            title="List View">
            <FaList size={16} />
          </button>
        </div>

        {/* Text */}
        <div className="text-[16px] text-[#333]">
          Artikel <span className="text-[#FF5100]">1</span>-
          <span className="text-[#FF5100]">12</span> von{" "}
          <span className="text-[#FF5100]">67</span>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center justify-start md:justify-end gap-3">
        <label className="text-[#333] text-[15px]" htmlFor="sorter">
          Sortieren nach
        </label>

        <select
          id="sorter"
          className="border border-[#ccc] bg-white px-3 py-1 text-[15px] outline-none">
          <option value="position">Reihenfolge</option>
          <option value="name">Artikelname</option>
          <option value="price">Preis</option>
        </select>

        <button
          type="button"
          className="text-black text-[18px] hover:text-[#FF5100] transition"
          title="Sort">
          {/* ▲ */}
          <FaArrowCircleUp size={18} />
        </button>
      </div>
    </div>
  );
}
