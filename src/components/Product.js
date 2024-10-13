
import one from '../img/001.jpeg'
import two from '../img/002.jpeg'
import three from '../img/004.jpeg'
//Product
function Products()
{
  return(
    <div class="product">
      <div class = "container">
        <img src={one} alt="one"></img>
        <p>Designer Club-Be Spoke by Perfume Lounge Women's Perfume,Long-lasting Perfume</p>
      </div>
      <div class = "container">
        <img src={two} alt="two"></img>
        <p>Designer Club-Be Spoke by Perfume Lounge Women's Perfume,Long-lasting Perfume</p>
      </div>
      <div class = "container">
        <img src={three} alt="three"></img>
        <p>Queen Spoke by Perfume Lounge Women's Perfume,Long-lasting Perfume</p>
      </div>
    </div>
  )
}

export default Products
