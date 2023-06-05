import React, { useState, useEffect } from 'react';
import './style.css';
import cash from "../../asserts/images/cash.svg"
import credit from "../../asserts/images/credit.svg"
import mobile from "../../asserts/images/mobile.svg"
function BillTable() {
  const [bills, setBills] = useState([]);
  // const [bills, setBills] = useState(data);
  // useEffect(() => {
  //   fetch('https://example.com/api/bills')
  //     .then(response => response.json())
  //     .then(data => setBills(data));
  // }, []);

  const data = [
    { billNo: 1025, name: 'Manoj', type: `${cash}`, salary: 300000 },
    { billNo: 1026, name: 'Kumar', type: `${mobile}`, salary: 2034000 },
    { billNo: 1027, name: 'Kiran', type: `${credit}`, salary: 2000000 },
    { billNo: 1028, name: 'Arun', type: `${cash}`, salary: 200000 },

  ];



  return (
    <section className='bill-section'>
      <div className="bill-table-container-home">
      <table className="bill-table">
        <thead>
          <tr>
            <th>Bill No</th>
            <th>Name</th>
            <th>Type</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {data.map((bill) => (
            <tr key={bill.billNo}>
              <td>{bill.billNo}</td>
              <td>{bill.name}</td>
              <td><img src={bill.type} alt={bill.name} /></td>
              <td>{bill.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </section>
  );
}

export default BillTable;

