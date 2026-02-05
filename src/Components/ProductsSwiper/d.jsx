import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  FaPlus,
  FaMinus,
  FaShoppingCart,
  FaPhoneAlt,
  FaStar,
} from "react-icons/fa";

import productImg from "../../assets/img/products/hikvision.webp";

// ✅ your downloaded svg arrows
import leftArrow from "../../assets/icons/Left_Arrow.svg";
import rightArrow from "../../assets/icons/Righ_Arrow.svg";

export default function ProductsSwiper() {
  const products = [
    // 1
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
    // 2
    {
      brand: "https://cls-security.de/pub/media/brand/Hikvision.png",
      image: productImg,
      title: "HIKVISION DS-2CD2143G2-IU(2.8mm) 4MP IP Kamera",
      sku: "CLS100290969",
      price: "189.99 €",
      oldPrice: "3.199",
      tax: "19% MwSt.",
      type: "normal",
      link: "#",
    },
    // 3
    {
      brand: "https://cls-security.de/pub/media/brand/Hikvision.png",
      image: productImg,
      title: "HIKVISION DS-2CD2347G2H-LIU (2.8mm) ColorVu Kamera",
      sku: "CLS100291010",
      price: "229.99 €",
      oldPrice: "3.499",
      tax: "19% MwSt.",
      type: "normal",
      link: "#",
    },
    // 4 (call)
    {
      brand: "https://cls-security.de/pub/media/brand/Hikvision.png",
      image: productImg,
      title: "HIKVISION 8-Kanal NVR Rekorder (Preis auf Anfrage)",
      sku: "CLS100291011",
      phone: "0621 7163591",
      type: "call",
      link: "#",
    },
    // 5
    {
      brand: "https://cls-security.de/pub/media/brand/Hikvision.png",
      image: productImg,
      title: "HIKVISION DS-2CD2043G2-IU (2.8mm) Bullet Kamera",
      sku: "CLS100291012",
      price: "159.99 €",
      oldPrice: "2.999",
      tax: "19% MwSt.",
      type: "normal",
      link: "#",
    },
    // 6
    {
      brand: "https://cls-security.de/pub/media/brand/Hikvision.png",
      image: productImg,
      title: "HIKVISION DS-2CD2T43G2-4I (2.8mm) IP Bullet Kamera",
      sku: "CLS100291013",
      price: "199.99 €",
      oldPrice: "3.299",
      tax: "19% MwSt.",
      type: "normal",
      link: "#",
    },
    // 7
    {
      brand: "https://cls-security.de/pub/media/brand/Hikvision.png",
      image: productImg,
      title: "HIKVISION DS-2CD2387G2H-LIU (2.8mm) 8MP ColorVu",
      sku: "CLS100291014",
      price: "279.99 €",
      oldPrice: "3.799",
      tax: "19% MwSt.",
      type: "normal",
      link: "#",
    },
    // 8 (call)
    {
      brand: "https://cls-security.de/pub/media/brand/Hikvision.png",
      image: productImg,
      title: "HIKVISION PoE Switch 8 Port (Preis auf Anfrage)",
      sku: "CLS100291015",
      phone: "0621 7163591",
      type: "call",
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

      <div className="max-w-7xl mx-auto w-full px-6">
        <div
          className="
            relative

            [&_.swiper-button-next]:h-[34px]
            [&_.swiper-button-next]:w-[34px]
            [&_.swiper-button-next]:bg-[#9c0]
            [&_.swiper-button-next]:skew-x-[-12deg]
            [&_.swiper-button-next]:right-[10px]
            [&_.swiper-button-next]:top-[110px]

            [&_.swiper-button-prev]:h-[34px]
            [&_.swiper-button-prev]:w-[34px]
            [&_.swiper-button-prev]:bg-[#9c0]
            [&_.swiper-button-prev]:skew-x-[-12deg]
            [&_.swiper-button-prev]:left-[10px]
            [&_.swiper-button-prev]:top-[110px]

            [&_.swiper-button-next:after]:hidden
            [&_.swiper-button-prev:after]:hidden
          ">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 }, // mobile landscape / small tablets
              1024: { slidesPerView: 3 }, // tablets / small desktop
              1280: { slidesPerView: 4 }, // ✅ desktop = 4 cards
              1536: { slidesPerView: 4 }, // large desktop
            }}
            className="
              pb-12
              [&_.swiper-wrapper]:items-stretch
              [&_.swiper-slide]:h-auto
              [&_.swiper-slide]:flex

              [&_.swiper-pagination]:relative
              [&_.swiper-pagination]:mt-[20px]
              [&_.swiper-pagination]:bottom-0
              [&_.swiper-pagination-bullet]:h-[12px]
              [&_.swiper-pagination-bullet]:w-[12px]
              [&_.swiper-pagination-bullet]:bg-[#444]
              [&_.swiper-pagination-bullet]:opacity-50
              [&_.swiper-pagination-bullet-active]:opacity-100
            ">
            {products.map((p, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex w-full">
                  <div className="w-full bg-white px-[10px] transition-all duration-300 hover:shadow-[0_5px_83px_0_rgba(27,26,26,0.12)]">
                    <div className="flex w-full flex-col p-3">
                      {/* Brand */}
                      <div className="text-left">
                        <img
                          src={p.brand}
                          alt="Brand"
                          className="h-[45px] w-[110px] object-contain"
                        />
                      </div>

                      {/* Image */}
                      <a href={p.link} className="group block h-[240px]">
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
                      <a
                        href={p.link}
                        className="block"
                        aria-label="visit product">
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
                          ">
                          {p.title}
                        </h3>

                        <div className="mb-1 flex h-[28px] items-center justify-between">
                          <ul className="flex items-center gap-[3px]">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <li key={i}>
                                <FaStar size={14} color="#7a7a7a" />
                              </li>
                            ))}
                          </ul>

                          <div className="text-[#868686] text-[14px]">
                            <span>{p.sku}</span>
                          </div>
                        </div>
                      </a>

                      {/* Price (fixed height) */}
                      <div className="h-[82px]">
                        {p.type === "normal" ? (
                          <div className="flex items-center justify-between">
                            <div className="inline-grid text-left">
                              <span className="font-bold text-[35px] xl:text-[25px]">
                                {p.price}
                              </span>
                              <span className="text-[11px] leading-[11px] text-[#9c0]">
                                {p.tax}
                              </span>
                            </div>

                            <div className="text-left">
                              <span className="block text-[12px]">Statt</span>
                              <span className="text-red-500 line-through">
                                <span className="text-black">€</span>
                                <span className="text-black">
                                  {p.oldPrice},
                                </span>
                                <span>-</span>
                              </span>
                            </div>
                          </div>
                        ) : (
                          <div className="h-full" />
                        )}
                      </div>

                      {/* Footer */}
                      <div className="mt-[25px] h-[52px]">
                        {p.type === "normal" ? (
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

            {/* ✅ Custom arrows */}
            <div className="swiper-button-prev">
              <span className="skew-x-[12deg] flex items-center justify-center">
                <img
                  src={leftArrow}
                  alt="Previous"
                  className="h-[18px] w-[18px] object-contain"
                />
              </span>
            </div>

            <div className="swiper-button-next">
              <span className="skew-x-[12deg] flex items-center justify-center">
                <img
                  src={rightArrow}
                  alt="Next"
                  className="h-[18px] w-[18px] object-contain"
                />
              </span>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

function Qty() {
  const [qty, setQty] = useState(0);

  return (
    <div className="inline-flex h-[40px] shrink-0 items-stretch border-2 border-[#9c0] bg-[#9c0] skew-x-[-12deg] px-[15px]">
      <button
        type="button"
        onClick={() => setQty((q) => Math.max(0, q - 1))}
        className="flex h-[38px] w-[38px] items-center justify-center bg-transparent text-white">
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
        className="flex h-[38px] w-[38px] items-center justify-center bg-transparent text-white">
        <FaPlus size={10} />
      </button>
    </div>
  );
}

function CartButton() {
  return (
    <a
      href="#"
      className="group relative inline-flex h-[40px] w-[110px] shrink-0 items-center justify-center border-2 border-[#9c0] bg-white skew-x-[-12deg] overflow-hidden">
      <span className="absolute left-0 top-0 h-full w-0 bg-[#8cbb00] transition-all duration-300 group-hover:w-full" />
      <span className="relative skew-x-[12deg] text-[#9c0] group-hover:text-white">
        <FaShoppingCart />
      </span>
    </a>
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
