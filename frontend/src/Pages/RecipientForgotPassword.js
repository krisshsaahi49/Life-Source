import React, { useState } from 'react';
import "../assets/forgotPassword.css";

const RecipientForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [new_password, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add validation logic for username, new password, and confirm password
    if (email === '' || new_password === '' || confirmPassword === '') {
      setErrorMessage('Please fill in all fields.');
    } else if (new_password !== confirmPassword) {
      setErrorMessage('New password and confirm password must match.');
    } else {
      try {
        // Make a POST request to your backend API with the form data
        const response = await fetch(process.env.REACT_APP_API_ENDPOINT + "/recipient-forgot-password", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: email,
            new_password: new_password
          })
        });

        if (response.status === 200) {
          // Show success message or redirect to login page
          alert('Password updated successfully. Please login with your new password.');
          window.location = '/login';
        } else {
          // Show error message
          setErrorMessage('Failed to update password. Please try again.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <section>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>New Password:</label>
          <input
            type="password"
            value={new_password}
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

export default RecipientForgotPassword;
