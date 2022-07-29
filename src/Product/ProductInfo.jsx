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
            <div className="mt-5   ">
                <h6 className=" text-Orange font-bold  ">SNEAKER COMPANY</h6>
                

                <h1 className="font-bold text-3xl md:text-5xl my-4">Fall Limited Edition <p>Sneakers</p> </h1>

                <p className="w-11/12 my-3 opacity-75"> These low-profile sneakers are your perfect casual wear companion. Featuring a
                    durable rubber outer sole, they’ll withstand everything the weather can offer.
                </p>
                <p className="font-bold text-3xl mt-4">$125.00 <span className="px-1 mr-5 text-sm bg-PaleOrange  font-thin text-Orange rounded ">50%</span></p>

                <del className="opacity-75 "> $250.00</del>

                <div className="my-4 justify-center text-center md:text-leftDSAAAAAAAAAAdDDDDDDDDDDDDDD ">
                    
                    <span className="bg-Lightgrey rounded-lg  py-2 mr-3 items-center">
                        <button className="px-4 md:px-3 " onClick={cartMinus}><img src={Images.minus} alt="" /></button>

                        <span className="px-2">{cartItems}</span>

                        <button className="md:px-3 px-4" onClick={cartPlus}><img src={Images.plus} alt="" /></button>

                    </span>
                    
                    <br className="md:hidden" />
                    <br className="md:hidden"/>
                    
                    <button className="bg-Orange rounded-lg  py-2 px-7 md:px-4 text-white  "><img src={Images.cart_w} alt="" className="inline-block mx-1" /> <span className="">Add to Cart</span> </button>
                    
                </div>


            </div>
        </>
    )
}

export default ProductInfo;