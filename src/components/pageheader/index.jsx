import React from "react";
import { useMediaQuery } from 'react-responsive';
import "./style.css"
import profile from "../../asserts/images/profile.svg"
const Pageheader = () => {
    const isDesktop = useMediaQuery({ minWidth: 768 });
    return (
        <section>
            {isDesktop ? (
                <div className="pageheader">
                    <div className="page-heading">
                        <p>Inventory Management</p>
                    </div>

                    <div className="right-header">
                        <p className='header-title-pageheading'>Allahrakha</p>
                        <div className='profile-image-pageheader'><img src={profile} alt="" /></div>
                    </div>
                </div>
            ) :
                (
                    <div className="pageheader d-none">
                    </div>
                )}
        </section>
    )
}
export default Pageheader
