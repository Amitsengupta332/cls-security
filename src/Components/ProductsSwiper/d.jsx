// import { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import { FaPlus, FaMinus, FaPhoneAlt, FaStar } from "react-icons/fa";
// import productImg from "../../assets/img/products/hikvision.webp";

// export default function ProductsSwiper() {
//   const products = [
//     {
//       brand_img: "https://cls-security.de/pub/media/brand/Hikvision.png",
//       brand_alt: "Hikvision",
//       product_img: productImg,
//       product_alt: "IP camera",
//       title: "HIKVISION DS-2CD2123G2-IU(2.8mm) IP Kamera",
//       rating: 5,
//       sku: "CLS100290968",
//       current_price: "169.99 €",
//       old_price: "3.099,",
//       tax: "19% MwSt.",
//       call_for_price: false,
//       link: "#",
//     },
//     {
//       brand_img: "https://cls-security.de/pub/media/brand/Hikvision.png",
//       brand_alt: "Hikvision",
//       product_img: productImg,
//       product_alt: "IP camera",
//       title: "HIKVISION DS-2CD2123G2-IU(2.8mm) IP Kamera",
//       rating: 5,
//       sku: "CLS100290968",
//       current_price: "169.99 €",
//       old_price: "3.099,",
//       tax: "19% MwSt.",
//       call_for_price: false,
//       link: "#",
//     },
//     {
//       brand_img: "https://cls-security.de/pub/media/brand/Hikvision.png",
//       brand_alt: "Hikvision",
//       product_img: productImg,
//       product_alt: "IP camera",
//       title: "HIKVISION DS-2CD2123G2-IU(2.8mm) IP Kamera",
//       rating: 5,
//       sku: "CLS100290968",
//       current_price: "169.99 €",
//       old_price: "3.099,",
//       tax: "19% MwSt.",
//       call_for_price: false,
//       link: "#",
//     },
//     {
//       brand_img: "https://cls-security.de/pub/media/brand/Hikvision.png",
//       brand_alt: "Hikvision",
//       product_img: productImg,
//       product_alt: "IP camera",
//       title: "HIKVISION DS-2CD2123G2-IU(2.8mm) IP Kamera",
//       rating: 5,
//       sku: "CLS100290968",
//       current_price: "169.99 €",
//       old_price: "3.099,",
//       tax: "19% MwSt.",
//       call_for_price: true,
//       phone: "0621 7163591",
//       link: "#",
//     },
//     {
//       brand_img: "https://cls-security.de/pub/media/brand/Hikvision.png",
//       brand_alt: "Hikvision",
//       product_img: productImg,
//       product_alt: "IP camera",
//       title: "HIKVISION DS-2CD2123G2-IU(2.8mm) IP Kamera",
//       rating: 5,
//       sku: "CLS100290968",
//       current_price: "169.99 €",
//       old_price: "3.099,",
//       tax: "19% MwSt.",
//       call_for_price: false,
//       link: "#",
//     },
//   ];

//   return (
//     <section id="testimonials" className="bg-[#f9f9f9] py-[68px]">
//       {/* Title */}
//       <div className="text-center pb-[60px]">
//         <div className="mt-[10px] text-[32px] font-bold text-[#433f39]">
//           <span>Angebot der Woche</span>
//         </div>
//       </div>

//       {/* container like your custom.css */}
//       <div className="mx-auto w-full px-6 max-[1200px]:max-w-[1300px] min-[1300px]:max-w-[1400px]">
//         <Swiper
//           modules={[Navigation, Pagination]}
//           navigation
//           pagination={{ clickable: true }}
//           spaceBetween={20}
//           slidesPerView={1}
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//             1280: { slidesPerView: 3 },
//           }}
//           className="
//             pb-12
//             [&_.swiper-wrapper]:items-stretch
//             [&_.swiper-slide]:h-auto
//             [&_.swiper-slide]:flex
//           "
//         >
//           {products.map((p, idx) => (
//             <SwiperSlide key={idx}>
//               {/* force slide content to stretch */}
//               <div className="flex w-full">
//                 <div className="w-full bg-white px-[10px] transition-all duration-300 hover:shadow-[0_5px_83px_0_rgba(27,26,26,0.12)]">
//                   <div className="flex w-full flex-col p-3">
//                     {/* Brand */}
//                     <div className="text-left">
//                       <img
//                         src={p.brand_img}
//                         alt={p.brand_alt}
//                         className="h-[45px] w-[110px] object-contain"
//                       />
//                     </div>

