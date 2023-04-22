import React, { useState } from 'react';
import { Link } from "react-router-dom";

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
    <section className="sign_in_area bg_color sec_pad">
      <div className="container">
        <div className="sign_info">
          <div className="row">
            <div className="col-lg-5">
              <div className="sign_info_content">
                <h3 className="f_p f_600 f_size_24 t_color3 mb_40">
                  First time here?
                </h3>
                <h2 className="f_p f_400 f_size_30 mb-30">
                  Join us now and be a<br />{" "}
                  <span className="f_700">lifesaver</span>
                </h2>
                <Link
                  exact
                  title="donorSignUp"
                  className="nav-link"
                  to="/DonorSignUp"
                >
                  <button
                    type="submit"
                    className="btn_three sign_btn_transparent"
                  >
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="login_info">
                <h2 className="f_p f_600 f_size_24 t_color3 mb_40">Sign In</h2>
                <form
                  onSubmit={handleSubmit}
                  className="login-form sign-in-form"
                >
                  <div className="form-group text_box">
                    <label className="f_p text_c f_400">Email or Name</label>
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="lifesource@gmail.com"
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
                  <div className="extra mb_20">
                    <div className="checkbox remember">
                      <label>
                        <input
                          type="checkbox"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                        />{" "}
                        Keep me Signed in
                      </label>
                    </div>
                    <div className="forgotten-password">
                      <a href="/#">Forgot Password?</a>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <button type="submit" className="btn_three">
                      Sign In
                    </button>
                    <Link
                      exact
                      title="donorSignIn"
                      className="nav-link"
                      to="/DonorSignIn"
                    >
                      <span className="f_p">Sign in as Donor</span>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DonorSignInForm;
