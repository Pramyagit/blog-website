import React, { useState } from "react";
import PostItem from "./PostItem";
import { dummy } from "../data";
const Posts = () => {
  const [post, setPost] = useState(dummy);
  console.log(post);
  return (
    <section className="posts">
      {post.length > 0 ? (
        <div className="posts-container">
          {post.map(
            ({ id, thumbnail, category, title, desc, authorId }) => (
              <PostItem
                key={id}
                postID={id}
                thumbnail={thumbnail}
                category={category}
                title={title}
                description={desc}
                authorID={authorId}
              />
            )
            // console.log(user.catogery)
          )}
        </div>
      ) : (
        <h2 className="center">no posts found</h2>
      )}
    </section>
  );
};
export default Posts;
