import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function Qty() {
  const [qty, setQty] = useState(0);

  return (
    <div className="inline-flex h-[40px] items-stretch border-2 border-[#9c0] bg-[#9c0] skew-x-[-12deg] px-[15px]">
      <button
        type="button"
        onClick={() => setQty((q) => Math.max(0, q - 1))}
        className="flex h-[38px] w-[38px] items-center justify-center bg-transparent text-white"
      >
        <FaMinus size={10} />
      </button>

      <input
        value={qty}
        readOnly
        className="h-full w-10 bg-[#9c0] text-center text-white outline-none"
      />

      <button
        type="button"
        onClick={() => setQty((q) => q + 1)}
        className="flex h-[38px] w-[38px] items-center justify-center bg-transparent text-white"
      >
        <FaPlus size={10} />
      </button>
    </div>
  );
}
