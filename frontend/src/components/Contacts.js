import React, { Component } from "react";

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      formSubmitted: false,
      formError: false,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = this.state;
    const formData = { name, email, subject, message };
    fetch(process.env.REACT_APP_API_ENDPOINT + "/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          // Handle successful form submission here
          // For example, show a success message to the user
          console.log("Form submitted successfully");
          this.setState({ formSubmitted: true, formError: false });
          this.resetForm();
        } else {
          // Handle error in form submission here
          // For example, show an error message to the user
          console.error("Form submission failed");
          this.setState({ formSubmitted: false, formError: true });
        }
      })
      .catch((error) => {
        console.error("Form submission failed:", error);
        // Handle error in form submission here
        // For example, show an error message to the user
        this.setState({ formSubmitted: false, formError: true });
      });
  };

  resetForm = () => {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  render() {
    const { formSubmitted, formError } = this.state;
    return (
      <section className="contact_info_area sec_pad bg_color">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="contact_info_item">
                <h6 className="f_p f_size_20 t_color3 f_500 mb_20">
                  Office Address
                </h6>
                <p className="f_400 f_size_15">
                  2101 E Coliseum Blvd, Fort Wayne, IN 46805
                </p>
              </div>
              <div className="contact_info_item">
                <h6 className="f_p f_size_20 t_color3 f_500 mb_20">
                  Contact Info
                </h6>
                <p className="f_400 f_size_15">
                  <span className="f_400 t_color3">Phone:</span>{" "}
                  <a href="tel:3024437488">+1 260 481 6100</a>
                </p>
                <p className="f_400 f_size_15">
                  <span className="f_400 t_color3">Fax:</span>{" "}
                  <a href="tel:3024437488">+1 260 481 6100</a>
                </p>
                <p className="f_400 f_size_15">
                  <span className="f_400 t_color3">Email:</span>{" "}
                  <a href="mailto:saasland@gmail.com">
                    lifesource.purdue@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="contact_form col-lg-9">
              <h2 className="f_p f_size_22 t_color3 f_600 l_height28 mb_40">
                Leave a Message
              </h2>
              <form
                onSubmit={this.handleSubmit}
                className="contact_form_box"
                method="post"
                id="contactForm"
              >
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group text_box">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        value={this.state.name}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group text_box">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group text_box">
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        value={this.state.subject}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group text_box">
                      <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="10"
                        placeholder="Message"
                        value={this.state.message}
                        onChange={this.handleChange}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn_three">
                  Send Message
                </button>
                {formSubmitted && (
                  <p className="form-message-success">
                    Your message succesfully sent!
                  </p>
                )}
                {formError && (
                  <p className="form-message-error">Failed to send message</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contacts;
