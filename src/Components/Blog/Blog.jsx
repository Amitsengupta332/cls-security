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
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition"
            >

              {/* Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-[220px] object-cover"
              />

              {/* Content */}
              <div className="p-6">

                <h4 className="text-lg font-semibold mb-2">
                  {blog.title}
                </h4>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {blog.description}
                </p>

                {/* Read More */}
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-2 text-green-500 font-medium hover:underline"
                >
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
