import React from 'react'
import shopify from '../../../assets/images/shopify.png'

function Navbar() {
  return (
    <div className=' bg-emerald-950 p-6 flex items-center justify-between'>

      <div className='flex items-center justify-between gap-8 '>

        <img src={shopify} alt="" />

        <select className=' bg-transparent text-white text-base' name="" id=""> <option value="">Start</option> </select>
        <select className=' bg-transparent text-white text-base' name="" id=""> <option value="">Sell</option> </select>
        <select className=' bg-transparent text-white text-base' name="" id=""> <option value="">Market</option> </select>
        <select className=' bg-transparent text-white text-base' name="" id=""> <option value="">Manage</option> </select>


      </div>

      <div className='flex items-center justify-between gap-8 '>

        <a className=' bg-transparent text-white text-base' href='' alt='' >Pricing </a>
        <select className=' bg-transparent text-white text-base' name="" id=""> <option value="">Learn</option> </select>
        <a className=' bg-transparent text-white text-base' href='' alt=''  > Log in </a>

        <button className=' bg-emerald-600  w-36 h-12 text-white rounded'>Start free trial</button>
      </div>

    </div>
  )
}

export default Navbar
