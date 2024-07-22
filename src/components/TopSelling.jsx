import { useContext } from "react";
import EcomContext from "../context/EcomContext";
import ProductItem from "./ProductItem";

function TopSelling() {
    const { topSelling } = useContext(EcomContext);
  return (
    <div className="bg-black">
      <h1 className="py-[10px] text-2xl font-bold text-red-600 text-center">TopSelling Products</h1>
      <div className="grid-cols-1 ml-12 md:grid-cols-2 lg:grid-cols-4" >
          {topSelling.map((item)=>(
              <ProductItem item={item} key={item._id}/>
          ))}
      </div>
    </div>
  )
}

export default TopSelling;