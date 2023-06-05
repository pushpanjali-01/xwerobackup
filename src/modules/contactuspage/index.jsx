import React from "react";
import Header from "../../components/Header";
import Pageheader from "../../components/pageheader";
import MobileNavbar from "../../components/mobilenavbar";
import { Container, Row, Col } from "react-bootstrap";
import contactuslogo from "../../asserts/images/contactuslogo.svg"
import youtubeicon from "../../asserts/images/youtubevector.svg"
import instaicon from "../../asserts/images/instavector.svg"
import linkedinicon from "../../asserts/images/linkedinvector.svg"
import "./style.css"
const Contactuspage = () => {
    return (
        <main>
            <Header />
            <Pageheader />
            <MobileNavbar />
            <section className="contactus-section">
                <Container>
                    <Row>
                        <Col md={6} className="contactus-right-col">
                            <div className="contactus-left">
                                <p>Contact Us</p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="contactus-right">
                                <img src={contactuslogo} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="contactus-content">
                <Row>
                    <Col md={6}>
                        <div className="contactus-content-left">
                            <ul>
                                <li>
                                    <div className="left-row1">
                                        <p>GARHWA</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="left-row2">
                                        <p>
                                            Sukhbana, Near Railway Crossing,<br /> Garhwa, Jharkhand - 822114
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="left-row3">
                                        <p>+91 8448444943</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="contactus-content-right">                         
                                <ul>
                                    <li>
                                        <div className="right-row1">
                                            <p>DELIVERY AREAS</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="right-row2">
                                            <p>Garhwa</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="right-row2">
                                            <p>Ranchi</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="right-row2">
                                            <p>Jamshedpur</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                    </Col>
                </Row>
                <section className="contactus-footer-section">                 
                        <div className="contactus-footer">
                            <p>
                                FOLLOW US
                            </p>
                        </div>
                        <div className="contactus-footer-icons">
                            <img src={instaicon} alt="" />
                            <img src={linkedinicon} alt="" />
                            <img src={youtubeicon} alt="" />
                        </div>
                </section>
            </section>
        </main>
    )
}
export default Contactuspage