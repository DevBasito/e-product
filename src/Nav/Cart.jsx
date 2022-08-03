import React from "react";
import Images from "../asset";

const Cart = () => {
    
    return (
        <>
            <div className="absolute top-13 right-12 z-50 w-80 md:w-96 bg-white shadow-2xl opacity-100 rounded-lg py-3">
                <div className="px-3">
                    <p className=" font-bold ">Cart</p>

                </div>
                <hr className="my-3" />

                <div className="flex flex-row justify-between px-3">
                    <div className="basis-1/4 text-center "><img src={Images.thumbnail1} alt="" className="w-50" /></div>
                    <div className="basis-2/4">
                        <p className="opacity-75">Fall Limited Edition Sneakers</p>
                        <p className="opacity-75">$125 X 3 <span className=" opacity-100">$375</span></p>
                    </div>
                    <div className="basis-1/4"></div>

                </div>

                <div className="my-3 text-center px-3">
                    <button className="bg-Orange rounded-lg  py-3 w-full text-white "> Checkout </button>

                </div>


            </div>
        </>
    )
}

export default Cart;