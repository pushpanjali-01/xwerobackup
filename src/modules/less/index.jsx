import React from "react";
import "./style.css"
import menuicon from "../../asserts/images/stockmenuicon.svg"
import BillTableLess from "../../components/billtableless";
import deleteicon from "../../asserts/images/deleteicon.svg"
const Less = () => {
    return (
        <main>
            <section>
                <div className="less-stock">
                    <div className="centered-text">
                        <div className="heading">
                            <p>Less Stock</p>
                        </div>
                    </div>
                    <div className="menu-button">
                        <button className="menu-icon-less"><img src={menuicon} alt="" /></button>
                    </div>
                </div>
            </section>
            <section>
                <BillTableLess />
            </section>
            <section className="delete-section">
                <div className="delete-container">
                    <button className="deletebtn"><img src={deleteicon} alt="" className="deleteicon" />Delete</button>
                </div>
            </section>
        </main>
    )
}
export default Less