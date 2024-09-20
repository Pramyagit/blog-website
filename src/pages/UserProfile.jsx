import React, { useState } from "react";
import { Link } from "react-router-dom";
import Avator from "../image/avator.jpg";
const UserProfile = () => {
  const [err, setErr] = useState("");
  const [avator, setAvator] = useState(Avator);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleProfile = (e) => {
    e.preventDefault();
    if (name !== "" && email !== "" && newPassword !== "") {
      setErr("");
      console.log("success");
    } else if (name === "" || email === "" || newPassword === "") {
      setErr("some field are missing");
    }
  };
  return (
    <section className="user-profile">
      <div className="container profile-container">
        <Link to={`myposts/sdfsdf`} className="btn btn-post">
          MyPosts
        </Link>
        <div className="profile-details">
          <div className="avator__wrapper">
            <div className="profile-avator">
              <img src={avator} alt="profile image" />
            </div>
            <form action="" className="avator__form">
              <input
                type="file"
                accept="jpg,png,jpeg"
                id="avator"
                name="avator"
                onChange={(e) => setAvator(e.target.files[0])}
              ></input>
              <label htmlFor="avator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#5f6368"
                >
                  <path d="M167-120q-21 5-36.5-10.5T120-167l40-191 198 198-191 40Zm191-40L160-358l458-458q23-23 57-23t57 23l84 84q23 23 23 57t-23 57L358-160Zm317-600L261-346l85 85 414-414-85-85Z" />
                </svg>
              </label>
            </form>
            <button className="profile__avator-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
              >
                <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z" />
              </svg>
            </button>
          </div>
          <h1>Ramya</h1>
          {/* form to update user details */}
          <form action="" className="form profile__form">
            {err && <p className="form__error-message">{err}</p>}
            <input
              type="text "
              placeholder="fullname"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email "
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password "
              placeholder="currentpassword"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <input
              type="password "
              placeholder="newpassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
              type="password "
              placeholder="confirm-password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
            <button
              type="submit"
              className="btn primary"
              onClick={handleProfile}
            >
              UpdateDetail
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
