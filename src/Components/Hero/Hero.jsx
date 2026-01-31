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
        className="absolute inset-0 w-full h-full object-cover">
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
        <div className="mt-8 flex justify-center gap-5">
          <a
            href="#services"
            className="
      border border-green-400
      text-green-400
      px-5 py-2.5
      text-sm
      rounded
      hover:bg-[#8cbb00]
      hover:text-black
      transition-all
      duration-200
      hover:scale-105
    ">
            Recent Projects
          </a>

          <a
            href="#team"
            className="
       bg-[#9c0]
      text-black
      px-5 py-2.5
      text-sm
      rounded
      font-semibold
      hover:bg-[#8cbb00]
      transition-all
      duration-200
      hover:scale-105
    ">
            Get Free Estimation
          </a>
        </div>
      </div>
    </section>
  );
}
