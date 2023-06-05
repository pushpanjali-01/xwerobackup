import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import BillTableVerify from "../billtableverify";
import DetailsComponent from "../detailscomponent";
import { Container, Row, Col } from "react-bootstrap";
import KachaBillTable from "../kachabilltable";
import menuicon from "../../asserts/images/stockmenuicon.svg"
import PakkaBillTable from "../pakkabilltable";
const PakkaBill = () => {
    //   const navigate = useHistory();
    const [showDetails, setShowDetails] = useState(false);

    //   const navigateToDetailsPage = () => {
    //     navigate.push('/detailscomponent');
    //   };

    const handleVerifyClick = () => {
        setShowDetails(true);
    };

    return (
        <main>
            <section>
                <div className="kacha-bill-menu">
                    <div className="kachanbill-centered-text">
                        <div className="kachanbill-heading">
                            <p>Pakka Bill</p>
                        </div>
                    </div>
                    <div className="kachanbill-menu-button">
                        <button className="kachanbill-menu-icon-less"><img src={menuicon} alt="" /></button>
                    </div>
                </div>
            </section>
            <section className="kachabill-section">
                <Container>
                    <div className="bill-heading-pakka">
                        <p className="line1">20AAICB7871P127</p>
                        <p className="line2-pakka">Buy4earn Retail Private Limited</p>
                        <p className="line3">+919162398369, care@buy4earn.com<br />
                            1 FLOOR, 504, C/O ALLA HARKHA SIDDIQUI, Sukhbana road,<br />
                            Sukhbana, Garhwa, Jharkhand, 822114</p>
                    </div>
                    <Row className="header-row">
                        <Col>
                            <div>
                                <p className="bill-left-col">ALLAHARKHA SIDDIQUI<br />
                                    +919162398396</p>
                                <p className="bill-left-col1">1 FLOOR, 504,C/O ALLAHARKHA SIDDIQUI,
                                    sukhbanaroad,sukhbanaroad, Sukhbana, Garhwa, Jharkhand,822114</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="bill-right-section">
                                <div className="bill-right-col">
                                    <p>INVOICE NO : 123456789012345000000 </p>
                                    <p>DATE : 12-05-202 10:21:00 AM </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className="divider1">

                    </div>
                    <div className="divider2">

                    </div>
                    <Row>
                        <PakkaBillTable />
                    </Row>
                    <div className="divider1">

                    </div>
                    <div className="divider2">

                    </div>
                    <Row className="footer-row">
                        <Col>
                            <div className="bill-footer-left-section">
                                <div className="bill-footer-left">
                                    <p>TYPE :              NETBANKING</p>
                                    <p>BALANCE :    123456791003</p>
                                </div>
                            </div>
                        </Col>
                        <Col className="bill-footer-right-pkka-section">
                            <div>
                                {/* <div className="bill-footer-right-pakka">
                                    <Row>
                                        <Col className="bill-title"><div className="title-pakka"><p>Total</p> </div><div><p  className="colon">:</p></div></Col><Col className="bill-value"><p>1234567891012340</p></Col>
                                    </Row>
                                    <Row>
                                        <Col className="bill-title"><div className="title-pakka"><p>SGST</p> </div><div><p  className="colon">:</p></div></Col><Col className="bill-value"><p>12345678910145</p></Col>
                                    </Row>
                                    <Row>
                                        <Col className="bill-title"><div className="title-pakka"><p>CGST</p> </div><div><p  className="colon">:</p></div></Col><Col className="bill-value"><p>12345678999999</p></Col>
                                    </Row>
                                    <Row>
                                        <Col className="bill-title"><div className="title-pakka"><p>IGST</p> </div><div><p  className="colon">:</p></div></Col><Col className="bill-value"><p>123456789123465</p></Col>
                                    </Row>
                                    <Row>
                                        <Col className="bill-title"><div className="title-pakka"><p>CESS</p> </div><div><p  className="colon">:</p></div></Col><Col className="bill-value"><p>12345678910123</p></Col>
                                    </Row>
                                    <div className="bill-divider"></div>
                                    <Row>
                                        <Col className="bill-title"><div className="title-pakka"><p className="total">GRAND TOTAL</p> </div><div><p  className="colon">:</p></div></Col><Col className="bill-value"><p>12345678910456</p></Col>
                                    </Row>
                                </div> */}
                                <div className="total-bill">
                                    <div className="total-label">
                                        <p className="label">Total</p><p className="label-colon">:</p>
                                    </div>
                                    <div className="total-amt"><p>1234567891012340</p></div>
                                </div>
                                <div className="total-bill">
                                    <div className="total-label">
                                        <p className="label">SGST</p><p className="label-colon">:</p>
                                    </div>
                                    <div className="total-amt"><p>12345678910145</p></div>
                                </div>
                                <div className="total-bill">
                                    <div className="total-label">
                                        <p className="label">CGST</p><p className="label-colon">:</p>
                                    </div>
                                    <div className="total-amt"><p>12345678999999</p></div>
                                </div>
                                <div className="total-bill">
                                    <div className="total-label">
                                        <p className="label">IGST</p><p className="label-colon">:</p>
                                    </div>
                                    <div className="total-amt"><p>123456789123465</p></div>
                                </div>
                                <div className="total-bill">
                                    <div className="total-label">
                                        <p className="label">CESS</p><p className="label-colon">:</p>
                                    </div>
                                    <div className="total-amt"><p>12345678910123</p></div>
                                </div>
                                <div className="bill-divider">

                                </div>
                                <div className="total-bill">
                                    <div className="total-label">
                                        <p className="label-grand-total">GRAND TOTAL</p><p className="label-colon">:</p>
                                    </div>
                                    <div className="total-amt"><p>12345678910456</p></div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    );
};

export default PakkaBill;
