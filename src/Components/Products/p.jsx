import { useState } from "react";
import { FaPlus, FaMinus, FaShoppingCart, FaPhoneAlt } from "react-icons/fa";
import productImg from "../../assets/img/products/hikvision.webp";

export default function Products() {
  const products = [
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
      title: "HIKVISION DS-2CD2123G2-IU(2.8mm) IP Kamera",
      sku: "CLS100290968",
      phone: "0621 7163591",
      type: "call",
      link: "#",
    },
  ];

  return (
    <section id="productsgrid" className="bg-[#f9f9f9] py-[60px] pb-[80px]">
      {/* Title (match .section-title div) */}
      <div className="text-center pb-[60px]">
        <div className="mt-[10px] text-[32px] font-bold text-[#433f39]">
          <span>Angebot der Woche</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* row gy-4 + custom-padding (5px) */}
        <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((p, idx) => (
            <div key={idx} className="p-[5px]">
              <div className="h-full bg-white px-[10px] transition-all duration-300">
                {/* .product_container custom-card p-3 m-2 */}
                <div className="group inline-block w-full p-3 m-2">
                  <div className="text-center">
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
                          group-hover:scale-[0.8]
                        "
                      />
                    </a>

                    {/* Title + Rating + SKU */}
                    <a href={p.link} aria-label="visit product" className="block">
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
                        {/* Rating */}
                        <ul className="my-2 flex gap-0 text-[#868686]">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <li key={i} className="mx-0">
                              {/* icon-star equivalent */}
                              <span className="inline-block text-[35px] leading-none">★</span>
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
                      <>
                        <div className="flex items-center justify-between">
                          {/* Regular price */}
                          <div className="inline-grid text-left">
                            <span className="font-bold text-[35px] max-xl:text-[25px]">
                              {p.price}
                            </span>

                            <span className="text-[11px] leading-[11px]">
                              <span className="hidden">Inkl</span>{" "}
                              <span className="text-[#9c0]">19% MwSt.</span>
                            </span>
                          </div>

                          {/* Old price */}
                          <div className="text-left">
                            <span className="block text-[12px]">Statt</span>
                            <span className="text-red-500 line-through">
                              <span className="hidden">ab</span>
                              <span className="text-black">€</span>
                              <span className="text-black">{p.oldPrice},</span>
                              <span>-</span>
                            </span>
                          </div>
                        </div>

                        {/* Footer (PHP had hidden) */}
                        <div className="mt-6 flex items-center justify-between">
                          <Qty />
                          <CartButton />
                        </div>
                      </>
                    ) : (
                      <div className="mt-4">
                        {/* Call-for-price button like PHP productFooter */}
                        <div
                          className="
                            relative mt-4
                            flex items-center justify-center
                            h-[40px]
                            border-2 border-[#9c0]
                            bg-transparent
                            text-[#9c0]
                            font-bold
                            uppercase
                            skew-x-[-12deg]
                            overflow-hidden
                          "
                        >
                          <div className="skew-x-[12deg] flex items-center gap-2">
                            <FaPhoneAlt className="text-black" />
                            <span className="text-black">{p.phone}</span>
                            <span className="ml-3">Preis anfragen</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Qty() {
  const [qty, setQty] = useState(0);

  return (
    <div
      className="
        inline-flex items-center justify-center
        h-[40px]
        border-2 border-[#9c0]
        bg-[#9c0]
        skew-x-[-12deg]
        px-[15px]
      "
    >
      <button
        type="button"
        onClick={() => setQty((q) => Math.max(0, q - 1))}
        className="h-[38px] w-[38px] bg-transparent text-white"
      >
        <FaMinus size={10} />
      </button>

      <input
        value={qty}
        readOnly
        className="w-10 bg-[#9c0] text-center text-white outline-none"
      />

      <button
        type="button"
        onClick={() => setQty((q) => q + 1)}
        className="h-[38px] w-[38px] bg-transparent text-white"
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
      className="
        relative inline-flex items-center justify-center
        h-[40px] w-[40px]
        border-2 border-[#9c0]
        text-[#9c0]
        skew-x-[-12deg]
        overflow-hidden
      "
    >
      <span className="skew-x-[12deg]">
        <FaShoppingCart />
      </span>
    </a>
  );
}
