import React, { useState } from "react";
import "./style.css"
import { Container, NavLink, Row, Navbar, Nav, Col } from "react-bootstrap";
import Header from "../../components/Header";
import Pageheader from "../../components/pageheader";
import MobileNavbar from "../../components/mobilenavbar";
import homeicon1 from "../../asserts/images/homeicon1.svg"
import homeicon2 from "../../asserts/images/homeicon2.svg"
import homeicon3 from "../../asserts/images/homeicon3.svg"
import homeicon4 from "../../asserts/images/homeicon4.svg"
import homeicon5 from "../../asserts/images/homeicon5.svg"
import homeicon6 from "../../asserts/images/homeicon6.svg"
import homeicon7 from "../../asserts/images/homeicon7.svg"
import homeicon8 from "../../asserts/images/homeicon8.svg"
import homeicon9 from "../../asserts/images/homeicon9.svg"
import homeicon10 from "../../asserts/images/homeicon10.svg"
import homeicon11 from "../../asserts/images/homeicon11.svg"
import homeicon12 from "../../asserts/images/homeicon12.svg"
import { useMediaQuery } from 'react-responsive';
import { useHistory } from "react-router-dom";
import PurchaseComponent from "../../components/purchasecomponent";
import HomeNavbar from "../../components/homenavbar";
const Homepage = () => {
    const navigate = useHistory()
    const navigatetoinventorypage = () => {
        navigate.push('/inventory')
    }
    const isDesktop = useMediaQuery({ minWidth: 768 });
    return (
        <main>
            <section className="home-page">
                <Header />
                <Pageheader />
                <MobileNavbar />
                <HomeNavbar />
                <PurchaseComponent/>
                {/* <section className="home-section">
                    {isDesktop ? (
                        <div className="home-heading"><p><span className="home-heading-dark">Xwero</span> Inventory Management <br />
                            integrates with</p>
                        </div>
                    ) : (
                        <div className="home-heading"><p><span className="home-heading-dark">Xwero</span> Inventory<br/> Management <br />
                            integrates with</p></div>
                    )}
                </section>
                <section className="home-content">
                    {isDesktop ? (
                        <Container>
                            <Row className="icon-row">
                                <Col>
                                    <div className="icon1-wrapper">
                                        <div className="icon1" onClick={navigatetoinventorypage}>
                                            <div className="icon-img-row">
                                                <img src={homeicon1} alt="" className="icons" />
                                                <img src={homeicon2} alt="" className="icons" />
                                            </div>
                                            <div className="icon-img-row1">
                                                <img src={homeicon3} alt="" className="icons" />
                                                <img src={homeicon4} alt="" className="icons" />
                                            </div>
                                            <div className="icon1-name"><p>Sale report</p></div>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="icon-col">
                                    <div className="icon-wrapper">
                                        <div className="icon-inner">
                                            <div>
                                                <img src={homeicon5} alt="" />
                                            </div>
                                            <div className="icon-name"><p>Sale report</p></div>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="icon-col">
                                    <div className="icon-wrapper">
                                        <div className="icon-inner">
                                            <div>
                                                <img src={homeicon6} alt="" />
                                            </div>
                                            <div className="icon-name"><p>Sale report</p></div>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="icon-col"> <div className="icon-wrapper">
                                    <div className="icon-inner">
                                        <div>
                                            <img src={homeicon7} alt="" />
                                        </div>
                                        <div className="icon-name"><p>Razorpay</p></div>
                                    </div>
                                </div>
                                </Col>
                            </Row>
                            <Row className="icon-row">
                                <Col className="icon-col1">
                                    <div className="icon-cover">
                                        <div className="icon-wrapper">
                                            <div className="icon-inner">
                                                <div>
                                                    <img src={homeicon6} alt="" />
                                                </div>
                                                <div className="icon-name"><p>Razorpay</p></div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="icon-col">
                                    <div className="icon-wrapper">
                                        <div className="icon-inner">
                                            <div>
                                                <img src={homeicon8} alt="" />
                                            </div>
                                            <div className="icon-name"><p>Razorpay</p></div>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="icon-col">
                                    <div className="icon-wrapper">
                                        <div className="icon-inner">
                                            <div>
                                                <img src={homeicon9} alt="" />
                                            </div>
                                            <div className="icon-name"><p>Razorpay</p></div>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="icon-col"> <div className="icon-wrapper">
                                    <div className="icon-inner">
                                        <div>
                                            <img src={homeicon10} alt="" />
                                        </div>
                                        <div className="icon-name"><p>Razorpay</p></div>
                                    </div>
                                </div>
                                </Col>
                            </Row>
                            <Row className="icon-row">
                                <Col className="icon-col1">
                                    <div className="icon-cover">
                                        <div className="icon-wrapper">
                                            <div className="icon-inner">
                                                <div>
                                                    <img src={homeicon6} alt="" />
                                                </div>
                                                <div className="icon-name"><p>Razorpay</p></div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="icon-col">
                                    <div className="icon-wrapper">
                                        <div className="icon-inner">
                                            <div>
                                                <img src={homeicon11} alt="" />
                                            </div>
                                            <div className="icon-name"><p>Razorpay</p></div>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="icon-col">
                                    <div className="icon-wrapper">
                                        <div className="icon-inner">
                                            <div>
                                                <img src={homeicon10} alt="" />
                                            </div>
                                            <div className="icon-name"><p>Razorpay</p></div>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="icon-col"> <div className="icon-wrapper">
                                    <div className="icon-inner">
                                        <div>
                                            <img src={homeicon11} alt="" />
                                        </div>
                                        <div className="icon-name"><p>Razorpay</p></div>
                                    </div>
                                </div>
                                </Col>
                            </Row>
                        </Container>
                    ) : (
                        <Container>
                            <Row className="icon-row">
                                <Col>
                                    <div className="icon1-wrapper">
                                        <div className="icon1">
                                            <div className="icon-img-row">
                                                <img src={homeicon1} alt="" className="icons" />
                                                <img src={homeicon2} alt="" className="icons" />
                                            </div>
                                            <div className="icon-img-row1">
                                                <img src={homeicon3} alt="" className="icons" />
                                                <img src={homeicon4} alt="" className="icons" />
                                            </div>
                                            <div className="icon1-name"><p>Sale report</p></div>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="icon-col">
                                    <div className="icon-wrapper">
                                        <div className="icon-inner">
                                            <div>
                                                <img src={homeicon5} alt="" />
                                            </div>
                                            <div className="icon-name"><p>Sale report</p></div>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="icon-col">
                                    <div className="icon-wrapper">
                                        <div className="icon-inner">
                                            <div>
                                                <img src={homeicon6} alt="" />
                                            </div>
                                            <div className="icon-name"><p>Sale report</p></div>
                                        </div>
                                    </div>
                                </Col>

                            </Row>
                            <Row className="icon-row">
                                <Col className="icon-col"> <div className="icon-wrapper">
                                    <div className="icon-inner">
                                        <div>
                                            <img src={homeicon7} alt="" />
                                        </div>
                                        <div className="icon-name"><p>Razorpay</p></div>
                                    </div>
                                </div>
                                </Col>
                                <Col className="icon-col1">
                                    <div className="icon-cover">
                                        <div className="icon-wrapper">
                                            <div className="icon-inner">
                                                <div>
                                                    <img src={homeicon6} alt="" />
                                                </div>
                                                <div className="icon-name"><p>Razorpay</p></div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="icon-col">
                                    <div className="icon-wrapper">
                                        <div className="icon-inner">
                                            <div>
                                                <img src={homeicon8} alt="" />
                                            </div>
                                            <div className="icon-name"><p>Razorpay</p></div>
                                        </div>
                                    </div>
                                </Col>


                            </Row>
                            <Row className="icon-row">
                                <Col className="icon-col">
                                    <div className="icon-wrapper">
                                        <div className="icon-inner">
                                            <div>
                                                <img src={homeicon9} alt="" />
                                            </div>
                                            <div className="icon-name"><p>Razorpay</p></div>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="icon-col"> <div className="icon-wrapper">
                                    <div className="icon-inner">
                                        <div>
                                            <img src={homeicon10} alt="" />
                                        </div>
                                        <div className="icon-name"><p>Razorpay</p></div>
                                    </div>
                                </div>
                                </Col>
                                <Col className="icon-col1">
                                    <div className="icon-cover">
                                        <div className="icon-wrapper">
                                            <div className="icon-inner">
                                                <div>
                                                    <img src={homeicon6} alt="" />
                                                </div>
                                                <div className="icon-name"><p>Razorpay</p></div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="icon-col">
                                    <div className="icon-wrapper">
                                        <div className="icon-inner">
                                            <div>
                                                <img src={homeicon11} alt="" />
                                            </div>
                                            <div className="icon-name"><p>Razorpay</p></div>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="icon-col">
                                    <div className="icon-wrapper">
                                        <div className="icon-inner">
                                            <div>
                                                <img src={homeicon10} alt="" />
                                            </div>
                                            <div className="icon-name"><p>Razorpay</p></div>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="icon-col"> <div className="icon-wrapper">
                                    <div className="icon-inner">
                                        <div>
                                            <img src={homeicon11} alt="" />
                                        </div>
                                        <div className="icon-name"><p>Razorpay</p></div>
                                    </div>
                                </div>
                                </Col>
                            </Row>
                        </Container>
                    )}
                </section> */}
            </section>
        </main>
    )
}
export default Homepage;

