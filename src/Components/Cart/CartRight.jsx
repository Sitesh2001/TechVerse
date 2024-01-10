import React, { useEffect } from 'react'
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
const CartRight = (prop) => {

    const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();

    function createOrder(data, actions) {
        return actions.order
            .create({
                purchase_units: [
                    {
                        amount: { value: prop.tprice },
                    },
                ],
            })
            .then((orderID) => {
                return orderID;
            });
    }
    function onApprove(data, actions) {
        return actions.order.capture().then(async function (details) {
            console.log("Paid")
        });
    }
    function onError(err) {
        console.log(err);
    }
    useEffect(() => {
        const loadPaypalScript = async () => {
            const  clientId = "AWEQ_pGjiz4KS4RgXv7oT5DdcpZZ9yX5hqvynGVUGkPEixlM7FHqCx1pCMp0Sy7ZZ1-QypnsI8JdnHFo"
            paypalDispatch({
                type: "resetOptions",
                value: { clientId: clientId, currency: "USD" },
            });
            paypalDispatch({ type: "setLoadingStatus", value: "pending" });
        };

        loadPaypalScript();
    }, [paypalDispatch]);
    return (
        <div className='flex flex-col flex-1 p-5 pb-3 max-h-[344px] mx-auto max-w-[400px] min-w-[300px] shadow'>
            <h1 className='text-xl '>Order Summary</h1>
            <div className='flex justify-between items-center text-sm text-slate-500 py-4 border-slate-300 border-b'>
                <p>Subtotal</p>
                <p>Rs {prop.tprice}</p>
            </div>
            <div className='flex justify-between items-center text-sm text-slate-500 py-4 border-slate-300 border-b'>
                <p>Shipping estimate</p>
                <p>Rs {prop.ship}</p>
            </div>
            <div className='flex justify-between items-center text-sm text-slate-500 py-4 border-slate-300 border-b'>
                <p>Tax estimate</p>
                <p>Rs {prop.gst}</p>
            </div>
            <div className='flex justify-between items-center text-slate-800 font-[500] py-4 border-slate-300 border-b'>
                <p>Total Order</p>
                <p>Rs {prop.tprice + prop.ship + prop.gst}</p>
            </div>
            <PayPalButtons createOrder={createOrder} onApprove={onApprove} onError={onError} />
            {/* <button onClick={null} type="button" className="text-white bg-gradient-to-r mt-5 align-bottom from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br transition-all duration-100 active:translate-y-1 active:shadow-none focus:outline-none shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Checkout</button> */}
        </div>
    )
}

export default CartRight