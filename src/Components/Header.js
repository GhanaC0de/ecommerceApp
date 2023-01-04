import React from "react";
import Header1 from "./Header1";

import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import {useSelector,useDispatch} from "react-redux";
// import { actionTypes } from "../actions/actionTypes";

const Header=()=>{
    const {cart_count} = useSelector(state => state.cart)
    // const dispatch=useDispatch()
    // const state=useSelector(state=>state.isLogedIn)
    // // const [data,setData]=useState(state)

    
    // const cartHandler=()=>{
    //     dispatch({type:actionTypes.LOGIN_SUCCESSS})
        

    // }
    // console.log(state)
    return(
        <>
        <div className="container-fluid header-container" >
        <div className="row  py-2 px-xl-5" style={{backgroundColor:"#e6e6fa"}}>
            <div className="col-lg-6 d-none d-lg-block" >
                <div className="d-inline-flex align-items-center">
                    <a className="text-dark " href="/">FAQs</a>
                    <span className="text-muted px-2">|</span>
                    <a className="text-dark" href="/">Help</a>
                    <span className="text-muted px-2">|</span>
                    <a className="text-dark" href="/">Support</a>
                </div>
            </div>
            <div className="col-lg-6  text-lg-right">
                <div className="d-inline-flex align-items-center">
                    <a className="text-dark px-2" href="/">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="text-dark px-2" href="/">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a className="text-dark px-2" href="/">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="text-dark px-2" href="/">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a className="text-dark pl-2" href="/">
                        <i className="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
        </div>
        <div className="row align-items-center py-3 px-xl-5">
            <div className="col-lg-3 d-none d-lg-block">
                <a href="/" className="text-decoration-none text-dark">
                    <h1 className="m-0 display-5 font-weight-semi-bold "><span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
                </a>
            </div>
            <div className="col-lg-6 col-6 text-left">
                <form action="">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for products"/>
                        <div className="input-group-append">
                            <span className="input-group-text bg-transparent text-primary">
                                <i className="fa fa-search"></i>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-lg-3 col-6 text-right">
                <a href="/" className="btn border m-2">
                    <i className="fas fa-heart text-primary"></i>
                    <span className="badge text-dark">0</span>
                </a>
                <Link to='/shoppingCart' className="btn border">
                    <i className="fas fa-shopping-cart text-primary"></i>
                    <span className="badge text-dark">{cart_count}</span>
                </Link>
            </div>
        </div>
    </div>
    <Header1/>
    </>
    )
}
export default Header;