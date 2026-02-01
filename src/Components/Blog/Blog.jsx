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
      {/* Section Title */}
      <div className="text-center pb-[60px]">
        <div className="mt-[10px] text-[32px] font-bold text-[#433f39]">
          <span>Our Blog</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Blog Grid */}
        <div className="grid grid-cols-1 gap-y-[48px] md:grid-cols-2 xl:grid-cols-3 xl:gap-x-6">
          {blogs.map((blog, idx) => (
            // ✅ IMPORTANT: reserve space for absolute overlay
            <div key={idx} className="pb-[120px]">
              {/* .blog (position: relative) */}
              <div className="relative">
                {/* Image */}
                <div className="mb-[50px] overflow-hidden">
                  <img
                    src={blog.image}
                    alt=""
                    className="w-full h-auto"
                    decoding="async"
                  />
                </div>

                {/* Overlay Info Box */}
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
                  {/* Title + underline */}
                  <h4 className="relative mb-[10px] text-black pb-[10px] text-[20px] mt-[-15px]">
                    {blog.title}
                    <span className="absolute left-0 bottom-0 block h-px w-[50px] bg-[rgba(68,68,68,0.4)]" />
                  </h4>

                  {/* Description */}
                  <span className="text-[13px] text-black block">
                    {blog.description}
                  </span>

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

        {/* View More Button */}
        <div className="mt-[65px] text-center">
          <button
            type="button"
            className="
              group relative inline-flex items-center justify-center
              h-[52px] w-[181px]
              bg-[#9c0] text-white
              uppercase text-[14px] leading-[22px] tracking-[0.03em]
              skew-x-[-12deg]
              transition-all duration-300
              overflow-hidden border-0
            ">
            {/* hover fill like .global-button:before */}
            <span
              className="
                absolute inset-0 w-0
                bg-[#8cbb00]
                transition-all duration-300
                group-hover:w-full
              "
            />

            {/* content wrapper (unskew) */}
            <span className="relative z-10 skew-x-[12deg]">VIEW MORE</span>
          </button>
        </div>
      </div>
    </section>
  );
}
