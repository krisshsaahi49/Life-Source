import React, { useState } from "react";
import "../assets/recipientMain.css";
import RecipientProfile from "./RecipientProfile";

const RecipientMainPage = () => {
  const [bloodGroup, setBloodGroup] = useState(""); // State for selected blood group
  const [donors, setDonors] = useState([]); // State for storing donor names

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
    alert(`Request sent to ${donorName} for blood donation.`);
  };

  return (
    <div id="donor" className="wrapper">
      <RecipientProfile />
      <h2>Recipient Page</h2>
      <label htmlFor="bloodGroup">Select Blood Group:</label>
      <select
        id="bloodGroup"
        value={bloodGroup}
        onChange={handleBloodGroupChange}
      >
        <option value="">--Select Blood Group--</option>
        <option value="A+">A+</option>
        <option value="B+">B+</option>
        <option value="O+">O+</option>
        <option value="AB+">AB+</option>
        <option value="A-">A-</option>
        <option value="B-">B-</option>
        <option value="O-">O-</option>
        <option value="AB-">AB-</option>
      </select>
      <button onClick={handleSearchClick}>Search</button>
      <div>
        <h3>Donors with {bloodGroup} blood group:</h3>
        <ul>
          {donors.map((donor, index) => (
            <li key={index}>
              {donor.firstName} {donor.lastName}
              <button onClick={() => handleRequestClick(donor)}>Request</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipientMainPage;
