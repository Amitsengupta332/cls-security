/* eslint-disable react-hooks/set-state-in-effect */
import { useMemo, useRef, useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// demo images (replace with your real images)
import thumb1 from "../../assets/img/product/details/thumb-1.jpg";
import thumb2 from "../../assets/img/product/details/thumb-2.jpg";
import thumb3 from "../../assets/img/product/details/thumb-3.jpg";
import thumb4 from "../../assets/img/product/details/thumb-4.jpg";

import big1 from "../../assets/img/product/details/product-1.webp";
import big2 from "../../assets/img/product/details/product-2.webp";
import big3 from "../../assets/img/product/details/product-3.png";
import big4 from "../../assets/img/product/details/product-4.webp";

export default function ProductDetailsMain() {
  const gallery = useMemo(
    () => [
      { thumb: thumb1, big: big1 },
      { thumb: thumb2, big: big2 },
      { thumb: thumb3, big: big3 },
      { thumb: thumb4, big: big4 },
    ],
    [],
  );

  const product = useMemo(
    () => ({
      title:
        "HIKVISION DS-2CD2123G2-IU(2.8mm) IP Kamera HIKVISION DS-2CD2123G2-IU(2.8mm) IP Kamera HIKVISION DS-2CD2123G2-IU(2.8mm) IP Kamera",
      brand: "HIKVISION",
      sku: "CLS100290968",
      price: "169.99 €",
      oldPrice: "3.099,",
      description:
        "Entdecken Sie die Spitzentechnologie der Uniview IPC2128LE-ADF28KM-G-NB 8MP 2.8mm EasyStar IP Bullet Überwachungskamera, eine ideale Lösung für Ihre Videoüberwachung. Entworfen, um außergewöhnliche Leistung in Nachtüberwachung zu liefern, bietet diese Kamera gestochen scharfe Farbbilder und intelligente Bewegungserkennung an.",
    }),
    [],
  );

  // active thumb + slider sync
  const [active, setActive] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.activeIndex !== active) {
      swiperRef.current.slideTo(active);
    }
  }, [active]);

  // ✅ Quantity state + helpers
  const MIN_QTY = 0;
  const MAX_QTY = 999; // set to whatever you want

  // ✅ pop animation trigger when qty changes
  // const [qtyPulse, setQtyPulse] = useState(false);
  // useEffect(() => {
  //   // eslint-disable-next-line react-hooks/set-state-in-effect
  //   setQtyPulse(true);
  //   const t = setTimeout(() => setQtyPulse(false), 140);
  //   return () => clearTimeout(t);
  // }, [qty]);

  // const clampQty = (n) => Math.max(MIN_QTY, Math.min(MAX_QTY, n));

  // const decQty = () => setQty((v) => clampQty(v - 1));
  // const incQty = () => setQty((v) => clampQty(v + 1));

  // const onQtyInput = (e) => {
  //   // allow empty while typing
  //   const raw = e.target.value;
  //   if (raw === "") return setQty(MIN_QTY);
  //   const n = Number(raw.replace(/[^\d]/g, ""));
  //   if (!Number.isFinite(n)) return;
  //   setQty(clampQty(n));
  // };

  // const onQtyKeyDown = (e) => {
  //   if (e.key === "ArrowUp") {
  //     e.preventDefault();
  //     incQty();
  //   }
  //   if (e.key === "ArrowDown") {
  //     e.preventDefault();
  //     decQty();
  //   }
  // };

  // const onAddToCart = () => {
  //   // hook this to your cart logic
  //   console.log("Add to cart", { qty, sku: product.sku });
  // };

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
      {/* LEFT: Gallery */}
      <div className="overflow-hidden">
        <div className="flex">
          {/* thumbs — width:22% like CSS */}
          <div className="w-[22%] overflow-y-auto">
            {gallery.map((g, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActive(idx)}
                className="relative block w-full mb-[20px] cursor-pointer
                           transition-transform duration-200 active:scale-[0.99]">
                <img src={g.thumb} alt="" className="min-w-full block" />

                {/* replicate .pt.active::after opacity:0.3 */}
                <span
                  className={`absolute inset-0 bg-black transition-all duration-300 ${
                    active === idx ? "opacity-30" : "opacity-0"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* big slider — width: calc(78% - 20px), margin-left:20px */}
          <div className="ml-[20px] w-[calc(78%_-_20px)] relative overflow-hidden">
            {/* nav buttons like owl (with animation) */}
            <button
              type="button"
              aria-label="Prev"
              className="pd-prev absolute left-[10px] top-1/2 z-10 -translate-y-1/2
                         h-[40px] w-[40px] rounded-full bg-white/70 text-[#111111]
                         text-[22px] leading-[44px] text-center
                         transition-all duration-200 hover:bg-white active:scale-[0.96]">
              ‹
            </button>

            <button
              type="button"
              aria-label="Next"
              className="pd-next absolute right-[10px] top-1/2 z-10 -translate-y-1/2
                         h-[40px] w-[40px] rounded-full bg-white/70 text-[#111111]
                         text-[22px] leading-[44px] text-center
                         transition-all duration-200 hover:bg-white active:scale-[0.96]">
              ›
            </button>

            <Swiper
              modules={[Navigation, Pagination]}
              onSwiper={(s) => (swiperRef.current = s)}
              onSlideChange={(s) => setActive(s.activeIndex)}
              slidesPerView={1}
              spaceBetween={0}
              speed={300}
              navigation={{ prevEl: ".pd-prev", nextEl: ".pd-next" }}
              pagination={{ clickable: true }}
              className="w-full">
              {gallery.map((g, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={g.big}
                    alt="Product"
                    className="w-full block select-none"
                    draggable={false}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* pagination like your CSS */}
            <style>{`
              .swiper-pagination {
                margin-top: 20px !important;
                position: relative !important;
              }
              .swiper-pagination-bullet {
                width: 12px;
                height: 12px;
                opacity: 0.5;
              }
              .swiper-pagination-bullet-active {
                opacity: 1;
              }
            `}</style>
          </div>
        </div>
      </div>

      {/* RIGHT: Details */}
      <div className="product__details__text">
        <div className="bg-white transition-all duration-300">
          <div className="px-[10px]">
            <div className="p-3">
              {/* title */}
              <h3 className="mt-0 text-[20px] text-[rgba(80,95,107)] font-[500] leading-[28px]">
                {product.title}
              </h3>

              <span className="block mt-1 text-[14px] text-black">
                Brand: {product.brand}
              </span>

              {/* rating + sku */}
              <div
                className="
                  mt-2 flex items-center justify-between
                  max-w-[40%]
                  max-[1300px]:max-w-[40%]
                  max-[992px]:max-w-[35%]
                  max-[767px]:max-w-[40%]
                ">
                <ul className="my-2 flex items-center gap-[3px] text-[#868686]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <li key={i} className="leading-none">
                      <FaStar size={14} color="#868686" />
                    </li>
                  ))}
                </ul>

                <div className="text-[#868686] text-[14px]">
                  <span>{product.sku}</span>
                </div>
              </div>

              {/* pricecontainer */}
              <div
                className="
                  mt-1 flex items-center justify-between
                  max-w-[40%]
                  max-[1300px]:max-w-[50%]
                  max-[992px]:max-w-[35%]
                  max-[767px]:max-w-[40%]
                  max-[600px]:max-w-[43%]
                  max-[500px]:max-w-[50%]
                ">
                <div className="inline-grid text-left">
                  <span className="font-bold text-[35px] max-[1200px]:text-[25px] max-[767px]:text-[25px] max-[320px]:text-[16px]">
                    {product.price}
                  </span>
                  <span className="text-[11px] leading-[11px]">
                    <span className="hidden">Inkl</span>{" "}
                    <span className="text-[#9c0]">19% MwSt.</span>
                  </span>
                </div>

                <div className="text-left [font:17px/20px_Arial,Helvetica,sans-serif] max-[320px]:text-[15px]">
                  <span className="block text-[12px] leading-[12px]">
                    Statt
                  </span>
                  <span className="text-red-500 line-through">
                    <span className="text-black">€</span>
                    <span className="text-black">{product.oldPrice}</span>
                    <span>-</span>
                  </span>
                </div>
              </div>

              {/* description */}
              <div className="short-description mt-3 text-[14px] text-black">
                <p>{product.description}</p>
              </div>

              {/* ✅ Qty + Cart (functioning + animated, same pixel sizing) */}
              <QtyCartRow />

              {/* widget */}
              {/* <div className="product__details__widget mt-8 border-t border-[#ebebeb] pt-[35px]">
                <ul className="p-0">
                  <li className="list-none mb-[10px]">
                    <span className="inline-block text-[14px] font-[600] text-[#111111] w-[150px] float-left">
                      Availability:
                    </span>

                    <div className="overflow-hidden">
                      <label className="block pl-[20px] text-[14px] text-[#666666] relative cursor-pointer">
                        In Stock
                        <input type="checkbox" defaultChecked className="absolute invisible" />
                        <span className="absolute left-0 top-[5px] h-[10px] w-[10px] border border-[#444444] rounded-[2px]" />
                        <span className="absolute left-0 top-[5px] h-[10px] w-[10px]">
                          <span
                            className="
                              absolute left-0 top-[-2px]
                              w-[11px] h-[5px]
                              border border-white
                              border-t-0 border-l-0
                              rotate-[127deg]
                              opacity-100
                            "
                            style={{ borderWidth: "1.5px" }}
                          />
                        </span>
                      </label>
                    </div>
                  </li>

                <li className="list-none mb-[10px] clear-both">
  <span className="inline-block text-[14px] font-[600] text-[#111111] w-[150px] float-left">
    Available color:
  </span>

  <div className="inline-flex items-center gap-[20px] pl-[10px]">
    {[
      { id: "red", bg: "#e31e2f" },
      { id: "black", bg: "#111111" },
      { id: "grey", bg: "#e4aa8b" },
    ].map((c, i) => (
      <label key={c.id} className="relative inline-flex items-center cursor-pointer">
        <input
          type="radio"
          name="color"
          defaultChecked={i === 0}
          className="peer sr-only"
        />

   
        <span
          className="
            relative
            h-[20px] w-[20px]
            rounded-full
            flex items-center justify-center
          "
          style={{ background: c.bg }}
        >
   
          <span
            className="
              hidden peer-checked:block
              text-white text-[12px] font-bold leading-none
            "
          >
            ✓
          </span>
        </span>
      </label>
    ))}
  </div>
</li>


                  <li className="list-none mb-[10px] clear-both">
                    <span className="inline-block text-[14px] font-[600] text-[#111111] w-[150px] float-left">
                      Available size:
                    </span>

                    <div className="inline-flex uppercase text-[14px] text-[#666666]">
                      {["xs", "s", "m", "l"].map((s, i) => (
                        <label
                          key={s}
                          className={`mr-[10px] inline-block cursor-pointer ${
                            i === 0 ? "text-[#ca1515]" : ""
                          }`}
                        >
                          <input type="radio" className="absolute invisible" />
                          {s}
                        </label>
                      ))}
                    </div>
                  </li>

                  <li className="list-none mb-[10px] clear-both">
                    <span className="inline-block text-[14px] font-[600] text-[#111111] w-[150px] float-left">
                      Promotions:
                    </span>
                    <p className="text-[14px] text-[#666666]">Free shipping</p>
                  </li>
                </ul>
              </div> */}

              {/* widget (Product-details.php like) */}
              <div className="mt-8 border-t border-[#ebebeb] pt-[35px]">
                <ul className="p-0 m-0 space-y-[10px]">
                  {/* Availability */}
                  <li className="flex items-start">
                    <span className="w-[150px] shrink-0 text-[14px] font-[600] text-[#111111]">
                      Availability:
                    </span>

                    <label className="relative inline-flex items-center gap-[10px] text-[14px] text-[#666666] cursor-pointer">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="peer sr-only"
                      />

                      {/* box */}
                      <span className="relative h-[10px] w-[10px] border border-[#444444] rounded-[2px] mt-[1px]">
                        <span className="hidden peer-checked:block absolute left-[1px] top-[-2px] text-[#ca1515] text-[10px] leading-none">
                          ✓
                        </span>
                      </span>

                      <span>In Stock</span>
                    </label>
                  </li>

                  {/* Available color */}
                  <li className="flex items-start">
                    <span className="w-[150px] shrink-0 text-[14px] font-[600] text-[#111111]">
                      Available color:
                    </span>

                    <div className="inline-flex items-center gap-[20px]">
                      {[
                        { id: "c-red", bg: "#e31e2f" },
                        { id: "c-black", bg: "#111111" },
                        { id: "c-grey", bg: "#e4aa8b" },
                      ].map((c, i) => (
                        <label
                          key={c.id}
                          className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="color"
                            defaultChecked={i === 0}
                            className="peer sr-only"
                          />

                          <span
                            className="
                relative h-[20px] w-[20px] rounded-full
                flex items-center justify-center
                after:content-['✓']
                after:absolute
                after:text-white after:text-[12px] after:font-bold after:leading-none
                after:opacity-0
                peer-checked:after:opacity-100
                transition-opacity
              "
                            style={{ background: c.bg }}
                          />
                        </label>
                      ))}
                    </div>
                  </li>

                  {/* Available size */}
                  <li className="flex items-start">
                    <span className="w-[150px] shrink-0 text-[14px] font-[600] text-[#111111]">
                      Available size:
                    </span>

                    <div className="inline-flex items-center gap-[16px] uppercase text-[14px] text-[#666666]">
                      {["xs", "s", "m", "l"].map((s, i) => (
                        <label
                          key={s}
                          className={`cursor-pointer ${i === 0 ? "text-[#ca1515]" : ""}`}>
                          <input
                            type="radio"
                            name="size"
                            defaultChecked={i === 0}
                            className="sr-only"
                          />
                          {s}
                        </label>
                      ))}
                    </div>
                  </li>

                  {/* Promotions */}
                  <li className="flex items-start">
                    <span className="w-[150px] shrink-0 text-[14px] font-[600] text-[#111111]">
                      Promotions:
                    </span>

                    <p className="m-0 text-[14px] text-[#666666]">
                      Free shipping
                    </p>
                  </li>
                </ul>
              </div>

              {/* end widget */}
            </div>
          </div>
        </div>
      </div>
      {/* end right */}
    </div>
  );
}

function CartIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true">
      <path
        d="M3 3h2l2.2 11.2a2 2 0 0 0 2 1.6h8.6a2 2 0 0 0 2-1.6L23 7H6.2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="20" r="1.6" fill="currentColor" />
      <circle cx="18" cy="20" r="1.6" fill="currentColor" />
    </svg>
  );
}

export function QtyCartRow() {
  const [qty, setQty] = useState(0);

  // number pop + button “tap” animation triggers
  const [bump, setBump] = useState(false);
  const [tap, setTap] = useState(null); // "dec" | "inc" | null

  const dec = () => {
    setTap("dec");
    setQty((q) => Math.max(0, q - 1));
  };

  const inc = () => {
    setTap("inc");
    setQty((q) => q + 1);
  };

  useEffect(() => {
    setBump(true);
    const t = setTimeout(() => setBump(false), 140);
    return () => clearTimeout(t);
  }, [qty]);

  useEffect(() => {
    if (!tap) return;
    const t = setTimeout(() => setTap(null), 120);
    return () => clearTimeout(t);
  }, [tap]);

  return (
    <div className="mt-6 flex items-center gap-[20px]">
      {/* Qty bar */}
      <div
        className="
          h-[40px] w-[240px]
          border-[2px] border-[#9c0]
          bg-[#9c0]
          skew-x-[-12deg]
          flex items-center
          select-none
          overflow-hidden
        ">
        {/* minus */}
        <button
          type="button"
          onClick={dec}
          className={`
            h-full w-[38px]
            flex items-center justify-center
            text-white text-[18px] leading-none
            transition-transform duration-150
            active:scale-[0.96]
            ${tap === "dec" ? "scale-[0.92]" : "scale-100"}
          `}
          aria-label="Decrease quantity">
          −
        </button>

        {/* number */}
        <div className="flex-1 flex items-center justify-center">
          <span
            className={`
              skew-x-[12deg]
              text-white font-bold
              text-[16px] leading-none
              transition-transform duration-150
              ${bump ? "scale-[1.10]" : "scale-100"}
            `}>
            {qty}
          </span>
        </div>

        {/* plus */}
        <button
          type="button"
          onClick={inc}
          className={`
            h-full w-[38px]
            flex items-center justify-center
            text-white text-[18px] leading-none
            transition-transform duration-150
            active:scale-[0.96]
            ${tap === "inc" ? "scale-[0.92]" : "scale-100"}
          `}
          aria-label="Increase quantity">
          +
        </button>
      </div>

      {/* Cart button (same size like screenshot) */}
      <button
        type="button"
        className="
          relative
          h-[40px] w-[110px]
          border-[2px] border-[#9c0]
          bg-white
          skew-x-[-12deg]
          overflow-hidden
          flex items-center justify-center
          group
        "
        aria-label="Add to cart">
        {/* green fill animation like php :before */}
        <span
          className="
            absolute inset-0
            w-0
            bg-[#8cbb00]
            transition-all duration-300
            group-hover:w-full
          "
        />
        <span className="relative skew-x-[12deg] flex items-center justify-center">
          <CartIcon className="h-[22px] w-[22px] text-[#9c0] group-hover:text-white transition-colors duration-200" />
        </span>
      </button>
    </div>
  );
}

// function CartIcon({ className = "" }) {
//   // Simple clean outline cart icon (proper size + center)
//   return (
//     <svg
//       className={className}
//       viewBox="0 0 24 24"
//       fill="none"
//       aria-hidden="true"
//     >
//       <path
//         d="M3 3h2l2.2 11.2a2 2 0 0 0 2 1.6h8.6a2 2 0 0 0 2-1.6L23 7H6.2"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <circle cx="10" cy="20" r="1.6" fill="currentColor" />
//       <circle cx="18" cy="20" r="1.6" fill="currentColor" />
//     </svg>
//   );
// }

// export function QtyCartRow() {
//   const [qty, setQty] = useState(0);
//   const [bump, setBump] = useState(false);

//   const dec = () => setQty((q) => Math.max(0, q - 1));
//   const inc = () => setQty((q) => q + 1);

//   // tiny "pop" animation on number change
//   useEffect(() => {
//     // eslint-disable-next-line react-hooks/set-state-in-effect
//     setBump(true);
//     const t = setTimeout(() => setBump(false), 140);
//     return () => clearTimeout(t);
//   }, [qty]);

//   return (
//     <div className="mt-6 flex items-center gap-[20px]">
//       {/* Qty bar */}
//       <div
//         className="
//           h-[40px] w-[240px]
//           border-[2px] border-[#9c0]
//           bg-[#9c0]
//           skew-x-[-12deg]
//           flex items-center
//           select-none
//         "
//       >
//         {/* minus */}
//         <button
//           type="button"
//           onClick={dec}
//           className="
//             h-full w-[38px]
//             flex items-center justify-center
//             text-white text-[18px] leading-none
//             active:scale-[0.96]
//             transition-transform
//           "
//           aria-label="Decrease quantity"
//         >
//           −
//         </button>

//         {/* number */}
//         <div className="flex-1 flex items-center justify-center">
//           <span
//             className={`
//               skew-x-[12deg]
//               text-white font-bold
//               text-[16px] leading-none
//               transition-transform duration-150
//               ${bump ? "scale-[1.08]" : "scale-100"}
//             `}
//           >
//             {qty}
//           </span>
//         </div>

//         {/* plus */}
//         <button
//           type="button"
//           onClick={inc}
//           className="
//             h-full w-[38px]
//             flex items-center justify-center
//             text-white text-[18px] leading-none
//             active:scale-[0.96]
//             transition-transform
//           "
//           aria-label="Increase quantity"
//         >
//           +
//         </button>
//       </div>

//       {/* Cart button (outline box) */}
//       <button
//         type="button"
//         className="
//           h-[40px] w-[120px]
//           border-[2px] border-[#9c0]
//           bg-white
//           skew-x-[-12deg]
//           flex items-center justify-center
//           transition-all duration-200
//           hover:bg-[#8cbb00]
//           active:scale-[0.98]
//           group
//         "
//         aria-label="Add to cart"
//       >
//         <span className="skew-x-[12deg] flex items-center justify-center">
//           <CartIcon className="h-[22px] w-[22px] text-[#9c0] group-hover:text-white transition-colors" />
//         </span>
//       </button>
//     </div>
//   );
// }
