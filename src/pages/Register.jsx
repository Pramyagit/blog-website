import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [errormsg, setErrorMsg] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const handleInput = (e) => {
    e.preventDefault();
    setUserData((prev) => {
      console.log(e.target.value);
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    if (
      userData.name !== "" &&
      userData.email !== "" &&
      userData.password !== "" &&
      userData.password2 !== ""
    ) {
      setErrorMsg("");
      console.log("success");
    } else if (
      userData.name === "" ||
      userData.email === "" ||
      userData.password === "" ||
      userData.password2 === ""
    ) {
      setErrorMsg("some field are missing");
    }
  };
  return (
    <section className="register">
      <div className="container register-container">
        <h2>signup</h2>
        <form action="post" className="form register__form">
          {errormsg && (
            <p className="form__error-message">This is an error message</p>
          )}
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="name"
            name="name"
            value={userData.name}
            onChange={handleInput}
          ></input>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="email"
            name="email"
            value={userData.email}
            onChange={handleInput}
          ></input>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="password"
            name="password"
            value={userData.password}
            onChange={handleInput}
          ></input>
          <label htmlFor="password2">Password2</label>
          <input
            type="password"
            placeholder="password2"
            name="password2"
            value={userData.password2}
            onChange={handleInput}
          ></input>
          <div className="register-button">
            <div className=" btn-register">
              <button>
                <Link to="/register" onClick={handleRegister}>
                  Register
                </Link>
              </button>
            </div>
            <div>
              <small>
                Already you have an Account?
                <button>
                  <Link to="/login">Login</Link>
                </button>
              </small>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
