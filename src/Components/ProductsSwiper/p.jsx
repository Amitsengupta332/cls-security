/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaPlus, FaMinus, FaPhoneAlt, FaStar } from "react-icons/fa";
import productImg from "../../assets/img/products/hikvision.webp";

export default function ProductsSwiper() {
  const products = [
    {
      brand: "https://cls-security.de/pub/media/brand/Hikvision.png",
      image: productImg,
      title: "HIKVISION DS-2CD2123G2-IU(2.8mm) IP Kamera",
      sku: "CLS100290968",
      price: "169.99 €",
      oldPrice: "3.099",
      tax: "19% MwSt.",
      type: "normal",
      link: "#",
    },
    {
      brand: "https://cls-security.de/pub/media/brand/Hikvision.png",
      image: productImg,
      title: "HIKVISION DS-2CD2123G2-IU(2.8mm) IP Kamera",
      sku: "CLS100290968",
      price: "169.99 €",
      oldPrice: "3.099",
      tax: "19% MwSt.",
      type: "normal",
      link: "#",
    },
    {
      brand: "https://cls-security.de/pub/media/brand/Hikvision.png",
      image: productImg,
      title: "HIKVISION DS-2CD2123G2-IU(2.8mm) IP Kamera",
      sku: "CLS100290968",
      price: "169.99 €",
      oldPrice: "3.099",
      tax: "19% MwSt.",
      type: "normal",
      link: "#",
    },
    {
      brand: "https://cls-security.de/pub/media/brand/Hikvision.png",
      image: productImg,
      title: "HIKVISION DS-2CD2123G2-IU(2.8mm) IP Kamera",
      sku: "CLS100290968",
      phone: "0621 7163591",
      type: "call",
      link: "#",
    },
  ];

  return (
    <section className="products-wrap-swiper bg-[#f9f9f9] py-[60px]">
      {/* Title */}
      <div className="text-center pb-[60px]">
        <div className="mt-[10px] text-[32px] font-bold text-[#433f39]">
          <span>Angebot der Woche</span>
        </div>
      </div>

      {/* Container width like your custom.css (.container max width rules) */}
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
          className="pb-10"
        >
          {products.map((p, idx) => (
            <SwiperSlide key={idx} className="h-auto">
              <div className="p-[5px] h-full">
                {/* Card (like .productsgrid/.products-wrap-swiper .card-item) */}
                <div className="h-full bg-white px-[10px] transition-all duration-300 hover:shadow-[0_5px_83px_0_rgba(27,26,26,0.12)]">
                  <div className="group flex h-full min-h-[520px] w-full flex-col p-3 m-2">
                    {/* Content */}
                    <div className="flex-1 text-center">
                      {/* Brand */}
                      <div className="text-left">
                        <img
                          src={p.brand}
                          alt="Brand"
                          className="h-[45px] w-[110px] object-contain"
                        />
                      </div>

                      {/* Image (scale on hover like PHP) */}
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
                      <a href={p.link} className="block" aria-label="visit product" tabIndex={0}>
                        <h3
                          className="
                            mt-[25px] mb-[20px]
                            text-left
                            text-[16px] font-[500]
                            leading-[28px]
                            overflow-hidden
                            [display:-webkit-box]
                            [-webkit-box-orient:vertical]
                            [-webkit-line-clamp:2]
                            h-[55.2px]
                            text-[rgba(80,95,107)]
                          "
                        >
                          {p.title}
                        </h3>

                        <div className="mb-1 flex items-center justify-between">
                          {/* Rating (small grey like screenshot) */}
                          <RatingStars value={5} />

                          {/* SKU */}
                          <div className="text-[#868686] text-[14px]">
                            <span>{p.sku}</span>
                          </div>
                        </div>
                      </a>

                      {/* Price (normal only) */}
                      {p.type === "normal" ? (
                        <div className="flex items-center justify-between">
                          {/* Regular price */}
                          <div className="inline-grid text-left">
                            <span className="font-bold text-[35px] xl:text-[25px]">
                              {p.price}
                            </span>

                            <span className="text-[11px] leading-[11px]">
                              <span className="text-[#9c0]">Inkl {p.tax}</span>
                            </span>
                          </div>

                          {/* Old price */}
                          <div className="text-left [font:17px/20px_Arial,Helvetica,sans-serif]">
                            <span className="block text-[12px] leading-[12px]">Statt</span>
                            <span className="text-red-500 line-through">
                              <span className="text-black">€</span>
                              <span className="text-black">{p.oldPrice},</span>
                              <span>-</span>
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="mt-6" />
                      )}
                    </div>

                    {/* Footer (always bottom) */}
                    <div className="mt-auto">
                      {p.type === "normal" ? (
                        <div className="mt-6 flex items-center justify-between gap-[14px]">
                          <Qty />
                          <CartButton />
                        </div>
                      ) : (
                        <CallForPriceInline phone={p.phone} />
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

/* Small grey filled stars like your screenshot */
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
    <div
      className="
        inline-flex items-stretch justify-between
        h-[40px] w-[160px]
        border-2 border-[#9c0]
        bg-[#9c0]
        skew-x-[-12deg]
        px-[12px]
        shrink-0
      "
    >
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
        className="w-[40px] bg-[#9c0] text-center text-white outline-none"
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

/* Cart button like screenshot + hover fill animation like your custom.css global-button */
function CartButton() {
  return (
    <a
      href="#"
      aria-label="Add to cart"
      className="
        group relative inline-flex h-[40px] w-[110px] shrink-0
        items-center justify-center
        border-2 border-[#9c0]
        bg-white
        skew-x-[-12deg]
        overflow-hidden
      "
    >
      {/* fill layer */}
      <span
        className="
          absolute left-0 top-0 h-full w-0
          bg-[#8cbb00]
          transition-all duration-300
          group-hover:w-full
        "
      />

      {/* icon (green stroke -> white on hover) */}
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

/* Call button like your "PREIS ANFRAGEN" */
function CallForPriceInline({ phone }) {
  return (
    <div
      className="
        group relative mt-6
        flex items-center justify-center
        h-[40px] w-full
        border-2 border-[#9c0]
        text-[#9c0]
        font-bold uppercase
        skew-x-[-12deg]
        overflow-hidden
      "
    >
      {/* fill layer */}
      <span
        className="
          absolute left-0 top-0 h-full w-0
          bg-[#8cbb00]
          transition-all duration-300
          group-hover:w-full
        "
      />

      {/* DEFAULT TEXT */}
      <div
        className="
          relative skew-x-[12deg]
          flex items-center justify-center gap-2
          text-black
          opacity-100 visible
          transition-opacity duration-200
          group-hover:opacity-0 group-hover:invisible
        "
      >
        <FaPhoneAlt className="text-black" />
        <span>PREIS ANFRAGEN</span>
      </div>

      {/* HOVER NUMBER */}
      <div
        className="
          absolute inset-0
          flex items-center justify-center gap-2
          skew-x-[12deg]
          text-white
          opacity-0 invisible
          transition-opacity duration-200
          group-hover:opacity-100 group-hover:visible
        "
      >
        <FaPhoneAlt className="text-white" />
        <span>{phone}</span>
      </div>
    </div>
  );
}

