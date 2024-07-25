import { useParams, useNavigate} from "react-router-dom"
import { useContext } from "react"
import EcomContext from "../../context/EcomContext"

function Detail() {
    const param = useParams()
    const shoeid = param.id
    const {product, addToCart, isAuthenticated} = useContext(EcomContext)
    const shoeitem = product.find((item)=> item._id === shoeid)
    const redirect = useNavigate()

    const login = ()=>{
        if(!isAuthenticated) {
          redirect("/login")
        }
    }
  return (
    <div className="flex xs:flex-col md:flex-row px-[5%] py-[3%] justify-between space-x-4">
        <div className="m-auto xs:w-[90%] md:w-[50%]">
            <img src={"https://startech-ecom-api-elc7.onrender.com/" + shoeitem?.img} alt="" className="h-[200px] w-[200px] rounded-lg" />
        </div>
        <div className="lg:w-[50%] md:w-[45%] w-[50%] lg:space-x-0 md:space-x-0 space-x-[10px]">
            <h2 className="lg:text-2xl md:text-2xl text-[15px] lg:mx-0 md:mx-0 mx-2 font-bold  mb-[10px] border-b-2">{shoeitem?.name}</h2>
            <p className="lg:text-[17px] md:text-[17px] cam font-light text-[10px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, autem.</p>
            <p className="py-3 mb-[10px] lg:text-xl md:text-xl text-[14px] font-bold cam">₦{shoeitem?.price}</p>
            <p className="mb-[10px] lg:text-[17px] md:text-[17px] text-[11.5px]">
                Category: <span className="text-blue-950 italic font-bold">{shoeitem?.category.name}</span>
            </p>
            <button onClick={isAuthenticated ? ()=> addToCart({...shoeitem, quantity: 1}(item._id)) : login} className="bg-blue-950 text-white rounded p-[10px]">Add to cart</button>
        </div>
    </div>
  )
}

export default Detail;