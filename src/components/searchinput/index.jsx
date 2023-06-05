import React from "react";
import searchlogo from "../../asserts/images/searchlogo.svg"
import barlogo from "../../asserts/images/barlogo.svg"
import menuicon from "../../asserts/images/menuicon.svg"
import "./style.css"
function SearchInput(props) {

    return (
        <main>
            <section className="stock-search-section">
                <div className="search-input">
                    <div className="search-left">
                        <img src={searchlogo} alt="" className="search-img" />
                        <input type="text" placeholder="Search here" {...props} className="inputfield" />
                    </div>
                    <div className="search-right">
                        <img src={barlogo} alt="" className="bar-img" />
                    </div>
                </div>
                <div><button className="menu-icon-stock"><img src={menuicon} alt="" /></button></div>
            </section>
        </main>
    );
}
export default SearchInput