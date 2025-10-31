import { useState } from "react"

export default function TestPage(){
    
    const[count,setCount] =  useState(100)   // count variable  b - function
    
    return(
        <div className = "w-full h-full bg-accent">
            <div className='w-full h-full flex justify-center items-center' >
                <div className='w-[500px] h-[500px] bg-white '>
                    <button onClick={
                        ()=>{
                            console.log("clicked")
                            setCount(count + 1)
                        }
                    } className='w-[100px] h-[40px] bg-amber-200 rounded-lg'>+</button>
                </div>

                <span className='w-[40px] h-fit bg-amber-700'>
                    {count}
                </span>
                <div className='w-[500px] h-[500px] bg-white '>
                    <button className='w-[100px] h-[40px] bg-amber-200 rounded-lg' onClick={
                        ()=>{
                            console.log("- is Clicked")
                            setCount(count-1)
                        }
                    }>-</button>
                </div>
            </div>
        </div>
    )
}

// set count - variable eke valure eka wenas wenawa
               // page eka uda in pahalata run wenawa