import React from "react";
import "./Carosal.css";
const Carosal=()=>{
    
    return(
        <div class="container-fluid car-container mb-5">
        <div className="row">
            <div className="col-3 d-none d-lg-block"></div>
                <div id="header-carousel" class=" col-12 col-lg-9 carousel slide" data-ride="carousel">
                    <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active" style={{height: "500px"}}>
                            <img class="img-fluid" src="https://technext.github.io/eshopper/img/carousel-1.jpg" alt="Image"/>
                            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div class="p-3" style={{"max-width": "700px"}}>
                                    <h4 class="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                                    <h3 class="display-4 text-white font-weight-semi-bold mb-4">Fashionable Dress</h3>
                                    <a href class="btn btn-light text-dark py-2 px-3 " style={{backgroundColor:"white"}}>Shop Now</a>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item" style={{height: "500px",padding:"20px"}}>
                            <img class="img-fluid" src="https://technext.github.io/eshopper/img/carousel-2.jpg" alt="Image"/>
                            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div class="p-3" style={{"max-width": "700px"}}>
                                    <h4 class="text-light text-uppercase font-weight-medium mb-3 d-md-block">10% Off Your First Order</h4>
                                    <h3 class="display-4 text-white font-weight-semi-bold mb-4 ">Reasonable Price</h3>
                                    <a href class="btn btn-light text-dark py-2 px-3 button  " style={{backgroundColor:"white"}}>Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#header-carousel" data-slide="prev">
                        <div class="btn btn-dark" style={{width: "45px", height: "45px"}}>
                            <span class="carousel-control-prev-icon mb-n2"></span>
                        </div>
                    </a>
                    <a class="carousel-control-next" href="#header-carousel" data-slide="next">
                        <div class="btn btn-dark" style={{width: "45px", height: "45px"}}>
                            <span class="carousel-control-next-icon mb-n2"></span>
                        </div>
                    </a>
                </div>
            </div>
            </div>
        
    )
}
export default Carosal;