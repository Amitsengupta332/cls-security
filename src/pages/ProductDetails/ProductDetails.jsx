import ProductsBanner from "../../Components/Products/ProductsBanner";
import ProductsBreadcrumb from "../../Components/Products/ProductsBreadcrumb";
import ProductDetailsMain from "../../Components/ProductDetails/ProductDetailsMain";
import ProductDetailsTabs from "../../Components/ProductDetails/ProductDetailsTabs";
import RelatedProducts from "../../Components/ProductDetails/RelatedProducts";
import ProductsSwiper from "../../Components/ProductsSwiper/ProductsSwiper";

export default function ProductDetails() {
  return (
    <>
      <ProductsBanner />
      <ProductsBreadcrumb current="AlarmtechnikRSS" />

      <section className="bg-white py-[70px] pb-[50px]">
        <div className="mx-auto max-w-7xl px-6">
          <ProductDetailsMain />

          <div className="mt-10">
            <ProductDetailsTabs />
          </div>
        </div>
      </section>
      <ProductsSwiper/>

      {/* <RelatedProducts /> */}
    </>
  );
}
