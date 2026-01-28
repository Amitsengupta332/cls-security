import Blog from "../../Components/Blog/Blog"
import Hero from "../../Components/Hero/Hero"
import Navbar from "../../Components/Navbar/Navbar"
import Services from "../../Components/Services/Services"

 

const Home = () => {
  return (
    <div> 
        <Navbar/>
        <Hero/>
        <Services/>
        <Blog/>
    </div>
  )
}

export default Home