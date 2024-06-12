import { useState } from 'react'

import Navbar from './src/components/nabar/Navbar'

import { IoClose } from "react-icons/io5";
import Main from './src/components/main/Main';
import Banner from './src/components/main/Banner';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full'>
      <div className='  bg-emerald-400 p-6 flex items-center justify-center w-full h-14'>
        <p className=' text-base font-normal'>Start a free trial and enjoy 3 months of Shopify for $1/month on select plans.</p>
        <a href="">Sign up now</a>
        <IoClose />
      </div>
      <Navbar />
      <Banner/>
      <Main/>
    </div>
  )
}

export default App