//                     {/* Image (fixed area height so all cards align) */}
//                     <a href={p.link} className="group block h-[240px]" tabIndex={0}>
//                       <img
//                         src={p.product_img}
//                         alt={p.product_alt}
//                         className="
//                           mx-auto
//                           h-[200px] w-[200px]
//                           max-h-[240px] max-w-[260px]
//                           object-contain
//                           transition-transform duration-1000 ease-in-out
//                           group-hover:scale-[0.8]
//                         "
//                       />
//                     </a>

//                     {/* Title + rating + sku */}
//                     <a href={p.link} className="block" aria-label="visit product" tabIndex={0}>
//                       <h3
//                         className="
//                           mt-[25px] mb-[20px]
//                           text-left
//                           text-[16px] font-[500]
//                           leading-[28px]
//                           text-[rgba(80,95,107)]
//                           overflow-hidden
//                           [display:-webkit-box]
//                           [-webkit-box-orient:vertical]
//                           [-webkit-line-clamp:2]
//                           h-[55.2px]
//                         "
//                       >
//                         {p.title}
//                       </h3>

//                       <div className="mb-1 flex h-[28px] items-center justify-between">
//                         <RatingStars count={p.rating} />
//                         <div className="text-[#868686] text-[14px]">
//                           <span>{p.sku}</span>
//                         </div>
//                       </div>
//                     </a>

//                     {/* PRICE AREA (fixed height to keep alignment) */}
//                     <div className="h-[82px]">
//                       {!p.call_for_price ? (
//                         <div className="flex items-center justify-between">
//                           <div className="inline-grid text-left">
//                             <span className="font-bold text-[35px] xl:text-[25px]">
//                               {p.current_price}
//                             </span>
//                             <div className="text-[11px] leading-[11px]">
//                               <span className="hidden">Inkl</span>{" "}
//                               <span className="text-[#9c0]">{p.tax}</span>
//                             </div>
//                           </div>

//                           <div className="text-left [font:17px/20px_Arial,Helvetica,sans-serif]">
//                             <span className="block text-[12px] leading-[12px]">Statt</span>
//                             <span className="text-red-500 line-through">
//                               <span className="text-black">€</span>
//                               <span className="text-black">{p.old_price}</span>
//                               <span>-</span>
//                             </span>
//                           </div>
//                         </div>
//                       ) : (
//                         <div className="h-full" />
//                       )}
//                     </div>

//                     {/* FOOTER (fixed height + same baseline) */}
//                     <div className="mt-[25px] h-[52px]">
//                       {!p.call_for_price ? (
//                         <div className="flex h-full items-center justify-between gap-4">
//                           <Qty />
//                           <CartButton />
//                         </div>
//                       ) : (
//                         <CallForPrice phone={p.phone} />
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }

// function RatingStars({ count = 5 }) {
//   return (
//     <ul className="flex items-center gap-[3px] text-[#7a7a7a]">
//       {Array.from({ length: count }).map((_, i) => (
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
//     <div
//       className="
//         inline-flex h-[40px] shrink-0 items-stretch
//         border-2 border-[#9c0] bg-[#9c0]
//         skew-x-[-12deg]
//         px-[15px]
//       "
//     >
//       <button
//         type="button"
//         onClick={() => setQty((q) => Math.max(0, q - 1))}
//         className="flex h-[38px] w-[38px] items-center justify-center bg-transparent text-white"
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
//         onClick={() => setQty((q) => q + 1)}  // ✅ fixed here
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
//       className="
//         group relative inline-flex h-[40px] w-[110px] shrink-0
//         items-center justify-center
//         border-2 border-[#9c0]
//         bg-white
//         skew-x-[-12deg]
//         overflow-hidden
//       "
//     >
//       <span
//         className="
//           absolute left-0 top-0 h-full w-0
//           bg-[#8cbb00]
//           transition-all duration-300
//           group-hover:w-full
//         "
//       />
//       <span className="relative skew-x-[12deg]">
//         <CartOutlineIcon className="h-[20px] w-[20px] stroke-[#9c0] group-hover:stroke-white transition-colors duration-300" />
//       </span>
//     </a>
//   );
// }

