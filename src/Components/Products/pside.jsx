import { useMemo, useState } from "react";

function SidebarTitle({ children }) {
  return (
    <div className="mb-[30px] pt-[20px]">
      <h4 className="text-[#111111] font-[600] uppercase relative inline-block">
        {children}
        <span className="absolute left-0 bottom-[-4px] h-[2px] w-[70px] bg-[#9c0]" />
      </h4>
    </div>
  );
}

function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[#f2f2f2] pb-[12px] mb-[12px] overflow-hidden">
      {/* button */}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen((v) => !v);
        }}
        className="w-full bg-white px-[10px] py-[10px] text-left flex items-center justify-between shadow-none"
      >
        <span className="text-[14px] font-[500] text-[#111111]">{title}</span>

        {/* right icon like bootstrap collapse icon area */}
        <span className="text-[#111111] text-[18px] leading-none select-none">
          {open ? "−" : "+"}
        </span>
      </button>

      {/* body */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pt-[6px] pb-0 px-0">{children}</div>
      </div>
    </div>
  );
}

function CategoryList({ items }) {
  return (
    <ul className="pl-0 m-0">
      {items.map((t, i) => (
        <li key={i} className="list-none relative pl-[16px]">
          <span className="absolute left-[4px] top-[14px] h-[1px] w-[4px] bg-[#666666]" />
          <a href="#" className="text-[14px] text-[#666666] leading-[30px]">
            {t}
          </a>
        </li>
      ))}
    </ul>
  );
}

function CheckItem({ id, label, defaultChecked = false }) {
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <label className="flex items-center gap-2 mb-[10px] select-none">
      {/* checkbox */}
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={() => setChecked((v) => !v)}
        className="
          h-[14px] w-[14px]
          rounded-[2px]
          border border-[#cfcfcf]
          accent-[#4d4444]
          focus:outline-none focus:ring-0
        "
      />
      <span className="text-[14px] text-[#666666] leading-[30px]">{label}</span>
    </label>
  );
}

/**
 * Pixel-perfect UI slider (Tailwind only).
 * If you want real range behavior, we can wire it with react-range later.
 */
function PriceSliderUI({ min = 4999, max = 20000, left = 25, right = 55 }) {
  // left/right = percentage positions just for UI demo
  return (
    <div className="mt-3">
      {/* track */}
      <div className="relative h-[20px] w-full">
        <div className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-[#d9d9d9]" />

        {/* selection (black) */}
        <div
          className="absolute top-1/2 h-[2px] -translate-y-1/2 bg-[#131313]"
          style={{ left: `${left}%`, width: `${right - left}%` }}
        />

        {/* handle left */}
        <div
          className="absolute top-1/2 -translate-y-1/2 h-[16px] w-[16px] rounded-full bg-[#131313]"
          style={{ left: `calc(${left}% - 8px)` }}
        />
        {/* handle right */}
        <div
          className="absolute top-1/2 -translate-y-1/2 h-[16px] w-[16px] rounded-full bg-[#131313]"
          style={{ left: `calc(${right}% - 8px)` }}
        />
      </div>

      {/* min/max text like screenshot bottom */}
      <div className="flex justify-between text-[12px] text-[#111111] mt-2">
        <span>${min}</span>
        <span>${max}</span>
      </div>
    </div>
  );
}

export default function ProductsSidebar() {
  const categoryItems = useMemo(
    () => ["Brandmelder", "Brandmelder", "Brandmelder", "Brandmelder", "Brandmelder", "Brandmelder"],
    []
  );

  const sizes = useMemo(() => ["5MP 2K", "6MP 4K", "7MP 4K", "8MP 4K", "9MP 4K"], []);
  const brands = useMemo(
    () => ["Dahua", "Hikvision", "Uniarch", "Uniview", "Uniview", "Hikvision"],
    []
  );

  return (
    <aside className="shop__sidebar bg-[#fafafa] p-[15px] sticky top-[20%] z-0">
      {/* Categories */}
      <div className="sidebar__categories">
        <SidebarTitle>Categories</SidebarTitle>

        <div className="categories__accordion">
          <AccordionItem title="AlarmtechnikRSS" defaultOpen>
            <div className="px-0">
              <CategoryList items={categoryItems} />
            </div>
          </AccordionItem>

          <AccordionItem title="AlarmtechnikRSS">
            <CategoryList items={categoryItems} />
          </AccordionItem>

          <AccordionItem title="AlarmtechnikRSS">
            <CategoryList items={categoryItems} />
          </AccordionItem>
        </div>
      </div>

      {/* Shop by price */}
      <div className="sidebar__filter">
        <SidebarTitle>Shop by price</SidebarTitle>

        <div className="filter-range-wrap mb-[30px] px-[20px]">
          <div className="form-group">
            <CheckItem id="range1" label="hasta $4,999" defaultChecked />
            <CheckItem id="range2" label="$5,000 - $9,999" defaultChecked />
            <CheckItem id="range3" label="$10,000 - $14,999" />
            <CheckItem id="range4" label="$15,000 - $19,999" />
            <CheckItem id="range5" label="más de $20,000" />
          </div>

          {/* Slider UI */}
          <PriceSliderUI min={4999} max={20000} left={22} right={55} />

          {/* Filter link like PHP */}
          <a href="#" className="inline-block mt-3 text-[14px] text-[#111111]">
            Filter
          </a>
        </div>
      </div>

      {/* Shop by size */}
      <div className="sidebar__sizes">
        <SidebarTitle>Shop by size</SidebarTitle>

        <div className="size__list px-[20px] mb-[30px]">
          {sizes.map((s, i) => (
            <CheckItem key={s} id={`size-${i}`} label={s} />
          ))}
        </div>
      </div>

      {/* Hersteller */}
      <div className="sidebar__color">
        <SidebarTitle>Hersteller</SidebarTitle>

        <div className="size__list color__list px-[20px]">
          {brands.map((b, i) => (
            <CheckItem key={`${b}-${i}`} id={`brand-${i}`} label={b} />
          ))}
        </div>
      </div>
    </aside>
  );
}
