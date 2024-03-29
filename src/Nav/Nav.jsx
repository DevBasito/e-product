import React, { useState } from "react";
import Images from "../asset";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";


const Nav = (props) => {
    const { cartItems}  = useSelector(state => state.cart );

    const [showmenu, setShowmenu] = useState(false)
    const [showcart, setShowcart] = useState(false)

    const openMenu = () => {

        setShowmenu(!showmenu)

        let menu = document.getElementById("menu")
        let app = document.getElementById("App")

        let menuStyle = "h-screen  absolute top-0 left-0 z-50  w-1/2 py-5  bg-white shadow-2xl opacity-100 "

        if (!showmenu) {
            menu.className = menuStyle + "md:hidden";
            // app.style.opacity = 0.2;
            // menu.style.opacity = 1;
        }
        else {
            menu.className = "hidden";
            // app.style.opacity = 1;
        }


    }

    const openCart = () => {
        const cart = document.getElementById("cart");
        console.log(showcart)
        setShowcart(!showcart);

        if (showcart) {
            console.log("show")
            cart.style.display = "block"
        }
        else {
            cart.style.display = "none"
            console.log("null")
        }
    }

    return (

        <>

            <div className="flex flex-row mb-3 ">
                <div className="basis-1/2 md:basis-1/4 flex flex-row items-center md:justify-between">

                    <div className="md:hidden"><img src={Images.mobileMenu} alt="" onClick={openMenu} /></div>
                    <div className="px-5 md:px-0 "><img src={Images.Logo} alt="" /></div>
                </div>
                <div className="md:basis-2/4  md:flex items-center hidden ">
                    <ul className="opacity-75" >
                        <li className="float-left px-3  ">Collections</li>
                        <li className="float-left px-3" >Men</li>
                        <li className="float-left px-3">Women</li>
                        <li className="float-left px-3"> About</li>
                        <li className="float-left px-3"> Contact</li>
                    </ul>
                </div>
                <div className="basis-1/2 md:basis-1/4 flex flex-row justify-end md:justify-center  ">
                    <div className="basis 1/2 px-3 md:px-5  flex items-center">
                        <span className="badge rounded-pill bg-Orange absolute top-2.5 hidden " id="badge">{cartItems}</span>
                        <img src={Images.cart} alt="" onClick={openCart} />
                    </div>
                    <div className="basis 1/2 px-3 md:px-5 flex items-center"> <img src={Images.avatar} alt="" width={40} /></div>
                </div>



            </div>
            <div className=" px-5 mt-4 ">
                <hr className=" opacity-7  " />
            </div>



            <div className="h-screen  absolute top-0 left-0 z-50  w-1/2 py-5 hidden " id="menu">
                <img src={Images.closeMenu} alt="" className="px-8 my-3 pb-4" onClick={openMenu} />
                <ul className="">
                    <li className=" px-8 my-4">Collections</li>
                    <li className=" px-8 my-4" >Men</li>
                    <li className=" px-8 my-4">Women</li>
                    <li className=" px-8 my-4"> About</li>
                    <li className=" px-8 my-4"> Contact</li>
                </ul>
            </div>


            {/* Cart Component */}
            <div id="cart" className="hidden">
                <Cart />
            </div>
        </>
    )
}
export default Nav;