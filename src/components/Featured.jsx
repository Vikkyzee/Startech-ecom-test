import { useContext } from "react";
import EcomContext from "../context/EcomContext";
import ProductItem from "./ProductItem";

function Featured() {
    const { featured } = useContext(EcomContext);

  return (
    <div className="bg-black ">
        <h1 className="py-[10px] text-2xl font-bold text-red-700 text-center">Featured Products</h1>
        <marquee behavior="" direction="right" className="text-red-700 font-bold text-xl">Available Now!!!</marquee>
        <div className="grid ml-12 md:grid grid-col-2 lg:grid-cols-4  " >
            {featured.map((item)=>(
                <ProductItem item={item} key={item._id} />
            ))}
        </div>
    </div> 
  )
}

export default Featured;