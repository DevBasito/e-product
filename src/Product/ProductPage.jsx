import React from "react";
import Carousel from "../Carousel/Carousel";
import ProductInfo from "./ProductInfo";


const ProductPage =() => {

    return(
        <>
        <div className="md:flex md:flex-row md:px-20 md:pt-14 justify-between">
            <div className="md:basis-1/2 ">
            <Carousel />
            </div>
            <div className="md:basis-1/2 md:pl-16 ">
            <ProductInfo />
            </div>
            
            

        </div>
        </>
    )
}

export default ProductPage