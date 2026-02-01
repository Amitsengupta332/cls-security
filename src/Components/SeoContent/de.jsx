import { useState } from "react";

export default function SeoContent() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="seocontent" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#433f39]">
            CLS Security - Ihr Partner für Ihre Sicherheit
          </h2>
        </div>

        <div className="bg-white shadow-sm rounded-lg p-6 md:p-10">

          {/* Intro Text */}
          <p className="text-gray-700 leading-relaxed mb-6">
            Sicherheit ist nicht nur ein Schutz des Physischen, sondern auch ein
            Gefühl der Geborgenheit, das tief in unserem Seelenleben verwurzelt
            ist. Bei CLS Security verstehen wir diese Dualität und bieten Ihnen
            nicht nur Produkte zur Sicherung Ihres Wohnraums und Eigentums,
            sondern auch das Wissen und die Technologie, um dieses Gefühl der
            Sicherheit selbstbestimmt zu erlangen und zu bewahren.
          </p>

          {/* Hidden Content */}
          {showMore && (
            <div className="space-y-8 text-gray-700 leading-relaxed">

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  CLS Security: Ihr zuverlässiger Partner
                </h3>

                <p>
                  Unsere Produkte und Dienstleistungen nutzen die neuesten
                  Entwicklungen in den Bereichen Überwachungskamera,
                  Zutrittskontrolle und Alarmanlagen, um Ihnen modernsten Schutz
                  zu bieten.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Maßgeschneiderte Lösungen
                </h3>

                <p>
                  Bei CLS Security erkennen wir an, dass Sicherheit nicht "one
                  size fits all" ist. Deshalb nehmen wir uns die Zeit, um Ihre
                  spezifischen Bedürfnisse zu verstehen.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Vertrauenswürdiger Partner
                </h3>

                <p>
                  Mit unserem unerschütterlichen Engagement für Qualität,
                  Zuverlässigkeit und Kundenzufriedenheit können Sie sicher sein,
                  dass Sie in den besten Händen sind.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Warum Sie CLS Security vertrauen sollten
                </h3>

                <p>
                  Durch Partnerschaften mit Marktführern wie Hikvision oder
                  Dahua bieten wir hochwertige Sicherheitslösungen.
                </p>
              </div>

            </div>
          )}

          {/* Button */}
          <div className="mt-8 flex justify-end">
            <button
              onClick={() => setShowMore(!showMore)}
              className="btn-main global-button btn-transparent flex items-center gap-2 px-6 py-3 border-2 border-[#9c0] text-[#9c0] font-semibold hover:bg-[#9c0] hover:text-white transition">

              <span className="global-button-content-wrapper">
                {showMore ? "Mehr ausblenden" : "Mehr lesen"}
              </span>

              <span className="icon-keyboard_arrow_right"></span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}








import { useState } from "react";

export default function SeoContent() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="seocontent" className="py-[60px] pb-[80px] bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Title (match .section-title div style) */}
        <div className="text-center pb-[60px]">
          <div className="mt-[10px] text-[32px] font-bold text-[#433f39]">
            <span>CLS Security - Ihr Partner für Ihre Sicherheit</span>
          </div>
        </div>

        {/* PHP: .full-post */}
        <div className="full-post">
          {/* PHP: .show-block */}
          <div className="show-block bg-[#f6f8fa] p-[24px_30px] mb-[30px] text-justify relative overflow-hidden">
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

          {/* PHP: .hide-block */}
          <div
            className={`hide-block ${
              showMore ? "block" : "hidden"
            } bg-[#f6f8fa] p-[24px_30px] mb-[30px] text-justify relative overflow-hidden`}
          >
            {/* h3 style from your CSS: margin 20px 0, font-size 22px */}
            <h3 className="my-[20px] text-[22px] font-semibold text-[#171e2a]">
              CLS Security: Ihr zuverlässiger Partner für umfassende
              Sicherheitslösungen
            </h3>

            <div className="seo-content space-y-4">
              <p className="text-[15px] leading-[1.8] text-[#171e2a]">
                Instinctools is a technology-agnostic company. We treat
                platforms, programming languages, and frameworks as tools to
                achieve our customers' business goals...
              </p>

              <p className="text-[15px] leading-[1.8] text-[#171e2a]">
                Unsere Produkte und Dienstleistungen nutzen die neuesten
                Entwicklungen in den Bereichen Überwachungskamera,
                Zutrittskontrolle und Alarmanlagen, um Ihnen modernsten Schutz
                zu bieten...
              </p>
            </div>

            <h3 className="my-[20px] text-[22px] font-semibold text-[#171e2a]">
              Maßgeschneiderte Lösungen
            </h3>

            <div className="seo-content space-y-4">
              <p className="text-[15px] leading-[1.8] text-[#171e2a]">
                Bei CLS Security erkennen wir an, dass Sicherheit nicht "one size
                fits all" ist...
              </p>
            </div>

            <h3 className="my-[20px] text-[22px] font-semibold text-[#171e2a]">
              B2B: Vor-Ort-Service
            </h3>

            <div className="seo-content space-y-4">
              <p className="text-[15px] leading-[1.8] text-[#171e2a]">
                Natürlich stellen wir unsere Dienstleistungen nicht nur für
                Privatkunden, sondern auch für Geschäftskunden zur Verfügung...
              </p>
            </div>

            <h3 className="my-[20px] text-[22px] font-semibold text-[#171e2a]">
              Warum Sie CLS Security vertrauen sollten:
            </h3>

            <div className="seo-content space-y-4">
              <p className="text-[15px] leading-[1.8] text-[#171e2a]">
                CLS Security können Sie darauf vertrauen, dass Sie qualitativ
                hochwertige Sicherheitslösungen erhalten...
              </p>
            </div>
          </div>

          {/* Buttons (PHP has 2 buttons: show-more + show-less) */}
          <div className="mt-[20px] flex justify-end">
            {!showMore ? (
              <button
                onClick={() => setShowMore(true)}
                type="button"
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
            ) : (
              <button
                onClick={() => setShowMore(false)}
                type="button"
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
