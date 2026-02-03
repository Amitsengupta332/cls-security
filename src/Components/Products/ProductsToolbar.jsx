export default function ProductsToolbar() {
  return (
    <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 items-center">
      {/* left */}
      <div className="flex items-center gap-2">
        <span className="h-[28px] w-[28px] rounded bg-black" />
        <span className="h-[28px] w-[28px] rounded bg-black" />

        <span className="ml-2 text-[#444]">
          Artikel <span className="text-[#FF5100]">1</span>-
          <span className="text-[#FF5100]">12</span> von{" "}
          <span className="text-[#FF5100]">67</span>
        </span>
      </div>

      {/* right */}
      <div className="flex items-center justify-start sm:justify-end gap-2">
        <label className="text-[#444]" htmlFor="sorter">
          Sortieren nach
        </label>

        <select
          id="sorter"
          className="border border-[#ccc] bg-white px-2 py-1 text-[#111] outline-none"
        >
          <option value="position">Reihenfolge</option>
          <option value="name">Artikelname</option>
          <option value="price">Preis</option>
        </select>

        <button
          type="button"
          className="text-black"
          title="Absteigend sortieren"
        >
          ▲
        </button>
      </div>
    </div>
  );
}
