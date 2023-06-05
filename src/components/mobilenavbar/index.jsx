import React from "react";
import { Navbar } from "react-bootstrap";
import { useState } from 'react';
import { Nav, Row, Container } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';
import inventorylogo from "../../asserts/images/inventorylogo.svg"
import inventorylogomobile from "../../asserts/images/inventorylogomobile.svg"
import employeelogo from "../../asserts/images/employeelogo.svg"
import creditlogo from "../../asserts/images/creditlogo.svg"
import employeelogomobile from "../../asserts/images/employeelogomobile.svg"
import creditlogomobile from "../../asserts/images/creditlogomobile.svg"
import menuvector from "../../asserts/images/menuvector.svg"
import "./style.css"
const MobileNavbar = () => {
    const [activeLink, setActiveLink] = useState("inventory");
    const isDesktop = useMediaQuery({ minWidth: 768 });
    return (
        <section>
            {isDesktop ? (
                <Navbar className="mobile-navbar d-none">
                    <NavLink to="/inventory" exact className={`nav-link-mobile ${activeLink === "inventory" ? "active" : ""}`} activeClassName="active"><div className="mobile-menu"> <img src={inventorylogo} alt="" className='menu-img' /> <span className='menu'>Inventory</span></div></NavLink>
                    <NavLink to="/careerspage" className={`nav-link-mobile ${activeLink === "credit" ? "active" : ""}`} activeClassName="active"><img src={creditlogo} alt="" className='menu-img' />Credit</NavLink>
                    <NavLink to="/aboutuspage" className="nav-link-mobile" activeClassName={`nav-link-mobile ${activeLink === "employee" ? "active" : ""}`}><img src={employeelogo} alt="" className='menu-img' />Employee</NavLink>
                </Navbar>
            ) : (
                <Navbar className="mobile-navbar">
                    <NavLink to="/inventory" exact className={`nav-link-mobile ${activeLink === "inventory" ? "active" : ""}`} activeClassName="active">
                        <div className="mobile-menu-logo-wrapper-inventory"><div className="mobile-menu-logo-inventory"><img src={inventorylogomobile} alt="" /></div></div>
                        <div className='mobile-menu'>Inventory</div>
                    </NavLink>
                    <div><img src={menuvector} /></div>
                    <NavLink to="/careerspage" className={`nav-link-mobile ${activeLink === "credit" ? "active" : ""}`} activeClassName="active">
                        <div className="mobile-menu-logo-wrapper"><div className="mobile-menu-logo"><img src={creditlogomobile} alt="" /></div></div>
                        <div className="mobile-menu">Credit</div>
                    </NavLink>
                    <div><img src={menuvector} /></div>
                    <NavLink to="/aboutuspage" className={`nav-link-mobile ${activeLink === "employee" ? "active" : ""}`} activeClassName="active">
                        <div className="mobile-menu-logo-wrapper"><div className="mobile-menu-logo"><img src={employeelogomobile} alt="" /></div></div>
                        <div className="mobile-menu">Employee</div>
                    </NavLink>
                </Navbar>
            )}
        </section>
    )
}

export default MobileNavbar