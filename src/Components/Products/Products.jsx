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
    <section id="products" className="py-20 bg-gray-50">

      {/* Title */}
      <div className="text-center mb-12">
        <span className="text-green-500 font-semibold uppercase">
          Angebot der Woche
        </span>

        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Weekly Offers
        </h2>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          {products.map((p, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow hover:shadow-xl transition p-4 flex flex-col"
            >

              {/* Brand */}
              <img
                src={p.brand}
                alt="brand"
                className="h-6 object-contain mb-3"
              />

              {/* Image */}
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-40 object-contain mb-4 hover:scale-105 transition"
              />

              {/* Title */}
              <h3 className="text-sm font-semibold mb-2 line-clamp-2">
                {p.title}
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
                <span className="text-gray-500">{p.sku}</span>

              </div>

              {/* Price */}
              {p.type === "normal" ? (
                <>
                  <div className="flex justify-between items-center mb-3">

                    <div>
                      <span className="font-bold text-lg">
                        {p.price}
                      </span>

                      <p className="text-xs text-gray-500">
                        Incl. 19% VAT
                      </p>
                    </div>

                    <div className="text-right text-xs text-gray-500 line-through">
                      {p.oldPrice}
                    </div>

                  </div>

                  {/* Cart */}
                  <button className="mt-auto bg-green-500 text-white py-2 rounded flex items-center justify-center gap-2 hover:bg-green-600 transition">
                    <FaShoppingCart /> Add to Cart
                  </button>
                </>
              ) : (
                <>
                  {/* Call For Price */}
                  <div className="mt-4 text-center">

                    <div className="flex justify-center items-center gap-2 font-semibold">
                      <FaPhoneAlt /> {p.phone}
                    </div>

                    <button className="mt-3 border border-green-500 text-green-500 px-4 py-2 rounded hover:bg-green-500 hover:text-white transition w-full">
                      Request Price
                    </button>

                  </div>
                </>
              )}

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
