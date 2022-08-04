import { React, useState } from "react";
import Images from "../asset";


const ProductInfo = (props) => {
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

    const addToCart = () => {
        let badge = document.getElementById("badge");
        if (cartItems == 0) {
            badge.style.display = "none";

        } else {
            badge.style.display = "block";
        }
    }

    return (
        <>
            <div className="mt-5   ">
                <h6 className=" text-Orange font-bold  ">SNEAKER COMPANY</h6>


                <h1 className="font-bold text-3xl md:text-5xl my-4">Fall Limited Edition <p>Sneakers</p> </h1>

                <p className="w-11/12 md:w-8/12 my-3 opacity-75"> These low-profile sneakers are your perfect casual wear companion. Featuring a
                    durable rubber outer sole, they’ll withstand everything the weather can offer.
                </p>
                <p className="font-bold text-3xl mt-4 my-5 items-center">
                    $125.00
                    <span className="px-1 mr-5 text-sm bg-PaleOrange  font-thin text-Orange rounded ">50%</span>
                    <br className=" hidden md:block" />

                    <del className="opacity-75 text-sm float-right md:float-left items-center"> $250.00</del>
                </p>


                {/* Add to Cart button for mobile */}
                <div className="my-4 text-center md:hidden">

                    <span className="bg-Lightgrey rounded-lg  py-3 mr-3 mx-auto ">
                        <button className=" px-4 " onClick={cartMinus}><img src={Images.minus} alt="" /></button>

                        <span className="px-5  ">{cartItems}</span>

                        <button className=" px-4 " onClick={cartPlus}><img src={Images.plus} alt="" /></button>

                    </span>

                    <br className="md:hidden" />
                    <br className="md:hidden" />

                    <button className="bg-Orange rounded-lg  py-3 px-5  text-white  " onClick={addToCart} >
                        <img src={Images.cart_w} alt="" className="inline-block mx-1" />
                        <span className="">Add to Cart</span>
                    </button>

                </div>


                {/* Same as abobe but fot Desktop */}
                <div className="my-4 hidden md:block">

                    <span className="bg-Lightgrey rounded-lg  py-3 mr-3  ">
                        <button className=" px-4 " onClick={cartMinus}><img src={Images.minus} alt="" /></button>

                        <span className="px-3 md:px-3 ">{cartItems}</span>

                        <button className=" px-4 " onClick={cartPlus}><img src={Images.plus} alt="" /></button>

                    </span>



                    <button className="bg-Orange rounded-lg  py-3 px-5 text-white  " onClick={addToCart}>
                        <img src={Images.cart_w} alt="" className="inline-block mx-1" />
                        <span className="">Add to Cart</span>
                    </button>

                </div>



            </div>
        </>
    )
}

export default ProductInfo;