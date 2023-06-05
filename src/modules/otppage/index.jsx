import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css"
import Container from "react-bootstrap/esm/Container"
import { Row, Col, Card } from "react-bootstrap"
import back from "../../asserts/images/back-arrow.svg"

const Otppage = () => {
    const history = useHistory();
    const handleBackClick = () => {
        history.goBack();
    };
    const navigateToregistrationpage = () =>{
        history.push('/profilepage')
    } 

    return (
        <main>
            <div className="back-btn">
                <button onClick={handleBackClick}><img src={back} className="back-arrow" />Back</button>
            </div>
            <section className="otp-page">
                <Container>
                    <div className="opt">
                        <div className="opt-content">
                            <div className="otp-heading">
                                <p>
                                    Enter OTP received
                                </p>
                            </div>
                            <div className="otp-input">
                                <input type="text" className="input-field-otp" />
                            </div>
                            <div className="otp-subheading">
                                <p>
                                    OTP is a six digit code, check message inbox
                                </p>
                            </div>
                            <div className="otp-info">
                                <p onClick={navigateToregistrationpage}>
                                    Re-send OTP to 9600668741
                                </p>
                            </div>
                        </div>
                        <div className="otp">
                            <Card className="d-none d-md-block">
                                <div className="otp-heading">
                                    <p>
                                        Enter OTP received
                                    </p>
                                </div>
                                <div className="otp-input">
                                    <input type="text" className="input-field-otp" />
                                </div>
                                <div className="otp-subheading">
                                    <p>
                                        OTP is a six digit code, check message inbox
                                    </p>
                                </div>
                                <div className="otp-info">
                                    <p onClick={navigateToregistrationpage}>
                                        Re-send OTP to 9600668741
                                    </p>
                                </div>
                            </Card>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    )
}
export default Otppage;
