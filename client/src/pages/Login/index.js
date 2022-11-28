import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-form-wrapper">
      <h4 className="form__header">Login</h4>
      <form id="login-form" className="form">
        <div className="input__wrapper">
          <label className="p3 form__label">Username</label>
          <input className="form__input" type="username"></input>
        </div>
        <div className="input__wrapper">
          <label label className="p3 form__label">
            Password
          </label>
          <input className="form__input " type="password"></input>
        </div>
        <button type="submit" className="btn btn-form btn-tertiary">
          Login
        </button>
      </form>{" "}
      <a className="" href="/signup">
        <button className="btn btn-outline btn-form p3">Signup</button>
      </a>
    </div>
  );
};

export default Login;
