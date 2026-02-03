import { useState } from "react";

function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[#f2f2f2] pb-3 mb-3">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full bg-white px-3 py-2 text-left text-[14px] font-[500] text-[#111] flex items-center justify-between"
      >
        <span>{title}</span>
        <span className="text-[#111]">{open ? "−" : "+"}</span>
      </button>

      {open && <div className="pt-2 px-3">{children}</div>}
    </div>
  );
}

export default function ProductsSidebar() {
  return (
    <div className="bg-[#fafafa] p-4">
      <div className="mb-7 pt-4">
        <h4 className="uppercase font-semibold text-[#111] relative inline-block">
          Categories
          <span className="absolute left-0 -bottom-1 h-[2px] w-[70px] bg-[#9c0]" />
        </h4>
      </div>

      <AccordionItem title="AlarmtechnikRSS" defaultOpen>
        <ul className="space-y-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <li key={i} className="relative pl-4">
              <span className="absolute left-1 top-[10px] h-[1px] w-[4px] bg-[#666]" />
              <a href="#" className="text-[14px] text-[#666] leading-[30px]">
                Brandmelder
              </a>
            </li>
          ))}
        </ul>
      </AccordionItem>

      <AccordionItem title="AlarmtechnikRSS">
        <ul className="space-y-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <li key={i} className="relative pl-4">
              <span className="absolute left-1 top-[10px] h-[1px] w-[4px] bg-[#666]" />
              <a href="#" className="text-[14px] text-[#666] leading-[30px]">
                Brandmelder
              </a>
            </li>
          ))}
        </ul>
      </AccordionItem>

      <AccordionItem title="AlarmtechnikRSS">
        <ul className="space-y-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <li key={i} className="relative pl-4">
              <span className="absolute left-1 top-[10px] h-[1px] w-[4px] bg-[#666]" />
              <a href="#" className="text-[14px] text-[#666] leading-[30px]">
                Brandmelder
              </a>
            </li>
          ))}
        </ul>
      </AccordionItem>
    </div>
  );
}
