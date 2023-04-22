import React, { useState } from 'react';

const DonorSignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false); // Add a state for Remember Me checkbox

  const handleSubmit = (e) => {
    e.preventDefault();
    // Make a POST request to your backend API with the form data
    fetch('http://localhost:8000/donor-login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password,
        remember_me: rememberMe // Include the state of Remember Me checkbox in the request
      })
    })
    .then((response) => {
        if (response.status === 200) {
          // Store user session data in localStorage
          localStorage.setItem("isLoggedIn", true);
          window.location = "/DonorMainPage";
        } else {
          alert("Invalid Login details");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <label>
        <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
        Remember Me
      </label>
      <button type="submit">Sign In</button>
    </form>
  );
}

export default DonorSignInForm;
