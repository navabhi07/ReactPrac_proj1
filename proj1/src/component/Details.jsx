import React from 'react'
import { Link } from 'react-router-dom'

const Details = () => {
  return (
    <div className='w-[80%] h-full  m-auto flex overflow-hidden '>
        <div className='w-[50%]  h-full  flex justify-center p-10 '>
          <img className='object-contain w-[50%] ml-60  '  src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'></img>
        </div>


        <div className='w-[50%]  h-full   p-10 mt-24 overflow-x-hidden '>
            <h1 className='text-2xl  mb-3'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
            <h3 className='text-slate-500 mb-3'>men's clothing</h3>
            <h2 className='text-red-300 mb-3'>$109.95</h2>
            <p className='mb-7'>
            Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday
            </p>
            <Link className=' px-5 py-2 border rounded border-blue-300 text-blue-400 mr-5' >Edit</Link>
            <Link className=' px-5 py-2 border rounded border-red-300 text-red-400'>Delete</Link>
               
        </div>
        
    </div>
  )
}

export default Details