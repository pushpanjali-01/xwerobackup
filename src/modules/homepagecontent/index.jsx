import React from "react";
import Header from "../../components/Header";
import Pageheader from "../../components/pageheader";
import MobileNavbar from "../../components/mobilenavbar";
import Inventory from "../inventory";

const HomepageContent = () => {
    return (
        <main>
            <Header />
            <Pageheader />
            <MobileNavbar />
            <Inventory/>
        </main>
    )
}
export default HomepageContent