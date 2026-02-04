import { useMemo, useState } from "react";
import { FaStar } from "react-icons/fa";
import Qty from "./Qty";
import CartButton from "./CartButton";

// demo images (replace with your real images)
import thumb1 from "../../assets/img/product/details/thumb-1.jpg";
import thumb2 from "../../assets/img/product/details/thumb-2.jpg";
import thumb3 from "../../assets/img/product/details/thumb-3.jpg";
import thumb4 from "../../assets/img/product/details/thumb-4.jpg";

import big1 from "../../assets/img/product/details/product-1.webp";
import big2 from "../../assets/img/product/details/product-2.webp";
import big3 from "../../assets/img/product/details/product-3.png";
import big4 from "../../assets/img/product/details/product-4.webp";

export default function ProductDetailsMain() {
  const gallery = useMemo(
    () => [
      { thumb: thumb1, big: big1 },
      { thumb: thumb2, big: big2 },
      { thumb: thumb3, big: big3 },
      { thumb: thumb4, big: big4 },
    ],
    []
  );

  const [active, setActive] = useState(0);

  const product = useMemo(
    () => ({
      title:
        "HIKVISION DS-2CD2123G2-IU(2.8mm) IP Kamera HIKVISION DS-2CD2123G2-IU(2.8mm) IP Kamera HIKVISION DS-2CD2123G2-IU(2.8mm) IP Kamera",
      brand: "HIKVISION",
      sku: "CLS100290968",
      price: "169.99 €",
      oldPrice: "3.099,",
      description:
        "Entdecken Sie die Spitzentechnologie der Uniview IPC2128LE-ADF28KM-G-NB 8MP 2.8mm EasyStar IP Bullet Überwachungskamera, eine ideale Lösung für Ihre Videoüberwachung. Entworfen, um außergewöhnliche Leistung in Nachtüberwachung zu liefern, bietet diese Kamera gestochen scharfe Farbbilder und intelligente Bewegungserkennung an.",
    }),
    []
  );

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
      {/* LEFT: gallery */}
      <div className="overflow-hidden">
        <div className="flex gap-5">
          {/* thumbs */}
          <div className="w-[22%] space-y-5">
            {gallery.map((g, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActive(idx)}
                className="block w-full relative"
              >
                <img src={g.thumb} alt="" className="w-full block" />
                {/* active overlay like php */}
                {active === idx ? (
                  <span className="absolute inset-0 bg-black/30" />
                ) : null}
              </button>
            ))}
          </div>

          {/* big image */}
          <div className="w-[78%]">
            <img
              src={gallery[active].big}
              alt="Product"
              className="w-full block"
            />
          </div>
        </div>
      </div>

      {/* RIGHT: details card (match your product card style) */}
      <div>
        <div className="bg-white transition-all duration-300">
          <div className="px-[10px]">
            <div className="p-3">
              <h3
                className="
                  text-left
                  text-[16px] font-[500]
                  leading-[28px]
                  text-[rgba(80,95,107)]
                "
              >
                {product.title}
              </h3>

              <span className="block mt-1 text-[14px] text-black">
                Brand: {product.brand}
              </span>

              {/* rating + sku */}
              <div className="mt-2 flex items-center justify-between max-w-[40%]">
                <ul className="my-2 flex items-center gap-[3px] text-[#7a7a7a]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <li key={i} className="leading-none">
                      <FaStar size={14} color="#7a7a7a" />
                    </li>
                  ))}
                </ul>

                <div className="text-[#868686] text-[14px]">
                  <span>{product.sku}</span>
                </div>
              </div>

              {/* price container (max-w 40% like css) */}
              <div className="mt-1 flex items-center justify-between max-w-[40%]">
                <div className="inline-grid text-left">
                  <span className="font-bold text-[35px]">
                    {product.price}
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
                    <span className="text-black">{product.oldPrice}</span>
                    <span>-</span>
                  </span>
                </div>
              </div>

              {/* short description */}
              <div className="mt-3 text-[14px] text-black">
                <p>{product.description}</p>
              </div>

              {/* qty + cart (your php had hidden; you can remove hidden if needed) */}
              <div className="mt-3 flex items-center gap-5 hidden">
                <Qty />
                <CartButton />
              </div>

              {/* widget */}
              <div className="mt-8 border-t border-[#ebebeb] pt-8">
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="w-[150px] font-semibold text-[14px] text-[#111]">
                      Availability:
                    </span>
                    <label className="flex items-center gap-2 text-[14px] text-[#666] relative cursor-pointer">
                      In Stock
                      <input type="checkbox" defaultChecked className="hidden" />
                      <span className="relative h-[10px] w-[10px] border border-[#444] rounded-sm mt-[2px]" />
                    </label>
                  </li>

                  <li className="flex gap-3">
                    <span className="w-[150px] font-semibold text-[14px] text-[#111]">
                      Available color:
                    </span>

                    <div className="flex items-center gap-4">
                      <label className="relative cursor-pointer">
                        <input type="radio" name="color" defaultChecked className="hidden" />
                        <span className="block h-[20px] w-[20px] rounded-full bg-[#e31e2f]" />
                      </label>

                      <label className="relative cursor-pointer">
                        <input type="radio" name="color" className="hidden" />
                        <span className="block h-[20px] w-[20px] rounded-full bg-[#111]" />
                      </label>

                      <label className="relative cursor-pointer">
                        <input type="radio" name="color" className="hidden" />
                        <span className="block h-[20px] w-[20px] rounded-full bg-[#e4aa8b]" />
                      </label>
                    </div>
                  </li>

                  <li className="flex gap-3">
                    <span className="w-[150px] font-semibold text-[14px] text-[#111]">
                      Available size:
                    </span>

                    <div className="flex items-center gap-3 text-[14px] uppercase text-[#666]">
                      {["xs", "s", "m", "l"].map((s) => (
                        <button
                          key={s}
                          type="button"
                          className="hover:text-red-500"
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </li>

                  <li className="flex gap-3">
                    <span className="w-[150px] font-semibold text-[14px] text-[#111]">
                      Promotions:
                    </span>
                    <p className="text-[14px] text-[#666]">Free shipping</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end right */}
    </div>
  );
}
