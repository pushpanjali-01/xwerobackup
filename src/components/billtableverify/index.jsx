import React, { useState } from "react";
import deletetableicon from "../../asserts/images/deletetableicon.svg"
import deleteiconlight from "../../asserts/images/deleteiconlight.svg"
import "./style.css"
const BillTableVerify = () => {
    const [bills, setBills] = useState([]);
    const data = [
        { name: 'Maggie (L)', mrp: 100, discount: "5%", qty: 1, rate: 95, del: `${deletetableicon}` },
        { name: 'Nescafe (M)', mrp: 100, discount: "5%", qty: 6, rate: 95, del: `${deletetableicon}` },
        { name: 'Clinic Plus (S)', mrp: 100, discount: "5%", qty: 2, rate: 95, del: `${deletetableicon}` },
        { name: 'Coconut oil (L)', mrp: 100, discount: "5%", qty: 4, rate: 95, del: `${deletetableicon}` },
        { name: 'Wheat (M)', mrp: 100, discount: "5%", qty: 10, rate: 95, del: `${deletetableicon}` },
        { name: 'Pepsi (Ltr)', mrp: 100, discount: "5%", qty: 1, rate: 95, del: `${deletetableicon}` },
        { name: 'Dairy Milk (M)', mrp: 100, discount: "5%", qty: 4, rate: 95, del: `${deletetableicon}` },
        { name: 'Dairy Milk (M)', mrp: 100, discount: "5%", qty: 8, rate: 95, del: `${deletetableicon}` },
        { name: 'Dairy Milk (M)', mrp: 100, discount: "5%", qty: 8, rate: 95, del: `${deletetableicon}` },
        { name: 'Boost (M)', mrp: 100, discount: "5%", qty: 8, rate: 95, del: `${deletetableicon}` },
    ];
    return (
        <section className='bill-section-stock'>
            <div className="bill-table-container-verify">
            <table className="bill-table-verify">
                <thead>
                    <tr>
                        {/* <th>
                            <div className="check">
                                <div>
                                    <input type="checkbox" className="checkbox" />
                                </div>
                                <div className="check-text">SL:No</div>
                            </div>
                        </th> */}
                        <th>Name & Size</th>
                        <th>MRP</th>
                        <th>Discount</th>
                        <th>Quantity</th>
                        <th>Rate</th>
                        <th><img src={deleteiconlight} alt="" className="deleteicontable"/></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((bill) => (
                        <tr>
                            <td>{bill.name}</td>
                            <td>{bill.mrp}</td>
                            {/* <div className="discount-container"> */}
                            <td><div className="discount-container"><p className="discount">{bill.discount}</p></div></td>
                            {/* </div> */}
                            <td><div className="discount-container"><p className="discount">{bill.qty}</p></div></td>
                            <td>{bill.rate}</td>
                            <td><img src={bill.del} alt="" className="deleteicontable"/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </section>
    )
}
export default BillTableVerify