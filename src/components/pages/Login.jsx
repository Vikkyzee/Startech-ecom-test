import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import EcomContext from "../../context/EcomContext"
import AuthContext from "../../context/AuthContext"
import useLocalStorage from "../../Hooks/useLocalStorage"



function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { showAndHide } = useContext(EcomContext);
  const [state, dispatch] = useContext(AuthContext);
  const { setItem } = useLocalStorage("auth-token");

  const redirect = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://startech-ecom-api-elc7.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data === "invalid email/password") {
        showAndHide("error", "invalid email/password");
      } else {
        dispatch({ type: "setToken", payload: data.token });
        setItem(data.token);
        redirect("/");
        showAndHide("success", "login successful!!!");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="my-[5%] mx-[30%]">
      <form onSubmit={loginHandler}>
        <div className="mb-3">
          <input type="email" className="outline outline-1  w-full p-[10px] " placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div className="mb-3">
          <input type="password" className="outline outline-1 w-full p-[10px]" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <button className="bg-blue-950 p-[10px] text-white rounded-lg">Log In</button>
        </div>
      </form>

    </div>
  )
}

export default Login