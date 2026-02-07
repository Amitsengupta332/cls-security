import { useState, useRef } from "react";
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

import leftArrow from "../../assets/icons/Left_Arrow.svg";
import rightArrow from "../../assets/icons/Right_Arrow.svg";
import { Link } from "react-router-dom";

export default function ProductsSwiper() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

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
      title: "HIKVISION DS-2CD2143G2-IU(2.8mm) 4MP IP Kamera",
      sku: "CLS100290969",
      price: "189.99 €",
      oldPrice: "3.199",
      tax: "19% MwSt.",
      type: "normal",
      link: "#",
    },
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
      tax: "19% MwSt.",
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
      tax: "19% MwSt.",
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
      tax: "19% MwSt.",
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
  ];

  return (
    <section className="bg-[#f9f9f9] py-10 sm:py-14 lg:py-[68px]">
      {/* Title */}
      <div className="text-center pb-10 sm:pb-14">
        <h2 className="mt-2 text-[22px] sm:text-[26px] lg:text-[32px] font-bold text-[#433f39]">
          Angebot der Woche
        </h2>
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6">
        <div
          className="
            relative hidden sm:block

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

      
          ">
          {/* 
                  [&_.swiper-button-next:after]:hidden
            [&_.swiper-button-prev:after]:hidden
             */}
          {/* <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              // nextEl: ".swiper-button-next",
              // prevEl: ".swiper-button-prev",
            }}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              480: { slidesPerView: 1.2 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 2.5 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="
              pb-24

              [&_.swiper-wrapper]:items-stretch
              [&_.swiper-slide]:h-auto
              [&_.swiper-slide]:flex

              [&_.swiper-pagination]:relative
              [&_.swiper-pagination]:mt-[40px]
              [&_.swiper-pagination]:bottom-[-20px]

              [&_.swiper-pagination-bullet]:h-[12px]
              [&_.swiper-pagination-bullet]:w-[12px]
              [&_.swiper-pagination-bullet]:bg-[#444]
              [&_.swiper-pagination-bullet]:opacity-50
              [&_.swiper-pagination-bullet-active]:opacity-100
            "


              className="
    pb-16

    [&_.swiper-pagination]:relative
    [&_.swiper-pagination]:mt-6
    [&_.swiper-pagination]:bottom-[-10px]
  "
          > */}

          <Swiper
            modules={[Navigation, Pagination]}
            onSwiper={setSwiperInstance}
            navigation={false} // disable default first
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              480: { slidesPerView: 1.2 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 2.5 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="
            pb-16
            [&_.swiper-wrapper]:items-stretch
            [&_.swiper-slide]:h-auto
            [&_.swiper-slide]:flex
            [&_.swiper-pagination]:relative
            [&_.swiper-pagination]:mt-6
            [&_.swiper-pagination]:bottom-[-10px]
            [&_.swiper-pagination-bullet]:h-[12px]
            [&_.swiper-pagination-bullet]:w-[12px]
          [&_.swiper-pagination-bullet]:bg-[#444]">
            {products.map((p, idx) => (
              <SwiperSlide key={idx}>
                <Link to={`/products/${p.sku}`} className="block h-full">
                  <div className="w-full bg-white px-3 transition hover:shadow-lg">
                    <div className="flex flex-col p-3">
                      {/* Brand */}
                      <img
                        src={p.brand}
                        alt=""
                        className="h-[40px] w-[100px] object-contain"
                      />

                      {/* Image */}
                      <a href={p.link} className="block h-[220px] group">
                        <img
                          src={p.image}
                          alt={p.title}
                          className="
                          mx-auto
                          h-[140px] w-[140px]
                          sm:h-[180px] sm:w-[180px]
                          lg:h-[200px] lg:w-[200px]
                          object-contain
                          transition
                          group-hover:scale-90
                        "
                        />
                      </a>

                      {/* Title */}
                      <h3 className="mt-4 mb-3 text-sm sm:text-base leading-6 line-clamp-2 text-[#505f6b] min-h-[48px]">
                        {p.title}
                      </h3>

                      {/* Rating */}
                      <div className="flex justify-between mb-2">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} size={13} color="#7a7a7a" />
                          ))}
                        </div>

                        <span className="text-xs text-gray-500">{p.sku}</span>
                      </div>

                      {/* Price */}
                      <div className="h-[75px]">
                        {p.type === "normal" && (
                          <div className="flex justify-between">
                            <div>
                              <p className="font-bold text-lg sm:text-2xl lg:text-3xl">
                                {p.price}
                              </p>
                              <p className="text-[11px] text-[#9c0]">{p.tax}</p>
                            </div>

                            <div className="text-xs text-right">
                              <p>Statt</p>
                              <p className="line-through text-red-500">
                                €{p.oldPrice}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Footer */}
                      <div className="mt-4 h-[70px]">
                        {p.type === "normal" ? (
                          <div className="flex flex-col sm:flex-row gap-3">
                            <Qty />
                            <CartButton />
                          </div>
                        ) : (
                          <CallForPrice phone={p.phone} />
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}

            {/* Arrows */}
            {/* <div className="swiper-button-prev">
              <span className="skew-x-[12deg] flex justify-center items-center">
                <img src={leftArrow} className="h-4 w-4" />
              </span>
            </div>

            <div className="swiper-button-next">
              <span className="skew-x-[12deg] flex justify-center items-center">
                <img src={rightArrow} className="h-4 w-4" />
              </span>
            </div> */}

            <div
              ref={prevRef}
              className="swiper-button-prev"
              onClick={() => swiperInstance?.slidePrev()}>
              <span className="skew-x-[12deg] flex justify-center items-center">
                <img src={leftArrow} className="h-4 w-4" />
              </span>
            </div>

            <div
              ref={nextRef}
              className="swiper-button-next"
              onClick={() => swiperInstance?.slideNext()}>
              <span className="skew-x-[12deg] flex justify-center items-center">
                <img src={rightArrow} className="h-4 w-4" />
              </span>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

/* ================= COMPONENTS ================= */

function Qty() {
  const [qty, setQty] = useState(0);

  return (
    <div
      className="
        inline-flex
        h-[34px] sm:h-[40px]
        items-center
        border-2 border-[#9c0]
        bg-[#9c0]
        skew-x-[-12deg]
        overflow-hidden
      ">
      {/* Inner wrapper to cancel skew */}
      <div className="flex items-center h-full skew-x-[12deg]">
        {/* Minus */}
        <button
          onClick={() => setQty((q) => Math.max(0, q - 1))}
          className="
            h-[30px] w-[30px]
            sm:h-[36px] sm:w-[36px]
            flex items-center justify-center
            text-white
            hover:bg-[#8cbb00]
            transition
          ">
          <FaMinus size={10} />
        </button>

        {/* Input */}
        <input
          value={qty}
          readOnly
          className="
            w-8
            bg-transparent
            text-center
            text-white
            outline-none
            font-medium
          "
        />

        {/* Plus */}
        <button
          onClick={() => setQty((q) => q + 1)}
          className="
            h-[30px] w-[30px]
            sm:h-[36px] sm:w-[36px]
            flex items-center justify-center
            text-white
            hover:bg-[#8cbb00]
            transition
          ">
          <FaPlus size={10} />
        </button>
      </div>
    </div>
  );
}

function CartButton() {
  return (
    <a
      href="#"
      className="group relative h-[40px] w-full sm:w-[110px] flex items-center justify-center border-2 border-[#9c0] bg-white skew-x-[-12deg] overflow-hidden">
      <span className="absolute inset-0 bg-[#8cbb00] w-0 group-hover:w-full transition-all" />

      <span className="relative skew-x-[12deg] text-[#9c0] group-hover:text-white">
        <FaShoppingCart />
      </span>
    </a>
  );
}

function CallForPrice({ phone }) {
  return (
    <div className="group relative h-[40px] w-full flex items-center justify-center border-2 border-[#9c0] text-[#9c0] font-bold skew-x-[-12deg] overflow-hidden">
      <span className="absolute inset-0 bg-[#8cbb00] w-0 group-hover:w-full transition-all" />

      <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 skew-x-[12deg] text-white text-sm">
        <FaPhoneAlt />
        {phone}
      </div>

      <div className="relative skew-x-[12deg] group-hover:opacity-0">
        Preis anfragen
      </div>
    </div>
  );
}
