import React from "react";
import searchlogo from "../../asserts/images/searchlogo.svg"
import barlogo from "../../asserts/images/barlogo.svg"
import menuicon from "../../asserts/images/menuicon.svg"
import "./style.css"
function SacnSeacrhInput(props) {

    return (
        <main>
            <section className="scan-search-section">
                <div className="scan-search-input">
                    <div className="scan-search-left">
                        <img src={searchlogo} alt="" className="scan-search-img" />
                        <input type="text" placeholder="Search products" {...props} className="inputfield" />
                    </div>
                    {/* <div className="search-right">
                        <img src={barlogo} alt="" className="bar-img" />
                    </div> */}
                </div>
                {/* <div><button className="menu-icon-stock"><img src={menuicon} alt="" /></button></div> */}
            </section>
        </main>
    );
}
export default SacnSeacrhInput