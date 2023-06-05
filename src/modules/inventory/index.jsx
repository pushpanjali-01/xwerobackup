import React, { useState } from "react";
import "./style.css"
import purchaselogo from "../../asserts/images/purchaselogo.svg"
import stocklogo from "../../asserts/images/stocklogo.svg"
import stocklogoactive from "../../asserts/images/stocklogoactive.svg"
import userlogo from "../../asserts/images/userlogo.svg"
import userlogoactive from "../../asserts/images/userlogoactive.svg"
import newuserproductlogo from "../../asserts/images/newproductlogo.svg"
import newuserproductlogoactive from "../../asserts/images/newproductlogoactive.svg"
import PurchaseComponent from "../../components/purchasecomponent";
import UserComponent from "../../components/usercomponent";
import StockComponent from "../stockcomponent";
import NewProductComponent from "../../components/newproductcomponent";
import vector from "../../asserts/images/vector.svg"
import filter from "../../asserts/images/filter.svg"
import paymentdetails from "../../asserts/images/paymentdetails.svg"
import { Container, NavLink, Row, Navbar, Nav } from "react-bootstrap";
import Header from "../../components/Header";
import purchaselogoactive from "../../asserts/images/purchaselogoactive.svg"
import activelinkicon from "../../asserts/images/activelinkicon.svg"
import MobileNavbar from "../../components/mobilenavbar";
import Pageheader from "../../components/pageheader";
import HomeNavbar from "../../components/homenavbar";
// import { Navbar } from "react-bootstrap";
const Inventory = () => {
    return (
        <main>
            <Header />
            <Pageheader />
            <MobileNavbar />
            <HomeNavbar/>
            {/* <PurchaseComponent /> */}
        </main>
    )
}
export default Inventory