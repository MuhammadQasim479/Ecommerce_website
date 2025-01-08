import React from 'react'
import Announce from '../components/Announce'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const CategoryPage = () => {
  return (
    <div>
        <Announce />
        <Navbar />
        <div className='flex flex-col p-5'>
            <h1 className='text-[30px]'>Men's Cloth</h1>
            <div className='flex items-center justify-between mt-3 mobile:flex-col mobile:items-center'>
                <div>
                    <p>Filter by</p>
                    <select className='ml-3 border-2 border-silver'>
                        <option selected disabled> Size</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </select>
                    <select className='ml-3 border-2 border-silver'>
                        <option selected disabled>Color</option>
                        <option>Yellow</option>
                        <option>Green</option>
                        <option>Red</option>
                    </select>
                </div>
                <div className='flex mobile:mt-3'>
                    <p>Sort by</p>
                    <select className='ml-3 border-2 border-silver'>
                        <option>Newest (Firts)</option>
                        <option>Oldest (First)</option>
                        <option>Price (Asc)</option>
                        <option>Price (Des)</option>
                    </select>
                </div>
            </div>
        </div>
        <Products />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default CategoryPage