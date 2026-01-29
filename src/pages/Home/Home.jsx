import Blog from "../../Components/Blog/Blog";
import Footer from "../../Components/Footer/Footer";
import Hero from "../../Components/Hero/Hero";
import Navbar from "../../Components/Navbar/Navbar";
import Products from "../../Components/Products/Products";
import Services from "../../Components/Services/Services";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Products />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
