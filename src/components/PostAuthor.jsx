import React from "react";
import { Link } from "react-router-dom";
import Avator from "../image/avator.jpg";
const PostAuthor = () => {
  return (
    <div className="postauthor">
      <Link to={`/posts/users/sdfsdf`}>
        <div className="post__author-avator">
          <img src={Avator} alt="images" />
        </div>
        <div className="post__author-detail">
          <h5>By:ramya</h5>
          <small>(justnow)</small>
        </div>
      </Link>
    </div>
  );
};

export default PostAuthor;
