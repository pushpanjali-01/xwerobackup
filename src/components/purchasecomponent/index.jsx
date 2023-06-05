import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import calender from "../../asserts/images/calender.svg";
import Calendar from 'react-calendar';
import downarrow from "../../asserts/images/downarrow.svg";
import moneydarklogo from "../../asserts/images/moneydarklogo.svg"
import moneylightlogo from "../../asserts/images/moneylightlogo.svg"
import bankicondark from "../../asserts/images/bankicondark.svg"
import bankiconlight from "../../asserts/images/bankiconlight.svg"
import cardicondark from "../../asserts/images/cardicondark.svg"
import cardiconlight from "../../asserts/images/cardiconlight.svg"
import filter from "../../asserts/images/filter.svg"
import paymentdetails from "../../asserts/images/paymentdetails.svg"
import BillTable from "../billtable";
import { useMediaQuery } from 'react-responsive';
import Graphs from "../graphs";
import whatsapp from "../../asserts/images/whatsapp.svg"
import download from "../../asserts/images/download.svg"
import print from "../../asserts/images/print.svg"
const PurchaseComponent = () => {
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const isDesktop = useMediaQuery({ minWidth: 768 });
    const [showOptions, setShowOptions] = useState(false);
    const handleDropdownClick = () => {
        setShowCalendar(!showCalendar);
    }

    const handleCalendarSelect = (date) => {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        const formattedDate = `${day},${month},${year}`;
        setSelectedDate(formattedDate);
        setShowCalendar(false);
    };
    const handleClick = () => {
        setShowOptions(!showOptions);
    };
    const handleOptionClick = (option) => {
        // Handle the click of the selected option here
        console.log(`Clicked ${option}`);
    };
    return (
        <main className="main-class">
            <section>
                <div className="sale-report">
                    <p>Sale report</p>
                </div>
                <Container>
                    <Row className="graphs">
                        <Col md={2}>
                            <div className="purchase-section">
                                <div className="select-period" onClick={handleDropdownClick}>
                                    <p>Select period</p>
                                </div>
                                <div className="calender">
                                    <div className="cal">
                                        <img src={calender} alt="" />
                                    </div>
                                    <div className="data">
                                        <span className="cal-data">{selectedDate}</span>
                                        <img src={downarrow} alt="" onClick={handleDropdownClick} className="drop-down" />
                                    </div>
                                </div>
                                {showCalendar && (
                                    <div>
                                        <Calendar onChange={handleCalendarSelect} value={new Date()} />
                                    </div>
                                )}
                            </div>
                        </Col>
                        <Col md={10}>
                            <div className="graph">

                                <Graphs />

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="graph-section">
                <Container>
                    <div className="total-sale">
                        <p>Total Sale</p>
                    </div>
                    <div className="report">
                        <div className="amount">
                            <div className="lefticon">
                                <img src={moneydarklogo} alt="" />
                            </div>
                            <div className="price">
                                <p>3,00,000</p>
                            </div>
                            <div className="righticon">
                                <img src={moneylightlogo} alt="" />
                            </div>
                        </div>
                        <div className="bank">
                            <div className="lefticon">
                                <img src={bankicondark} alt="" />
                            </div>
                            <div className="price">
                                <p>20,34,000</p>
                            </div>
                            <div className="righticon">
                                <img src={bankiconlight} alt="" />
                            </div>
                        </div>
                        <div className="credit">
                            <div className="lefticon">
                                <img src={cardicondark} alt="" />
                            </div>
                            <div className="price">
                                <p>20,00,000</p>
                            </div>
                            <div className="righticon">
                                <img src={cardiconlight} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="total-balance">
                        <div>
                            <p className="bal">Total Balance amount</p>
                        </div>
                        <div>
                            <p className="amt">3,00,000</p>
                        </div>
                    </div>
                </Container>
            </section>
            <section>
                <div className="payment-details">
                    <div className="filter-menu">
                        <img src={filter} alt="" />
                    </div>
                    <div className="payment">
                        <p>Payment Details</p>
                    </div>
                    <div className="menu-options">
                        <img src={paymentdetails} alt="" onClick={handleClick} />
                        {showOptions && (
                            <div className="options-container">
                                <div className="option" onClick={() => handleOptionClick('Share')}>
                                    <div className="option-wrap"><img src={whatsapp} alt="" /></div><span className="option-title">Share</span>
                                </div>
                                <div className="option" onClick={() => handleOptionClick('Download PDF')}>
                                    <div className="option-wrap"><img src={download} alt="" /></div><span className="option-title">Download PDF</span>
                                </div>
                                <div className="option" onClick={() => handleOptionClick('Print')}>
                                    <div className="option-wrap"><img src={print} alt="" /></div><span className="option-title">Print</span>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </section>
            <section className="bill">
                <BillTable />
            </section>
            {/* <div>
                <PurchaseNavbar/>
            </div> */}
        </main>
    )
}

export default PurchaseComponent;
