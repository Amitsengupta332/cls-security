import { FaArrowRight } from "react-icons/fa";

import blogImg from "../../assets/img/maincat/mainpage-img1.webp";

export default function Blog() {
  const blogs = [
    {
      image: blogImg,
      title: "Real-time AI-powered Monitoring System",
      description:
        "Instinctools was approached by IPwe for assistance in revamping their marketplace for monetizing patents encased in non-fungible tokens or NFTs...",
    },
    {
      image: blogImg,
      title: "Real-time AI-powered Monitoring System",
      description:
        "Instinctools was approached by IPwe for assistance in revamping their marketplace for monetizing patents encased in non-fungible tokens or NFTs...",
    },
    {
      image: blogImg,
      title: "Real-time AI-powered Monitoring System",
      description:
        "Instinctools was approached by IPwe for assistance in revamping their marketplace for monetizing patents encased in non-fungible tokens or NFTs...",
    },
  ];

  return (
    <section id="our-blog" className="py-20 bg-gray-50">
      {/* Title */}
      <div className="text-center mb-12">
        <span className="text-green-500 font-semibold uppercase tracking-wide">
          Our Blog
        </span>

        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Latest News & Articles
        </h2>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition">
              {/* Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-[220px] object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <h4 className="text-lg font-semibold mb-2">{blog.title}</h4>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {blog.description}
                </p>

                {/* Read More */}
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-2 text-green-500 font-medium hover:underline">
                  Read More <FaArrowRight size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <button className="border border-green-500 text-green-500 px-6 py-3 rounded hover:bg-green-500 hover:text-white transition">
            View More
          </button>
        </div>
      </div>
    </section>
  );
}


import blogImg from "../../assets/img/maincat/mainpage-img1.webp";

export default function Blog() {
  const blogs = [
    {
      image: blogImg,
      title: "Real-time AI-powered Monitoring System",
      description:
        "*instinctools was approached by IPwe for assistance in revamping their marketplace for monetizing patents encased in non-fungible tokens or NFTs...",
      link: "#",
    },
    {
      image: blogImg,
      title: "Real-time AI-powered Monitoring System",
      description:
        "*instinctools was approached by IPwe for assistance in revamping their marketplace for monetizing patents encased in non-fungible tokens or NFTs...",
      link: "#",
    },
    {
      image: blogImg,
      title: "Real-time AI-powered Monitoring System",
      description:
        "*instinctools was approached by IPwe for assistance in revamping their marketplace for monetizing patents encased in non-fungible tokens or NFTs...",
      link: "#",
    },
  ];

  return (
    <section id="our-blog" className="bg-[#f9f9f9] py-[60px] pb-[80px]">
      {/* Section Title (match your .section-title div style) */}
      <div className="text-center pb-[60px]">
        <div className="mt-[10px] text-[32px] font-bold text-[#433f39]">
          <span>Our Blog</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* row gy-5 => big vertical gap */}
        <div className="grid grid-cols-1 gap-y-[48px] md:grid-cols-2 xl:grid-cols-3 xl:gap-x-6">
          {blogs.map((blog, idx) => (
            <div key={idx}>
              {/* .blog (position: relative) */}
              <div className="relative">
                {/* .pic */}
                <div className="mb-[50px] overflow-hidden">
                  <img
                    src={blog.image}
                    alt=""
                    className="w-full h-auto"
                    decoding="async"
                  />
                </div>

                {/* .blog-info */}
                <div
                  className="
                    absolute left-[20px] right-[20px]
                    top-[70%]
                    bg-white
                    px-[15px] py-[20px]
                    overflow-hidden
                    shadow-[0px_2px_15px_rgba(0,0,0,0.1)]
                    opacity-70
                    transition-all duration-500
                    text-[color:rgba(68,68,68,0.8)]
                  ">
                  {/* h4 + underline */}
                  <h4 className="relative mb-[10px] pb-[10px] text-[20px]">
                    {blog.title}
                    <span className="absolute left-0 bottom-0 block h-px w-[50px] bg-[rgba(68,68,68,0.4)]" />
                  </h4>

                  {/* description (PHP uses span) */}
                  <span className="text-[13px]">{blog.description}</span>

                  {/* Read More */}
                  <div className="mt-3">
                    <a
                      href={blog.link}
                      className="
                        group inline-flex items-center
                        text-[#9c0]
                        transition-colors duration-300
                        hover:text-[#444]
                      ">
                      <span>Read More</span>
                      <span
                        className="
                          ml-2 inline-block
                          transition-transform duration-300
                          group-hover:translate-x-[5px]
                        ">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button (pixel-perfect to .global-button + .btn-transparent) */}
        <div className="mt-12 text-center">
          <div className="relative overflow-hidden mt-[65px] top-[15%] inline-block">
            <button
              type="button"
              className="
                group relative inline-flex items-center justify-center
                h-[52px] px-[40px]
                bg-[#9c0] text-white
                uppercase text-[14px] leading-[22px] tracking-[.03em]
                skew-x-[-12deg]
                transition-all duration-300
                overflow-hidden
                border-0
              ">
              {/* This is your .global-button:before fill */}
              <span
                className="
                  absolute left-0 top-0 h-full w-0
                  bg-[#8cbb00]
                  transition-all duration-300
                  group-hover:w-full
                "
              />
              {/* This is your .global-button-content-wrapper */}
              <span className="relative z-10 flex items-center gap-[10px] skew-x-[12deg]">
                view more
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}








    <div className="mt-16 text-center">
          <div className="relative overflow-hidden mt-[65px] top-[15%] inline-block">
            <button
              type="button"
              className="
                group relative inline-flex items-center justify-center
                h-[52px] px-[40px]
                bg-[#9c0] text-white
                uppercase text-[14px] leading-[22px] tracking-[.03em]
                skew-x-[-12deg]
                transition-all duration-300
                overflow-hidden
                border-0
              ">
              {/* This is your .global-button:before fill */}
              <span
                className="
                  absolute left-0 top-0 h-full w-0
                  bg-[#8cbb00]
                  transition-all duration-300
                  group-hover:w-full
                "
              />
              {/* This is your .global-button-content-wrapper */}
              <span className="relative z-10 flex items-center gap-[10px] skew-x-[12deg]">
                view more
              </span>
            </button>
          </div>
        </div>



{/* View More Button (PIXEL PERFECT) */}
<div className="mt-[65px] text-center">
  <button
    type="button"
    className="
      relative inline-flex items-center justify-center
      h-[52px] w-[181px]
      bg-[#9c0] text-white
      uppercase text-[14px] leading-[22px] tracking-[0.03em]
      skew-x-[-12deg]
      transition-all duration-300
      overflow-hidden border-0
    "
  >
    {/* hover fill like .global-button:before */}
    <span
      className="
        absolute inset-0 w-0
        bg-[#8cbb00]
        transition-all duration-300
        hover:w-full
      "
    />
    {/* content wrapper (unskew) */}
    <span className="relative z-10 skew-x-[12deg]">
      VIEW MORE
    </span>
  </button>
</div>
