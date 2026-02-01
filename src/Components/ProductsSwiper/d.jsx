import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  FaStar,
  FaShoppingCart,
  FaPlus,
  FaMinus,
  FaPhoneAlt,
} from "react-icons/fa";

import productImg from "../../assets/img/products/hikvision.webp";

export default function ProductsSwiper() {
  const products = [
    {
      brand: "https://cls-security.de/pub/media/brand/Hikvision.png",
      image: productImg,
      title: "HIKVISION DS-2CD2123G2-IU(2.8mm) IP Kamera",
      sku: "CLS100290968",
      price: "169.99 €",
      oldPrice: "3.099 €",
      tax: "19% MwSt.",
      call: false,
    },
    {
      brand: "https://cls-security.de/pub/media/brand/Hikvision.png",
      image: productImg,
      title: "HIKVISION DS-2CD2123G2-IU(2.8mm) IP Kamera",
      sku: "CLS100290968",
      price: "169.99 €",
      oldPrice: "3.099 €",
      tax: "19% MwSt.",
      call: false,
    },
    {
      brand: "https://cls-security.de/pub/media/brand/Hikvision.png",
      image: productImg,
      title: "HIKVISION DS-2CD2123G2-IU(2.8mm) IP Kamera",
      sku: "CLS100290968",
      price: "169.99 €",
      oldPrice: "3.099 €",
      tax: "19% MwSt.",
      call: false,
    },
    {
      brand: "https://cls-security.de/pub/media/brand/Hikvision.png",
      image: productImg,
      title: "HIKVISION DS-2CD2123G2-IU(2.8mm) IP Kamera",
      sku: "CLS100290968",
      phone: "0621 7163591",
      call: true,
    },
    {
      brand: "https://cls-security.de/pub/media/brand/Hikvision.png",
      image: productImg,
      title: "HIKVISION DS-2CD2123G2-IU(2.8mm) IP Kamera",
      sku: "CLS100290968",
      price: "169.99 €",
      oldPrice: "3.099 €",
      tax: "19% MwSt.",
      call: false,
    },
    {
      brand: "https://cls-security.de/pub/media/brand/Hikvision.png",
      image: productImg,
      title: "HIKVISION DS-2CD2123G2-IU(2.8mm) IP Kamera",
      sku: "CLS100290968",
      price: "169.99 €",
      oldPrice: "3.099 €",
      tax: "19% MwSt.",
      call: false,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="text-center mb-10">
        <span className="text-green-500 font-semibold uppercase">
          Angebot der Woche
        </span>
        <h2 className="text-3xl font-bold mt-2">Weekly Offers</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}>
          {products.map((p, i) => (
            <SwiperSlide key={i}>
              <div className="group bg-white rounded-lg shadow p-4 h-full flex flex-col">
                {/* Brand */}
                <img
                  src={p.brand}
                  alt="brand"
                  className="h-6 mb-3 object-contain"
                />

                {/* Image */}
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-[180px] object-contain mb-4"
                />

                {/* Title */}
                <h3 className="text-sm font-semibold mb-2">{p.title}</h3>

                {/* Rating + SKU */}
                <div className="flex justify-between items-center text-xs mb-3">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <span className="text-gray-400">{p.sku}</span>
                </div>

                {!p.call ? (
                  <>
                    {/* Price */}
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <span className="font-bold text-lg">{p.price}</span>
                        <p className="text-xs text-gray-500">Inkl. {p.tax}</p>
                      </div>

                      <div className="text-xs text-gray-400 line-through">
                        {p.oldPrice}
                      </div>
                    </div>

                    {/* Hover Footer */}
                    <div className="mt-auto opacity-0 group-hover:opacity-100 transition">
                      <div className="flex items-center justify-between gap-2">
                        {/* Qty */}
                        <div className="flex items-center border rounded overflow-hidden">
                          <button className="px-3 py-1 bg-gray-100">
                            <FaMinus />
                          </button>
                          <input
                            type="text"
                            value="0"
                            readOnly
                            className="w-10 text-center text-sm"
                          />
                          <button className="px-3 py-1 bg-gray-100">
                            <FaPlus />
                          </button>
                        </div>

                        {/* Cart */}
                        <button className="border border-green-500 text-green-500 px-4 py-2 rounded hover:bg-green-500 hover:text-white transition">
                          <FaShoppingCart />
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Call for Price */}
                    <div className="mt-auto text-center">
                      <div className="flex justify-center items-center gap-2 font-semibold mb-3">
                        <FaPhoneAlt />
                        {p.phone}
                      </div>

                      <button className="w-full border border-green-500 text-green-500 py-2 rounded hover:bg-green-500 hover:text-white transition">
                        Preis anfragen
                      </button>
                    </div>
                  </>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
