import React, { useState } from "react";
import "../assets/changePassword.css";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your logic for changing password
    // You can use the values of currentPassword, newPassword, and confirmPassword
    // For demonstration purposes, you can show an alert with the updated password
    alert(`Password updated successfully. New password: ${newPassword}`);
    // Clear the form fields
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="change-password-container">
      <h2 className="change-password-title">Change Password</h2>
      <form onSubmit={handleSubmit} className="change-password-form">
        <div className="form-group current-password-group">
          <label htmlFor="currentPassword" className="current-password-label">Current Password</label>
          <input
            type="password"
            id="currentPassword"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="current-password-input"
          />
        </div>
        <div className="form-group new-password-group">
          <label htmlFor="newPassword" className="new-password-label">New Password</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="new-password-input"
          />
        </div>
        <div className="form-group confirm-password-group">
          <label htmlFor="confirmPassword" className="confirm-password-label">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="confirm-password-input"
          />
        </div>
        <button type="submit" className="change-password-submit-button">Save</button>
      </form>
    </div>
  );
};

export default ChangePassword;
