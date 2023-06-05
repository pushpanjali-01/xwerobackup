import React,{useState} from "react";
import "./style.css"
const DetailsBillTable = () => {
    const [bills, setBills] = useState([]);
    const data = [
        { productnameandsize: "Maggie  (L)", mrp:1000, rate: 1025, discount:"5%"},
    ];
    return (
        <section className='bill-section-details'>
            <div className="bill-table-container">
            <table className="bill-table-details">
                <thead>
                    <tr>
                        <th>Product name & Size</th>
                        <th>MRP</th>
                        <th>Rate</th>
                        <th>Discount</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((billdetails) => (
                        <tr> 
                            <td>{billdetails.productnameandsize}</td>
                            <td>{billdetails.mrp}</td>
                            <td>{billdetails.rate}</td>
                            <td>{billdetails.discount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </section>
    )
}
export default DetailsBillTable