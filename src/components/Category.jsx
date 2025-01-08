import React from "react";

function Category ({item}){
    return <div className="flex-1 shadow-lg m-2 rounded-md overflow-hidden relative cursor-pointer">
        <img src={item.src} alt="" className="w-[100%]" />
        <div className="flex absolute w-[100%] h-[100%] left-0 top-0 items-center 
        justify-center flex-col ">
            <h2 className="text-[#ffffff] font-medium text-[30px] ">{item.title}</h2>
            <button className="btn">See more</button>
        </div>
        
    </div>

}

export default Category;