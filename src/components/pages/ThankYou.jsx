import React from "react"
import { Link, Navigate } from "react-router-dom"
import { useContext, useEffect } from "react"
import EcomContext from "../../context/EcomContext"
import { useSearchParams } from "react-router-dom"

function ThankYou() {
  const {createOrder} = useContext(EcomContext)
  const [searchParams] = useSearchParams()
  const tx_ref = searchParams.get("tx_ref")
  const transaction_id = searchParams.get("transaction_id")

  if (isAuthenticated) {
    return <Navigate to="/"/>
}


  useEffect(()=>{
    if(transaction_id && tx_ref) {
      createOrder(transaction_id, tx_ref)
    }
  }, [transaction_id, tx_ref, createOrder])
  
  return (
    <div className="py-[5%] px-[10%] bg-cover bg-center mb-[-10%] text-center flex flex-col items-center" style={{backgroundImage: `url(/img/Thankss.jpeg)`, height: `100vh`}}>
      <div className="bg-white py-[20px] opacity-80 rounded-lg w-[300px]">
        <p className="text-x1">
          Thank you for your purchase. A representative will contact you shortly
        </p>
        <Link to="/product">
          <button className="bg-blue-950 p-[10px] rounded-lg text-white">Back to products</button>
        </Link>
      </div>
    </div>
  )
}

export default ThankYou