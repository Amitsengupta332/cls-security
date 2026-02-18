import { ReactTyped } from "react-typed";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative overflow-hidden
        flex items-center justify-center
        h-[calc(100vh-100px)]
        max-[1533px]:h-screen
      "
    >
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

      {/* section-overlay (same like your CSS) */}
      <div
        className="
          absolute inset-0 z-[2] pointer-events-none opacity-[0.35]
          bg-[linear-gradient(.49deg,rgba(242,242,242,0.65)_0%,rgba(17,22,31,0)_100%)]
        "
      />

      {/* Content */}
      <div className="relative z-[3] w-full">
        <div
          className="
            mx-auto px-6 text-center
            max-w-7xl
            min-[1300px]:max-w-[1400px]
          "
        >
          {/* Heading */}
          <h1
            className="
              text-white font-bold
              text-3xl leading-[1.115em] tracking-[-.03em]
              max-[1500px]:text-[40px]
              max-[767px]:text-[25px]
            "
          >
            Software Development <br /> Services
          </h1>

          {/* Subtitle */}
          <p
            className="
              mt-4 text-white/90
              text-[32px] leading-[1.25em] tracking-[-.32px]
              max-[1500px]:text-[20px]
            "
          >
            Self-managed Cross-functional Dedicated teams
          </p>

          {/* Typed */}
          <div className="mt-4 text-white text-[16px]">
            <ReactTyped
              strings={[
                "Software Development Services",
                "Web Development",
                "Mobile App Development",
                "Cloud Solutions",
                "AI & ML Services",
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </div>

          {/* Buttons */}
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {/* <li>
              <a
                href="#services"
                className="
                  relative inline-flex items-center justify-center
                  h-[52px] px-[40px]
                  border-2 border-[#9c0]
                  text-[#9c0]
                  uppercase text-[14px] leading-[22px] tracking-[.03em]
                  skew-x-[-12deg]
                  transition-all duration-300
                  overflow-hidden
                  hover:text-white hover:border-[#8cbb00]
                  before:content-['']
                  before:absolute before:left-0 before:top-0
                  before:h-full before:w-0
                  before:bg-[#8cbb00]
                  before:transition-all before:duration-300
                  hover:before:w-full
                "
              >
                <span className="relative z-10 skew-x-[12deg] flex items-center gap-[10px]">
                  Recent projects
                </span>
              </a>
            </li> */}

            <li>
              <a
                href="#team"
                className="
                  relative inline-flex items-center justify-center
                  h-[52px] px-[40px]
                  border-2 border-[#9c0]
                  bg-[#9c0] text-white
                  uppercase text-[14px] leading-[22px] tracking-[.03em]
                  skew-x-[-12deg]
                  transition-all duration-300
                  overflow-hidden
                  hover:border-[#8cbb00]
                  before:content-['']
                  before:absolute before:left-0 before:top-0
                  before:h-full before:w-0
                  before:bg-[#8cbb00]
                  before:transition-all before:duration-300
                  hover:before:w-full
                "
              >
                <span className="relative z-10 skew-x-[12deg] flex items-center gap-[10px]">
                  Get free estimation
                </span>
              </a>
            </li>
          </ul>
          {/* <ul className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <li>
              <a
                href="#services"
                className="
                  relative inline-flex items-center justify-center
                  h-[52px] px-[40px]
                  border-2 border-[#9c0]
                  text-[#9c0]
                  uppercase text-[14px] leading-[22px] tracking-[.03em]
                  skew-x-[-12deg]
                  transition-all duration-300
                  overflow-hidden
                  hover:text-white hover:border-[#8cbb00]
                  before:content-['']
                  before:absolute before:left-0 before:top-0
                  before:h-full before:w-0
                  before:bg-[#8cbb00]
                  before:transition-all before:duration-300
                  hover:before:w-full
                "
              >
                <span className="relative z-10 skew-x-[12deg] flex items-center gap-[10px]">
                  Recent projects
                </span>
              </a>
            </li>

            <li>
              <a
                href="#team"
                className="
                  relative inline-flex items-center justify-center
                  h-[52px] px-[40px]
                  border-2 border-[#9c0]
                  bg-[#9c0] text-white
                  uppercase text-[14px] leading-[22px] tracking-[.03em]
                  skew-x-[-12deg]
                  transition-all duration-300
                  overflow-hidden
                  hover:border-[#8cbb00]
                  before:content-['']
                  before:absolute before:left-0 before:top-0
                  before:h-full before:w-0
                  before:bg-[#8cbb00]
                  before:transition-all before:duration-300
                  hover:before:w-full
                "
              >
                <span className="relative z-10 skew-x-[12deg] flex items-center gap-[10px]">
                  Get free estimation
                </span>
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </section>
  );
}
