import React from "react";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";

const PostItem = ({
  id,
  postID,
  thumbnail,
  category,
  title,
  description,
  authorID,
}) => {
  const shortDesc =
    description.length > 50 ? description.substr(0, 50) + "..." : description;
  const shortCategory =
    category.length > 10 ? category.substr(0, 10) + "..." : category;

  return (
    <article className="post">
      <div className="post_art" key={id}>
        <div className="post__thumbnail">
          <img src={thumbnail}></img>
        </div>
        <div className="post__content">
          <Link to={`/posts/${postID}`}>
            <h3>{title}</h3>
          </Link>
        </div>
        <p>{shortDesc}</p>
        <p>{authorID}</p>
        <div className="postauthors">
          <PostAuthor />
          <Link
            to={`/posts/categories/${category}`}
            className="btn btn-category"
          >
            {shortCategory}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PostItem;
