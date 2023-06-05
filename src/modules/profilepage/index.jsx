import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.css"
import Container from "react-bootstrap/esm/Container"
import { Row, Col, Card } from "react-bootstrap"
import profile from "../../asserts/images/profile.svg"
import btn from "../../asserts/images/button-arrow.svg"
import back from "../../asserts/images/back-arrow.svg"
const Profilepage = () => {
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
            <div className="back-btn">
                <button onClick={handleBackClick}><img src={back} className="back-arrow" />Back</button>
            </div>
            <section className="registration-page">
                <Container>
                    <div className="registration-card">
                        <div className="registration-content">
                            <form onSubmit={submitForm}>

                                {/* <div>
                                    <img src={profile} />
                                </div> */}
                                <div className="profile-image-container">
                                    {image ? (
                                        <img src={profile} alt="Profile" className="profile-image" />
                                    ) : (
                                        <div className="profile-image-none">None</div>
                                    )}
                                    <input
                                        type="file"
                                        id="imageUpload"
                                        className="profile-image-upload"
                                        onChange={handleImageUpload}
                                    />
                                    <label htmlFor="imageUpload" className="profile-image-edit">
                                        Edit
                                    </label>
                                </div>

                                <Row>
                                    <div>
                                        <div className="form-section">
                                            <div className="form-label">
                                                <label for="name">Name </label>
                                            </div>
                                            <div>
                                                <input name="name" id="Name" type="text" placeholder='Enter Name' className="input-field-registration" />
                                            </div>
                                        </div>
                                        <div className="form-section">
                                            <div className="form-label">
                                                <label for="email">Email </label>
                                            </div>
                                            <div>
                                                <input name="email" id="Email" type="text" placeholder='Enter email' className="input-field-registration" />
                                            </div>
                                        </div>
                                        <div className="form-section">
                                            <div className="form-label">
                                                <label for="address">Address </label>
                                            </div>
                                            <div>
                                                <input name="address" id="Address" type="text" placeholder='Enter address' className="input-field-registration" />
                                            </div>
                                        </div>
                                        <div className="form-section">
                                            <div className="form-label">
                                                <label htmlFor="gender">Gender</label>
                                            </div>
                                            <div>
                                                <select id="gender" value={gender} onChange={handleGenderChange} className="input-field-registration">
                                                    <option value="">Select</option>
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-section">
                                            <div className="form-label">
                                                <label for="gstin">GSTIN </label>
                                            </div>
                                            <div>
                                                <input name="gstin" id="Gstin" type="text" placeholder='Enter GSTIN number' className="input-field-registration" />
                                            </div>
                                        </div>
                                        <div className="form-submit">
                                            <div className="button-wrapper">
                                                <button>
                                                    Submit <img src={btn} className="submit-arrow" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Row>
                            </form>
                        </div>
                    </div>
                    <div className="registration-card">
                        <Card className="d-none d-md-block">
                            <form onSubmit={submitForm}>

                                {/* <div>
                                    <img src={profile} />
                                </div> */}
                                <div className="profile-image-container">
                                    {image ? (
                                        <img src={profile} alt="Profile" className="profile-image" />
                                    ) : (
                                        <div className="profile-image-none">None</div>
                                    )}
                                    <input
                                        type="file"
                                        id="imageUpload"
                                        className="profile-image-upload"
                                        onChange={handleImageUpload}
                                    />
                                    <label htmlFor="imageUpload" className="profile-image-edit">
                                        Edit
                                    </label>
                                </div>

                                <Row>
                                    <div className="form-data">
                                        <div className="form-section">
                                            <div className="form-label">
                                                <label for="name">Name </label>
                                            </div>
                                            <div>
                                                <input name="name" id="Name" type="text" placeholder='Enter Name' className="input-field-registration" />
                                            </div>
                                        </div>
                                        <div className="form-section">
                                            <div className="form-label">
                                                <label for="email">Email </label>
                                            </div>
                                            <div>
                                                <input name="email" id="Email" type="text" placeholder='Enter email' className="input-field-registration" />
                                            </div>
                                        </div>
                                        <div className="form-section">
                                            <div className="form-label">
                                                <label for="address">Address </label>
                                            </div>
                                            <div>
                                                <input name="address" id="Address" type="text" placeholder='Enter address' className="input-field-registration" />
                                            </div>
                                        </div>
                                        <div className="form-section">
                                            <div className="form-label">
                                                <label htmlFor="gender">Gender</label>
                                            </div>
                                            <div>
                                                <select value={gender} onChange={handleGenderChange} className="input-field-registration-select">
                                                    <option value="" className="option">Select</option>
                                                    <option value="male" className="option">Male</option>
                                                    <option value="female" className="option">Female</option>
                                                    <option value="other" className="option">Other</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-section">
                                            <div className="form-label">
                                                <label for="gstin">GSTIN </label>
                                            </div>
                                            <div>
                                                <input name="gstin" id="Gstin" type="text" placeholder='Enter GSTIN number' className="input-field-registration" />
                                            </div>
                                        </div>
                                        <div className="form-submit">
                                            <div className="button-wrapper">
                                                <button>
                                                    Submit <img src={btn} className="submit-arrow" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Row>
                            </form>
                        </Card>
                    </div>
                </Container>
            </section>
        </main>
    )
}
export default Profilepage