/* eslint-disable no-unused-vars */
import { useMemo, useState } from "react";
import { FaPlus, FaMinus, FaPhoneAlt, FaStar } from "react-icons/fa";
import productImg from "../../assets/img/products/hikvision.webp";

export default function ProductsGrid({ limit }) {
  const products = useMemo(
    () => [
      {
        brand: "https://cls-security.de/pub/media/brand/Hikvision.png",
        image: productImg,
        title: "HIKVISION DS-2CD2123G2-IU(2.8mm) IP Kamera",
        sku: "CLS100290968",
        price: "169.99 €",
        oldPrice: "3.099",
        type: "normal",
        link: "#",
      },
      {
        brand: "https://cls-security.de/pub/media/brand/Hikvision.png",
        image: productImg,
        title: "HIKVISION DS-2CD2143G2-IU(2.8mm) 4MP IP Kamera",
        sku: "CLS100290969",
        price: "189.99 €",
        oldPrice: "3.199",
        type: "normal",
        link: "#",
      },
      {
        brand: "https://cls-security.de/pub/media/brand/Hikvision.png",
        image: productImg,
        title: "HIKVISION DS-2CD2347G2H-LIU(2.8mm) ColorVu Kamera",
        sku: "CLS100291010",
        price: "229.99 €",
        oldPrice: "3.499",
        type: "normal",
        link: "#",
      },
      {
        brand: "https://cls-security.de/pub/media/brand/Hikvision.png",
        image: productImg,
        title: "HIKVISION 8-Kanal NVR Rekorder (Preis auf Anfrage)",
        sku: "CLS100291011",
        phone: "0621 7163591",
        type: "call",
        link: "#",
      },
      {
        brand: "https://cls-security.de/pub/media/brand/Hikvision.png",
        image: productImg,
        title: "HIKVISION DS-2CD2043G2-IU (2.8mm) Bullet Kamera",
        sku: "CLS100291012",
        price: "159.99 €",
        oldPrice: "2.999",
        type: "normal",
        link: "#",
      },
      {
        brand: "https://cls-security.de/pub/media/brand/Hikvision.png",
        image: productImg,
        title: "HIKVISION DS-2CD2T43G2-4I (2.8mm) IP Bullet Kamera",
        sku: "CLS100291013",
        price: "199.99 €",
        oldPrice: "3.299",
        type: "normal",
        link: "#",
      },
      {
        brand: "https://cls-security.de/pub/media/brand/Hikvision.png",
        image: productImg,
        title: "HIKVISION DS-2CD2387G2H-LIU (2.8mm) 8MP ColorVu",
        sku: "CLS100291014",
        price: "279.99 €",
        oldPrice: "3.799",
        type: "normal",
        link: "#",
      },
      {
        brand: "https://cls-security.de/pub/media/brand/Hikvision.png",
        image: productImg,
        title: "HIKVISION PoE Switch 8 Port (Preis auf Anfrage)",
        sku: "CLS100291015",
        phone: "0621 7163591",
        type: "call",
        link: "#",
      },
      {
        brand: "https://cls-security.de/pub/media/brand/Hikvision.png",
        image: productImg,
        title: "HIKVISION 4-Kanal NVR Rekorder",
        sku: "CLS100291016",
        price: "149.99 €",
        oldPrice: "2.599",
        type: "normal",
        link: "#",
      },
    ],
    []
  );

  // ✅ if limit is given show limited products (Home), else show all (/products)
  const list = typeof limit === "number" ? products.slice(0, limit) : products;

  return (
    <div
      className="
        grid grid-cols-1 gap-y-8
        sm:grid-cols-2
        xl:grid-cols-3
      "
    >
      {list.map((p, idx) => (
        <div key={idx} className="p-[5px]">
          <div className="h-full bg-white px-[10px] transition-all duration-300 hover:shadow-[0_5px_83px_0_rgba(27,26,26,0.12)]">
            <div className="group flex h-full w-full flex-col p-3 m-2">
              {/* Top content */}
              <div className="flex-1 text-center">
                {/* Brand */}
                <div className="text-left">
                  <img
                    src={p.brand}
                    alt="Brand"
                    className="h-[45px] w-[110px] object-contain"
                  />
                </div>

                {/* Image */}
                <a href={p.link} className="block" tabIndex={0}>
                  <img
                    src={p.image}
                    alt={p.title}
                    className="
                      mx-auto
                      h-[200px] w-[200px]
                      max-h-[240px] max-w-[260px]
                      object-contain
                      transition-transform duration-1000 ease-in-out
                      group-hover:scale-[0.8]
                    "
                  />
                </a>

                {/* Title + Rating + SKU */}
                <a href={p.link} aria-label="visit product" className="block" tabIndex={0}>
                  <h3
                    className="
                      mt-[25px] mb-[20px]
                      text-left
                      text-[16px] font-[500]
                      leading-[28px]
                      text-[rgba(80,95,107)]
                      overflow-hidden
                      [display:-webkit-box]
                      [-webkit-box-orient:vertical]
                      [-webkit-line-clamp:2]
                      h-[55.2px]
                    "
                  >
                    {p.title}
                  </h3>

                  <div className="mb-1 flex items-center justify-between">
                    <RatingStars value={5} />

                    <div className="text-[#868686] text-[14px]">
                      <span>{p.sku}</span>
                    </div>
                  </div>
                </a>

                {/* Price */}
                {p.type === "normal" ? (
                  <div className="flex items-center justify-between">
                    <div className="inline-grid text-left">
                      <span className="font-bold text-[35px] xl:text-[25px]">
                        {p.price}
                      </span>
                      <span className="text-[11px] leading-[11px]">
                        <span className="hidden">Inkl</span>{" "}
                        <span className="text-[#9c0]">19% MwSt.</span>
                      </span>
                    </div>

                    <div className="text-left [font:17px/20px_Arial,Helvetica,sans-serif]">
                      <span className="block text-[12px] leading-[12px]">
                        Statt
                      </span>
                      <span className="text-red-500 line-through">
                        <span className="hidden">ab</span>
                        <span className="text-black">€</span>
                        <span className="text-black">{p.oldPrice},</span>
                        <span>-</span>
                      </span>
                    </div>
                  </div>
                ) : null}
              </div>

              {/* Footer */}
              <div className="mt-auto pt-6">
                {p.type === "normal" ? (
                  <div className="flex items-center justify-between">
                    <Qty />
                    <CartButton />
                  </div>
                ) : (
                  <CallForPrice phone={p.phone} />
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* Stars */
function RatingStars({ value = 5 }) {
  return (
    <ul className="my-2 flex items-center gap-[3px] text-[#7a7a7a]">
      {Array.from({ length: 5 }).map((_, i) => (
        <li key={i} className="leading-none">
          <FaStar size={14} color="#7a7a7a" />
        </li>
      ))}
    </ul>
  );
}

function Qty() {
  const [qty, setQty] = useState(0);

  return (
    <div className="inline-flex h-[40px] shrink-0 items-stretch border-2 border-[#9c0] bg-[#9c0] skew-x-[-12deg] px-[15px] mr-[20px]">
      <button
        type="button"
        onClick={() => setQty((q) => Math.max(0, q - 1))}
        className="flex h-[38px] w-[14px] items-center justify-center bg-transparent text-white"
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

/* Cart button */
function CartButton() {
  return (
    <a
      href="#"
      aria-label="Add to cart"
      className="group relative inline-flex h-[40px] w-[108px] shrink-0 items-center justify-center border-2 border-[#9c0] bg-white skew-x-[-12deg] overflow-hidden transition-colors duration-300"
    >
      <span className="absolute left-0 top-0 h-full w-0 bg-[#8cbb00] transition-all duration-300 group-hover:w-full" />

      <span className="relative skew-x-[12deg]">
        <CartOutlineIcon className="h-[20px] w-[20px] stroke-[#9c0] group-hover:stroke-white transition-colors duration-300" />
      </span>
    </a>
  );
}

function CartOutlineIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 6h15l-1.5 8.5a2 2 0 0 1-2 1.5H9a2 2 0 0 1-2-1.6L5 3H2" />
      <circle cx="9" cy="20" r="1.5" />
      <circle cx="17" cy="20" r="1.5" />
    </svg>
  );
}

function CallForPrice({ phone }) {
  return (
    <div className="group relative mt-[35px] flex h-[40px] items-center justify-center border-2 border-[#9c0] text-[#9c0] font-bold uppercase skew-x-[-12deg] overflow-hidden">
      <div className="absolute left-0 top-0 h-full w-0 bg-[#8cbb00] transition-all duration-300 group-hover:w-full" />

      <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 invisible transition-opacity duration-200 group-hover:opacity-100 group-hover:visible skew-x-[12deg] text-white text-[15px] font-extrabold px-3">
        <FaPhoneAlt className="text-white" />
        <span>{phone}</span>
      </div>

      <div className="relative skew-x-[12deg] opacity-100 visible transition-opacity duration-200 group-hover:opacity-0 group-hover:invisible">
        Preis anfragen
      </div>
    </div>
  );
}


// import { useMemo, useState } from "react";
// import { FaPlus, FaMinus, FaPhoneAlt, FaStar } from "react-icons/fa";
// import productImg from "../../assets/img/products/hikvision.webp";

// export default function ProductsGrid() {
//   const products = useMemo(
//     () => [
//       {
//         brand: "https://cls-security.de/pub/media/brand/Hikvision.png",
//         image: productImg,
//         title: "HIKVISION DS-2CD2123G2-IU(2.8mm) IP Kamera",
//         sku: "CLS100290968",
//         price: "169.99 €",
//         oldPrice: "3.099",
//         type: "normal",
//         link: "#",
//       },
//       {
//         brand: "https://cls-security.de/pub/media/brand/Hikvision.png",
//         image: productImg,
//         title: "HIKVISION DS-2CD2143G2-IU(2.8mm) 4MP IP Kamera",
//         sku: "CLS100290969",
//         price: "189.99 €",
//         oldPrice: "3.199",
//         type: "normal",
//         link: "#",
//       },
//       {
//         brand: "https://cls-security.de/pub/media/brand/Hikvision.png",
//         image: productImg,
//         title: "HIKVISION DS-2CD2347G2H-LIU(2.8mm) ColorVu Kamera",
//         sku: "CLS100291010",
//         price: "229.99 €",
//         oldPrice: "3.499",
//         type: "normal",
//         link: "#",
//       },
//       {
//         brand: "https://cls-security.de/pub/media/brand/Hikvision.png",
//         image: productImg,
//         title: "HIKVISION 8-Kanal NVR Rekorder (Preis auf Anfrage)",
//         sku: "CLS100291011",
//         phone: "0621 7163591",
//         type: "call",
//         link: "#",
//       },
//       {
//         brand: "https://cls-security.de/pub/media/brand/Hikvision.png",
//         image: productImg,
//         title: "HIKVISION DS-2CD2043G2-IU (2.8mm) Bullet Kamera",
//         sku: "CLS100291012",
//         price: "159.99 €",
//         oldPrice: "2.999",
//         type: "normal",
//         link: "#",
//       },
//       {
//         brand: "https://cls-security.de/pub/media/brand/Hikvision.png",
//         image: productImg,
//         title: "HIKVISION DS-2CD2T43G2-4I (2.8mm) IP Bullet Kamera",
//         sku: "CLS100291013",
//         price: "199.99 €",
//         oldPrice: "3.299",
//         type: "normal",
//         link: "#",
//       },
//     ],
//     []
//   );

//   return (
//     <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 xl:grid-cols-3">
//       {products.map((p, idx) => (
//         <div key={idx} className="p-[5px]">
//           <div className="h-full bg-white px-[10px] transition-all duration-300 hover:shadow-[0_5px_83px_0_rgba(27,26,26,0.12)]">
//             <div className="group flex h-full w-full flex-col p-3 m-2">
//               <div className="flex-1 text-center">
//                 <div className="text-left">
//                   <img
//                     src={p.brand}
//                     alt="Brand"
//                     className="h-[45px] w-[110px] object-contain"
//                   />
//                 </div>

//                 <a href={p.link} className="block" tabIndex={0}>
//                   <img
//                     src={p.image}
//                     alt={p.title}
//                     className="
//                       mx-auto
//                       h-[200px] w-[200px]
//                       max-h-[240px] max-w-[260px]
//                       object-contain
//                       transition-transform duration-1000 ease-in-out
//                       group-hover:scale-[0.8]
//                     "
//                   />
//                 </a>

//                 <a href={p.link} className="block" tabIndex={0}>
//                   <h3
//                     className="
//                       mt-[25px] mb-[20px]
//                       text-left text-[16px] font-[500]
//                       leading-[28px]
//                       text-[rgba(80,95,107)]
//                       overflow-hidden
//                       [display:-webkit-box]
//                       [-webkit-box-orient:vertical]
//                       [-webkit-line-clamp:2]
//                       h-[55.2px]
//                     "
//                   >
//                     {p.title}
//                   </h3>

//                   <div className="mb-1 flex items-center justify-between">
//                     <RatingStars />
//                     <div className="text-[#868686] text-[14px]">
//                       <span>{p.sku}</span>
//                     </div>
//                   </div>
//                 </a>

//                 {p.type === "normal" ? (
//                   <div className="flex items-center justify-between">
//                     <div className="inline-grid text-left">
//                       <span className="font-bold text-[35px] xl:text-[25px]">
//                         {p.price}
//                       </span>
//                       <span className="text-[11px] leading-[11px]">
//                         <span className="text-[#9c0]">19% MwSt.</span>
//                       </span>
//                     </div>

//                     <div className="text-left [font:17px/20px_Arial,Helvetica,sans-serif]">
//                       <span className="block text-[12px] leading-[12px]">
//                         Statt
//                       </span>
//                       <span className="text-red-500 line-through">
//                         <span className="text-black">€</span>
//                         <span className="text-black">{p.oldPrice},</span>
//                         <span>-</span>
//                       </span>
//                     </div>
//                   </div>
//                 ) : null}
//               </div>

//               <div className="mt-auto pt-6">
//                 {p.type === "normal" ? (
//                   <div className="flex items-center justify-between">
//                     <Qty />
//                     <CartButton />
//                   </div>
//                 ) : (
//                   <CallForPrice phone={p.phone} />
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// function RatingStars() {
//   return (
//     <ul className="my-2 flex items-center gap-[3px] text-[#7a7a7a]">
//       {Array.from({ length: 5 }).map((_, i) => (
//         <li key={i} className="leading-none">
//           <FaStar size={14} color="#7a7a7a" />
//         </li>
//       ))}
//     </ul>
//   );
// }

// function Qty() {
//   const [qty, setQty] = useState(0);

//   return (
//     <div className="inline-flex h-[40px] shrink-0 items-stretch border-2 border-[#9c0] bg-[#9c0] skew-x-[-12deg] px-[15px] mr-[20px]">
//       <button
//         type="button"
//         onClick={() => setQty((q) => Math.max(0, q - 1))}
//         className="flex h-[38px] w-[14px] items-center justify-center bg-transparent text-white"
//       >
//         <FaMinus size={10} />
//       </button>

//       <input
//         value={qty}
//         readOnly
//         className="h-full w-10 bg-[#9c0] text-center text-white outline-none"
//       />

//       <button
//         type="button"
//         onClick={() => setQty((q) => q + 1)}
//         className="flex h-[38px] w-[38px] items-center justify-center bg-transparent text-white"
//       >
//         <FaPlus size={10} />
//       </button>
//     </div>
//   );
// }

// function CartButton() {
//   return (
//     <a
//       href="#"
//       aria-label="Add to cart"
//       className="group relative inline-flex h-[40px] w-[108px] shrink-0 items-center justify-center border-2 border-[#9c0] bg-white skew-x-[-12deg] overflow-hidden"
//     >
//       <span className="absolute left-0 top-0 h-full w-0 bg-[#8cbb00] transition-all duration-300 group-hover:w-full" />
//       <span className="relative skew-x-[12deg] text-[#9c0] group-hover:text-white transition-colors duration-300">
//         🛒
//       </span>
//     </a>
//   );
// }

// function CallForPrice({ phone }) {
//   return (
//     <div className="group relative mt-[35px] flex h-[40px] items-center justify-center border-2 border-[#9c0] text-[#9c0] font-bold uppercase skew-x-[-12deg] overflow-hidden">
//       <div className="absolute left-0 top-0 h-full w-0 bg-[#8cbb00] transition-all duration-300 group-hover:w-full" />

//       <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 invisible transition-opacity duration-200 group-hover:opacity-100 group-hover:visible skew-x-[12deg] text-white text-[15px] font-extrabold px-3">
//         <FaPhoneAlt className="text-white" />
//         <span>{phone}</span>
//       </div>

//       <div className="relative skew-x-[12deg] opacity-100 visible transition-opacity duration-200 group-hover:opacity-0 group-hover:invisible">
//         Preis anfragen
//       </div>
//     </div>
//   );
// }
