import React from 'react'
import Announce from '../components/Announce'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import Counter from '../components/Counter'

const Products = () => {
  return (
    <div>
        <Announce />
        <Navbar />
        <div className='flex justify-center mobile:flex-col mobile:mt-6'>
          {/* first div for image */}
          <div className='flex flex-1 items-center justify-center mr-8'>
          <img
            src="https://cdn.shopify.com/s/files/1/0240/7285/products/KNITPULLOVER-PISTACHIO-2_360x.jpg?v=1642545216"
            className='w-[80%] h-[80%] rounded-lg shadow-lg cursor-pointer  hover:scale-[1.1] ease-in duration-300'
            alt="product_image"
          />
          </div>
          {/* this div is just for data */}
          <div className='flex-[1.3] flex items-start justify-items-start flex-col mt-[44px] mobile:flex-col mobile:items-center p-3'>
            <h1 className='title text-[40px] mobile:text-[30px] '>Creamy Hoody Original</h1>
            <p className='pr-[4rem] text-justify mt-5 mobile:text-center mobile:pr-0'>Gear up for the chilly season with our exclusive winter collection! From cozy
               sweaters to stylish jackets, scarves,and boots, we ve got everything to keep you warm 
               and fashionable Shop now, embrace the winter vibes, and discover premium quality, unbeatable prices, and timeless winter essentials!</p>
               <p className='text-[31px] mt-6'>Price:<b className='ml-2'>$70</b></p>
               {/* COLORS VARIENTS */}
               <div className='flex text-2xl mt-5'>
                COLORS 
                <div className='bg-red-600 w-[2rem] h-[2rem] border-2 border-silver rounded-full
                cursor-pointer  hover:scale-[1.1] p-2 ml-5'></div>
                <div className='bg-blue-700 w-[2rem] h-[2rem] border-2 border-silver rounded-full
                cursor-pointer  hover:scale-[1.1] p-2 ml-5'></div>
                <div className='bg-yellow-500 w-[2rem] h-[2rem] border-2 border-silver rounded-full
                cursor-pointer  hover:scale-[1.1] p-2 ml-5'></div>
               </div>
               {/* now make a div for color selections */}
               <div className='mt-7 text-[28px]'>
                Size
                <select className='ml-8 border-2'>
                  <option selected disabled >Select</option>
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                </select>
               </div>
               <div className='mt-5'>
                <Counter />
               </div>
               <button className='btn'>Add to Cart</button>
          </div>
        </div>
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Products