import React,{useState} from "react";

const BillTableLess = () => {
    const [bills, setBills] = useState([]);
    const data = [
        { slno: "01", name: 'Maggie (L)', cp: 100, mrp: 95, req: 95, vendor: "Pushp" },
        { slno: "02", name: 'Nescafe (M)', cp: 100, mrp: 55, req: 95, vendor: "Pushp" },
        { slno: "03", name: 'Clinic Plus (S)', cp: 100, mrp: 60, req: 95, vendor: "Pushp" },
        { slno: "04", name: 'Coconut oil (L)', cp: 100, mrp: 72, req: 95, vendor: "Pushp" },
        { slno: "05", name: 'Wheat (M)', cp: 100, mrp: 60, req: 95, vendor: "Pushp" },
        { slno: "06", name: 'Pepsi (Ltr)', cp: 100, mrp: 40, req: 95, vendor: "Pushp" },
        { slno: "07", name: 'Dairy Milk (M)', cp: 100, mrp: 63, req: 95, vendor: "Pushp" },
        { slno: "08", name: 'Dairy Milk (M)', cp: 100, mrp: 63, req: 95, vendor: "Pushp" },
        { slno: "08", name: 'Dairy Milk (M)', cp: 100, mrp: 63, req: 95, vendor: "Pushp" },
        { slno: "10", name: 'Boost (M)', cp: 120, mrp: 150, req: 95, vendor: "Pushp" },
    ];
    return (
        <section className='bill-section-stock'>
            <div className="bill-table-container-less">
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
                        <th>CP</th>
                        <th>MRP</th>
                        <th>Req</th>
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
                            <td>{bill.cp}</td>
                            <td>{bill.mrp}</td>
                            <td>{bill.req}</td>
                            <td>{bill.vendor}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </section>
    )
}
export default BillTableLess