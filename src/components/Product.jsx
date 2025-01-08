import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartCheckoutOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Products from '../pages/ProductsPage';
import { Link } from 'react-router-dom';

const Product = ({item}) => {
    const [hoverEffect, setHoverEffect] = useState('opacity-0');
    // NOW WE WILL USE HOVEREFFECT 
    const handleHoverEnter = ()=>{
        setHoverEffect(' opacity-1 bg-[rgba(0,0,0,0.2)');
    }
    // NOW WE WILL USE MOUSE LEAVE 
    const handleMouseLeave = () =>{
        setHoverEffect(" opacity-0")
    }
    const IconStyle = 'flex items-center justify-center text-[30px] h-[40px] w-[40px] cursor-pointer bg-white m-3 hover:bg-[#894af3] hover:text-white hover:scale-[1.1] ease-in-duration-100 cursor-pointer'
  return (
    <div className='flex flex-1 items-center justify-center min-h-[250px]
     min-w-[300px] shadow-lg overflow-hidden m-2 rounded-md relative' 
     onMouseEnter={handleHoverEnter}
     onMouseLeave={handleMouseLeave}
     >
        <img src={item.src} alt="product_images" />
        {/* NOW WE WILL USE ICONS FROM MATERIAL UI */}
        <div className={`flex justify-center items-center w-[100%] h-[100%] absolute ease-in duration-150` +
             hoverEffect} >
        
        <div>
        <Link to = "/productspage" className= {IconStyle}>
            <ShoppingCartCheckoutOutlined className={IconStyle} />
        </Link>
        </div>
        <div>
            <FavoriteBorderOutlined className={IconStyle} />
        </div>
        <div>
            <SearchOutlined className={IconStyle} />
        </div>
    </div>  
    </div>
  )
}

export default Product