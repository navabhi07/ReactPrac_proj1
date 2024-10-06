import React from 'react'

const Nav = () => {
  return (
    <nav className='w-[15%]  bg-zinc-100 flex flex-col items-center pt-5'>
    <a className=' px-5 py-2 border rounded border-blue-200 text-blue-300'
    href="/create">
     Add a Product
    </a>
    <hr className='w-[80%] mt-2'/>
    <h1 className='text-1xl mb-3 w-[80%] font-semibold'>category Filter</h1>
    <ul className='w-[80%] '>
     <li className='mb-1  flex items-center '>
       <span className=' rounded-full w-[10px] h-[10px] bg-blue-300 mr-1'></span>cat 1</li>
       <li className='mb-1  flex items-center '>
       <span className=' rounded-full w-[10px] h-[10px] bg-green-300 mr-1'></span>cat 1</li>
     
       <li className='mb-1  flex items-center '>
       <span className=' rounded-full w-[10px] h-[10px] bg-red-300 mr-1'></span>cat 1</li>
     
    </ul>
   
    </nav>
  )
}

export default Nav