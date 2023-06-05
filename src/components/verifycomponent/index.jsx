import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import BillTableVerify from "../billtableverify";
import DetailsComponent from "../detailscomponent";

const VerifyComponent = () => {
//   const navigate = useHistory();
  const [showDetails, setShowDetails] = useState(false);

//   const navigateToDetailsPage = () => {
//     navigate.push('/detailscomponent');
//   };

  const handleVerifyClick = () => {
    setShowDetails(true);
  };

  return (
    <main>
      {!showDetails ? (
        <section>
          <div className="verify">
            <div className="verify-centered-text">
              <div className="verify-heading">
                <p>Verify</p>
              </div>
            </div>
          </div>
          <BillTableVerify />
          <section className="verify-section">
            <div className="verify-container">
              <button className="verifybtn" onClick={handleVerifyClick}>
                Verify
              </button>
            </div>
          </section>
        </section>
      ) : (
        <DetailsComponent />
      )}
    </main>
  );
};

export default VerifyComponent;
