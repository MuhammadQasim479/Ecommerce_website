import React from 'react'
import Navbar from '../components/Navbar'
import Announce from '../components/Announce'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Counter from '../components/Counter'

const Cart = () => {
  return (
    <div  className='mobile:flex-col'>
        <Announce />
        <Navbar />
        <div className='m-4'>
            <div className='flex justify-center text-5xl mt-4'>Cart</div>
            <div className='flex items-center justify-between mobile:flex-col'>
                <button className='btn bg-white text-[#8a4af3] border-2
                hover:bg-white border-[#8a4af3]'>Continue Shopping</button>
                <div className='flex underline cursor-pointer'>
                    <p className='text-[18px]'>Items in your Cart : 3</p>
                    <p className='ml-5 text-[18px]'>Whitlist : 0</p>
                </div>
                <button className='btn'>Checkout</button>
             </div>
        </div>
        {/* CENTRAL DIV */}
        <div className='flex mt-7 mobile:flex-col mobile:m-2'>
            <div className='flex flex-1 flex-col'>
                {/* LIST OF PRODUCTS DIV */}
                <div className='flex w-[100%] h-auto items-center mobile:flex-col'>
                    <div className='product flex self-start pl-5'>
                        <img 
                        className='h-[80%] w-[7.2rem] shadow-lg rounded-lg hover:scale-[1.1] 
                        ease-in-out 300 cursor-pointer'
                        src='https://cdn.shopify.com/s/files/1/0240/7285/products/KushJonesLST-ShirtinBlack09_360x.jpg?v=1642719733' alt="" />
                    <div className='description flex flex-col ml-5 h-auto justify-between'>
                        <p>
                            <b className='mr-2'>ID:</b>11223344
                        </p>
                        <p> 
                            <b className='mr-2'>Product:</b> Dazzing Sky Shirt
                        </p>
                        <p className='color flex'>
                            <b className='mr-2'>Color:</b>
                            <div className='rounded-full border-2 p-[10px] cursor-pointer
                             ml-1 w-[20px] h-[20px] bg-blue-500'>

                            </div>
                        </p>
                        <p>
                            <b className='mr-2'>Size:</b>lg
                        </p>
                    </div>
                    </div>
                 <div className='flex items-center justify-center flex-1 flex-col'>
                    <Counter />
                    <p className='flex items-center justify-center text-4xl mt-3'>
                        <b>70$</b>
                    </p>
                </div>   
                </div>
                
                <hr className='mt-7 mb-7' />
                {/* SECOND DIV */}
                <div className='flex w-[100%] h-auto items-center mobile:flex-col'>
                    <div className='product flex self-start pl-5'>
                        <img 
                        className='h-[80%] w-[7.2rem] shadow-lg rounded-lg hover:scale-[1.1] 
                        ease-in-out 300 cursor-pointer'
                        src='https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinBlack06_360x.jpg?v=1642719812' alt="" />
                    <div className='description flex flex-col ml-5 h-auto justify-between mt-2'>
                        <p>
                            <b className='mr-2'>ID:</b>11223344
                        </p>
                        <p> 
                            <b className='mr-2'>Product:</b> Dazzing Sky Shirt
                        </p>
                        <p className='color flex'>
                            <b className='mr-2'>Color:</b>
                            <div className='rounded-full border-2 p-[10px] cursor-pointer
                             ml-1 w-[20px] h-[20px] bg-blue-500'>

                            </div>
                        </p>
                        <p>
                            <b className='mr-2'>Size:</b>lg
                        </p>
                    </div>
                    </div>
                 <div className='flex items-center justify-center flex-1 flex-col'>
                    <Counter />
                    <p className='flex items-center justify-center text-4xl mt-3'>
                        <b>70$</b>
                    </p>
                </div>   
                </div>
                <hr className='mt-7 mb-7' />
            </div>
            <div className=' flex-[0.4] w-auto h-[40vh] border-2 
            border-[#8a4af3] rounded-md shadow-lg p-5 mr-4  mobile:p-4 mobile:mb-4'>
               <h1 className='text-[2rem] text-center'>Summary</h1>
            <div className='flex items-center justify-between mt-3 w-[100%]'>
                <p>Subtotal</p>
                <p>140$</p>
            </div>
            <div className='flex items-center justify-between mt-3 w-[100%]'>
                <p>Shipping</p>
                <p>140$</p>
            </div>
            <div className='flex items-center justify-between mt-3 w-[100%]'>
                <p>Shipping discount</p>
                <p>-$40</p>
            </div>
            <div className='flex items-center justify-between mt-3 w-[100%] text-3xl font-bold'>
                <p><b>Total</b></p>
                <p><b>$140</b></p>
            </div>
            </div>
        </div>

        <Newsletter />
        <Footer />
    </div>
  )
}

export default Cart