import { useState } from "react";

import {
  FaStar,
  FaShoppingCart,
  FaPhoneAlt,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

import productImg from "../../assets/img/products/hikvision.webp";

export default function Products() {
  const products = [
    {
      brand: "https://cls-security.de/pub/media/brand/Hikvision.png",
      image: productImg,
      title: "HIKVISION DS-2CD2123G2-IU(2.8mm) IP Kamera",
      sku: "CLS100290968",
      price: "169.99 €",
      oldPrice: "3.099 €",
      type: "normal",
    },

    {
      brand: "https://cls-security.de/pub/media/brand/Hikvision.png",
      image: productImg,
      title: "HIKVISION DS-2CD2123G2-IU(2.8mm) IP Kamera",
      sku: "CLS100290968",
      price: "169.99 €",
      oldPrice: "3.099 €",
      type: "normal",
    },

    {
      brand: "https://cls-security.de/pub/media/brand/Hikvision.png",
      image: productImg,
      title: "HIKVISION DS-2CD2123G2-IU(2.8mm) IP Kamera",
      sku: "CLS100290968",
      price: "169.99 €",
      oldPrice: "3.099 €",
      type: "normal",
    },

    {
      brand: "https://cls-security.de/pub/media/brand/Hikvision.png",
      image: productImg,
      title: "HIKVISION DS-2CD2123G2-IU(2.8mm) IP Kamera",
      sku: "CLS100290968",
      phone: "0621 7163591",
      type: "call",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      {/* Title */}
      <div className="text-center mb-12">
        <span className="text-green-500 font-semibold uppercase">
          Angebot der Woche
        </span>

        <h2 className="text-3xl font-bold mt-2">Weekly Offers</h2>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((p, index) => (
            <ProductCard key={index} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= CARD ================= */

function ProductCard({ product }) {
  const [qty, setQty] = useState(0);

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col">
      {/* Brand */}
      <img
        src={product.brand}
        alt="brand"
        className="h-6 object-contain mb-3 mx-auto"
      />

      {/* Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-contain mb-4"
      />

      {/* Title */}
      <h3 className="text-sm font-semibold mb-2 line-clamp-2">
        {product.title}
      </h3>

      {/* Rating + SKU */}
      <div className="flex justify-between items-center text-xs mb-3">
        {/* Stars */}
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>

        {/* SKU */}
        <span className="text-gray-500">{product.sku}</span>
      </div>

      {/* Price */}
      {product.type === "normal" ? (
        <>
          <div className="flex justify-between items-center mb-3">
            <div>
              <span className="font-bold text-lg">{product.price}</span>

              <p className="text-xs text-gray-500">Incl. 19% VAT</p>
            </div>

            <div className="text-xs text-gray-400 line-through">
              {product.oldPrice}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-auto flex items-center justify-between gap-2">
            {/* Qty */}
            <div className="flex border rounded overflow-hidden">
              <button
                onClick={() => setQty((q) => Math.max(0, q - 1))}
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200">
                <FaMinus size={12} />
              </button>

              <input
                value={qty}
                readOnly
                className="w-10 text-center text-sm border-x"
              />

              <button
                onClick={() => setQty((q) => q + 1)}
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200">
                <FaPlus size={12} />
              </button>
            </div>

            {/* Cart */}
            <button className="border border-green-500 text-green-500 p-2 rounded hover:bg-green-500 hover:text-white transition">
              <FaShoppingCart />
            </button>
          </div>
        </>
      ) : (
        /* Call For Price */
        <div className="mt-auto text-center">
          <div className="flex justify-center items-center gap-2 font-semibold mb-2">
            <FaPhoneAlt />
            {product.phone}
          </div>

          <button className="w-full border border-green-500 text-green-500 py-2 rounded hover:bg-green-500 hover:text-white transition">
            Preis Anfragen
          </button>
        </div>
      )}
    </div>
  );
}







// product

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




import { useState } from "react";
import "./product.css";

import productImg from "../../assets/img/products/hikvision.webp";

export default function Product() {
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
    <section id="productsgrid" className="productsgrid section light-background">
      {/* Title */}
      <div className="container section-title" data-aos="fade-up">
        <div>
          <span>Angebot der Woche</span>
        </div>
      </div>

      {/* Grid */}
      <div className="container">
        <div className="row gy-4">
          {products.map((p, index) => (
            <div
              key={index}
              className="col-lg-6 col-md-6 col-sm-6 col-xl-3 custom-padding"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="card-item">
                <div
                  className="product_container custom-card p-3 m-2"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <div className="custom-card-body">
                    {/* Brand */}
                    <div className="brand_photo_list">
                      <img
                        src={p.brand}
                        className="brandphoto"
                        width="100"
                        height="30"
                        alt="Brand"
                      />
                    </div>

                    {/* Image */}
                    <a
                      href={p.link}
                      className="imgPart product_thumbnail bg-image hover-zoom"
                      tabIndex={0}
                    >
                      <img
                        src={p.image}
                        alt={p.title}
                        width="180"
                        height="180"
                        className="img_box animation fade-in"
                      />
                    </a>

                    {/* Title + Rating + SKU */}
                    <a href={p.link} aria-label="visit product" tabIndex={0}>
                      <h3 className="card-title productTitle_name">{p.title}</h3>

                      <div className="product-tile__delivery mb-1 d-sm-flex justify-content-between align-items-center">
                        {/* Rating */}
                        <div className="ratingpart">
                          <ul className="list-unstyled list-inline my-2 starRating">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <li key={i} className="list-inline-item mx-0">
                                <span className="icon-star">★</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* SKU */}
                        <div className="skupart">
                          <span>{p.sku}</span>
                        </div>
                      </div>
                    </a>

                    {/* Pricing */}
                    {p.type === "normal" ? (
                      <>
                        <div className="pricecontainer d-flex align-items-center justify-content-between">
                          <div className="regular-price">
                            <span className="currentPrice fw-bold">{p.price}</span>

                            <div className="discount-price-label">
                              <span className="category-br">
                                <span className="home-hidden">Inkl</span>
                                <span className="home-hidden zero-percent">
                                  19% MwSt.
                                </span>
                              </span>
                            </div>
                          </div>

                          <div className="old-price">
                            <span className="instead-price">Statt</span>
                            <span className="strike-through">
                              <span className="price-label pre">ab</span>
                              <span className="currency">€</span>
                              <span className="price">{p.oldPrice},</span>
                              <span className="cents">
                                <span className="minus">-</span>
                              </span>
                            </span>
                          </div>
                        </div>

                        {/* Footer (if you want hidden like PHP, keep "hidden") */}
                        <ProductFooter />
                      </>
                    ) : (
                      <>
                        {/* Call for Price */}
                        <div className="currentPrice mt-2 fw-bold callpricehidden">
                          Preis auf Anfrage
                        </div>

                        <div className="callfor-btn callfor-global-button productFooter mt-4">
                          <div className="phone_number_call2">
                            <span className="icon-phone icomoonMargin">📞</span>
                            {p.phone}
                          </div>
                          <div className="call_for_button">Preis anfragen</div>
                        </div>
                      </>
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

/* Footer component with qty + cart */
function ProductFooter() {
  const [qty, setQty] = useState(0);

  return (
    <div className="productFooter mt-3 d-sm-flex justify-content-between align-items-center">
      <div className="qty-container">
        <button
          className="qty-btn-minus btn-light"
          type="button"
          onClick={() => setQty((q) => Math.max(0, q - 1))}
        >
          <span className="icon-minus">−</span>
        </button>

        <input type="text" name="qty" value={qty} readOnly className="input-qty w-100" />

        <button
          className="qty-btn-plus btn-light"
          type="button"
          onClick={() => setQty((q) => q + 1)}
        >
          <span className="icon-plus">+</span>
        </button>
      </div>

      <div className="readMoreLink">
        <a href="#" className="btn-main global-button">
          <span className="global-button-content-wrapper icon-shopping-cart">🛒</span>
        </a>
      </div>
    </div>
  );
}
