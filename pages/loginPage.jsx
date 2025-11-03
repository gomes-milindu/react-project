import axios from "axios";
import {useState} from "react";
import Header from "../src/components/header";
export default function LoginPage(){

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    async function handleLogin(){
        console.log("Login clicked");
        const response = await axios.post("http://localhost:5000/users/login",{
            email: email,
            password: password
        },
        
    ); 
    console.log(response.data);
        

    }
    return(
        
        <div className="w-full h-screen bg-primary flex  flex-col items-center justify-start gap-10">
            
            <Header/>
            <div className="w-[800px] h-[600px] bg-amber-300 mt-6 flex flex-row">
                <div className="w-[400px] h-full bg-amber-800"></div>
                <div className="w-[400px] h-full bg-amber-500">
                    <h1 className="text-3xl font-bold mt-4">Login Page</h1>

                    <p className="mt-5">Email</p>
                    <input  className="w-[80%] h-[30px] bg-amber-50 rounded-xl mt-2" onChange={
                        (e)=>{
                            // console.log("email changed");
                            setEmail(e.target.value);
                        }
                    }/>
                    
                    <p className="mt-5">Password</p>
                    <input className="w-[80%] h-[30px] bg-amber-50 rounded-xl mt-2" onChange={
                        (e)=>{
                            setPassword(e.target.value);
                        }
                    }/>

                    <button className="w-[50%] h-[40px] bg-amber-50 text-black rounded-xl mt-10" onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
    )   
}