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
    <section id="services" className="py-24 bg-gray-50">

      {/* Title */}
      <div className="text-center mb-14">
        <span className="text-green-500 text-3xl font-semibold uppercase">
          Our Service
        </span>

        <h2 className="text-3xl md:text-4xl font-bold mt-3">
          What We Offer
        </h2>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg overflow-hidden
              shadow-md hover:shadow-2xl
              transition-all duration-500
              hover:-translate-y-2"
            >

              {/* Image */}
              <div className="relative h-[240px] overflow-hidden">

                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover
                  transition-all duration-500
                  group-hover:scale-95"
                />

                {/* Dark Overlay */}
                <div
                  className="absolute inset-0 bg-black/0
                  group-hover:bg-black/20
                  transition-all duration-500"
                ></div>

              </div>

              {/* Content */}
              <div
                className="p-6
                transition-all duration-500
                group-hover:-translate-y-4"
              >

                {/* Title + Arrow */}
                <div className="flex items-start justify-between gap-4">

                  <h3 className="text-lg font-semibold leading-snug">
                    {service.title}
                  </h3>

                  {/* Arrow Box */}
                  <div
                    className="w-10 h-10 bg-green-500 text-white
                    flex items-center justify-center
                    rounded transition-all duration-300
                    group-hover:bg-green-600"
                  >
                    <FaArrowRight size={14} />
                  </div>

                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                  {service.description}
                </p>

              </div>

            </div>
          ))}

        </div>
      </div>

    </section>
  );
}



// 

import "./services.css";

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
      link: "#",
    },
    {
      title: "Real-time AI-powered Monitoring System",
      image: img2,
      description:
        "Instinctools was approached by IPwe for assistance in revamping their marketplace for monetizing patents encased in NFTs.",
      link: "#",
    },
    {
      title: "User Support System For Mercedes-Benz",
      image: img3,
      description:
        "Instinctools helped to revamp the marketplace for monetizing patents encased in NFTs.",
      link: "#",
    },
    {
      title: "Conversational AI Chatbot For Bank",
      image: img4,
      description:
        "Instinctools improved the NFT-based patent marketplace to increase transparency and accessibility.",
      link: "#",
    },
    {
      title: "Web App For Robotics Manufacturer",
      image: img5,
      description:
        "Instinctools revamped the robotics manufacturer's patent marketplace platform.",
      link: "#",
    },
    {
      title: "ML-Powered Demand Forecasting For Ecommerce",
      image: img6,
      description:
        "Instinctools revamped the NFT-based marketplace for improved patent monetization.",
      link: "#",
    },
  ];

  return (
    <section id="services" className="bg-[#f9f9f9] py-[60px] pb-[80px]">
      {/* Title (match your .section-title) */}
      <div className="text-center pb-[60px]">
        <div className="mt-[10px] text-[32px] font-bold text-[#433f39]">
          <span>Our Service</span>
        </div>
      </div>

      {/* Grid spacing close to Bootstrap row gy-4 */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <a
                href={service.link}
                className="service-card__link"
                style={{ height: 345 }} // from your PHP inline style
              >
                <div className="service-card__image">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-card__img"
                    decoding="async"
                    loading="lazy"
                  />
                </div>

                <div className="service-card__content">
                  <h3 className="service-card__title">
                    {service.title}
                    <span className="service-card__arrow">
                      <svg
                        viewBox="0 0 31 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.195 15.289h17.5M15.945 6.539l8.75 8.75-8.75 8.75"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </h3>

                  <div className="service-card__text">
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
