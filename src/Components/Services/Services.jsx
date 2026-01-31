//

import { FaArrowRight } from "react-icons/fa";

import img1 from "../../assets/img/maincat/mainpage-img3.webp";
import img2 from "../../assets/img/maincat/mainpage-img1.webp";
import img3 from "../../assets/img/maincat/user-support-system-for-mercedes-benz.webp";
import img4 from "../../assets/img/maincat/homepage-conversational-ai-chatbot-for-bank.webp";
import img5 from "../../assets/img/maincat/homepage-web-app-for-robotics-manufacturer.webp";
import img6 from "../../assets/img/maincat/homepage-ml-powered-demand-forecasting-for-ecommerce.webp";

export default function Services() {
  const services = [
    {
      title: "NFT Marketplace Development For Patents",
      image: img1,
      description:
        "How developing a frictionless web app empowered an agricultural startup to bring the idea of a real-time AI-powered monitoring system to life and serve farms with 10,000–15,000 plants.",
    },
    {
      title: "Real-time AI-powered Monitoring System",
      image: img2,
      description:
        "Instinctools was approached by IPwe for assistance in revamping their marketplace for monetizing patents encased in NFTs.",
    },
    {
      title: "User Support System For Mercedes-Benz",
      image: img3,
      description:
        "Instinctools helped to revamp the marketplace for monetizing patents encased in NFTs.",
    },
    {
      title: "Conversational AI Chatbot For Bank",
      image: img4,
      description:
        "Instinctools improved the NFT-based patent marketplace to increase transparency and accessibility.",
    },
    {
      title: "Web App For Robotics Manufacturer",
      image: img5,
      description:
        "Instinctools revamped the robotics manufacturer's patent marketplace platform.",
    },
    {
      title: "ML-Powered Demand Forecasting For Ecommerce",
      image: img6,
      description:
        "Instinctools revamped the NFT-based marketplace for improved patent monetization.",
    },
  ];

  return (
    <section id="services" className="bg-[#f9f9f9] py-[60px] pb-[80px]">
      {/* Title (matches your .section-title div) */}
      <div className="text-center pb-[60px]">
        <div className="mt-[10px] text-[32px] font-bold text-[#433f39]">
          <span>Our Service</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative"
              // Bootstrap columns were just layout; Tailwind grid handles it
            >
              <a
                href={service.link}
                className={[
                  "group block overflow-hidden bg-white",
                  "border border-[#dee4ea]",
                  "shadow-[0_8px_10px_hsla(0,0%,65%,0.05)]",
                ].join(" ")}
                style={{ height: 345 }} // matches your PHP inline style
              >
                {/* Image block (245px -> 80px on hover) */}
                <div className="relative h-[245px] w-full transition-[height] duration-[800ms] group-hover:h-[80px]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover"
                  />
                  {/* overlay always present (rgba(0,0,0,.25)) */}
                  <div className="absolute inset-0 bg-black/25" />
                </div>

                {/* Content area */}
                <div
                  className={[
                    "flex h-[calc(100%-245px)] min-h-[100px] flex-col justify-center overflow-hidden",
                    "px-[40px] py-[22px] pr-[30px]",
                    "transition-[height] duration-300 group-hover:h-auto group-hover:max-h-[calc(100%-80px)]",
                    // Mobile overrides from your CSS
                    "max-md:px-[10px] max-md:py-[5px] max-md:pr-[10px]",
                  ].join(" ")}>
                  {/* Title */}
                  <h3
                    className={[
                      "relative text-[#22282d]",
                      "text-[18px] leading-[1.333em] tracking-[-0.32px]",
                      "pr-[80px]",
                      "max-md:text-[16px] max-md:pr-[36px]",
                    ].join(" ")}>
                    {service.title}

                    {/* Arrow box */}
                    <span
                      className={[
                        "absolute right-0 top-1/2 flex h-[45px] w-[50px] -translate-y-1/2 items-center justify-center",
                        "bg-[#9c0] skew-x-[-12deg]",
                      ].join(" ")}>
                      <svg
                        viewBox="0 0 31 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-[28px] w-[28px] skew-x-[12deg]">
                        <path
                          d="M7.195 15.289h17.5M15.945 6.539l8.75 8.75-8.75 8.75"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </h3>

                  {/* Description (Tailwind-only replacement for height:auto transition) */}
                  <div
                    className={[
                      "overflow-hidden text-[14px] font-normal leading-[1.22] text-[#171e2a]",
                      // start hidden
                      "max-h-0 opacity-0",
                      // animate open (delay 500ms like your CSS)
                      "transition-[max-height,opacity,margin-top] duration-300 delay-500",
                      "group-hover:max-h-[220px] group-hover:opacity-100 group-hover:mt-[30px]",
                      // mobile: margin-top 0 on hover (from your CSS)
                      "max-md:group-hover:mt-0",
                    ].join(" ")}>
                    <p>{service.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
