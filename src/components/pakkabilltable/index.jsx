import React, { useState, useEffect } from 'react';
import './style.css';
import cash from "../../asserts/images/cash.svg"
import credit from "../../asserts/images/credit.svg"
import mobile from "../../asserts/images/mobile.svg"
function PakkaBillTable() {
    const [bills, setBills] = useState([]);
    // const [bills, setBills] = useState(data);
    // useEffect(() => {
    //   fetch('https://example.com/api/bills')
    //     .then(response => response.json())
    //     .then(data => setBills(data));
    // }, []);

    const data = [
        { sno: 1, nameandsize: 'PARLE G BISCUIT, 500 gram',hsn:"HS678921345678902",gst:15, mrp: 10000000, discount: 25000000, rate: 78950013, qty: 99999, total: 1234567890, },
        { sno: 2, nameandsize: 'HINDUSTANUNILIVERFAIRAND',hsn:"HS678921345678902", gst:15,mrp: 10000000, discount: 25000000, rate: 78950013, qty: 99999, total: 1234567890, },
        { sno: 3, nameandsize: ' HANDSOME CREAM, 250 gram',hsn:"HS678921345678902",gst:15, mrp: 10000000, discount: 25000000, rate: 78950013, qty: 99999, total: 1234567890, },
        { sno: 4, nameandsize: 'PARLE G BISCUIT, 500 gram',hsn:"HS678921345678902",gst:15, mrp: 10000000, discount: 25000000, rate: 78950013, qty: 99999, total: 1234567890, },
        { sno: 5, nameandsize: 'PARLE G BISCUIT, 500 gram',hsn:"HS678921345678902",gst:15, mrp: 10000000, discount: 25000000, rate: 78950013, qty: 99999, total: 1234567890, },
        { sno: 6, nameandsize: 'PARLE G BISCUIT, 500 gram',hsn:"HS678921345678902",gst:15, mrp: 10000000, discount: 25000000, rate: 78950013, qty: 99999, total: 1234567890, },
        { sno: 7, nameandsize: 'PARLE G BISCUIT, 500 gram',hsn:"HS678921345678902",gst:15, mrp: 10000000, discount: 25000000, rate: 78950013, qty: 99999, total: 1234567890, },
        { sno: 8, nameandsize: 'PARLE G BISCUIT, 500 gram',hsn:"HS678921345678902",gst:15, mrp: 10000000, discount: 25000000, rate: 78950013, qty: 99999, total: 1234567890, },
        { sno: 9, nameandsize: 'PARLE G BISCUIT, 500 gram',hsn:"HS678921345678902",gst:15, mrp: 10000000, discount: 25000000, rate: 78950013, qty: 99999, total: 1234567890, },
        { sno: 10, nameandsize: 'PARLE G BISCUIT, 500 gram',hsn:"HS678921345678902",gst:15, mrp: 10000000, discount: 25000000, rate: 78950013, qty: 99999, total: 1234567890, },
        { sno: 11, nameandsize: 'PARLE G BISCUIT, 500 gram',hsn:"HS678921345678902",gst:15, mrp: 10000000, discount: 25000000, rate: 78950013, qty: 99999, total: 1234567890, },
        { sno: 12, nameandsize: 'PARLE G BISCUIT, 500 gram',hsn:"HS678921345678902",gst:15, mrp: 10000000, discount: 25000000, rate: 78950013, qty: 99999, total: 1234567890, },

    ];



    return (
        <section>
            <table>
                <thead className='table-head-pakka'>
                    <tr>
                        <th>S:No</th>
                        <th>Name & Size</th>
                        <th>HSN</th>
                        <th>GST</th>
                        <th>MRP</th>
                        <th>Discount</th>
                        <th>Rate</th>
                        <th>Qty</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody className='table-body-pakka'>
                    {data.map((bill) => (
                        <tr key={bill.sno}>
                            <td>{bill.sno}</td>
                            <td>{bill.nameandsize}</td>
                            <td>{bill.hsn}</td>
                            <td>{bill.gst}</td>
                            <td>{bill.mrp}</td>
                            <td>{bill.discount}</td>
                            <td>{bill.rate}</td>
                            <td>{bill.qty}</td>
                            <td>{bill.total}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}

export default PakkaBillTable;

