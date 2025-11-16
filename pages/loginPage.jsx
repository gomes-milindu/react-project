import axios from "axios";
import {useState} from "react";
import Header from "../src/components/header";
import { useNavigate } from "react-router-dom";
export default function LoginPage(){

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate() // smoothly pages athara naigate wenna

    async function handleLogin(){
      e.preventDefault()
        try{
            console.log("Login clicked");
            const response = await axios.post( import.meta.env.VITE_API_URL+"/api/users/login",{
                email: email,
                password: password
                },
        
            ); 
            console.log(response.data);

            localStorage.setItem("token",response.data.token)
            const user = response.data.user;
            if(user.role=="admin"){
                window.location.href="/admin"
            }else{
                alert("123")
                window.location.href="/"
                }
        }catch(err){
            console.log("Login Failed",e)
        }
        

    }
    return(
        
        <div className="min-h-screen flex items-center justify-center bg-primary text-secondary">
      
      <div className="absolute inset-0 bg-gradient-to-br from-[#f5f5dc]/40 via-transparent to-[#8AA624]/10 blur-3xl"></div>

      <div className="relative z-10 w-full max-w-md bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-10 border border-[#A2AF9B]/30">
        <h1 className="text-3xl font-semibold text-center text-[#8AA624] mb-6 tracking-wide">
          Welcome Back
        </h1>
        <p className="text-center text-sm text-[#555] mb-8">
          Sign in to your beauty account
        </p>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-[#8AA624]/80 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl border border-[#A2AF9B]/40 focus:outline-none focus:border-[#8AA624] bg-[#FFFFF0]/80 placeholder:text-gray-400 text-gray-700"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#8AA624]/80 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl border border-[#A2AF9B]/40 focus:outline-none focus:border-[#8AA624] bg-[#FFFFF0]/80 placeholder:text-gray-400 text-gray-700"
            />
          </div>

          <div className="flex items-center justify-between text-sm text-[#8AA624]/80">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-[#8AA624]" />
              <span>Remember me</span>
            </label>
            <a href="#" className="hover:text-[#8AA624]">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-[#8AA624] text-white py-3 rounded-xl font-medium shadow-md hover:bg-[#7A9520] transition duration-300" onClick={handleLogin}
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <a href="#" className="text-[#8AA624] font-medium hover:underline">
            Create one
          </a>
        </p>
      </div>
    </div>
    )   
}