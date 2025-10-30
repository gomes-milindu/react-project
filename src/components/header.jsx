export default function Header(){
    return(
       <div className="w-full h-16 bg-accent margin-0 padding-0 flex item-center justify-items-stretch">
         <div className="w-full h-[90%]  flex items-center justify-evenly">           
            <div className="w-fit h-fit">My Store</div>
            <div className="w-fit h-fit  flex gap-4">
                <a>Home</a>
                <a>About us</a>
                <a>Contact</a>
            </div>
            
         </div>
         
       </div>
    )
}