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
import StockComponent from "../../modules/stockcomponent";
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
import QRScanComponent from "../qrscancomponent";
import Verifycomponent from "../verifycomponent";
import ScanQrComponent from "../scanqrcomponent";
// import { Navbar } from "react-bootstrap";
const HomeNavbar = () => {
    const [activeLink, setActiveLink] = useState();

    const handleLinkClick = (link) => {
        setActiveLink(link);
    }
    const renderComponent = () => {
        switch (activeLink) {
            case "scanqrcomponent":
                // return <QRScanComponent />;
                return <ScanQrComponent/>
            case "user":
                return <UserComponent />;
            case "stock":
                return <StockComponent />;
            case "newproduct":
                return <NewProductComponent />;
            default:
                return null;
        }
    }
    return (
        <main>
            <section className="inventory-section">
                <Navbar className="home-navbar">
                    <Nav className="menu-items-inventory">
                        {/* <NavLink to="/" exact className={`nav-link-inventory ${activeLink === "qrscancomponent" ? "active" : ""}`} onClick={() => handleLinkClick("qrscancomponent")}><img src={activeLink === "qrscancomponent" ? purchaselogoactive : purchaselogo} alt="" className={`menu-icon ${activeLink === "qrscancomponent" ? "active-svg" : ""}`} /><span className="menu-text"> Purchase </span></NavLink> */}
                        <NavLink to="/" exact className={`nav-link-inventory ${activeLink === "scanqrcomponent" ? "active" : ""}`} onClick={() => handleLinkClick("scanqrcomponent")}><img src={activeLink === "scanqrcomponent" ? purchaselogoactive : purchaselogo} alt="" className={`menu-icon ${activeLink === "scanqrcomponent" ? "active-svg" : ""}`} /><span className="menu-text"> Purchase </span></NavLink>
                        <div className="vector"><img src={vector} alt="" /></div>
                        <NavLink to="/usercomponent" className={`nav-link-inventory ${activeLink === "user" ? "active" : ""}`} onClick={() => handleLinkClick("user")}> <img src={activeLink === "user" ? userlogoactive : userlogo} alt="" className={`menu-icon ${activeLink === "user" ? "active-svg" : ""}`} /><span className="menu-text">User </span> </NavLink>
                        <div className="vector"><img src={vector} alt="" /></div>
                        <NavLink to="/stockcomponent" className={`nav-link-inventory ${activeLink === "stock" ? "active" : ""}`} onClick={() => handleLinkClick("stock")}><img src={activeLink === "stock" ? stocklogoactive : stocklogo} alt="" className={`menu-icon ${activeLink === "stock" ? "active-svg" : ""}`} /><span className="menu-text"> Stock</span> </NavLink>
                        <div className="vector"><img src={vector} alt="" /></div>
                        <NavLink to="/newproductcomponent" className={`nav-link-inventory ${activeLink === "newproduct" ? "active" : ""}`} onClick={() => handleLinkClick("newproduct")}><img src={activeLink === "newproduct" ? newuserproductlogoactive : newuserproductlogo} alt="" className={`menu-icon ${activeLink === "newproduct" ? "active-svg" : ""}`} /><span className="menu-text"> New Product</span> </NavLink>
                    </Nav>
                </Navbar>
                {renderComponent()}
            </section>
        </main>
    )
}
export default HomeNavbar