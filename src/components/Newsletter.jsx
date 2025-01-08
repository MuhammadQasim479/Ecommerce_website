import { Send } from '@mui/icons-material'
import React from 'react'

const Newsletter = () => {
  return (
    <div className='flex items-center justify-center h-[350px] w-[100%] flex-col bg-[#C4A4F9] mobile:text-center'>
        <h1 className='text-[50px] font-bold'>NEWSLETTER</h1>
        <p className='text-[20px] mt-[10px]'> Always in touch with us, for your favorite products</p>
        <div className='flex items-center justify-center min-w-[30rem] min-h[20rem] bg-white
        rounded-[5px] border-[#cccccc] overflow-hidden mt-16 mobile:min-w-[20rem]'>
            <input type="email"
            placeholder='email'
            className='pl-[20px] outline-none border-none flex-[7] p-[7px]'
            />
            <button className='bg-[#4CAF50] flex-1 h-[100%]'>
                <Send  className='text-white'/>
            </button>
        </div>
    </div>
  )
}

export default Newsletter