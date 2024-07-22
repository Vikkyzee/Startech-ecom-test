import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import EcomContext from "../context/EcomContext"

function ProductItem({item}) {
  const {addToCart, isAuthenticated} = useContext(EcomContext)
  const redirect = useNavigate()

  const login = ()=>{
    if(!isAuthenticated) {
      redirect("/login")
    }
  }
  return (
    <div className="m-4 border-2 border-blue-500 w-max rounded shadow-lg shadow-white transform hover:scale-110 transition ease duration-700 bg-yellow-400  ">
      <Link to={`/detail/${item._id}`}>
        <img src={"http://localhost:8000/" + item.img} alt="" className="h-[200px] w-[200px] rounded-lg" />
      </Link>
      
     <div className="text-center my-5">
        <p className="text-xl text-black font-bold =">{item.name}</p>
        <p className="py-3 text-xl text-black font-bold">₦{item.price}</p>
        <button onClick={isAuthenticated ? ()=> addToCart(item._id) : login} className="bg-blue-950 text-white rounded p-[10px]">Add To Cart</button>
     </div>
    </div>
  )
}


export default ProductItem