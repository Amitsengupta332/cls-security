 
import { Link } from "react-router-dom";
import { FaStar, FaPhoneAlt } from "react-icons/fa";
import { products } from "../../data/products"; // ✅ make sure you export products array from data/products.js

export default function RelatedProducts({ currentSku, limit = 8 }) {
  const related = products
    .filter((p) => p.sku !== currentSku)
    .slice(0, limit);

  if (!related.length) return null;

  return (
    <section className="bg-[#f9f9f9] pt-[40px] pb-[80px]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center pb-[40px]">
          <div className="mt-[10px] text-[28px] font-bold text-[#433f39]">
            <span>RELATED PRODUCTS</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 xl:grid-cols-4">
          {related.map((p) => (
            <div key={p.sku} className="p-[5px]">
              <Link to={`/products/${p.sku}`} className="block h-full">
                <div className="h-full bg-white px-[10px] transition-all duration-300 hover:shadow-[0_5px_83px_0_rgba(27,26,26,0.12)]">
                  <div className="group flex h-full w-full flex-col p-3 m-2">
                    <div className="flex-1 text-center">
                      <div className="text-left">
                        <img
                          src={p.brand}
                          alt="Brand"
                          className="h-[45px] w-[110px] object-contain"
                        />
                      </div>

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
                        <RatingStars />
                        <div className="text-[#868686] text-[14px]">
                          <span>{p.sku}</span>
                        </div>
                      </div>

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
                              <span className="text-black">€</span>
                              <span className="text-black">{p.oldPrice},</span>
                              <span>-</span>
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="mt-3 inline-flex items-center gap-2 text-[#9c0] font-bold">
                          <FaPhoneAlt />
                          <span>{p.phone}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RatingStars() {
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
