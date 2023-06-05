import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import BillTableVerify from "../billtableverify";
import DetailsComponent from "../detailscomponent";
import { Container, Row, Col } from "react-bootstrap";
import KachaBillTable from "../kachabilltable";
import menuicon from "../../asserts/images/stockmenuicon.svg"
const KachaBill = () => {
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
                            <p>Kacha Bill</p>
                        </div>
                    </div>
                    <div className="kachanbill-menu-button">
                        <button className="kachanbill-menu-icon-less"><img src={menuicon} alt="" /></button>
                    </div>
                </div>
            </section>
            <section className="kachabill-section">
                <Container>
                    <div className="bill-heading">
                        <p>ESTIMATE INVOICE</p>
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
                        <KachaBillTable />
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
                        <Col>
                            <div className="bill-footer-right-section">
                                <div className="bill-footer-right"><p>Total :1234567891012340</p></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    );
};

export default KachaBill;
