import React, { useState, useEffect } from "react";
import '../assets/updateRecipientorDonor.css';
import { useLocation } from "react-router-dom";

const UpdateRecipientProfile = () => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [userName, setUsername] = useState("");
  const [emailID, setEmail] = useState("");
  const [contactNo, setContact] = useState(0);
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassowrd] = useState("");
  const [gender, setGender] = useState("");
  const [bloodgroup, setBloodgroup] = useState("");
  const [age, setAge] = useState(0);
  const location = useLocation();
  const email = location.state.email??'';

  useEffect(() => {
    // Fetch the user's data from the database and set the state
    const fetchData = async () => {
      const response = await fetch(process.env.REACT_APP_API_ENDPOINT +`/recipient/${email}`);
      const data = await response.json();
      setFirstname(data.firstName);
      setLastname(data.lastName);
      setUsername(data.userName);
      setEmail(data.emailID);
      setContact(data.contactNo);
      setPassword(data.password);
      setConfirmpassowrd(data.confirmpassword);
      setGender(data.gender);
      setBloodgroup(data.bloodgroup);
      setAge(data.age);
    };

    fetchData();
  }, [email]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send PUT request to backend API to update user profile
    fetch(process.env.REACT_APP_API_ENDPOINT +`/recipient/${email}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName,
        userName,
        emailID,
        contactNo,
        password,
        confirmpassword,
        gender,
        bloodgroup,
        age
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          alert("Profile updated successfully!");
        } else {
          alert("Failed to update profile.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Update Profile</h1>
      <div className="form-group text_box">
        <label className="f_p text_c f_400">Firstname</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstname(e.target.value)}
          placeholder="Name"
        />
      </div>
      <div className="form-group text_box">
        <label className="f_p text_c f_400">Lastname</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastname(e.target.value)}
          placeholder="Lastname"
        />
      </div>
      <div className="form-group text_box">
        <label className="f_p text_c f_400">Username</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
      </div>
      <div className="form-group text_box">
        <label className="f_p text_c f_400">Email</label>
        <input
          type="email"
          value={emailID}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
      </div>
      <div className="form-group text_box">
        <label className="f_p text_c f_400">Contact Number</label>
        <input
          type="text"
          value={contactNo}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Contact Number"
        />
      </div>
      <div className="form-group text_box">
        <label className="f_p text_c f_400">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </div>
      <div className="form-group text_box">
        <label className="f_p text_c f_400">Confirm Password</label>
        <input
          type="password"
          value={confirmpassword}
          onChange={(e) => setConfirmpassowrd(e.target.value)}
          placeholder="Confirm Password"
        />
      </div>
      <div className="form-group text_box">
        <label className="f_p text_c f_400">Gender</label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-group text_box">
        <label className="f_p text_c f_400">Blood Group</label>
        <select
          value={bloodgroup}
          onChange={(e) => setBloodgroup(e.target.value)}
        >
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
      </div>
      <div className="form-group text_box">
        <label className="f_p text_c f_400">Age</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
        />
      </div>
      <div className="form-group text_box">
        <input type="submit" value="Update Profile" className="submit_btn" />
      </div>
    </form>
  );
};

export default UpdateRecipientProfile;
