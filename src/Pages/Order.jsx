import React from 'react'
import { Layout } from '../Components/Layout/Layout'

export default function Order() {
  return (
    <Layout>
      <main className='flex w-[95%] gap-x-5 mx-auto mt-6 '>
        <div className='flex-[3] relative flex flex-col gap-y-3 '>
        <h1 className=' absolute -top-7 text-lg font-semibold '><span className='text-slate-600'>OrderId</span> #12345</h1>
          <div style={{boxShadow: "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px"}} className='h-60 flex flex-col rounded overflow-y-auto orderScroll '>
          <div className='flex-1 flex p-4 border-b border-slate-100'>
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
          <div style={{boxShadow: "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px"}} className='h-32 rounded-sm p-3 '>
            <h1 className=' text-xl font-semibold -tracking-tight'>Delivery</h1>
            <div className=' flex gap-x-4 pt-4'>
              <div className=' basis-28 self-center'><img className='h-full w-full object-contain' src="/logo/fedex.svg" alt="fedex" /></div>
              <div className=' flex justify-between w-full'>
              <div className=''>
                <h1 className='text-[1.1rem] font-medium'>FedEx</h1>
                <p className=' text-base font-medium text-slate-500'>First class package</p>
              </div>
              <div className=' pr-4'>Rs 20</div>
              </div>
            </div>
          </div>
          <div style={{boxShadow: "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px"}} className='h-40 rounded-sm flex flex-col'>
            <div className='p-3 pb-0 flex-[2]'>
            <h1 className=' text-xl font-semibold -tracking-tight'>Payment Summery</h1>
            <div className='py-2'>
              <div className='flex flex-wrap justify-between items-center'>
                <div><span className='text-[0.9rem] font-medium text-slate-800'>Subtotal</span> <span className='text-[0.8rem] font-normal text-slate-600'>(2 items)</span></div>
                <div className='text-sm'>Rs 200.00</div>
              </div>
              <div className='flex flex-wrap justify-between items-center'>
                <div><span className='text-[0.9rem] font-medium text-slate-800'>Delivery</span> </div>
                <div className='text-sm'>Rs 20.00</div>
              </div>
              <div className='flex flex-wrap justify-between items-center'>
                <div><span className='text-[0.9rem] font-medium text-slate-800'>Tax</span> <span className='text-[0.8rem] font-normal text-slate-600'>(PDV 20% included)</span></div>
                <div className='text-sm'>Rs 00.00</div>
              </div>
            </div>
            </div>
            <div className=' flex-1 flex flex-wrap rounded-sm px-3 py-1 justify-between items-center bg-[#f9fafc] '>
              <h1 className='text-base font-medium text-slate-700'>total paid by customer</h1>
              <p className='text-sm'>Rs. 200.00</p>
            </div>
          </div>
        </div>
        <div style={{boxShadow: "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px"}} className='flex-1 p-3 flex flex-col gap-y-4 rounded-sm '>
          <h1 className=' text-xl font-semibold -tracking-tight'>Customer</h1>
          <div className='flex gap-x-4 pb-1 items-center border-b border-slate-100'>
            <div className=' basis-12'><img src="/logo/user.png" alt="dp" className='h-full w-full object-contain' /></div>
            <div ><h1 className='font-medium text-base text-slate-700'>UserName</h1></div>
          </div>
          <div className='flex gap-x-4 items-center pb-1 border-b border-slate-100'>
            <div className=' basis-12'><img src="/logo/product.png" alt="product" className='h-full w-full object-contain' /></div>
            <div ><h1 className='font-medium text-base text-slate-700'>Order</h1></div>
          </div>
          <h1 className='text-base font-medium text-slate-700'>Cantact info</h1>
          <div className='flex flex-col gap-y-1 -mt-2 pb-1 border-b border-slate-100'>
            <div className='text-sm text-slate-600'> <span>icon</span> <span>email</span> </div>
            <div className='text-sm text-slate-600' ><span>icon</span> <span>mobile</span> </div>
          </div>
          <h1 className='text-base font-medium text-slate-700'>Shipping Address</h1>
          <div className='flex flex-col gap-y-1 -mt-2 pb-1 border-b border-slate-100'>
            <p className='text-sm text-slate-600'>Lorem ipsum <br /> dolor accusantium <br />ipsum</p>
          </div>
        </div>
      </main>
    </Layout>
  )
}
