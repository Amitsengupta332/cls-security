import { useEffect, useRef, useState } from "react";

export default function SeoContent() {
  const [showMore, setShowMore] = useState(false);
  const [maxH, setMaxH] = useState("0px");
  const contentRef = useRef(null);

  // update animated height
  useEffect(() => {
    if (!contentRef.current) return;

    if (showMore) {
      // open to full content height
      setMaxH(`${contentRef.current.scrollHeight}px`);
    } else {
      // close to 0
      setMaxH("0px");
    }
  }, [showMore]);

  // optional: if window resizes while open, keep height correct
  useEffect(() => {
    const onResize = () => {
      if (!contentRef.current) return;
      if (showMore) setMaxH(`${contentRef.current.scrollHeight}px`);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [showMore]);

  return (
    <section id="seocontent" className="py-[60px] pb-[80px] bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Title */}
        <div className="text-center pb-[60px]">
          <div className="mt-[10px] text-[32px] font-bold text-[#433f39]">
            <span>CLS Security - Ihr Partner für Ihre Sicherheit</span>
          </div>
        </div>

        <div className="full-post">
          {/* SHOW BLOCK (always visible) */}
          <div className="show-block bg-[#f6f8fa] transition-opacity duration-500 p-[24px_30px] mb-[30px] text-justify relative overflow-hidden">
            <p className="text-[15px] leading-[1.8] text-[#171e2a]">
              Sicherheit ist nicht nur ein Schutz des Physischen, sondern auch
              ein Gefühl der Geborgenheit, das tief in unserem Seelenleben
              verwurzelt ist. Bei CLS Security verstehen wir diese Dualität und
              bieten Ihnen nicht nur Produkte zur Sicherung Ihres Wohnraums und
              Eigentums, sondern auch das Wissen und die Technologie, um dieses
              Gefühl der Sicherheit selbstbestimmt zu erlangen und zu bewahren.
              Mit über 20.000 Produkten führender Hersteller und einer
              langjährigen Erfahrung in der Branche steht CLS Security als Ihr
              vertrauenswürdiger Großhändler für Sicherheitstechnik bereit.
            </p>
          </div>

          {/* HIDE BLOCK (animated) */}
          <div
            style={{ maxHeight: maxH }}
            className="
              overflow-hidden
              transition-[max-height] duration-700 ease-in-out
            "
          >
            {/* fade effect also (optional) */}
            <div
              ref={contentRef}
              className={`
                seo-content bg-[#f6f8fa] p-[24px_30px] mb-[30px] text-justify relative overflow-hidden
                transition-opacity duration-500
                ${showMore ? "opacity-100" : "opacity-0"}
              `}
            >
              <h3 className="my-[20px] text-[22px] font-medium text-[#171e2a]">
                CLS Security: Ihr zuverlässiger Partner für umfassende
                Sicherheitslösungen
              </h3>

              <p className="text-[15px] leading-[1.8] text-[#171e2a] mb-4">
                Instinctools is a technology-agnostic company. We treat
                platforms, programming languages, and frameworks as tools to
                achieve our customers&apos; business goals...
              </p>

              <p className="text-[15px] leading-[1.8] text-[#171e2a]">
                Unsere Produkte und Dienstleistungen nutzen die neuesten
                Entwicklungen in den Bereichen Überwachungskamera,
                Zutrittskontrolle und Alarmanlagen, um Ihnen modernsten Schutz
                zu bieten...
              </p>

              <h3 className="my-[20px] text-[22px] font-medium text-[#171e2a]">
                Maßgeschneiderte Lösungen
              </h3>

              <p className="text-[15px] leading-[1.8] text-[#171e2a]">
                Bei CLS Security erkennen wir an, dass Sicherheit nicht &quot;one
                size fits all&quot; ist...
              </p>

              <h3 className="my-[20px] text-[22px] font-medium text-[#171e2a]">
                Warum Sie CLS Security vertrauen sollten:
              </h3>

              <p className="text-[15px] leading-[1.8] text-[#171e2a]">
                CLS Security können Sie darauf vertrauen, dass Sie qualitativ
                hochwertige Sicherheitslösungen erhalten...
              </p>
            </div>
          </div>

          {/* Button (float-right like PHP) */}
          <div className="clearfix">
            {!showMore ? (
              <div className="dedcription-btn float-right mt-[20px]">
                <button
                  type="button"
                  onClick={() => setShowMore(true)}
                  className="
                    group relative inline-flex items-center justify-center
                    h-[52px] px-[40px]
                    bg-[#9c0] text-white
                    uppercase text-[14px] leading-[22px] tracking-[.03em]
                    skew-x-[-12deg]
                    transition-all duration-300
                    overflow-hidden border-0
                  "
                >
                  <span
                    className="
                      absolute left-0 top-0 h-full w-0
                      bg-[#8cbb00]
                      transition-all duration-300
                      group-hover:w-full
                    "
                  />
                  <span className="relative z-10 flex items-center gap-[10px] skew-x-[12deg]">
                    Mehr lesen <span className="text-[18px] leading-none">›</span>
                  </span>
                </button>
              </div>
            ) : (
              <div className="dedcription-btn float-right mt-[20px]">
                <button
                  type="button"
                  onClick={() => setShowMore(false)}
                  className="
                    group relative inline-flex items-center justify-center
                    h-[52px] px-[40px]
                    bg-[#9c0] text-white
                    uppercase text-[14px] leading-[22px] tracking-[.03em]
                    skew-x-[-12deg]
                    transition-all duration-300
                    overflow-hidden border-0
                  "
                >
                  <span
                    className="
                      absolute left-0 top-0 h-full w-0
                      bg-[#8cbb00]
                      transition-all duration-300
                      group-hover:w-full
                    "
                  />
                  <span className="relative z-10 flex items-center gap-[10px] skew-x-[12deg]">
                    Mehr ausblenden{" "}
                    <span className="text-[18px] leading-none">›</span>
                  </span>
                </button>
              </div>
            )}

            {/* Clear float to avoid jump */}
            <div className="clear-both" />
          </div>
        </div>
      </div>
    </section>
  );
}
