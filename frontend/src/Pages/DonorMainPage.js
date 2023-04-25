import React, { useState } from "react";
import DonorProfile from "./DonorProfile";
import "../assets/donorMain.css";

const DonorMainPage = () => {
  const [requests, setRequests] = useState([]); // State for storing incoming requests

  // Function to handle incoming request from recipient
  const handleIncomingRequest = (recipientName) => {
    // Add incoming request to the requests array
    setRequests([...requests, recipientName]);
  };

  // Function to handle accepting a request
  const handleAcceptRequest = (recipientName) => {
    // Implement your logic here to accept the request
    // For demonstration purposes, I am showing an alert with the recipient name
    alert(`Accepted request from ${recipientName}`);
    // Remove the request from the requests array
    setRequests(requests.filter(request => request !== recipientName));
  };

  // Function to handle rejecting a request
  const handleRejectRequest = (recipientName) => {
    // Implement your logic here to reject the request
    // For demonstration purposes, I am showing an alert with the recipient name
    alert(`Rejected request from ${recipientName}`);
    // Remove the request from the requests array
    setRequests(requests.filter(request => request !== recipientName));
  };

  return (
     <div id="donor" className="wrapper">
      <h2 className="donor-welcome-header">Donor Page</h2>
        <DonorProfile/>
      <h2 className="donor-page-header">Recipient Requests</h2>
      {requests.length > 0 ? (
        <div>
          <h3 className="incoming-requests-header">Incoming Requests:</h3>
          <ul className="incoming-requests-list">
            {requests.map((recipientName, index) => (
              <li key={index} className="incoming-requests-item">
                {recipientName}
                <button className="accept-button" onClick={() => handleAcceptRequest(recipientName)}>Accept</button>
                <button className="reject-button" onClick={() => handleRejectRequest(recipientName)}>Reject</button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="no-requests-text">No incoming requests.</p>
      )}
      <button className="simulate-button" onClick={() => handleIncomingRequest("Recipient1")}>
        Show Incoming Request
      </button>
    </div>
  );
};

export default DonorMainPage;
