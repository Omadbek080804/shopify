import React from 'react'
import main from '../../../assets/images/main.png'
import { IoMdPlay } from "react-icons/io";

function Banner() {
  return (
    <div className=' flex  bg-emerald-950 justify-between  w-full '>
     

    <div className='flex  flex-col items-start justify-center  ml-24 w-[50%] gap-12  '>
      <h1 className='text-white text-6xl'>If you can dream <br /> it, you can sell it <br /> with Shopify</h1>
      <h2 className='text-white text-lg'>Build your business here. Take it anywhere.</h2>

      <div className='flex gap-5'>
          <input className='w-56 h-12 rounded ' type="text" />
          <button className=' bg-emerald-600  w-36 h-12 text-white rounded'>Start free trial</button>
      </div>

      <p className='text-white text-xs'>Try Shopify free for 3 days, no credit card required. By entering your email, you agree to <br /> receive marketing emails from Shopify.</p>
    </div>

<div  className=' w-[50%] h-[550px] relative ' >
<img className='w-full h-full' src={main} alt="" />
<div>

    <div className='bg-white absolute w-16 h-16 flex items-center justify-center rounded-full right-2/4 top-2/4 '>
     <IoMdPlay/>

    </div>
</div>

</div>
  </div>
  )
}

export default Banner
