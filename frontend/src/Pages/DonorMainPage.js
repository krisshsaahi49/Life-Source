import React, { useState } from "react";

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
    <div className="wrapper">
      <h2>Donor Page</h2>
      {requests.length > 0 ? (
        <div>
          <h3>Incoming Requests:</h3>
          <ul>
            {requests.map((recipientName, index) => (
              <li key={index}>
                {recipientName}
                <button onClick={() => handleAcceptRequest(recipientName)}>Accept</button>
                <button onClick={() => handleRejectRequest(recipientName)}>Reject</button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No incoming requests.</p>
      )}
      <button onClick={() => handleIncomingRequest("Recipient1")}>
        Simulate Incoming Request
      </button>
    </div>
  );
};

export default DonorMainPage;
