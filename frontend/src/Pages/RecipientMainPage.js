import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import '../assets/recipientMain.css'
import Profile from "./Profile";

const RecipientMainPage = () => {
  const [bloodGroup, setBloodGroup] = useState(""); // State for selected blood group
  const [donors, setDonors] = useState([]); // State for storing donor names

  // Function to handle blood group selection
  const handleBloodGroupChange = (event) => {
    setBloodGroup(event.target.value);
  };

  // Function to handle search button click
  const handleSearchClick = () => {
    // Here you can implement your logic to fetch donor names with the selected blood group from a database or API
    // For demonstration purposes, I am setting a dummy array of donor names
    const dummyDonors = ["Donor1", "Donor2", "Donor3"]; 
    setDonors(dummyDonors);
  };

  // Function to handle request button click
  const handleRequestClick = (donorName) => {
    // Here you can implement your logic to send a request to the selected donor for blood donation
    // For demonstration purposes, I am showing an alert with the donor name
    alert(`Request sent to ${donorName} for blood donation.`);
  };

  return (
    <div id="donor" className="wrapper">
        <Profile/>
       <h2>Recipient Page</h2>
      <label htmlFor="bloodGroup">Select Blood Group:</label>
      <select id="bloodGroup" value={bloodGroup} onChange={handleBloodGroupChange}>
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
          {donors.map((donorName, index) => (
            <li key={index}>
              {donorName}
              <button onClick={() => handleRequestClick(donorName)}>Request</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipientMainPage;
