import React, { useState } from "react";
import a from "../../images/curve.png";
import uaeFlag from "../../images/uae_flag.png";
import "./GetAQuote.css";
import emailjs from "@emailjs/browser";
import CheckmarkAnimation from "../../assets/animations/CheckAnimation";

const GetAQuote = () => {
  const [formData, setFormData] = useState({
    request_type: "Quote",
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    service: "",
    timeSlot: "",
    message: "",
  });
  const [emailSentMessage, setEmailSentMessage] = useState("");
  const [isSending, setIsSending] = useState(false);


  const [errors, setErrors] = useState({});
  const itemsData = [
    { title: "Air Conditioning" },
    { title: "Electrical" },
    { title: "Plumbing" },
    { title: "Handyman" },
    { title: "Water Tank" },
    { title: "Pest Control" },
    { title: "Appliances Maintenance" },
    { title: "Painting" },
    { title: "Land Scaping" },
    { title: "Civil Works" },
    { title: "Facade Cleaning" },
    { title: "Elevators" },
  ];

  const handleChange = (e) => {
    setErrors({});
    const { name, value } = e.target;
    if (name === "mobile" && value !== "" && !/^\d*$/.test(value)) {
      return;
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};

    if (!formData.firstName) {
      errors.firstName = "First name is required";
    }
    if (!formData.lastName) {
      errors.lastName = "Last name is required";
    }
    if (!formData.mobile) {
      errors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      errors.mobile = "Mobile number must be 11 digits";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }
    if (!formData.service) {
      errors.service = "Service type is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSending(true)
      emailjs
        .send(
          `service_d4mj9ja`,
          `template_8hsa4xh`,
          formData,
          `XOVIdA7aJvB5bZp9i`
        )
        .then(() => {
          console.log("done");
          setFormData({
            firstName: "",
            lastName: "",
            mobile: "",
            email: "",
            service: "",
            timeSlot: "",
            message: "",
          });
          setEmailSentMessage("Email sent successfully!");
          setTimeout(() => {
            setEmailSentMessage("");
          }, 3000);
          setIsSending(false)

        })
        .catch((error) => {
          setEmailSentMessage("Failed to send email. Please try again later.");
          setTimeout(() => {
            setEmailSentMessage("");
          }, 3000);
          setIsSending(false)
        });
    }
  };

  return (
    <div className="center-container">
      {/* <img src={a} alt="Background" className="background-image" /> */}
      <div className="header-section">
        <h1 className="header-text">Get A Quote</h1>
        {!emailSentMessage && <p className="subtext">
          Looking for assistance or ready to book a service? Fill out the form
          below, and our team will get back to you in no time!
        </p>}
      </div>
      <div className={`success-message ${emailSentMessage ? "show" : ""}`}>
        {emailSentMessage}
      </div>
   {emailSentMessage ? <CheckmarkAnimation/>: <>  <div
        className="input-container mobile-input-width"
        style={{ width: "91%" }}
      >
        <div className="input-wrapper">
          <input
            type="text"
            name="firstName"
            onChange={handleChange}
            value={formData.firstName}
            className={`input-field ${errors.firstName ? "input-error" : ""}`}
            placeholder="First Name"
          />
          <span className="required-asterisk">*</span>
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            value={formData.lastName}
            name="lastName"
            onChange={handleChange}
            className={`input-field ${errors.lastName ? "input-error" : ""}`}
            placeholder="Last Name"
          />
          <span className="required-asterisk">*</span>
        </div>
      </div>
      <div
        className="input-container mobile-input-width"
        style={{ width: "91%" }}
      >
        <div className="mobile-input-container">
          <span className="flag-icon-container">
            <img src={uaeFlag} alt="UAE Flag" className="flag-icon" />
          </span>
          <div className="input-wrapper">
            <input
              type="text"
              value={formData.mobile}
              name="mobile"
              onChange={handleChange}
              className={`input-field flag-input ${
                errors.mobile ? "input-error" : ""
              }`}
              placeholder="Mobile"
              pattern="\d{1,10}"
              maxLength="10"
            />
            <span className="required-asterisk">*</span>
          </div>
        </div>
        <div className="input-wrapper">
          <input
            type="email"
            value={formData.email}
            name="email"
            onChange={handleChange}
            className={`input-field ${errors.email ? "input-error" : ""}`}
            placeholder="Email"
          />
          <span className="required-asterisk">*</span>
        </div>
      </div>
      <div className="input-container">
        <select
          className={`input-field arrow ${
            errors.firstName ? "input-error" : ""
          }`}
          style={{ zIndex: 1 }}
          name="service"
          value={formData.service}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select Type of Service
          </option>
          {itemsData.map((service) => (
            <option key={service.title} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
        <span className="custom-asterik">*</span>
        <select
          className="input-field arrow"
          style={{ zIndex: 1 }}
          name="timeSlot"
          value={formData.timeSlot}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select Time Slot
          </option>
          <option value="morning">Morning</option>
          <option value="afternoon">Afternoon</option>
          <option value="evening">Evening</option>
        </select>
      </div>
      <div className="input-container">
        <textarea
          name="message"
          className="textarea-field"
          placeholder="Your message here..."
          onChange={handleChange}
          value={formData.message}
        ></textarea>
      </div>
      <div className="input-container">
        <button
          type="submit"
          className={`submit-button ${isSending && "disabled"}`}
          onClick={handleSubmit}
          disabled={isSending}
        >
          Submit Now
        </button>
      </div></>}
    </div>
  );
};

export default GetAQuote;
