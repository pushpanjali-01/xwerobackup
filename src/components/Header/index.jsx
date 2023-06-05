import { useState, useEffect } from 'react';
import { Navbar, Nav, Row, Container } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';
import inventorylogo from "../../asserts/images/inventorylogo.svg"
import employeelogo from "../../asserts/images/employeelogo.svg"
import creditlogo from "../../asserts/images/creditlogo.svg"
import navlogo from "../../asserts/images/navlogo.svg"
import hamburger from "../../asserts/images/hamburger.svg"
import contactusicon from "../../asserts/images/contactusicon.svg"
import contactusicondark from "../../asserts/images/contactusicondark.svg"
import aboutusicon from "../../asserts/images/aboutusicon.svg"
import aboutusicondark from "../../asserts/images/aboutusicondark.svg"
import privacypolicy from "../../asserts/images/privacypolicy.svg"
import privacypolicydark from "../../asserts/images/privacypolicydark.svg"
import logouticon from "../../asserts/images/logouticon.svg"
import logouticondark from "../../asserts/images/logouticondark.svg"
import mobilelogo from "../../asserts/images/mobilelogo.svg"
import profile from "../../asserts/images/profile.svg"
import closebtn from "../../asserts/images/closebtn.svg"
import aboutuslight from "../../asserts/images/aboutusiconlight.svg"
import { useHistory } from 'react-router-dom';
import "./style.css"

const Header = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const isDesktop = useMediaQuery({ minWidth: 768 }); // Breakpoint for desktop view
    const [activeLink, setActiveLink] = useState();
    // Custom hamburger toggle component
    const HamburgerToggle = () => (
        <div className="hamburger-toggle" onClick={() => setIsExpanded(!isExpanded)}>
            <div className='mobile-nav-right'>
                <div className='hamburger'><img src={hamburger} alt="Hamburger Icon" /></div>
                <div className='header-title'><p>Allahrakha</p></div>
            </div>
            <div className='profile-image'><img src={profile} alt="" /></div>
        </div>
    );
    const closenavbar = () => {
        setIsExpanded(false)
    }
    // const history = useHistory();
    // useEffect(() => {
    //   history.push("/homepage/inventory");
    // }, [history]);
    return (
        <Navbar
            expand="sm"
            className="page-header"
            expanded={isExpanded}
        >
            {/* Use custom hamburger toggle for mobile view */}
            <Navbar.Toggle as={isDesktop ? undefined : HamburgerToggle} >
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className={isDesktop ? 'flex-column' : 'justify-content-end'}>
                    <Container>
                        {isDesktop ? (
                            <>
                                <Row className='logo-menu'>
                                    <NavLink to="/img" exact className="nav-link-logo" activeClassName="active"><img src={navlogo} alt="" className="logo_img" /></NavLink>
                                </Row>
                                <Row className='desktop-nav-menus'>
                                    <NavLink to="/inventory" exact className={`nav-link ${activeLink === "inventory" ? "active" : ""}`} activeClassName="active"> <img src={inventorylogo} alt="" className='menu-img' onClick={() => setActiveLink("inventory")} /> <span className='menu'>Inventory</span></NavLink>
                                    <NavLink to="/creditpage" className={`nav-link ${activeLink === "credit" ? "active" : ""}`} activeClassName="active"><img src={creditlogo} alt="" className='menu-img' onClick={() => setActiveLink("aboutuspage")} />Credit</NavLink>
                                    <NavLink to="/employeepage" className="nav-link" activeClassName={`nav-link ${activeLink === "employee" ? "active" : ""}`}><img src={employeelogo} alt="" className='menu-img' onClick={() => setActiveLink("aboutuspage")} />Employee</NavLink>
                                    <NavLink to="/aboutuspage" exact className={`nav-link ${activeLink === "aboutuspage" ? "active" : ""}`} activeClassName="active"> <img src={aboutusicon} alt="" className='menu-img' onClick={() => setActiveLink("aboutuspage")} /> <span className='menu'>About Us</span></NavLink>
                                    <NavLink to="/contactuspage" exact className={`nav-link ${activeLink === "contactuspage" ? "active" : ""}`} activeClassName="active"> <img src={contactusicon} alt="" className='menu-img' onClick={() => setActiveLink("contactuspage")} /> <span className='menu'>Contact Us</span></NavLink>
                                    <NavLink to="/privacypage" className={`nav-link ${activeLink === "privacypage" ? "active" : ""}`} activeClassName="active"><img src={privacypolicy} alt="" className='menu-img' onClick={() => setActiveLink("privacypage")}/><span className='menu'>Privacy Policy</span></NavLink>
                                </Row>
                                <Row className='logout'>
                                    <NavLink to="/logoutpage" className="nav-link-logout" activeClassName="active"><img src={logouticon} alt="" className='menu-img' />Log Out</NavLink>
                                </Row>
                            </>
                        ) : (
                            <>
                                <div className='colsebtn'><img src={closebtn} alt="" onClick={closenavbar} /></div>
                                <Row className='logo-menu'>
                                    <NavLink to="/" exact className="nav-link-logo" activeClassName="active"><img src={mobilelogo} alt="" className="logo_img" /></NavLink>
                                </Row>
                                <Row className='mobile-nav-menus'>
                                    <NavLink to="/aboutuspage" exact className={`nav-link-mobile-menu ${activeLink === "aboutuspage" ? "active" : ""}`} activeClassName="active"><img src={activeLink === "aboutuspage" ? aboutuslight : aboutusicondark} alt="" className={`menu-img ${activeLink === "aboutuspage" ? "active-svg" : ""}`} onClick={() => setActiveLink("aboutuspage")}/>About Us</NavLink>
                                    <NavLink to="/contactuspage" exact className={`nav-link-mobile-menu ${activeLink === "contactuspage" ? "active" : ""}`} activeClassName="active"><img src={contactusicondark} alt="" className='menu-img' onClick={() => setActiveLink("contactuspage")}/>Contact Us</NavLink>
                                    <NavLink to="/privacypage" exact className={`nav-link-mobile-menu ${activeLink === "privacypage" ? "active" : ""}`} activeClassName="active"><img src={privacypolicydark} alt="" className='menu-img' />Privacy Policy</NavLink>
                                </Row>
                                <Row className='logout'>
                                    <NavLink to="/aboutuspage" className="nav-link-logout" activeClassName="active"><img src={logouticondark} alt="" />Log Out</NavLink>
                                </Row>
                            </>
                        )
                        }
                    </Container>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default Header