// function CartOutlineIcon({ className = "" }) {
//   return (
//     <svg
//       className={className}
//       viewBox="0 0 24 24"
//       fill="none"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M6 6h15l-1.5 8.5a2 2 0 0 1-2 1.5H9a2 2 0 0 1-2-1.6L5 3H2" />
//       <circle cx="9" cy="20" r="1.5" />
//       <circle cx="17" cy="20" r="1.5" />
//     </svg>
//   );
// }

// function CallForPrice({ phone }) {
//   return (
//     <div
//       className="
//         group relative h-[40px] w-full
//         flex items-center justify-center
//         border-2 border-[#9c0]
//         text-[#9c0]
//         font-bold uppercase
//         skew-x-[-12deg]
//         overflow-hidden
//       "
//     >
//       <span
//         className="
//           absolute left-0 top-0 h-full w-0
//           bg-[#8cbb00]
//           transition-all duration-300
//           group-hover:w-full
//         "
//       />

//       <div
//         className="
//           absolute inset-0
//           flex items-center justify-center gap-2
//           opacity-0 invisible
//           transition-opacity duration-200
//           group-hover:opacity-100 group-hover:visible
//           skew-x-[12deg]
//           text-white
//           text-[15px] font-extrabold
//         "
//       >
//         <FaPhoneAlt className="text-white" />
//         <span>{phone}</span>
//       </div>

//       <div
//         className="
//           relative skew-x-[12deg]
//           opacity-100 visible
//           transition-opacity duration-200
//           group-hover:opacity-0 group-hover:invisible
//         "
//       >
//         Preis anfragen
//       </div>
//     </div>
//   );
// }








import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./products-swiper.css"; // ✅ add this line

import { FaPlus, FaMinus, FaPhoneAlt, FaStar } from "react-icons/fa";
import productImg from "../../assets/img/products/hikvision.webp";

