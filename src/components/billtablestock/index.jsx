import React, { useState, useEffect } from 'react';
import './style.css';
import cash from "../../asserts/images/cash.svg"
import credit from "../../asserts/images/credit.svg"
import mobile from "../../asserts/images/mobile.svg"
function BillTableStock() {
    const [bills, setBills] = useState([]);
    // const [bills, setBills] = useState(data);
    // useEffect(() => {
    //   fetch('https://example.com/api/bills')
    //     .then(response => response.json())
    //     .then(data => setBills(data));
    // }, []);

    const data = [
        { slno: "01", name: 'Maggie (L)', mrp: 100, discount: "5%", rate: 95, quantity: 1 },
        { slno: "02", name: 'Nescafe (M)', mrp: 100, discount: "5%", rate: 95, quantity: 2 },
        { slno: "03", name: 'Clinic Plus (S)', mrp: 100, discount: "5%", rate: 95, quantity: 4 },
        { slno: "04", name: 'Coconut oil (L)', mrp: 100, discount: "5%", rate: 95, quantity: 8 },
        { slno: "05", name: 'Wheat (M)', mrp: 100, discount: "5%", rate: 95, quantity: 3 },
        { slno: "06", name: 'Pepsi (Ltr)', mrp: 100, discount: "5%", rate: 95, quantity: 12 },
        { slno: "07", name: 'Dairy Milk (M)', mrp: 100, discount: "5%", rate: 95, quantity: 32 },
        { slno: "08", name: 'Kurkure (S)', mrp: 100, discount: "5%", rate: 95, quantity: 8 },
        { slno: "09", name: 'Lays (L)', mrp: 100, discount: "5%", rate: 95, quantity: 8 },
        { slno: "10", name: 'Pears (M)', mrp: 100, discount: "5%", rate: 95, quantity: 8 },
    ];
    return (
        <section className='bill-section-stock'>
            <div className="bill-table-container-stock">
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
                            <th>Discount</th>
                            <th>Rate</th>
                            <th>Quantity</th>
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
                                <td>{bill.discount}</td>
                                <td>{bill.rate}</td>
                                <td>{bill.quantity}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default BillTableStock;

