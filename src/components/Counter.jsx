import React from 'react'

const Counter = () => {
  return (
    <div>
        <div className='flex items-center justify-center text-2xl'>
            Quantity
            <div className='ml-5 shadow-md flex'>
              <div className='bg-[#8141f3] text-white w-8 flex items-center 
              justify-center cursor-pointers rounded-l-md cursor-pointer'>-</div>
              <div className='flex items-center justify-center border-[1px] border-[#8141f3] 
              pl-[8px] pr-[8px]'>1</div>
              <div className='bg-[#8141f3] text-white w-8 flex items-center 
              justify-center cursor-pointers rounded-r-md cursor-pointer'>+</div>
            </div>

        </div>
    </div>
  )
}

export default Counter