import { React, useState } from "react";
import Images from "../asset";


const ProductInfo = () => {
    let [cartItems, setCartItems] = useState(0);
    
    const cartPlus = () => {
        if (cartItems || cartItems == 0) {
            setCartItems(++cartItems)
        }
    }

    const cartMinus = () => {
        if (cartItems == 0) {
            setCartItems(0)
        } else {
            setCartItems(--cartItems);
        }
    }

    return (
        <>
            <div className="mt-5">
                <h6 className=" text-Orange  ">SNEAKER COMPANY</h6>

                <h1 className="font-bold text-3xl my-3">Fall Limited Edition <p>Sneakers</p> </h1>

                <p className="w-2/3 my-3 opacity-75"> These low-profile sneakers are your perfect casual wear companion. Featuring a
                    durable rubber outer sole, they’ll withstand everything the weather can offer.
                </p>
                <p className="font-bold text-3xl mt-3">$125.00 <span className="px-1 mr-5 text-sm bg-PaleOrange  font-thin text-Orange rounded ">50%</span></p>

                <del className="opacity-75 "> $250.00</del>

                <div className="my-3 bg-red-700">
                    <span className="bg-Lightgrey rounded-lg  py-2 mr-3 items-center">
                        <button className="px-3" onClick={cartMinus}><img src={Images.minus} alt="" /></button>

                        <span className="px-2">{cartItems}</span>

                        <button className="px-3" onClick={cartPlus}><img src={Images.plus} alt="" /></button>

                    </span>

                    <button className="bg-Orange hover:bg-PaleOrange rounded-lg  py-2 px-4 text-white"><img src={Images.cart_w} alt="" className="inline-block mx-1" /> <span className="">Add to Cart</span> </button>
                
                </div>


            </div>
        </>
    )
}

export default ProductInfo;