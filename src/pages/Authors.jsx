import React, { useState } from "react";
import avator from "../image/avator.jpg";
import avator1 from "../image/2.jpg";
import avator2 from "../image/3.jpg";
import avator3 from "../image/4.jpg";
import { Link } from "react-router-dom";

const authorsData = [
  { id: 1, avator: avator, name: "ramya", posts: 3 },
  { id: 2, avator: avator1, name: "ram", posts: 0 },
  { id: 3, avator: avator2, name: "raju", posts: 1 },
  { id: 4, avator: avator3, name: "gopi", posts: 2 },
];
const Authors = () => {
  const [authors, setAuthors] = useState(authorsData);
  return (
    <section className="author">
      {authors.length > 0 ? (
        <div className="author">
          {authors.map(({ id, avator, name, posts }) => {
            return (
              <Link to={`/posts/users/${id}`} key={id}>
                <div className="author-post">
                  <div className="avator-image">
                    <img src={avator} alt="" />
                  </div>
                  <div className="author-detail">
                    <h3>{name}</h3>
                    <p>{posts}post</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <h2>no posts avilable</h2>
      )}
    </section>
  );
};

export default Authors;
