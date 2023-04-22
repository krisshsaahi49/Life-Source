import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/profile.css";

const DonorProfile = () => {
  const [isOpen, setIsOpen] = useState(false); // State variable to track if dropdown is open or closed

  // Function to handle change password click
  const handleChangePasswordClick = () => {
    // Implement your logic for changing password
    // For demonstration purposes, you can navigate to the change password page
    // using Link or window.location.href
    // For example:
    window.location.href = "/change-password";
  };

  // Function to handle logout click
  const handleLogoutClick = () => {
    // Implement your logic for logging out
    // For demonstration purposes, you can navigate to the home page
    // using Link or window.location.href
    // For example:
    window.location.href = "/";
  };

  // Function to handle profile name click
  const handleProfileNameClick = () => {
    setIsOpen(!isOpen); // Toggle the state of isOpen
  };

  return (
    <div className="profile-container">
      {/* Render the static profile image */}
      <img
        src={"./profile-image.jpeg"}
        alt="Profile"
        className="profile-image"
        onClick={handleProfileNameClick}
      />
      <div className="profile-info">
        {/* Render the profile information, such as name, email, etc. */}
        <div className="profile-text">
          <h4
            onClick={handleProfileNameClick}
            style={{ cursor: "pointer" }}
          >
            John Doe
          </h4>
          <p>john.doe@example.com</p>
        </div>
        {isOpen && (
          <div className="profile-actions">
            {/* Render the buttons for updating profile, changing password, and logout */}
            <Link exact title="updateDonorProfile" className="profile-button" to='/UpdateDonorProfile'>
                <button type="submit">Update Profile</button>
            </Link>
            <button
              className="profile-button"
              onClick={handleChangePasswordClick}
            >
              Change Password
            </button>
            <button className="profile-button" onClick={handleLogoutClick}>
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonorProfile;