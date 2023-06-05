// import React, { useState } from "react";
// import "./style.css";
// import QRScanComponent from "../qrscancomponent";
// import { Container } from "react-bootstrap";
// import qrcode from "../../asserts/images/qrcode.svg";
// import SacnSeacrhInput from "../scanseaarchinputcomponent";
// import closebtn from "../../asserts/images/closebtn.svg";
// // import closebtn from "../../asserts/images/closebtn.svg"
// const ScanQrComponent = () => {
//     const [showPopUp, setShowPopUp] = useState(false);
//     const [showOtherPopUp, setShowOtherPopUp] = useState(false);

//     const handleScanClick = () => {
//         setShowPopUp(true);
//     };

//     const handleClosePopUp = () => {
//         setShowPopUp(false);
//     };

//     const handleNextClick = () => {
//         setShowOtherPopUp(true);
//     };

//     const handleCloseOtherPopUp = () => {
//         setShowOtherPopUp(false);
//     };

//     return (
//         <div>
//             <main className={(showPopUp || showOtherPopUp) ? "blur" : ""}>
//                 <section>
//                     <div className="header-div">
//                         <div className="heading-div">
//                             <p>Scan code</p>
//                         </div>
//                     </div>
//                 </section>
//                 <section>
//                     <SacnSeacrhInput />
//                 </section>
//                 <section className="qr-section">
//                     <div className="qr-div">
//                         <img src={qrcode} alt="" />
//                     </div>
//                     <div className="scan-button">
//                         <button className="scanbtn" onClick={handleScanClick}>
//                             Scan Barcode
//                         </button>
//                     </div>
//                 </section>
//             </main>

//             {showPopUp && (
//                 <div className="popup-overlay">
//                     <div className="popup-content">
//                         {/* Content of your pop-up */}
//                         <div className="popup-container">
//                             <div className="popup-header">
//                                 <p>Details</p>
//                             </div>
//                             <div className="popup-closebtn">
//                                 <button onClick={handleClosePopUp}><img src={closebtn} alt="" /></button>
//                             </div>
//                         </div>
//                         <div className="header-underline">
//                         </div>
//                         <div className="popi">
//                             <div className="popup-details-content">
//                                 <div className="title-label">
//                                     <p>Product name & Size</p>
//                                 </div>
//                                 <div className="colon-label">
//                                     <p>:</p>
//                                 </div>
//                                 <div className="value-label">
//                                     <p>Maggie (L)</p>
//                                 </div>
//                             </div>
//                             <div className="popup-details-content">
//                                 <div className="title-label">
//                                     <p>MRP</p>
//                                 </div>
//                                 <div className="colon-label">
//                                     <p>:</p>
//                                 </div>
//                                 <div className="value-label">
//                                     <p>1000</p>
//                                 </div>
//                             </div>
//                             <div className="popup-details-content">
//                                 <div className="title-label">
//                                     <p>Rate</p>
//                                 </div>
//                                 <div className="colon-label">
//                                     <p>:</p>
//                                 </div>
//                                 <div className="value-label">
//                                     <p>1025</p>
//                                 </div>
//                             </div>
//                             <div className="popup-details-content">
//                                 <div className="title-label">
//                                     <p>Discount</p>
//                                 </div>
//                                 <div className="colon-label">
//                                     <p>:</p>
//                                 </div>
//                                 <div className="value-label">
//                                     <p>3%</p>
//                                 </div>
//                             </div>
//                             <div className="popup-details-content">
//                                 <div className="title-label">
//                                     <p>Quantity</p>
//                                 </div>
//                                 <div className="colon-label">
//                                     <p>:</p>
//                                 </div>
//                                 <div className="value-label-qty">
//                                     <p className="qty">04</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="button-section">
//                             <button className="savebtn">Save</button>
//                             <button className="nextbtn" onClick={handleNextClick}>Next</button>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {showOtherPopUp && (
//                 <div className="popup-overlay">
//                     <div className="popup-content">
//                         {/* Content of your other pop-up */}
//                         <div className="popup-container">
//                             <div className="popup-header">
//                                 <p>Next Details</p>
//                             </div>
//                             <div className="popup-closebtn">
//                                 <button onClick={handleCloseOtherPopUp}>
//                                     <img src={closebtn} alt="" />
//                                 </button>
//                             </div>
//                         </div>
//                         <div className="popi">
//                             <div className="popup-details-content">
//                                 <div className="title-label">
//                                     <p>Product name & Size</p>
//                                 </div>
//                                 <div className="colon-label">
//                                     <p>:</p>
//                                 </div>
//                                 <div className="value-label">
//                                     <p>Maggie (L)</p>
//                                 </div>
//                             </div>
//                             <div className="popup-details-content">
//                                 <div className="title-label">
//                                     <p>MRP</p>
//                                 </div>
//                                 <div className="colon-label">
//                                     <p>:</p>
//                                 </div>
//                                 <div className="value-label">
//                                     <p>1000</p>
//                                 </div>
//                             </div>
//                             <div className="popup-details-content">
//                                 <div className="title-label">
//                                     <p>Rate</p>
//                                 </div>
//                                 <div className="colon-label">
//                                     <p>:</p>
//                                 </div>
//                                 <div className="value-label">
//                                     <p>1025</p>
//                                 </div>
//                             </div>
//                             <div className="popup-details-content">
//                                 <div className="title-label">
//                                     <p>Discount</p>
//                                 </div>
//                                 <div className="colon-label">
//                                     <p>:</p>
//                                 </div>
//                                 <div className="value-label">
//                                     <p>3%</p>
//                                 </div>
//                             </div>
//                             <div className="popup-details-content">
//                                 <div className="title-label">
//                                     <p>Quantity</p>
//                                 </div>
//                                 <div className="colon-label">
//                                     <p>:</p>
//                                 </div>
//                                 <div className="value-label-qty">
//                                     <p className="qty">04</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="button-section">
//                             <button className="savebtn-next">Save</button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ScanQrComponent;

