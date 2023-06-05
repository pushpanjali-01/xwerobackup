import React, { useState } from "react";
import "./style.css"
import { NavLink, Navbar, Row, Container } from 'react-bootstrap';
// import Scan from "../scancomponent";
import SalesReport from "../salesreport";
import Verify from "../verifycomponent";
import Scancomponent from "../scancomponent";
import Verifycomponent from "../verifycomponent";
import Stock from "../../modules/stock";
import stocklogonav from "../../asserts/images/stocklogonav.svg"
import stocklogonavactive from "../../asserts/images/stocklogonavactive.svg"
import lessthanicon from "../../asserts/images/lessthanicon.svg"
import lessthaniconactive from "../../asserts/images/lessthaniconactive.svg"
import expiryicon from "../../asserts/images/expiryicon.svg"
import expiryiconactive from "../../asserts/images/expiryiconactive.svg"
import Less from "../../modules/less";
import Expiry from "../../modules/expiry";
const StockNavbar = () => {
    const [activeLink, setActiveLink] = useState("stock");
    const handleLinkClick = (link) => {
        setActiveLink(link);
    }
    const renderComponent = () => {
        switch (activeLink) {
            case "stock":
                return <Stock />;
            case "less":
                return <Less />;
            case "expiry":
                return <Expiry />;
            default:
                return null;
        }
    }
    return (
        <section>
            <Navbar className="purchase-navbar">
                <NavLink to="/stock" exact className={`nav-link-purchase ${activeLink === "stock" ? "active" : ""}`} activeClassName="active" onClick={() => handleLinkClick("stock")}>
                    <div className='purchase-links'><img src={activeLink === "stock" ? stocklogonavactive : stocklogonav} alt="" className={`stock-menu-icon ${activeLink === "stock" ? "active-svg" : ""}`} />Stock</div>
                </NavLink>
                <NavLink to="/less" className={`nav-link-purchase ${activeLink === "less" ? "active" : ""}`} activeClassName="active" onClick={() => handleLinkClick("less")}>
                    <div className='purchase-links'><img src={activeLink === "less" ? lessthaniconactive : lessthanicon} alt="" className={`stock-menu-icon ${activeLink === "less" ? "active-svg" : ""}`} />Less</div>
                </NavLink>
                <NavLink to="/expiry" className={`nav-link-purchase ${activeLink === "expiry" ? "active" : ""}`} activeClassName="active" onClick={() => handleLinkClick("expiry")}>
                    <div className='purchase-links'><img src={activeLink === "expiry" ? expiryiconactive : expiryicon} alt="" className={`stock-menu-icon ${activeLink === "expiry" ? "active-svg" : ""}`} />Expiry</div>
                </NavLink>
            </Navbar>
            {renderComponent()}
        </section>
    )
}
export default StockNavbar