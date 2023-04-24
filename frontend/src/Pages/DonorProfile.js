import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/profile.css";

const DonorProfile = () => {
  const [isOpen, setIsOpen] = useState(false); // State variable to track if dropdown is open or closed

  // Function to handle logout click
  const handleLogoutClick = () => {
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
            <Link exact title="changePassword" className="profile-button" to='/ChangePassword'>
                <button type="submit">Change Password</button>
            </Link>
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
