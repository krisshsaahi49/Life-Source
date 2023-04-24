import React, { useState } from 'react';
import "../assets/forgotPassword.css";

const ForgotPassword = () => {
  const [username, setUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic for username, new password, and confirm password
    if (username === '' || newPassword === '' || confirmPassword === '') {
      setErrorMessage('Please fill in all fields.');
    } else if (newPassword !== confirmPassword) {
      setErrorMessage('New password and confirm password must match.');
    } else {
      // Make a POST request to your backend API with the form data
      fetch('http://localhost:8000/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          newPassword: newPassword
        })
      })
      .then((response) => {
        if (response.status === 200) {
          // Show success message or redirect to login page
          alert('Password updated successfully. Please login with your new password.');
          window.location = '/login';
        } else {
          // Show error message
          setErrorMessage('Failed to update password. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  };

  return (
    <section>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>New Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {errorMessage && <div>{errorMessage}</div>}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ForgotPassword;
