import React, { useState } from "react";
import "./style.css"
const BillTableExpiry = () => {
    const [bills, setBills] = useState([]);
    const data = [
        { slno: "01", name: 'Maggie (L)', mrp: 95, qty: 5, expirydate: "5 / 10 / 2023", vendor: "Pushp" },
        { slno: "02", name: 'Nescafe (M)', mrp: 55, qty: 5, expirydate: "7 / 11 / 2023", vendor: "Pushp" },
        { slno: "03", name: 'Clinic Plus (S)', mrp: 60, qty: 5, expirydate: "2 / 11 / 2023", vendor: "Pushp" },
        { slno: "04", name: 'Coconut oil (L)', mrp: 72, qty: 5, expirydate: "15 / 11 / 2023", vendor: "Pushp" },
        { slno: "05", name: 'Wheat (M)', mrp: 60, qty: 5, expirydate: "5 / 03 / 2024", vendor: "Pushp" },
        { slno: "06", name: 'Pepsi (Ltr)', mrp: 40, qty: 5, expirydate: "5 / 03 / 2024", vendor: "Pushp" },
        { slno: "07", name: 'Dairy Milk (M)', mrp: 63, qty: 5, expirydate: "5 / 03 / 2024", vendor: "Pushp" },
        { slno: "08", name: 'Dairy Milk (M)', mrp: 63, qty: 5, expirydate: "5 / 10 / 2024", vendor: "Pushp" },
        { slno: "08", name: 'Dairy Milk (M)', mrp: 63, qty: 5, expirydate: "5 / 10 / 2024", vendor: "Pushp" },
        { slno: "10", name: 'Boost (M)', mrp: 150, qty: 5, expirydate: "5 / 10 / 2024", vendor: "Pushp" },
    ];
    return (
        <section className='bill-section-stock'>
            <div className="bill-table-container-expiry">
            <table className="bill-table-stock">
                <thead>
                    <tr>
                        <th>
                            <div className="check">
                                <div>
                                    <input type="checkbox" className="checkbox" />
                                </div>
                                <div className="check-text">SL:No</div>
                            </div>
                        </th>
                        <th>Name & Size</th>
                        <th>MRP</th>
                        <th>Qty</th>
                        <th>Expiry Date</th>
                        <th>Vendor</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((bill) => (
                        <tr key={bill.slno}>

                            <td> <div className="check">

                                <input type="checkbox" className="checkbox" />
                                {bill.slno}
                            </div></td>
                            <td>{bill.name}</td>
                            <td>{bill.mrp}</td>
                            <td>{bill.qty}</td>
                            <td>{bill.expirydate}</td>
                            <td>{bill.vendor}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </section>
    )
}
export default BillTableExpiry