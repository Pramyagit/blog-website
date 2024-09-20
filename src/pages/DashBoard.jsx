import React, { useState } from "react";
import { dummy } from "../data";
import { Link } from "react-router-dom";
const DashBoard = () => {
  const [post, setPost] = useState(dummy);
  return (
    <section className="dashboard">
      {post.length > 0 ? (
        <div className="container dashboard__container">
          {post.map((post) => {
            return (
              <article key={post.id} className="dashboard__post">
                <div className="dashboard__info">
                  <div className="dashboard__thumbnail">
                    <img src={post.thumbnail} alt="" />
                  </div>
                  <h5>{post.title}</h5>
                  <div className="dashboard__action">
                    <Link to={`/posts/${post.id}`} className="btn sm">
                      view
                    </Link>
                    <Link to={`/posts/${post.id}/edit`} className="btn sm">
                      edit
                    </Link>
                    <Link to={`/posts/${post.id}/delete`} className="btn sm">
                      delete
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <h2 className="center">you have no posts yet</h2>
      )}
    </section>
  );
};

export default DashBoard;
