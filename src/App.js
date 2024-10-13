
import Navbar from "./components/Navbar"
import Search from "./components/Search"
import AboutUs from "./components/About"
import Footer from "./components/footer"
import Products from "./components/Product"

function App()
{
    return(
 <div>
     <Navbar></Navbar>
     <Search></Search>
     <Products></Products>
     <AboutUs></AboutUs>  
     <Footer></Footer>
 </div>
    )
}
export default App