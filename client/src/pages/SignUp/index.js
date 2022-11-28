import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { CREATE_USER } from "../../utils/mutations";

const SignUp = () => {
  const [formPwMatch, setFormPwMatch] = useState("");
  const [formEmailMatch, setFormEmailMatch] = useState("");
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    emailConfirm: "",
    password: "",
    passwordConfirm: "",
  });
  useEffect(() => {
    if (formState.password !== formState.passwordConfirm) {
      setFormPwMatch("The passwords do not match");
    } else {
      setFormPwMatch("");
    }
    if (formState.email !== formState.emailConfirm) {
      setFormEmailMatch("The emails do not match");
    } else {
      setFormEmailMatch("");
    }
  }, [formState]);
  console.log(formState);
  const handleChange = async (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const [createUser, { error }] = useMutation(CREATE_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      if (
        formState.password !== formState.passwordConfirm ||
        formState.email !== formState.emailConfirm
      ) {
        alert("doesnt match");
      } else {
        const { data } = await createUser({
          variables: { ...formState },
        });
        Auth.login(data.createUser.token);
      }
    } catch (e) {
      console.error(e.graphQLErrors);
      console.error(error);
    }
  };
  return (
    <div className="login-form-wrapper">
      <h4 className="form__header">Signup</h4>
      <form id="signup-form" className="form" onSubmit={handleFormSubmit}>
        <div className="input__wrapper">
          <label className="p3 form__label">Username</label>
          <input
            required
            name="username"
            className="form__input"
            type="username"
            maxLength="20"
            onChange={handleChange}
          ></input>
        </div>
        <div className="input__wrapper">
          <label className="p3 form__label">Email</label>
          <input
            required
            name="email"
            className="form__input "
            type="email"
            maxLength="30"
            onChange={handleChange}
          ></input>
        </div>
        <div className="input__wrapper">
          <label className="p3 form__label">Confirm Email</label>
          <input
            required
            name="emailConfirm"
            className="form__input "
            type="email"
            maxLength="30"
            onChange={handleChange}
          ></input>
          {formEmailMatch}
        </div>

        <div className="input__wrapper">
          <label className="p3 form__label">Password</label>
          <input
            required
            name="password"
            className="form__input "
            type="password"
            maxLength="20"
            minLength="8"
            onChange={handleChange}
          ></input>
        </div>
        <div className="input__wrapper">
          <label className="p3 form__label">Confirm Password</label>
          <input
            required
            name="passwordConfirm"
            className="form__input "
            type="password"
            minLength="8"
            onChange={handleChange}
          ></input>
          {formPwMatch}
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
