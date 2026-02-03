 
import ProductsBanner from "../../Components/Products/ProductsBanner";
import ProductsGrid from "../../Components/Products/ProductsGrid";
import ProductsSidebar from "../../Components/Products/ProductsSidebar";
import ProductsToolbar from "../../Components/Products/ProductsToolbar";

export default function AllProducts() {
  return (
    <>
        <ProductsBanner />
        <section className="bg-[#f9f9f9] py-[60px] pb-[80px]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* LEFT SIDEBAR */}
          <aside className="lg:col-span-3">
            <div className="sticky top-[20%]">
              <ProductsSidebar />
            </div>
          </aside>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-9">
            <div className="p-3 text-center">
              <h1 className="text-[32px] font-bold text-[#433f39]">
                Angebot der Woche
              </h1>
            </div>

            <ProductsToolbar />

            {/* ✅ your products grid */}
            <ProductsGrid showAll />
          </div>
        </div>
      </div>
    </section>
    </>

  );
}
