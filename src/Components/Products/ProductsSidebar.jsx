// ProductsSidebar.jsx
// ✅ Pixel-perfect sidebar (PHP → React + Tailwind)
// ✅ Accordion included
// ✅ REAL draggable range slider (no fake UI)
// ✅ Checkbox presets sync with slider (union range)
// ✅ Tooltip always visible (like bootstrap-slider "always")
//
// Install (once):
// npm i react-range

import { useMemo, useState, useCallback, useEffect } from "react";
import { Range, getTrackBackground } from "react-range";

const MIN = 4999;
const MAX = 20000;
const STEP = 1000;

// PHP presets (checkbox list)
const PRICE_PRESETS = [
  { id: "range1", label: "hasta $4,999", from: 4999, to: 4999 },
  { id: "range2", label: "$5,000 - $9,999", from: 5000, to: 9999 },
  { id: "range3", label: "$10,000 - $14,999", from: 10000, to: 14999 },
  { id: "range4", label: "$15,000 - $19,999", from: 15000, to: 19999 },
  { id: "range5", label: "más de $20,000", from: 20000, to: 20000 },
];

function SidebarTitle({ children }) {
  return (
    <div className="sidebar-title mb-[30px] pt-[20px]">
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
    <div className="categories__accordion-card border-b border-[#f2f2f2] pb-[12px] mb-[12px] overflow-hidden">
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen((v) => !v);
        }}
        className="accordion-button w-full bg-white px-[10px] py-[10px] text-left flex items-center justify-between shadow-none">
        <span className="block text-[14px] font-[500] text-[#111111]">
          {title}
        </span>

        {/* PHP uses icomoon ::after; here we mimic with +/- */}
        <span className="text-[#111111] text-[18px] leading-none select-none">
          {open ? "−" : "+"}
        </span>
      </button>

      <div
        className={`transition-[max-height,opacity] duration-300 ease-in-out ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}>
        <div className="card-body pt-[6px] pb-0 px-0">{children}</div>
      </div>
    </div>
  );
}

function CategoryList({ items }) {
  return (
    <ul className="m-0 p-0">
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

function CheckRow({ id, label, checked, onChange }) {
  return (
    <div className="form-check mb-[10px]">
      <label htmlFor={id} className="flex items-center gap-2 select-none">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="
            form-check-input
            h-[14px] w-[14px]
            rounded-[2px]
            border border-[#cfcfcf]
            accent-[#4d4444]
            focus:outline-none focus:ring-0
          "
        />
        <span className="form-check-label text-[14px] text-[#666666] leading-[30px]">
          {label}
        </span>
      </label>
    </div>
  );
}

function PriceRangeSlider({ values, setValues }) {
  const [minVal, maxVal] = values;

  return (
    <div className="slider-wrapper slider-gaia mt-3">
      <div className="w-full">
        <Range
          values={values}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={(vals) => setValues(vals)}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              className="slider slider-horizontal w-full h-[20px] flex"
              style={{ width: "100%" }}>
              <div
                ref={props.ref}
                className="slider-track relative w-full h-[2px] self-center"
                style={{
                  background: getTrackBackground({
                    values,
                    colors: ["#d9d9d9", "#131313", "#d9d9d9"],
                    min: MIN,
                    max: MAX,
                  }),
                }}>
                {children}
              </div>
            </div>
          )}
          // renderThumb={({ props, index, value }) => (
          //   <div
          //     {...props}
          //     className="slider-handle outline-none"
          //     style={{
          //       ...props.style,
          //       height: 16,
          //       width: 16,
          //       borderRadius: 9999,
          //       background: index === 0 ? "red" : "#131313", // left handle red like your CSS nth-child(odd)
          //       boxShadow: "none",
          //       border: "none",
          //     }}
          //   >
          //     {/* tooltip always visible */}
          //     <div className="absolute -top-[28px] left-1/2 -translate-x-1/2">
          //       <div className="tooltip in bottom opacity-100">
          //         <div className="tooltip-inner text-[12px] text-black px-[8px] py-[3px] rounded-[4px] bg-transparent">
          //           {value}
          //         </div>
          //       </div>
          //     </div>
          //   </div>
          // )}

          renderThumb={({ props, index, value }) => {
            const { key, ...rest } = props;

            return (
              <div
                key={key} // ✅ key আলাদা করে দিলাম
                {...rest} // ✅ বাকিগুলো spread
                className="slider-handle outline-none"
                style={{
                  ...rest.style,
                  height: 16,
                  width: 16,
                  borderRadius: 9999,
                  background: index === 0 ? "red" : "#131313",
                  boxShadow: "none",
                  border: "none",
                }}>
                {/* tooltip */}
                <div className="absolute -top-[28px] left-1/2 -translate-x-1/2">
                  <div className="tooltip in bottom opacity-100">
                    <div className="tooltip-inner text-[12px] text-black px-[8px] py-[3px] rounded-[4px] bg-transparent">
                      {value}
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        />

        {/* Bottom min/max like screenshot style */}
        <div className="flex justify-between mt-2 text-[12px] text-[#111111]">
          <span>${minVal}</span>
          <span>${maxVal}</span>
        </div>
      </div>
    </div>
  );
}

export default function ProductsSidebar() {
  // Demo content like your PHP
  const categoryItems = useMemo(
    () => Array.from({ length: 6 }).map(() => "Brandmelder"),
    [],
  );

  const sizes = useMemo(
    () => ["5MP 2K", "6MP 4K", "7MP 4K", "8MP 4K", "9MP 4K"],
    [],
  );

  const brands = useMemo(
    () => ["Dahua", "Hikvision", "Uniarch", "Uniview", "Uniview", "Hikvision"],
    [],
  );

  // Slider values (like PHP data-slider-value="4999,9999")
  const [range, setRange] = useState([4999, 9999]);

  // Price preset checkboxes
  const [presetChecked, setPresetChecked] = useState(() => ({
    range1: true,
    range2: true,
    range3: false,
    range4: false,
    range5: false,
  }));

  // When presets change → set slider to union of selected preset ranges
  useEffect(() => {
    const active = PRICE_PRESETS.filter((p) => presetChecked[p.id]);
    if (!active.length) return;

    const nextMin = Math.min(...active.map((p) => p.from));
    const nextMax = Math.max(...active.map((p) => p.to));

    // clamp + snap to STEP
    const clamp = (v) => Math.min(MAX, Math.max(MIN, v));
    const snap = (v) => Math.round(v / STEP) * STEP;

    const newRange = [snap(clamp(nextMin)), snap(clamp(nextMax))];

    // Defer state update using a microtask to avoid cascading renders
    queueMicrotask(() => {
      setRange(newRange);
    });
  }, [presetChecked]);

  const togglePreset = useCallback((id, checked) => {
    setPresetChecked((s) => ({ ...s, [id]: checked }));
  }, []);

  // Sizes/Brands checkbox state (optional)
  const [sizeChecked, setSizeChecked] = useState(() =>
    Object.fromEntries(sizes.map((_, i) => [`size-${i}`, false])),
  );
  const [brandChecked, setBrandChecked] = useState(() =>
    Object.fromEntries(brands.map((_, i) => [`brand-${i}`, false])),
  );

  return (
    <aside className="shop__sidebar bg-[#fafafa] p-[15px]  sticky top-[20%] z-0">
      {/* Categories */}
      <div className="sidebar__categories mb-5">
        <SidebarTitle>Categories</SidebarTitle>

        <div className="categories__accordion">
          <AccordionItem title="AlarmtechnikRSS" defaultOpen>
            <CategoryList items={categoryItems} />
          </AccordionItem>

          <AccordionItem title="AlarmtechnikRSS">
            <CategoryList items={categoryItems} />
          </AccordionItem>

          <AccordionItem title="AlarmtechnikRSS">
            <CategoryList items={categoryItems} />
          </AccordionItem>
        </div>
      </div>

      {/* Shop by Price */}
      <div className="sidebar__filter">
        <SidebarTitle>Shop by price</SidebarTitle>

        <div className="filter-range-wrap mt-10 px-[20px]">
          <div className="form-group mb-10">
            {PRICE_PRESETS.map((p) => (
              <CheckRow
                key={p.id}
                id={p.id}
                label={p.label}
                checked={!!presetChecked[p.id]}
                onChange={(checked) => togglePreset(p.id, checked)}
              />
            ))}
          </div>

          {/* ✅ Real slider */}
          <PriceRangeSlider values={range} setValues={setRange} />

          {/* Filter link like PHP */}
          {/* <a href="#" className="inline-block mt-3 text-[14px] text-[#111111]">
            Filter
          </a> */}
        </div>
      </div>

      {/* Shop by size */}
      <div className="sidebar__sizes">
        <SidebarTitle>Shop by size</SidebarTitle>

        <div className="size__list px-[20px] mb-[30px]">
          {sizes.map((s, i) => {
            const id = `size-${i}`;
            return (
              <CheckRow
                key={id}
                id={id}
                label={s}
                checked={!!sizeChecked[id]}
                onChange={(checked) =>
                  setSizeChecked((st) => ({ ...st, [id]: checked }))
                }
              />
            );
          })}
        </div>
      </div>

      {/* Hersteller */}
      <div className="sidebar__color">
        <SidebarTitle>Hersteller</SidebarTitle>

        <div className="size__list color__list px-[20px]">
          {brands.map((b, i) => {
            const id = `brand-${i}`;
            return (
              <CheckRow
                key={id}
                id={id}
                label={b}
                checked={!!brandChecked[id]}
                onChange={(checked) =>
                  setBrandChecked((st) => ({ ...st, [id]: checked }))
                }
              />
            );
          })}
        </div>
      </div>
    </aside>
  );
}
