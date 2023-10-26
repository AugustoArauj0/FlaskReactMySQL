import React, { useState, useEffect } from "react";
import APIService from "../APIServices";

function ArticleForm(props) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    setTitle(props.article.title);
    setBody(props.article.body);
  }, [props.article]);

  const updateArticle = () => {
    APIService.UpdateArticle(props.article.id, { title, body }).then((res) =>
      props.updatedData(res)
    );
  };

  return (
    <div>
      {props.article ? (
        <div className="mb-3">
          <label htmlFor="title" className="title-label">
            Title
          </label>

          <br></br>
          <input
            type="text"
            className="title-input"
            placeholder="Enter a title here"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></input>
          <br></br>
          <br></br>
          <label htmlFor="body" className="body-label">
            Description
          </label>
          <br></br>
          <textarea
            rows="5"
            className="body-input"
            placeholder="Write about something"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          ></textarea>
          <br></br>
          <button className="btn btn-success mt-3" onClick={updateArticle}>
            Update Post
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default ArticleForm;
