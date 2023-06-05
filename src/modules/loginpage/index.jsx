import React, { useEffect, useState } from "react";
import "./style.css"
import Container from "react-bootstrap/esm/Container"
import { Row, Col } from "react-bootstrap"
import btn from "../../asserts/images/button-arrow.svg"
import { useHistory } from "react-router-dom";
import logo from "../../asserts/images/logo.svg"
import logoshadow from "../../asserts/images/logoshadow.svg"
import loader from "../../asserts/images/loader.mp4"
const Loginpage = () => {
    const [showLoader, setShowLoader] = useState(false);
    const [showOtherContent, setShowOtherContent] = useState(false);
    const navigate = useHistory()
    const navigateToOtppage = () => {
        navigate.push('/otppage')
    }
    useEffect(() => {
        setShowLoader(true);
        const timeout1 = setTimeout(() => {
            setShowLoader(false);
            setShowOtherContent(true);
        }, 5000); // set to 5 seconds
        return () => {
            clearTimeout(timeout1);
        };
    }, []);


    return (
        <main>
            <section className="login-page">
                <Container>
                    {/* <div className="loader">
                        {showLoader && <video autoPlay loop muted src={loader} className="video" />}
                    </div> */}
                    {showOtherContent &&
                        <Row>
                            <Col md={6} className="left-section">
                                <div className="logo-text">
                                    {/* <p>Xwero</p>
                                <p className="logo-text-shadow">Xwero</p> */}
                                    <img src={logo} alt="" className="logo-img" />
                                    <img src={logoshadow} alt="" className="logo-shadow" />
                                </div>
                            </Col>
                            <Col md={6} className="right-section">
                                <div>
                                    <div className="login-heading">
                                        <p>
                                            Welcome to Xwero
                                        </p>
                                    </div>
                                    <div className="login-subheading">
                                        <p>Enter Mobile Number</p>
                                    </div>
                                    <div className="login-input">
                                        <input type="text" className="input-field" />
                                    </div>
                                    <div className="login-desc">
                                        <p>
                                            We will use this number to send OTP
                                        </p>
                                    </div>
                                    <div className="login-button">
                                        <button onClick={navigateToOtppage}>Request OTP <span><img src={btn} className="button-arrow" /></span></button>
                                    </div>
                                    <div className="login-info">
                                        <p className="line1">By Continuing you agree to our<br />
                                            <p className="line2">Terms of Services <span className="line1">and</span> Privacy Policies</p></p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    }
                </Container>
            </section>
        </main>
    )
}
export default Loginpage