import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaPlus, FaMinus, FaShoppingCart, FaPhoneAlt } from "react-icons/fa";
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
    <section id="productsgrid" className="bg-[#f9f9f9] py-[60px] pb-[80px]">
      {/* Title */}
      <div className="text-center pb-[60px]">
        <div className="mt-[10px] text-[32px] font-bold text-[#433f39]">
          <span>Angebot der Woche</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6">
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
          }}>
          {products.map((p, idx) => (
            <SwiperSlide key={idx}>
              <div className="p-[5px]">
                {/* CARD: same height সব জায়গায় */}
                <div className="h-full bg-white px-[10px] transition-all duration-300">
                  <div
                    className="
                      flex flex-col h-full
                      min-h-[520px]
                      p-3 m-2
                    ">
                    {/* content */}
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
                      <a href={p.link} className="block">
                        <img
                          src={p.image}
                          alt={p.title}
                          className="
                            mx-auto
                            h-[200px] w-[200px]
                            max-h-[240px] max-w-[260px]
                            object-contain
                            transition-transform duration-1000 ease-in-out
                            hover:scale-[0.8]
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

                        <div className="mb-1 flex items-center justify-between">
                          {/* Rating */}
                          <ul className="my-2 flex gap-0 text-[#868686]">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <li key={i} className="mx-0">
                                <span className="inline-block text-[18px] leading-none">
                                  ★
                                </span>
                              </li>
                            ))}
                          </ul>

                          {/* SKU */}
                          <div className="text-[#868686]">
                            <span>{p.sku}</span>
                          </div>
                        </div>
                      </a>

                      {/* Price / Call */}
                      {p.type === "normal" ? (
                        <div className="flex items-center justify-between">
                          {/* Regular price */}
                          <div className="inline-grid text-left">
                            <span className="font-bold text-[35px] max-xl:text-[25px]">
                              {p.price}
                            </span>

                            <span className="text-[11px] leading-[11px]">
                              <span className="text-[#9c0]">Inkl {p.tax}</span>
                            </span>
                          </div>

                          {/* Old price */}
                          <div className="text-left">
                            <span className="block text-[12px]">Statt</span>
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

                    {/* FOOTER: always bottom */}
                    <div className="mt-auto">
                      {p.type === "normal" ? (
                        <div className="mt-6 flex items-center justify-between gap-[14px]">
                          <Qty />
                          <CartButton />
                        </div>
                      ) : (
                        <div
                          className="
                            relative mt-6
                            flex items-center justify-center
                            h-[40px] w-full
                            border-2 border-[#9c0]
                            bg-transparent
                            text-[#9c0]
                            font-bold
                            uppercase
                            skew-x-[-12deg]
                            overflow-hidden
                          ">
                          <div className="skew-x-[12deg] flex items-center gap-2">
                            <FaPhoneAlt className="text-black" />
                            <span className="text-black">{p.phone}</span>
                            <span className="ml-3">PREIS ANFRAGEN</span>
                          </div>
                        </div>
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

function Qty() {
  const [qty, setQty] = useState(0);

  return (
    <div
      className="
        inline-flex items-center justify-between
        h-[40px]
        border-2 border-[#9c0]
        bg-[#9c0]
        skew-x-[-12deg]
        px-[12px]
        w-[160px]
      ">
      <button
        type="button"
        onClick={() => setQty((q) => Math.max(0, q - 1))}
        className="h-[38px] w-[38px] bg-transparent text-white flex items-center justify-center">
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
        className="h-[38px] w-[38px] bg-transparent text-white flex items-center justify-center">
        <FaPlus size={10} />
      </button>
    </div>
  );
}

function CartButton() {
  return (
    <a
      href="#"
      className="
        relative inline-flex items-center justify-center
        h-[40px] w-[100px]
        border-2 border-[#9c0]
        text-[#9c0]
        skew-x-[-12deg]
        overflow-hidden
      ">
      <span className="skew-x-[12deg]">
        <FaShoppingCart />
      </span>
    </a>
  );
}
