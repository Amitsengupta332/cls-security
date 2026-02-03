import Blog from "../../Components/Blog/Blog";
import CategoryWithTab from "../../Components/CategoryWithTab/CategoryWithTab";
import CompanyPortfolio from "../../Components/CompanyPortfolio/CompanyPortfolio";
import Footer from "../../Components/Footer/Footer";
import Hero from "../../Components/Hero/Hero";
import MapSection from "../../Components/MapSection/MapSection";
import Navbar from "../../Components/Navbar/Navbar";
import Products from "../../Components/Products/Products";
import ProductsSwiper from "../../Components/ProductsSwiper/ProductsSwiper";
import SeoContent from "../../Components/SeoContent/SeoContent";
import Services from "../../Components/Services/Services";
import TextYoutube from "../../Components/TextYoutube/TextYoutube";

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Services />
      <TextYoutube/>
      <Products />
      <CategoryWithTab/>
      <ProductsSwiper/>
      <CompanyPortfolio/>
      <Blog />
      <SeoContent/>
      <MapSection/>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
