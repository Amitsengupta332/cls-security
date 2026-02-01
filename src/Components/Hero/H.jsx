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

import { ReactTyped } from "react-typed";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative overflow-hidden
        flex items-end
        h-[calc(100vh-100px)]
        max-[1533px]:h-screen
      "
    >
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/home.mp4" type="video/mp4" />
        </video>
      </div>

      {/* section-overlay (same like your CSS) */}
      <div
        className="
          absolute inset-0 z-[2] pointer-events-none opacity-[0.35]
          bg-[linear-gradient(.49deg,rgba(242,242,242,0.65)_0%,rgba(17,22,31,0)_100%)]
        "
      />

      {/* Content */}
      <div className="relative z-[3] w-full pb-[70px]">
        <div className="mx-auto max-w-7xl px-6">
          {/* bannerContent */}
          <div className="flex items-center justify-between gap-10">
            {/* Left block */}
            <div className="mt-4">
              <h1 className="slider-heading text-white font-extrabold">
                Software Development Services
              </h1>
            </div>

            {/* Right block */}
            <div className="mt-4">
              <p className="slider-content text-white/90">
                Self-managed Cross-functional Dedicated teams
              </p>
            </div>
          </div>

          {/* typed (inline like PHP #typed) */}
          <div className="mt-6">
            <span className="text-white text-[20px] md:text-[24px] font-medium">
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
            </span>
          </div>

          {/* Buttons (same structure as PHP bannerBtn list-inline) */}
          <ul className="mt-10 flex flex-wrap items-center gap-4">
            <li>
              <a href="#services" className="btn-main-global">
                <span className="btn-inner">Recent projects</span>
              </a>
            </li>

            <li>
              <a href="#team" className="btn-transparent-global">
                <span className="btn-inner">Get free estimation</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Tailwind-only “global-button” styles */}
      <style>{`
        .slider-heading{
          font-size:70px;
          line-height:1.115em;
          letter-spacing:-.03em;
          max-width:50%;
        }
        .slider-content{
          font-size:32px;
          line-height:1.25em;
          letter-spacing:-.32px;
          max-width:50%;
        }
        @media (max-width:1024px){
          .slider-heading,.slider-content{max-width:100%;}
          .slider-heading{font-size:44px;}
          .slider-content{font-size:22px;}
        }

        .btn-main-global,
        .btn-transparent-global{
          position:relative;
          display:inline-flex;
          justify-content:center;
          align-items:center;
          font-size:14px;
          line-height:22px;
          letter-spacing:.03em;
          transform:skewX(-12deg);
          transition:all .3s ease;
          overflow:hidden;
          text-transform:uppercase;
          height:52px;
          padding:0 40px;
          border-radius:inherit;
        }

        .btn-main-global{
          color:#9c0;
          border:2px solid #9c0;
          background:transparent;
        }

        .btn-transparent-global{
          color:#fff;
          background:#9c0;
          border:2px solid #9c0;
        }

        .btn-main-global::before,
        .btn-transparent-global::before{
          content:"";
          position:absolute;
          left:0;
          top:0;
          width:0;
          height:100%;
          background:#8cbb00;
          transition:all .3s ease;
        }

        .btn-main-global:hover,
        .btn-transparent-global:hover{
          color:#fff;
          border-color:#8cbb00;
        }

        .btn-main-global:hover::before,
        .btn-transparent-global:hover::before{
          width:100%;
        }

        .btn-inner{
          position:relative;
          z-index:1;
          transform:skewX(12deg);
          display:flex;
          align-items:center;
          gap:10px;
        }
      `}</style>
    </section>
  );
}

