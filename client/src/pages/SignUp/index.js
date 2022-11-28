import React from "react";

const SignUp = () => {
  return (
    <div className="login-form-wrapper">
      <h4 className="form__header">Signup</h4>
      <form id="signup-form" className="form">
        <div className="input__wrapper">
          <label className="p3 form__label">Username</label>
          <input className="form__input" type="username"></input>
        </div>
        <div className="input__wrapper">
          <label label className="p3 form__label">
            Email
          </label>
          <input className="form__input " type="email"></input>
        </div>
        <div className="input__wrapper">
          <label label className="p3 form__label">
            Confirm Email
          </label>
          <input className="form__input " type="email"></input>
        </div>
        <div className="input__wrapper">
          <label label className="p3 form__label">
            Password
          </label>
          <input className="form__input " type="password"></input>
        </div>
        <div className="input__wrapper">
          <label label className="p3 form__label">
            Confirm Password
          </label>
          <input className="form__input " type="password"></input>
        </div>
        <p className="p2 form__text">
          Already have an account?
          <a className="form__loginLink" href="/login">
            Login
          </a>
        </p>
        <button type="submit" className="btn btn-form btn-tertiary">
          Create Account
        </button>
      </form>{" "}
    </div>
  );
};

export default SignUp;
