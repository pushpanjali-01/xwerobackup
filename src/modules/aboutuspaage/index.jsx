import React from "react";
import Header from "../../components/Header";
import Pageheader from "../../components/pageheader";
import MobileNavbar from "../../components/mobilenavbar";
import "./style.css"
import { Container, Row, Col } from "react-bootstrap";
import aboutuslogo from "../../asserts/images/aboutuslogo.svg"
const Aboutuspage = () => {
    return (
        <main>
            <Header />
            <Pageheader />
            <MobileNavbar />
            <section className="aboutus-section">
                <Container>
                    <Row>
                        <Col md={6} className="aboutus-right-col">
                            <div className="aboutus-left">
                                <p>About Us</p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="aboutus-right">
                                <img src={aboutuslogo} alt="" />
                            </div>
                        </Col>
                    </Row>
                    <section>
                        <div className="aboutus-content">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                            </p>
                        </div>
                    </section>
                </Container>
            </section>
        </main>
    )
}
export default Aboutuspage