import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const RecipientSignUpForm = () => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [userName, setUsername] = useState("");
  const [emailID, setEmail] = useState("");
  const [contactNo, setContact] = useState(0);
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassowrd] = useState("");
  const [gender, setGender] = useState("");
  const [bloodgroup, setBloodgroup] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send POST request to backend API to create new user
    fetch("http://localhost:8000/recipient-signup", {
      method: "POST",
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
        age,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <section className="sign_in_area bg_color sec_pad">
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="sign_info">
            <div className="row">
              <div className="col-lg-5">
                <div className="sign_info_content">
                  <h3 className="f_p f_600 f_size_24 t_color3 mb_40">
                    Already have an account?
                  </h3>
                  <h2 className="f_p f_400 f_size_30 mb-30">
                    Login now and
                    <br /> be part of our <br />
                    <span className="f_700">amazing</span> community
                  </h2>
                  <Link exact title="Faq" className="nav-link" to="/SignIn">
                    <button
                      type="submit"
                      className="btn_three sign_btn_transparent"
                    >
                      Sign In
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="login_info">
                  <h2 className="f_p f_600 f_size_24 t_color3 mb_40">
                    Sign Up
                  </h2>
                  <form action="#" className="login-form sign-in-form">
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
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group text_box">
                      <label className="f_p text_c f_400">Username</label>
                      <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group text_box">
                      <label className="f_p text_c f_400">Email Address</label>
                      <input
                        type="text"
                        value={emailID}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="saasland@gmail.com"
                      />
                    </div>
                    <div className="form-group text_box">
                      <label className="f_p text_c f_400">Contact Number</label>
                      <input
                        type="text"
                        value={contactNo}
                        onChange={(e) => setContact(e.target.value)}
                        placeholder="999-999-9999"
                      />
                    </div>
                    <div className="form-group text_box">
                      <label className="f_p text_c f_400">Password</label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="******"
                      />
                    </div>
                    <div className="form-group text_box">
                      <label className="f_p text_c f_400">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        value={confirmpassword}
                        onChange={(e) => setConfirmpassowrd(e.target.value)}
                        placeholder="******"
                      />
                    </div>
                    <div className="form-group text_box">
                      <label className="f_p text_c f_400">Gender</label>
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={gender === "male"}
                        onChange={(e) => setGender(e.target.value)}
                      />
                      <label>Male</label>
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={gender === "female"}
                        onChange={(e) => setGender(e.target.value)}
                      />
                      <label>Female</label>
                    </div>
                    <div className="form-group text_box">
                      <label className="f_p text_c f_400">
                        Required Blood Group
                      </label>
                      <input
                        type="text"
                        value={bloodgroup}
                        onChange={(e) => setBloodgroup(e.target.value)}
                        placeholder="Example: A+"
                      />
                    </div>
                    <div className="form-group text_box">
                      <label className="f_p text_c f_400">Age</label>
                      <input
                        type="text"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="40"
                      />
                    </div>

                    <div className="extra mb_20">
                      <div className="checkbox remember">
                        <label>
                          <input type="checkbox" /> I agree to terms and
                          conditions of this website
                        </label>
                      </div>

                      <div className="forgotten-password">
                        <a href="/#">Forgot Password?</a>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <button type="submit" className="btn_three">
                        Sign Up
                      </button>
                      <div className="social_text d-flex ">
                        <div className="lead-text">Or Sign up Using</div>
                        <ul className="list-unstyled social_tag mb-0">
                          <li>
                            <a href="/#">
                              <i className="ti-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/#">
                              <i className="ti-twitter-alt"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/#">
                              <i className="ti-google"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};
export default RecipientSignUpForm;
