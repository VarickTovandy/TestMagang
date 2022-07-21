import { useState, useEffect } from "react";
import React from 'react'
import './Form.css'

function Form() {
    const initialValues = { username: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
    };
  
    useEffect(() => {
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
      }
    }, [formErrors]);
    const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.username) {
        errors.username = "This field is required.";
      }
      if (!values.email) {
        errors.email = "Email is required!";
      } else if (!regex.test(values.email)) {
        errors.email = "Invalid email format!";
      }
      if (!values.box) {
        errors.box = "This field is required.";
      }
      return errors;
    };
  
    return (
      <div className="contact">
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="ui message success">Signed in successfully</div>
        ) : (
          <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        )}
  
        <h1>CONTACT US</h1>
        <form onSubmit={handleSubmit} id="form" class="form">
            <div className="form-control">
                <label>Name</label>
                <input
                type="text"
                name="username"
                value={formValues.username}
                onChange={handleChange}
                />
                <p>{formErrors.username}</p>
            </div>

            <div className="form-control">
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
            <p>{formErrors.email}</p>
            </div>

            <div className="form-control">
              <label>Message</label>
              <textarea
                type="textarea"
                name="box"
                value={formValues.box}
                onChange={handleChange}
              />
              <p>{formErrors.box}</p>
            </div>

            <button>Submit</button>
        </form>
      </div>
    );
}

export default Form