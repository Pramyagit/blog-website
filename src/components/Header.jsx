import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isShow, setIsShow] = useState(window.innerWidth > 800 ? true : false);
  const handleClose = () => {
    if (window.innerWidth < 800) {
      setIsShow(false);
    } else {
      setIsShow(true);
    }
  };
  return (
    <nav className=" container nav__container">
      <Link to="/" onClick={handleClose}>
        logo
      </Link>
      {isShow && (
        <ul className="nav__menu">
          <li>
            <Link to="/profile/sdfsdf" onClick={handleClose}>
              Ramya -Profile
            </Link>
          </li>
          <li>
            <Link to="/myposts/:id" onClick={handleClose}>
              DashBoard
            </Link>
          </li>
          <li>
            <Link to="/create" onClick={handleClose}>
              CreatePost
            </Link>
          </li>
          <li>
            <Link to="/authors" onClick={handleClose}>
              Authors
            </Link>
          </li>
          <li>
            <Link to="/logout" onClick={handleClose}>
              Logout
            </Link>
          </li>
        </ul>
      )}
      <button
        className="nav__toggle nav__toggle-btn"
        onClick={() => setIsShow(!isShow)}
      >
        {isShow ? <AiOutlineClose /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Header;