export default function ProductsSwiper() {
  const products = [
    {
      brand_img: "https://cls-security.de/pub/media/brand/Hikvision.png",
      brand_alt: "Hikvision",
      product_img: productImg,
      product_alt: "IP camera",
      title: "HIKVISION DS-2CD2123G2-IU(2.8mm) IP Kamera",
      rating: 5,
      sku: "CLS100290968",
      current_price: "169.99 €",
      old_price: "3.099,",
      tax: "19% MwSt.",
      call_for_price: false,
      link: "#",
    },
    {
      brand_img: "https://cls-security.de/pub/media/brand/Hikvision.png",
      brand_alt: "Hikvision",
      product_img: productImg,
      product_alt: "IP camera",
      title: "HIKVISION DS-2CD2123G2-IU(2.8mm) IP Kamera",
      rating: 5,
      sku: "CLS100290968",
      current_price: "169.99 €",
      old_price: "3.099,",
      tax: "19% MwSt.",
      call_for_price: false,
      link: "#",
    },
    {
      brand_img: "https://cls-security.de/pub/media/brand/Hikvision.png",
      brand_alt: "Hikvision",
      product_img: productImg,
      product_alt: "IP camera",
      title: "HIKVISION DS-2CD2123G2-IU(2.8mm) IP Kamera",
      rating: 5,
      sku: "CLS100290968",
      current_price: "169.99 €",
      old_price: "3.099,",
      tax: "19% MwSt.",
      call_for_price: false,
      link: "#",
    },
    {
      brand_img: "https://cls-security.de/pub/media/brand/Hikvision.png",
      brand_alt: "Hikvision",
      product_img: productImg,
      product_alt: "IP camera",
      title: "HIKVISION DS-2CD2123G2-IU(2.8mm) IP Kamera",
      rating: 5,
      sku: "CLS100290968",
      current_price: "169.99 €",
      old_price: "3.099,",
      tax: "19% MwSt.",
      call_for_price: true,
      phone: "0621 7163591",
      link: "#",
    },
    {
      brand_img: "https://cls-security.de/pub/media/brand/Hikvision.png",
      brand_alt: "Hikvision",
      product_img: productImg,
      product_alt: "IP camera",
      title: "HIKVISION DS-2CD2123G2-IU(2.8mm) IP Kamera",
      rating: 5,
      sku: "CLS100290968",
      current_price: "169.99 €",
      old_price: "3.099,",
      tax: "19% MwSt.",
      call_for_price: false,
      link: "#",
    },
  ];

  return (
    <section id="testimonials" className="bg-[#f9f9f9] py-[68px]">
      {/* Title */}
      <div className="text-center pb-[60px]">
        <div className="mt-[10px] text-[32px] font-bold text-[#433f39]">
          <span>Angebot der Woche</span>
        </div>
      </div>

      <div className="mx-auto w-full px-6 max-[1200px]:max-w-[1300px] min-[1300px]:max-w-[1400px]">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
          className="
            swipercat
            [&_.swiper-wrapper]:items-stretch
            [&_.swiper-slide]:h-auto
            [&_.swiper-slide]:flex
          "
        >
          {products.map((p, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex w-full">
                <div className="w-full bg-white px-[10px] transition-all duration-300 hover:shadow-[0_5px_83px_0_rgba(27,26,26,0.12)]">
                  <div className="flex w-full flex-col p-3">
                    {/* Brand */}
                    <div className="text-left">
                      <img
                        src={p.brand_img}
                        alt={p.brand_alt}
                        className="h-[45px] w-[110px] object-contain"
                      />
                    </div>

                    {/* Image fixed area */}
                    <a href={p.link} className="group block h-[240px]" tabIndex={0}>
                      <img
                        src={p.product_img}
                        alt={p.product_alt}
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

                    {/* Title + rating + sku */}
                    <a href={p.link} className="block" aria-label="visit product" tabIndex={0}>
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

                      <div className="mb-1 flex h-[28px] items-center justify-between">
                        <RatingStars count={p.rating} />
                        <div className="text-[#868686] text-[14px]">
                          <span>{p.sku}</span>
                        </div>
                      </div>
                    </a>

                    {/* Price area fixed height */}
                    <div className="h-[82px]">
                      {!p.call_for_price ? (
                        <div className="flex items-center justify-between">
                          <div className="inline-grid text-left">
                            <span className="font-bold text-[35px] xl:text-[25px]">
                              {p.current_price}
                            </span>
                            <div className="text-[11px] leading-[11px]">
                              <span className="hidden">Inkl</span>{" "}
                              <span className="text-[#9c0]">{p.tax}</span>
                            </div>
                          </div>

                          <div className="text-left [font:17px/20px_Arial,Helvetica,sans-serif]">
                            <span className="block text-[12px] leading-[12px]">Statt</span>
                            <span className="text-red-500 line-through">
                              <span className="text-black">€</span>
                              <span className="text-black">{p.old_price}</span>
                              <span>-</span>
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="h-full" />
                      )}
                    </div>

                    {/* Footer fixed height */}
                    <div className="mt-[25px] h-[52px]">
                      {!p.call_for_price ? (
                        <div className="flex h-full items-center justify-between gap-4">
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

function RatingStars({ count = 5 }) {
  return (
    <ul className="flex items-center gap-[3px] text-[#7a7a7a]">
      {Array.from({ length: count }).map((_, i) => (
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
    <div className="inline-flex h-[40px] shrink-0 items-stretch border-2 border-[#9c0] bg-[#9c0] skew-x-[-12deg] px-[15px]">
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

function CartButton() {
  return (
    <a
      href="#"
      aria-label="Add to cart"
      className="group relative inline-flex h-[40px] w-[110px] shrink-0 items-center justify-center border-2 border-[#9c0] bg-white skew-x-[-12deg] overflow-hidden"
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
    <div className="group relative h-[40px] w-full flex items-center justify-center border-2 border-[#9c0] text-[#9c0] font-bold uppercase skew-x-[-12deg] overflow-hidden">
      <span className="absolute left-0 top-0 h-full w-0 bg-[#8cbb00] transition-all duration-300 group-hover:w-full" />

      <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 invisible transition-opacity duration-200 group-hover:opacity-100 group-hover:visible skew-x-[12deg] text-white text-[15px] font-extrabold">
        <FaPhoneAlt className="text-white" />
        <span>{phone}</span>
      </div>

      <div className="relative skew-x-[12deg] opacity-100 visible transition-opacity duration-200 group-hover:opacity-0 group-hover:invisible">
        Preis anfragen
      </div>
    </div>
  );
}
