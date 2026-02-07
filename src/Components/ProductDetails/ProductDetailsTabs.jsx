import { useMemo, useState } from "react";

export default function ProductDetailsTabs() {
  const tabs = useMemo(
    () => [
      {
        id: "description",
        title: "Description",
        content: (
          <>
            <h3 className="text-[#666] font-semibold mb-4">
              Kostenlose Standortbesichtigung und Entwurfsvorschlag für
              CCTV-Systeme!
            </h3>
            <p className="text-[#666] mb-3">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.
            </p>
            <p className="text-[#666]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </p>
          </>
        ),
      },
      {
        id: "specification",
        title: "Specification",
        content: (
          <>
            <h3 className="text-[#666] font-semibold mb-4">
              Technische Spezifikationen
            </h3>
            <p className="text-[#666]">
              Safeguard Systems sind Experten für CCTV-Kamerasysteme für
              Unternehmen und Gewerbe. Kontaktieren Sie uns für ein kostenloses
              Angebot.
            </p>
          </>
        ),
      },
      {
        id: "reviews",
        title: "Reviews (2)",
        content: (
          <>
            <h3 className="text-[#666] font-semibold mb-4">
              Kundenbewertungen
            </h3>
            <p className="text-[#666]">
              Sehr gute Bildqualität und einfache Installation.
            </p>
          </>
        ),
      },
    ],
    [],
  );

  const [active, setActive] = useState(tabs[0].id);

  return (
    <div className="categoryWithTab">
      {/* nav */}
      <div className="flex flex-wrap gap-4 mt-4 mb-10">
        {tabs.map((t) => {
          const isActive = active === t.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setActive(t.id)}
              className={`
                inline-flex h-[40px] px-[15px]
                items-center justify-center
                border-2 border-[#9c0]
                skew-x-[-12deg]
                text-[14px] font-bold uppercase
                transition-all duration-300
                ${isActive ? "bg-[#9c0] text-white" : "bg-white text-[#9c0]"}
              `}>
              <span className="skew-x-[12deg]">{t.title}</span>
            </button>
          );
        })}
      </div>

      {/* content */}
      <div className="mt-4">
        {tabs.map((t) =>
          t.id === active ? (
            <div key={t.id} className="py-4">
              {t.content}
            </div>
          ) : null,
        )}
      </div> 
    </div>
  );
}
