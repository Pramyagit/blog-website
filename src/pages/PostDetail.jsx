import React, { useState } from "react";
import PostAuthor from "../components/PostAuthor";
import { Link } from "react-router-dom";
import thumbnail from "../image/tiger.jpg";
import { dummy } from "../data";
const PostDetail = () => {
  const [post, setPost] = useState(dummy);
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor />
          <div className="post-detail__buttons">
            <Link to={`/posts/werwer/edit`} className="btn sm primary">
              Edit
            </Link>
            <Link to={`/posts/werwer/delete`} className="btn sm primary">
              Delete
            </Link>
          </div>
        </div>
        <h1>This post title</h1>
        <div className="post-detail__thumbnail post__thumbnail">
          <img src={thumbnail} alt="images" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          quibusdam minima debitis, ipsum praesentium maiores fugit pariatur
          illo facilis itaque, aliquid perspiciatis ad molestiae architecto
          aspernatur rerum veniam exercitationem eveniet.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia minima
          neque officia reprehenderit, fugit perspiciatis nam placeat nulla
          nobis iste.
        </p>
      </div>
    </section>
  );
};

export default PostDetail;
