import React from 'react'

const CartRight = () => {
  return (
    <div className='flex flex-col p-5 pb-3 basis-[400px] shadow'>
        <h1 className='text-xl '>Order Summary</h1>
        <div className='flex justify-between items-center text-sm text-slate-500 py-4 border-slate-300 border-b'>
            <p>Subtotal</p>
            <p>$190</p>
        </div>
        <div className='flex justify-between items-center text-sm text-slate-500 py-4 border-slate-300 border-b'>
            <p>Shipping estimate</p>
            <p>$5</p>
        </div>
        <div className='flex justify-between items-center text-sm text-slate-500 py-4 border-slate-300 border-b'>
            <p>Tax estimate</p>
            <p>.5$</p>
        </div>
        <div className='flex justify-between items-center text-slate-800 font-[500] py-4 border-slate-300 border-b'>
            <p>Total Order</p>
            <p>$95.5</p>
        </div>
        <button type="button" className="text-white bg-gradient-to-r mt-5 align-bottom from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br transition-all duration-100 active:translate-y-1 active:shadow-none focus:outline-none shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Checkout</button>
    </div>
  )
}

export default CartRight