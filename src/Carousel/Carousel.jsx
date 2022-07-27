import React from "react";
import Images from "../asset";



const Carousel = () => {

    return (
        <>
            {/* Mobile Carousel */}
            <div id="mobileslide" className="carousel slide md:hidden " data-bs-ride="carousel">

                {/* <!-- Indicators/dots --> */}
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#mobileslide" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#mobileslide" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#mobileslide" data-bs-slide-to="2"></button>
                    <button type="button" data-bs-target="#mobileslide" data-bs-slide-to="3"></button>
                </div>

                {/* <!-- The slideshow/carousel --> */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Images.product1} alt="Los Angeles" className="d-block" />
                    </div>
                    <div className="carousel-item">
                        <img src={Images.product2} alt="Chicago" className="d-block" />
                    </div>
                    <div className="carousel-item">
                        <img src={Images.product3} alt="New York" className="d-block" />
                    </div>
                    <div className="carousel-item">
                        <img src={Images.product4} alt="New York" className="d-block" />
                    </div>
                </div>

                {/* <!-- Left and right controls/icons --> */}
                <button className="carousel-control-prev" type="button" data-bs-target="#mobileslide" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next " type="button" data-bs-target="#mobileslide" data-bs-slide="next">
                    <span className="carousel-control-next-icon "></span>
                </button>
            </div>



            {/* Desktop Carousel */}
            <div className="w-2/3  hidden md:block ">
                <div id="carouselExampleIndicators" className="carousel slide  " data-bs-ride="carousel">

                    {/* <!-- Slides --> */}
                    <div className="carousel-inner ">
                        <div className="carousel-item active ">
                            <img src={Images.product1} className="d-block rounded-3xl " alt="..." />
                        </div>
                        <div className="carousel-item ">
                            <img src={Images.product2} className="d-block rounded-3xl" alt="..." />
                        </div>
                        <div className="carousel-item ">
                            <img src={Images.product3} className="d-block rounded-3xl" alt="..." />
                        </div>
                        <div className="carousel-item ">
                            <img src={Images.product4} className="d-block rounded-3xl" alt="..." />
                        </div>
                    </div>
                    {/* <!-- Slides --> */}

                    {/* <!-- Controls --> */}
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    {/* <!-- Controls --> */}


                    {/* <!-- Thumbnails --> */}

                    <div className="carousel-indicators" style={{ marginBottom: -20 }} >
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active w-25 "
                            aria-current="true" aria-label="Slide 1">
                            <img className="d-block rounded-md " src={Images.thumbnail1} />
                        </button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                          className="w-25"  aria-label="Slide 2" >
                            <img className="d-block rounded-md  " src={Images.thumbnail2} />
                        </button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                           className="w-25"  aria-label="Slide 3" >
                            <img className="d-block rounded-md"
                                src={Images.thumbnail3} />
                        </button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                          className="w-25" aria-label="Slide 4" >
                            <img className="d-block rounded-md "
                                src={Images.thumbnail4} />
                        </button>
                    </div>
                    {/* <!-- Thumbnails --> */}


                </div>





            </div>

        </>
    )
}

export default Carousel