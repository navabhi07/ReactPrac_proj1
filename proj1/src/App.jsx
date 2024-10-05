import React from 'react'

const App = () => {
  return (
    
    <div className='h-screen w-screen flex '>
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

      <div className='w-[85%] h-full  p-10 flex flex-wrap overflow-x-hidden overflow-y-auto'>
        <div className='card  mr-3 p-5 border shadow w-[20%]  h-[35vh] flex-col '>
            <div className='image hover:scale-110   w-full h-[80%] bg-contain bg-no-repeat bg-center mb-3  '
            style={{backgroundImage:"url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)"}}>

            </div>
            <h1 className=' text-sm text-nowrap hover:text-blue-300'>Lorem ipsum dolor sit amet</h1>
         </div>
      </div>
      
    </div>
   
    
    
  )
}

export default App