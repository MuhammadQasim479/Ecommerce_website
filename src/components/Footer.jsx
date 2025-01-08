import { EmailOutlined, Facebook, Instagram, LinkedIn, LocalPhoneOutlined, LocationCityOutlined, Pinterest } from '@mui/icons-material'
import React from 'react'

const Footer = () => {
    const socialIcon = 'm-3 rounded-full cursor-pointer text-white  p-[6px]'
  return (
    <div className='flex items-center justify-around p-2s mt-3 mobile:flex-col mobile:items-start'>
        {/* Store Parts */}
        <div className='flex flex-1 p-3 flex-wrap flex-col'>
            <h1 className='text-[20px]'>WINTER KINGS</h1>
            <p className='mt-2 w-[65%]'>Gear up for the chilly season with our exclusive winter 
                collection! From cozy sweaters to stylish jackets, scarves,
                and boots, we ve got everything to keep you warm and 
                fashionable. Shop now, embrace the winter vibes, and 
                discover premium quality, unbeatable prices, and timeless
                winter essentials!
            </p>
            <div className='flex items-center justify-center mt-3 self-start'>
                <div className={socialIcon +  ' bg-blue-700'}>
                    <Facebook  />
                </div>
                <div className={socialIcon + ' bg-orange-500'}>
                    <Instagram />
                </div>
                <div className={socialIcon + ' bg-red-600'}>
                    <Pinterest />
                </div>
                <div className={socialIcon + ' bg-[#0077B5]'}>
                    <LinkedIn />
                </div>
            </div>
        </div>
        {/* Logos Parts */}
        <div className='flex flex-1 flex-col p-2 cursor-pointer'>
            <div className='flex m-3 cursor-pointe'>
                <LocationCityOutlined />
                <p className='pl-3 cursor-pointe'>Pakistan</p>
            </div>
            <div className='flex m-3 cursor-pointe'>
                <LocalPhoneOutlined />
                <p className='pl-3 cursor-pointe'>03061915479</p>
            </div>
            <div className='flex m-3 cursor-pointe'>
                <EmailOutlined />
                <p className='pl-3 cursor-pointe'>wwwqasimkhan883@gmail.com</p>
            </div>
        </div>
    </div>
  )
}

export default Footer