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
    <section id="services" className="py-20 bg-gray-50">
      {/* Title */}
      <div className="text-center mb-12">
        <span className="text-green-500 text-3xl font-semibold uppercase tracking-wide">
          Our Service
        </span>

        <h2 className="text-3xl md:text-4xl font-bold mt-2">What We Offer</h2>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition">
              {/* Image */}
              <div className="relative h-[260px] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 group-hover:text-green-500 transition">
                  {service.title}

                  <FaArrowRight size={14} />
                </h3>

                <p className="text-gray-600 text-sm mt-3 leading-relaxed">
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
