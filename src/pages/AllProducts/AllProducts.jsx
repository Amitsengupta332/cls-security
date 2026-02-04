 
// import ProductsBanner from "../../Components/Products/ProductsBanner";
// import ProductsGrid from "../../Components/Products/ProductsGrid";
// import ProductsSidebar from "../../Components/Products/ProductsSidebar";
// import ProductsToolbar from "../../Components/Products/ProductsToolbar";

// export default function AllProducts() {
//   return (
//     <>
//         <ProductsBanner />
//         <section className="bg-[#f9f9f9] py-[60px] pb-[80px]">
//       <div className="mx-auto max-w-7xl px-6">
//         <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
//           {/* LEFT SIDEBAR */}
//           <aside className="lg:col-span-3">
//             <div className="sticky top-[20%]">
//               <ProductsSidebar />
//             </div>
//           </aside>

//           {/* RIGHT CONTENT */}
//           <div className="lg:col-span-9">
//             <div className="p-3 text-center">
//               <h1 className="text-[32px] font-bold text-[#433f39]">
//                 Angebot der Woche
//               </h1>
//             </div>

//             <ProductsToolbar />

//             {/* ✅ your products grid */}
//             <ProductsGrid showAll />
//           </div>
//         </div>
//       </div>
//     </section>
//     </>

//   );
// }

import ProductsBanner from "../../Components/Products/ProductsBanner";
import ProductsGrid from "../../Components/Products/ProductsGrid";
import ProductsSidebar from "../../Components/Products/ProductsSidebar";
import ProductsToolbar from "../../Components/Products/ProductsToolbar";
import ProductsBreadcrumb from "../../Components/Products/ProductsBreadcrumb";

export default function AllProducts() {
  return (
    <>
      <ProductsBanner />
      <ProductsBreadcrumb current="AlarmtechnikRSS" />

      <section className="bg-[#f9f9f9] py-[60px] pb-[80px]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
            {/* LEFT SIDEBAR */}
            <aside className="lg:col-span-3">
              <div className="sticky top-[20%]">
                <ProductsSidebar />
              </div>
            </aside>

            {/* RIGHT CONTENT */}
            <div className="lg:col-span-9">
              {/* Title + Toolbar wrapper (white background so text is clear) */}
              <div className="bg-white rounded-md px-4 py-6 shadow-sm">
                <div className="text-center">
                  <h1 className="text-[40px] font-semibold text-[#433f39]">
                    Angebot der Woche
                  </h1>
                </div>

                <div className="mt-8">
                  <ProductsToolbar />
                </div>
              </div>

              {/* Products Grid */}
              <div className="mt-8">
                <ProductsGrid />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
