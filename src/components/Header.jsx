import { useState } from "react"
import { GrMenu } from "react-icons/gr";
import { IoCart } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useContext } from "react";
import EcomContext from "../context/EcomContext";
import useLocalStorage from "../Hooks/useLocalStorage";

function Header() {
const [open, setOpen] = useState(false);
const { cartItems, isAuthenticated, cartCount } = useContext(EcomContext);
const { showAndHide } = useContext(EcomContext)
const{ deleteItem } = useLocalStorage("auth-token")

 
function logout() {
    deleteItem();
    dispatch({ type: "setToken", payload: null });
    showAndHide("success", "you are now signed out");
}
  const showHeader = (
    <div className="sticky top-0 z-[20] flex items-center justify-between py-[15px] px-[30px] bg-blue-950">
        <div>
            <a href=""><h1 className="text-[24px] text-white font-bold">Star Tech</h1></a>
        </div>
        <nav className="hidden lg:flex space-x-4 text-white text-[15px]">
            <Link to="/">Home</Link>
            <Link to="/product">Products</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </nav>
        <button onClick={()=> setOpen(!open)} className="flex items-center justify-center w-[35px] h-[35px] lg:hidden">
         <GrMenu className="text-3xl text-white"/>
        </button>
        <div onClick={()=> setOpen(!open)} className={`fixed lg:hidden top-0 w-full bg-black z-[20] ${open ? "opacity-100 pointer-events-auto": "opacity-0 pointer-events-none"}`}></div>
        <div className={`fixed lg:hidden left-0 top-0 w-[300px] h-screen overflow-auto z-[30] bg-white transition-all duration-500 ${open ? "translate-x-[0px]": "translate-x-[-500px]"}`}>
            <nav className="grid grid-cols-2 text-center p-[10%] mt-[-24%] gap-[1.7%] bg-blue-950 lg:flex space-x-4 text-white text-[25px] pt-20 px-10">
                <Link to href="">Home</Link>
                <Link to="/product">Products</Link>
                <Link to ="/login">Login</Link>
                <Link to="/register">Register</Link>
            </nav>
        </div>
    </div>
  )

  const showAuthHeader = (
    <div className="sticky top-0 z-[20] flex items-center justify-between py-[15px] px-[30px] bg-blue-950">
        <div>
            <a href=""><h1 className="text-[24px] text-white font-bold">Star Tech</h1></a>
        </div>
        <nav className="hidden lg:flex space-x-4 text-white text-[15px]">
            <Link to="">Home</Link>
            <Link to="/product">Products</Link>
            <Link to="/cart" className="relative">
                <IoCart className="text-xl" />
                <div className="absolute bottom-3.5 font-bold left-3 text-blue-950 bg-white text-center rounded-full h-3 w-3 text-[9px]">{cartCount}</div>
            </Link>
            <Link onClick={logout}>Logout</Link>
        </nav>
        <button onClick={()=> setOpen(!open)} className="flex items-center justify-center w-[35px] h-[35px] lg:hidden">
         <GrMenu className="text-3xl text-white"/>
        </button>
        <div onClick={()=> setOpen(!open)} className={`fixed lg:hidden top-0 w-full bg-black z-[20] ${open ? "opacity-100 pointer-events-auto": "opacity-0 pointer-events-none"}`}></div>
        <div className={`fixed lg:hidden left-0 top-0 w-[300px] h-screen overflow-auto z-[30] bg-white transition-all duration-500 ${open ? "translate-x-[0px]": "translate-x-[-500px]"}`}>
            <nav className="grid grid-cols-2 text-center p-[10%] mt-[-24%] gap-[1.7%] bg-blue-950 lg:flex space-x-4 text-white text-[25px] pt-20 px-10">
                <Link to href="/">Home</Link>
                <Link to="/product">Products</Link>
                <Link to="/cart" className="relative">
                    <IoCart className="text-xl" />
                    <div className="absolute bottom-3.5 font-bold left-3 text-blue-950 bg-white text-center rounded-full h-3 w-3 text-[9px]">{cartItems.length}</div>
                </Link>
                <Link onClick={logout}>Logout</Link>
            </nav>
        </div>
    </div>
  )

    return (
        <div>{isAuthenticated ? showAuthHeader : showHeader}</div>
    )
}

export default Header


