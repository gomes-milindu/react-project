import React from "react";
import Header from "../src/components/header";
export default function LoginPage(){
    return(
        
        <div className="w-full h-screen bg-primary flex  flex-col items-center justify-start gap-10">
            
            <Header/>
            <div className="w-[800px] h-[600px] bg-amber-300 mt-6 flex flex-row">
                <div className="w-[400px] h-full bg-amber-800"></div>
                <div className="w-[400px] h-full bg-amber-500">
                    <h1 className="text-3xl font-bold mt-4">Login Page</h1>

                    <p className="mt-5">Email</p>
                    <input type="text" className="w-[80%] h-[30px] bg-amber-50 rounded-xl mt-2"></input>
                    
                    <p className="mt-5">Password</p>
                    <input type="text" className="w-[80%] h-[30px] bg-amber-50 rounded-xl mt-2"></input>


                </div>
            </div>
        </div>
    )   
}