import React from "react";
import Carousel from "../Carousel/Carousel";
import ProductInfo from "./ProductInfo";


const ProductPage =() => {

    return(
        <>
        <div className="md:flex md:flex-row md:px-10 md:pt-14 ">
            <div className="md:basis-1/2">
            <Carousel />
            </div>
            <div className="md:basis-1/2">
            <ProductInfo />
            </div>
            
            

        </div>
        </>
    )
}

export default ProductPage