import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.css"
import BillTableVerify from "../billtableverify";
import Header from "../Header";
import Pageheader from "../pageheader";
import MobileNavbar from "../mobilenavbar";
import BillTableExpiry from "../billtableexpiry";
import { Container, Row, Col } from "react-bootstrap";
import addusericon from "../../asserts/images/addusericon.svg"
import CustomerDetailsSearchInput from "../customerdetailssearchinput";
import AddUser from "../adduser";
import KachaBill from "../kachabill";
import PakkaBill from "../pakkabill";
const DetailsComponent = () => {
    const [activeComponent, setActiveComponent] = useState("details");

    const handleAddUserClick = () => {
        setActiveComponent("addUser");
    };

    const navigate = useHistory();

    const handleTypeChange = (event) => {
        setType(event.target.value);
    };

    const handleComponentClick = (component) => {
        setActiveComponent(component);
    };

    const [type, setType] = useState("");
    return (
        <main>
            {activeComponent === "details" ? (
                <section>
                    <div className="details">
                        <div className="details-centered-text">
                            <div className="details-heading">
                                <p>Customer Details</p>
                            </div>
                        </div>
                    </div>
                    <section className="details-content">
                        <section>
                            <Container>
                                <Row className="type-row">
                                    <Col className="left-col">
                                        <label htmlFor="type" className="detail-label">Type</label>
                                    </Col>
                                    <Col className="right-col">
                                        <div>
                                            <select onChange={handleTypeChange} className="input-field-type">
                                                <option value="">Credit</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="amt-row">
                                    <Col className="left-col">
                                        <div className="detail-label"><p>Amount</p></div>
                                    </Col>
                                    <Col className="right-col">
                                        <input type="text" placeholder="123456789" className="input-field-amount" />

                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="search-col" >
                                        <div className="detail-label">
                                            <p>Search</p>
                                        </div>
                                    </Col>
                                    <Col className="search-col" md={6}>

                                    </Col>
                                </Row>
                                <Row className="search-row">
                                    <CustomerDetailsSearchInput />
                                </Row>
                            </Container>
                        </section>
                        <section className="adduser-section">
                            <Container>
                                <Row>
                                    <div className="adduser" onClick={() => handleComponentClick("addUser")}><img src={addusericon} alt="" />Add User</div>
                                </Row>
                                <Row>
                                    <div className="balance-title">
                                        <p>Balance</p>
                                    </div>
                                    <div className="bal-wrapper">
                                        <div className="bal-content"><p>3,00,000</p></div>
                                    </div>
                                </Row>
                            </Container>
                        </section>
                    </section>
                    <section className="details-section">
                        <div className="details-container">
                            <button className="detailsbtnkacha" onClick={() => handleComponentClick("kachaBill")}>
                                Kacha Bill
                            </button>
                            <button className="detailsbtn" onClick={() => handleComponentClick("pakkabill")}>
                                Pakka Bill
                            </button>
                        </div>
                    </section>
                </section>
            ) : activeComponent === "kachaBill" ? (
                <KachaBill />
            ) : activeComponent === "pakkabill" ? (
                <PakkaBill />
            ) : activeComponent === "addUser" ? (
                <AddUser />
            ) : null}
        </main>
    )
}
export default DetailsComponent