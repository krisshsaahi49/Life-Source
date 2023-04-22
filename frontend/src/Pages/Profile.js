import React from "react";
// import ProfileImage from "./ProfileImage"; // Import the component for profile image

const Profile = () => {
  // Function to handle update profile click
  const handleUpdateProfileClick = () => {
    // Implement your logic for updating profile information
    // For demonstration purposes, I am showing an alert
    alert("Update profile clicked");
  };

  // Function to handle change password click
  const handleChangePasswordClick = () => {
    // Implement your logic for changing password
    // For demonstration purposes, I am showing an alert
    alert("Change password clicked");
  };

  return (
    <div className="profile">
      {/* <ProfileImage /> Render the profile image component */}
      <div className="profile-info">
        {/* Render the profile information, such as name, email, etc. */}
        <h4>John Doe</h4>
        <p>john.doe@example.com</p>
      </div>
      <div className="profile-actions">
        {/* Render the buttons for updating profile and changing password */}
        <button onClick={handleUpdateProfileClick}>Update Profile</button>
        <button onClick={handleChangePasswordClick}>Change Password</button>
      </div>
    </div>
  );
};

export default Profile;