import React, { useState } from "react";
import "./style.css";
import QRScanComponent from "../qrscancomponent";
import { Container } from "react-bootstrap";
import qrcode from "../../asserts/images/qrcode.svg";
import SacnSeacrhInput from "../scanseaarchinputcomponent";
import closebtn from "../../asserts/images/closebtn.svg";
// import AnotherComponent from "./AnotherComponent"; // Import the component you want to render
import VerifyComponent from "../verifycomponent";
import DetailsBillTable from "../detailsbilltable";

const ScanQrComponent = () => {
    const [showPopUp, setShowPopUp] = useState(false);
    const [showOtherPopUp, setShowOtherPopUp] = useState(false);
    const [showAnotherComponent, setShowAnotherComponent] = useState(false); // New state variable
    const [showQr, setShowQr] = useState(true)
    const handleScanClick = () => {
        setShowPopUp(true);
    };

    const handleClosePopUp = () => {
        setShowPopUp(false);
    };

    const handleNextClick = () => {
        setShowOtherPopUp(true);
    };

    const handleCloseOtherPopUp = () => {
        setShowOtherPopUp(false);
    };

    const handleSaveClick = () => {
        setShowAnotherComponent(true);
        setShowPopUp(false);
        setShowOtherPopUp(false);
        setShowQr(false);
    };

    return (
        <div>
            {showQr && (
                <main className={(showPopUp || showOtherPopUp) ? "blur" : ""}>
                    <section>
                        <div className="header-div">
                            <div className="heading-div">
                                <p>Scan code</p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <SacnSeacrhInput />
                    </section>
                    <section className="qr-section">
                        <div className="qr-div">
                            <img src={qrcode} alt="" />
                        </div>
                        <div className="scan-button">
                            <button className="scanbtn" onClick={handleScanClick}>
                                Scan Barcode
                            </button>
                        </div>
                    </section>

                </main>
            )}
            {showPopUp && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        {/* Content of your pop-up */}
                        <div className="popup-container">
                            <div className="popup-header">
                                <p>Details</p>
                            </div>
                            <div className="popup-closebtn">
                                <button onClick={handleClosePopUp}><img src={closebtn} alt="" /></button>
                            </div>
                        </div>
                        {/* <div className="header-underline">
                        </div> */}
                        {/* <div className="popi">
                            <div className="popup-details-content">
                                <div className="title-label">
                                    <p>Product name & Size</p>
                                </div>
                                <div className="colon-label">
                                    <p>:</p>
                                </div>
                                <div className="value-label">
                                    <p>Maggie (L)</p>
                                </div>
                            </div>
                            <div className="popup-details-content">
                                <div className="title-label">
                                    <p>MRP</p>
                                </div>
                                <div className="colon-label">
                                    <p>:</p>
                                </div>
                                <div className="value-label">
                                    <p>1000</p>
                                </div>
                            </div>
                            <div className="popup-details-content">
                                <div className="title-label">
                                    <p>Rate</p>
                                </div>
                                <div className="colon-label">
                                    <p>:</p>
                                </div>
                                <div className="value-label">
                                    <p>1025</p>
                                </div>
                            </div>
                            <div className="popup-details-content">
                                <div className="title-label">
                                    <p>Discount</p>
                                </div>
                                <div className="colon-label">
                                    <p>:</p>
                                </div>
                                <div className="value-label">
                                    <p>3%</p>
                                </div>
                            </div>
                            <div className="popup-details-content">
                                <div className="title-label">
                                    <p>Quantity</p>
                                </div>
                                <div className="colon-label">
                                    <p>:</p>
                                </div>
                                <div className="value-label-qty">
                                    <p className="qty">04</p>
                                </div>
                            </div>
                        </div> */}
                        
                            <DetailsBillTable />
                        
                        <div  className="quantity-section">
                            <div className="qty-label">
                                <p>Quantity</p>
                            </div>
                            <div className="value-qty">
                                <p className="qty">04</p>
                            </div>
                        </div>
                        <div className="button-section">
                            <button className="savebtn">Done</button>
                            <button className="nextbtn" onClick={handleNextClick}>Next</button>
                        </div>
                    </div>
                </div>
            )}

            {showOtherPopUp && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        {/* Content of your other pop-up */}
                        <div className="popup-container">
                            <div className="popup-header">
                                <p>Next Details</p>
                            </div>
                            <div className="popup-closebtn">
                                <button onClick={handleCloseOtherPopUp}>
                                    <img src={closebtn} alt="" />
                                </button>
                            </div>
                        </div>
                        <div className="popi">
                            <div className="popup-details-content">
                                <div className="title-label">
                                    <p>Product name & Size</p>
                                </div>
                                <div className="colon-label">
                                    <p>:</p>
                                </div>
                                <div className="value-label">
                                    <p>Maggie (L)</p>
                                </div>
                            </div>
                            <div className="popup-details-content">
                                <div className="title-label">
                                    <p>MRP</p>
                                </div>
                                <div className="colon-label">
                                    <p>:</p>
                                </div>
                                <div className="value-label">
                                    <p>1000</p>
                                </div>
                            </div>
                            <div className="popup-details-content">
                                <div className="title-label">
                                    <p>Rate</p>
                                </div>
                                <div className="colon-label">
                                    <p>:</p>
                                </div>
                                <div className="value-label">
                                    <p>1025</p>
                                </div>
                            </div>
                            <div className="popup-details-content">
                                <div className="title-label">
                                    <p>Discount</p>
                                </div>
                                <div className="colon-label">
                                    <p>:</p>
                                </div>
                                <div className="value-label">
                                    <p>3%</p>
                                </div>
                            </div>
                            <div className="popup-details-content">
                                <div className="title-label">
                                    <p>Quantity</p>
                                </div>
                                <div className="colon-label">
                                    <p>:</p>
                                </div>
                                <div className="value-label-qty">
                                    <p className="qty">04</p>
                                </div>
                            </div>
                        </div>
                        <div className="button-section">
                            <button className="savebtn-next" onClick={handleSaveClick}>Save</button>
                        </div>
                    </div>
                </div>
            )}

            {showAnotherComponent && (
                <VerifyComponent />
            )}
        </div>
    );
};

export default ScanQrComponent;
