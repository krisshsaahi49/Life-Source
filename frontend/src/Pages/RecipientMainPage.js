import React, { useState } from "react";
import "../assets/recipientMain.css";
import RecipientProfile from "./RecipientProfile";

const RecipientMainPage = (props) => {
  const [bloodGroup, setBloodGroup] = useState(""); // State for selected blood group
  const [donors, setDonors] = useState([]); // State for storing donor names
  const { email } = props.location.state??'';
  

  // Function to handle blood group selection
  const handleBloodGroupChange = (event) => {
    setBloodGroup(event.target.value);
  };

  // Function to handle search button click
  const handleSearchClick = () => {
    // fetch donor list with the selected blood group from the backend
    fetch(process.env.REACT_APP_API_ENDPOINT + `/donor-list/${bloodGroup}`)
      .then((response) => response.json())
      .then((data) => {
        setDonors(data.donors);
        console.log(data.donors);
      })
      .catch((error) => {
        console.error("Error fetching donor list:", error);
      });
  };

  // Function to handle request button click
  const handleRequestClick = (donorName) => {
    // For demonstration purposes, I am showing an alert with the donor name
    alert(`Request mail sent to ${donorName} for blood donation.`);
  };

  return (
    <div className="recipient-container">
      <RecipientProfile email={email}/>
      <div className="recipient-search-container">
        <h2 className="recipient-search-header">Find a Donor</h2>
        <div className="recipient-search-input-container">
          <label htmlFor="bloodGroup" className="recipient-search-label">
            Select Blood Group:
          </label>
          <select
            id="bloodGroup"
            value={bloodGroup}
            onChange={handleBloodGroupChange}
            className="recipient-search-select"
          >
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="B+">B+</option>
            <option value="O+">O+</option>
            <option value="AB+">AB+</option>
            <option value="A-">A-</option>
            <option value="B-">B-</option>
            <option value="O-">O-</option>
            <option value="AB-">AB-</option>
          </select>
          <button onClick={handleSearchClick} className="recipient-search-button">
            Search
          </button>
        </div>
        <div className="recipient-donors-container">
          <h3 className="recipient-donors-header">Donors with {bloodGroup} blood group:</h3>
          <ul className="recipient-donors-list">
            {donors.map((donor, index) => (
              <li className="recipient-donors-item" key={index}>
               {donor.firstName}{donor.lastName}
                <button
                  className="recipient-donor-button"
                  onClick={() => handleRequestClick(donor.firstName)}
                >
                  Request
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipientMainPage;

