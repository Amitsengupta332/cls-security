import { ReactTyped } from "react-typed";

export default function Hero() {
  return (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/home.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Software Development Services
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg md:text-xl text-gray-200">
          Self-managed Cross-functional Dedicated teams
        </p>

        {/* Typed Text */}
        <div className="mt-4 text-green-400 text-lg font-medium">
          <ReactTyped
            strings={[
              "Web Development",
              "Mobile App Development",
              "Cloud Solutions",
              "AI & ML Services",
              "Cyber Security Solutions",
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4 flex-wrap">

          <a
            href="#services"
            className="border border-green-400 text-green-400 px-6 py-3 rounded hover:bg-green-400 hover:text-black transition"
          >
            Recent Projects
          </a>

          <a
            href="#team"
            className="bg-green-400 text-black px-6 py-3 rounded font-semibold hover:bg-green-500 transition"
          >
            Get Free Estimation
          </a>

        </div>

      </div>

    </section>
  );
}
