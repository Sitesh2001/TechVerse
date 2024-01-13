import React from 'react'
import { Layout } from '../Components/Layout/Layout'

export default function Order() {
  return (
    <Layout>
      <main className='flex w-[95%] gap-x-5 mx-auto mt-6 '>
        <div className='flex-[3] relative flex flex-col gap-y-6 '>
        <h1 className=' absolute -top-7 text-lg font-semibold '><span className='text-slate-600'>OrderId</span> #12345</h1>
          <div style={{boxShadow: "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px"}} className='h-60 flex flex-col rounded overflow-y-auto orderScroll '>
          <div className='flex-1 flex p-4'>
            <div className=' basis-28'>
              <img src="/Images/cart.webp" className='w-full h-full object-contain' alt="images" />
            </div>
            <div className='flex-1 h-fit flex justify-between px-2 gap-x-2 flex-wrap pt-3 '>
              <h1>product name</h1>
              <p>price</p>
              <p>quantity</p>
              <p>total price</p>
            </div>
          </div>
          <div className='flex-1 flex p-4'>
            <div className=' basis-28'>
              <img src="/Images/cart.webp" className='h-full w-full object-contain' alt="images" />
            </div>
            <div className='flex-1 flex justify-between px-2 gap-x-2 flex-wrap pt-3 '>
              <h1>product name</h1>
              <p>price</p>
              <p>quantity</p>
              <p>total price</p>
            </div>
          </div>
          </div>
          <div style={{boxShadow: "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px"}} className='h-32 rounded-sm '>

          </div>
          <div style={{boxShadow: "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px"}} className='h-32 rounded-sm '>

          </div>
        </div>
        <div style={{boxShadow: "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px"}} className='flex-1 rounded-sm '>

        </div>
      </main>
    </Layout>
  )
}
