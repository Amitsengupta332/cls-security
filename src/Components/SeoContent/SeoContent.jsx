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
