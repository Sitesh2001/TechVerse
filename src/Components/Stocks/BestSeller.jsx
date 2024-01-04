import React from 'react'
import { IoMdStar } from 'react-icons/io'
import { Link } from 'react-router-dom'

const BestSeller = () => {
  return (
    <div className="mt-10 w-72 ">
      <div className=" flex justify-between py-3 px-1 border-b border-slate-300 items-center">
        <h1 className=" text-base font-semibold -tracking-tighter">Best Seller</h1>
        <Link to="/newProducts">+</Link>
      </div>
      <div className="my-4 p-3 flex rounded-lg ">
        <div className="flex-1"><img src="" alt="" /></div>
        <div className="flex-1 flex flex-col gap-y-1"><h1 className=" capitalize text-base font-medium">title</h1>
        <div className='flex gap-x-1'>
            <IoMdStar/>
            <IoMdStar/>
            <IoMdStar/>
            <IoMdStar/>
            <IoMdStar/>
        </div>
        <p>Rs 5</p></div>
      </div>     
    </div>
  )
}

export default BestSeller