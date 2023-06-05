import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.css"
import Container from "react-bootstrap/esm/Container"
import { Row, Col, Card } from "react-bootstrap"
import profile from "../../asserts/images/profile.svg"
import btn from "../../asserts/images/button-arrow.svg"
import back from "../../asserts/images/back-arrow.svg"
import addusericon from "../../asserts/images/addusericon.svg"
const AddUser = () => {
    const history = useHistory();
    const handleBackClick = () => {
        history.goBack();
    };
    // const gotohomepage = () =>{
    //     history.push('/homepage')
    // }
    const submitForm = () => {
        history.push('/homepage')
        // alert()
    }
    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const [image, setImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImage(reader.result);
            console.log(setImage)
        };
    };

    const [gender, setGender] = useState("");
    return (
        <main>
            {/* <div className="back-btn">
                <button onClick={handleBackClick}><img src={back} className="back-arrow" />Back</button>
            </div> */}
            <div className="adduserpage">
                <div className="adduserpage-centered-text">
                    <div className="adduserpage-heading">
                        <img src={addusericon} alt="" />Add User
                    </div>
                </div>
            </div>
            <section className="adduser-page">
                <Container>
                    <div className="adduser-card">
                        <div className="adduser-content">
                            <form onSubmit={submitForm}>

                                {/* <div>
                                    <img src={profile} />
                                </div> */}
                                <div className="adduser-profile-image-container">
                                    {image ? (
                                        <img src={profile} alt="Profile" className="adduser-profile-image" />
                                    ) : (
                                        <div className="adduser-profile-image-none">None</div>
                                    )}
                                    <input
                                        type="file"
                                        id="imageUpload"
                                        className="adduser-profile-image-upload"
                                        onChange={handleImageUpload}
                                    />
                                    <label htmlFor="imageUpload" className="adduser-profile-image-edit">
                                        Edit
                                    </label>
                                </div>

                                <Row>
                                    <div>
                                        <div className="adduser-form-section">
                                            <div className="adduser-form-label">
                                                <label for="name">Name </label>
                                            </div>
                                            <div>
                                                <input name="name" id="Name" type="text" placeholder='Enter Name' className="adduser-input-field-registration" />
                                            </div>
                                        </div>
                                        <div className="adduser-form-section">
                                            <div className="adduser-form-label">
                                                <label for="email">Email </label>
                                            </div>
                                            <div>
                                                <input name="email" id="Email" type="text" placeholder='Enter email' className="adduser-input-field-registration" />
                                            </div>
                                        </div>
                                        <div className="adduser-form-section">
                                            <div className="adduser-form-label">
                                                <label for="address">Address </label>
                                            </div>
                                            <div>
                                                <input name="address" id="Address" type="text" placeholder='Enter address' className="adduser-input-field-registration" />
                                            </div>
                                        </div>
                                        <div className="adduser-form-section">
                                            <div className="adduser-form-label">
                                                <label htmlFor="gender">Gender</label>
                                            </div>
                                            <div>
                                                <select id="gender" value={gender} onChange={handleGenderChange} className="adduser-input-field-registration">
                                                    <option value="">Select</option>
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="adduser-form-section">
                                            <div className="adduser-form-label">
                                                <label for="gstin">GSTIN </label>
                                            </div>
                                            <div>
                                                <input name="gstin" id="Gstin" type="text" placeholder='Enter GSTIN number' className="adduser-input-field-registration" />
                                            </div>
                                        </div>
                                        <div className="adduser-form-submit">
                                            <div className="adduser-button-wrapper">
                                                <button>
                                                    Add <img src={btn} className="adduser-submit-arrow" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Row>
                            </form>
                        </div>
                    </div>
                    <div className="adduser-registration-card">
                        <Card className="d-none d-md-block">
                            <form onSubmit={submitForm}>

                                {/* <div>
                                    <img src={profile} />
                                </div> */}
                                <div className="adduser-profile-image-container">
                                    {image ? (
                                        <img src={profile} alt="Profile" className="adduser-profile-image" />
                                    ) : (
                                        <div className="adduser-profile-image-none">None</div>
                                    )}
                                    <input
                                        type="file"
                                        id="imageUpload"
                                        className="adduser-profile-image-upload"
                                        onChange={handleImageUpload}
                                    />
                                    <label htmlFor="imageUpload" className="adduser-profile-image-edit">
                                        Edit
                                    </label>
                                </div>

                                <Row>
                                    <div className="adduser-form-data">
                                        <div className="adduser-form-section">
                                            <div className="adduser-form-label">
                                                <label for="name">Name </label>
                                            </div>
                                            <div>
                                                <input name="name" id="Name" type="text" placeholder='Enter Name' className="adduser-input-field-registration" />
                                            </div>
                                        </div>
                                        <div className="adduser-form-section">
                                            <div className="adduser-form-label">
                                                <label for="email">Email </label>
                                            </div>
                                            <div>
                                                <input name="email" id="Email" type="text" placeholder='Enter email' className="adduser-input-field-registration" />
                                            </div>
                                        </div>
                                        <div className="adduser-form-section">
                                            <div className="adduser-form-label">
                                                <label for="address">Address </label>
                                            </div>
                                            <div>
                                                <input name="address" id="Address" type="text" placeholder='Enter address' className="adduser-input-field-registration" />
                                            </div>
                                        </div>
                                        <div className="adduser-form-section">
                                            <div className="adduser-form-label">
                                                <label htmlFor="gender">Gender</label>
                                            </div>
                                            <div>
                                                <select value={gender} onChange={handleGenderChange} className="adduser-input-field-registration-select">
                                                    <option value="" className="option">Select</option>
                                                    <option value="male" className="option">Male</option>
                                                    <option value="female" className="option">Female</option>
                                                    <option value="other" className="option">Other</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="adduser-form-section">
                                            <div className="adduser-form-label">
                                                <label for="gstin">GSTIN </label>
                                            </div>
                                            <div>
                                                <input name="gstin" id="Gstin" type="text" placeholder='Enter GSTIN number' className="adduser-input-field-registration" />
                                            </div>
                                        </div>
                                    </div>
                                </Row>
                            </form>
                        </Card>
                    </div>
                </Container>
            </section>
            <div className="adduser-form-submit">
                <div className="adduser-button-wrapper">
                    <button>
                        Add <img src={btn} className="adduser-submit-arrow" />
                    </button>
                </div>
            </div>
        </main>
    )
}
export default AddUser