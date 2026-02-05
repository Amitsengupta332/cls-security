import { useState, useCallback, useEffect, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";

import { FaPlus, FaMinus, FaShoppingCart, FaPhoneAlt, FaStar } from "react-icons/fa";

import productImg from "../../assets/img/products/hikvision.webp";
import leftArrow from "../../assets/icons/left-arrow-svgrepo-com.svg";
import rightArrow from "../../assets/icons/right-arrow-svgrepo-com.svg";

export default function ProductsSwiper() {
  // ✅ EMBLA
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: false,
  });

  // ✅ exact dots state
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      onSelect();
    });
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i) => emblaApi?.scrollTo(i), [emblaApi]);

  // ✅ PRODUCTS (grid code style)
  const products = useMemo(
    () => [
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
        title: "HIKVISION DS-2CD2347G2H-LIU(2.8mm) ColorVu Kamera",
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
    ],
    []
  );

  return (
    <section className="bg-[#f9f9f9] py-[60px] pb-[80px]">
      {/* Title */}
      <div className="text-center pb-[60px]">
        <div className="mt-[10px] text-[32px] font-bold text-[#433f39]">
          <span>Angebot der Woche</span>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto w-full px-6">
        {/* ✅ SVG ARROWS (same style) */}
        <button
          type="button"
          onClick={scrollPrev}
          className="
            hidden sm:flex
            absolute left-[10px] top-[110px] z-10
            h-[34px] w-[34px]
            bg-[#9c0] skew-x-[-12deg]
            items-center justify-center
            hover:bg-[#8cbb00] transition
          "
          aria-label="Previous"
        >
          <span className="skew-x-[12deg] flex items-center justify-center h-full w-full">
            <img src={leftArrow} alt="Prev" className="h-4 w-4" />
          </span>
        </button>

        <button
          type="button"
          onClick={scrollNext}
          className="
            hidden sm:flex
            absolute right-[10px] top-[110px] z-10
            h-[34px] w-[34px]
            bg-[#9c0] skew-x-[-12deg]
            items-center justify-center
            hover:bg-[#8cbb00] transition
          "
          aria-label="Next"
        >
          <span className="skew-x-[12deg] flex items-center justify-center h-full w-full">
            <img src={rightArrow} alt="Next" className="h-4 w-4" />
          </span>
        </button>

        {/* ✅ EMBLA */}
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {products.map((p, i) => (
              <div
                key={i}
                className="
                  flex-[0_0_100%]
                  sm:flex-[0_0_50%]
                  lg:flex-[0_0_33.333%]
                  xl:flex-[0_0_25%]
                  p-[5px]
                "
              >
                {/* card */}
                <a href={p.link} className="block h-full">
                  <div className="h-full bg-white px-[10px] transition-all duration-300 hover:shadow-[0_5px_83px_0_rgba(27,26,26,0.12)]">
                    <div className="group flex h-full w-full flex-col p-3 m-2">
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
                        <div className="block">
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
                        </div>

                        {/* Title */}
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

                        {/* Rating + SKU */}
                        <div className="mb-1 flex items-center justify-between">
                          <div className="my-2 flex items-center gap-[3px]">
                            {Array.from({ length: 5 }).map((_, j) => (
                              <FaStar key={j} size={14} color="#7a7a7a" />
                            ))}
                          </div>

                          <div className="text-[#868686] text-[14px]">
                            <span>{p.sku}</span>
                          </div>
                        </div>

                        {/* Price */}
                        {p.type === "normal" ? (
                          <div className="flex items-center justify-between">
                            <div className="inline-grid text-left">
                              <span className="font-bold text-[35px] xl:text-[25px]">
                                {p.price}
                              </span>
                              <span className="text-[11px] leading-[11px]">
                                <span className="hidden">Inkl</span>{" "}
                                <span className="text-[#9c0]">{p.tax}</span>
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
                          <div className="h-[60px]" />
                        )}
                      </div>

                      {/* Footer pinned bottom */}
                      <div
                        className="mt-auto pt-6"
                        onClick={(e) => e.preventDefault()}
                      >
                        {p.type === "normal" ? (
                          <div className="flex items-center justify-between">
                            <Qty />
                            <CartButton />
                          </div>
                        ) : (
                          <CallForPrice phone={p.phone} />
                        )}
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ EXACT DOTS (same as swiper css) */}
        <div className="mt-[20px] relative flex justify-center gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`
                w-[12px] h-[12px] rounded-full
                bg-[rgba(68,68,68,0.5)]
                opacity-50 transition
                ${index === selectedIndex ? "bg-[#444] opacity-100" : ""}
              `}
              aria-label={`Go to slide ${index + 1}`}
              type="button"
            />
          ))}
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
      className="inline-flex h-[40px] shrink-0 items-stretch border-2 border-[#9c0] bg-[#9c0] skew-x-[-12deg] px-[15px] mr-[20px]"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setQty((q) => Math.max(0, q - 1));
        }}
        className="flex h-[38px] w-[38px] items-center justify-center bg-transparent text-white hover:bg-[#8cbb00] transition"
      >
        <FaMinus size={10} />
      </button>

      <input
        value={qty}
        readOnly
        className="h-full w-10 bg-[#9c0] text-center text-white outline-none"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      />

      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setQty((q) => q + 1);
        }}
        className="flex h-[38px] w-[38px] items-center justify-center bg-transparent text-white hover:bg-[#8cbb00] transition"
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
      aria-label="Add to cart"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      className="group relative inline-flex h-[40px] w-[108px] shrink-0 items-center justify-center border-2 border-[#9c0] bg-white skew-x-[-12deg] overflow-hidden transition-colors duration-300"
    >
      <span className="absolute left-0 top-0 h-full w-0 bg-[#8cbb00] transition-all duration-300 group-hover:w-full" />
      <span className="relative skew-x-[12deg] text-[#9c0] group-hover:text-white transition-colors duration-300">
        <FaShoppingCart />
      </span>
    </a>
  );
}

function CallForPrice({ phone }) {
  return (
    <div
      className="group relative mt-[35px] flex h-[40px] items-center justify-center border-2 border-[#9c0] text-[#9c0] font-bold uppercase skew-x-[-12deg] overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="absolute left-0 top-0 h-full w-0 bg-[#8cbb00] transition-all duration-300 group-hover:w-full" />

      <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 invisible transition-opacity duration-200 group-hover:opacity-100 group-hover:visible skew-x-[12deg] text-white text-[15px] font-extrabold px-3">
        <FaPhoneAlt className="text-white" />
        <span>{phone}</span>
      </div>

      <div className="relative skew-x-[12deg] opacity-100 visible transition-opacity duration-200 group-hover:opacity-0 group-hover:invisible">
        Preis anfragen
      </div>
    </div>
  );
}
