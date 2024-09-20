import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
const Login = () => {
  const [errormsg, setErrorMsg] = useState("");
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    e.preventDefault();
    setUserData((prev) => {
      console.log(e.target.value);
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (userData.email !== "" && userData.password !== "") {
      setErrorMsg("");
      console.log("success");
    } else if (userData.email === "" || userData.password === "") {
      setErrorMsg("some field are missing");
    }
  };
  return (
    <section className="login">
      <div className="login-container">
        <h3>LoginForm</h3>
        <form className="login-form">
          {errormsg && (
            <p className="form__error-message">This is an error message</p>
          )}
          <label htmlFor="email">UserName:</label>
          <input
            name="email"
            type="text"
            value={userData.email}
            onChange={handleInput}
            autoFocus
          ></input>
          <label htmlFor="password">Password:</label>
          <input
            name="password"
            type="text"
            value={userData.password}
            onChange={handleInput}
          ></input>
          <label htmlFor="remind">Remind me:</label>
          <input name="remind" type="checkbox"></input>
          <div className="login-button">
            <div className="btn-login">
              <button onClick={handleLogin}>Login</button>
            </div>
            <span>
              Forget<a href="">Password</a>
            </span>
            <div>
              <small>Don't have an account?</small>
              <button>
                <Link to="/register">Register</Link>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
