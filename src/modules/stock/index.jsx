import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./style.css"
import SearchInput from "../../components/searchinput";
import BillTableStock from "../../components/billtablestock";
import deleteicon from "../../asserts/images/deleteicon.svg"
import { useMediaQuery } from 'react-responsive';
const Stock = () => {
    const handleSearch = () => {
        alert()
    }
    const isDesktop = useMediaQuery({ minWidth: 768 });
    return (
        <main>
            <section className="stock-section">
                {isDesktop ? (
                    <div className="stock-container">
                        <div className="stock-details">
                            <div className="title">
                                <p>Stock Value</p>
                            </div>
                            <div className="colon">
                                <p>:</p>
                            </div>
                            <div className="value"><p>123456789 / 123456789</p></div>
                        </div>
                        <div className="stock-details">
                            <div className="title">
                                <p>Quantity</p>
                            </div>
                            <div className="colon">
                                <p>:</p>
                            </div>
                            <div className="value"><p>12345678</p></div>
                        </div>
                    </div>) : (
                        <Container>
                    <div className="stock-container">
                        <div className="stock-details">
                            <div className="title">
                                <p>Stock Value</p>
                            </div>
                            <div className="colon">
                                <p>:</p>
                            </div>
                            <div className="value"><p>123456789 / 123456789</p></div>
                        </div>
                        <div className="stock-details">
                            <div className="title">
                                <p>Quantity</p>
                            </div>
                            <div className="colon">
                                <p>:</p>
                            </div>
                            <div className="value"><p>12345678</p></div>
                        </div>
                    </div>
                    </Container>
                )}
            </section>
            <section>
                <SearchInput onChange={handleSearch} />
            </section>
            <section>
                <BillTableStock />
            </section>
            <section className="delete-section">
                <div className="delete-container">
                    <button className="deletebtn"><img src={deleteicon} alt="" className="deleteicon" />Delete</button>
                </div>
                
            </section>
        </main>
    )
}
export default Stock