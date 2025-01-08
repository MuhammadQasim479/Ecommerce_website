import { Search, ShoppingCart } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import { Link,NavLink } from 'react-router-dom'

const Navbar = () => {
  const style = 'text-[16px] cursor-pointer ml-[25px] mobile:ml-[10px]'
  return (
    <div className='navbar h-[60px] shadow-md relative z-10 '>
        <div className='wrapper pl-5 pr-5 pt-[10px] pb-[10px] flex
        justify-between items-center mobile:pl-0 mobile:pr-0 sticky'>
            {/* left bar */}
          <div className='left flex flex-1 items-center'>
            <div className='language cursor-pointer text-[16px] mobile:hidden'>EN</div>
            <div className='searchInput flex border-[2px] border-solid 
                 border-lightgrey rounded-md items-center ml-[10px] p-[5px]
                 focus-within:border-[#814af3]'>
                <input type="text" className='input outline-none mobile:w-[50%]' />
                <Search  className='cursor-pointer mobile:ml-6' style={{fontSize: "18px"}}/>
            </div>
          </div>
          {/* LOGO */}
          <div className='flex flex-1 text-center justify-center'>
         <Link to = '/'>  <div className='logo font-bold text-lg text-center mobile:text-sm p-1'>WINTER KINGS</div> </Link> 
          </div>
          {/* Right side of div */}
          <div className='right flex flex-1 items-center justify-end mobile:flex-[1.5] mobile:justify-center'>
          <div>
      {/* Link to Register page with styled text */}
      <Link to="/register" className={style}>
        Register
      </Link>
    </div>
            <div>
      {/* Styled 'Sign In' text */}
      <div className={style}></div>
      
      {/* Clickable 'Login' link */}
      <Link className='ml-2' to="/login">Login</Link>
    </div>
            <div >
            <Link to= "/cart" className={style}>
              <Badge badgeContent= {2} color='primary'>
                <ShoppingCart />
              </Badge>
              </Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar