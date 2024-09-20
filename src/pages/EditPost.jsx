import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("unCategorized");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: -1 },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];
  const Post__Categories = [
    "geologist",
    "web Developer",
    "marketing Manager",
    "support",
    "Analog Circuit Design manager",
    "health coach",
    "dental hygienist",
    "Internal Auditor",
    "Human Resources Assistant ",
    "uncategory",
    "weather",
  ];
  return (
    <section className="edit-post">
      <div className="post-edit">
        <h2>Edit Post</h2>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <select
          className="select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {Post__Categories.map((cat) => (
            // console.log(cat)
            <option key={cat}>{cat}</option>
          ))}
        </select>
        <ReactQuill
          modules={modules}
          formats={formats}
          value={description}
          onChange={setDescription}
        />
        <input
          type="file"
          onChange={(e) => setThumbnail(e.target.files[0])}
          accept="jpg,png,jpeg"
        ></input>
        <button className="btn primary">Update</button>
      </div>
    </section>
  );
};

export default EditPost;
