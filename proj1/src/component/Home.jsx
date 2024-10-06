import React from 'react'

import Nav from './Nav'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
    <Nav/>
    <div className='w-[85%] h-full  p-10 flex flex-wrap overflow-x-hidden overflow-y-auto'>
    <Link to={"/details/1"} className='card  mr-3 p-5 border shadow w-[20%]  h-[35vh] flex-col '>
        <div className='image hover:scale-110   w-full h-[80%] bg-contain bg-no-repeat bg-center mb-3  '
        style={{backgroundImage:"url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)"}}>

        </div>
        <h1 className=' text-sm text-nowrap hover:text-blue-300'>Lorem ipsum dolor sit amet</h1>
     </Link>
  </div>
  </>
  )
}

export default Home