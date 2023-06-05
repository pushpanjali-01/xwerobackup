import React from "react";
import menuicon from "../../asserts/images/menuicon.svg"
import deleteicon from "../../asserts/images/deleteicon.svg"
import "./style.css"
import BillTableExpiry from "../../components/billtableexpiry";
const Expiry = () => {
    return (
        <main>
            <section>
                <div className="less-stock">
                    <div className="centered-text">
                        <div className="heading">
                            <p>Expiry Stock</p>
                        </div>

                    </div>
                    <div className="menu-button">
                        <button className="menu-icon-less"><img src={menuicon} alt="" /></button>
                    </div>
                </div>
            </section>
            <section>
                <BillTableExpiry />
            </section>
            <section className="delete-section">
                <div className="delete-container">
                    <button className="deletebtn"><img src={deleteicon} alt="" className="deleteicon" />Delete</button>
                </div>
            </section>
        </main>
    )
}
export default Expiry