import React from "react";
import APIService from "../APIServices";

function ArticleList(props) {
  const editArticle = (article) => {
    props.editArticle(article);
  };
  const deleteArticle = (article) => {
    APIService.DeleteArticle(article.id).then(() => {
      props.deleteArticle(article);
    });
  };

  return (
    <div>
      {props.articles &&
        props.articles.map((article) => {
          return (
            <div key={article.id}>
              <br></br>
              <hr></hr>
              <h3>
                <strong>{article.title}</strong>
              </h3>
              <p>{article.body}</p>
              <p>Created At: {article.date} </p>
              <div className="row">
                <div className="col-md-1">
                  <button
                    className="btn btn-primary"
                    onClick={() => editArticle(article)}
                  >
                    Update
                  </button>
                </div>
                <div className="col">
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteArticle(article)}
                  >
                    Delete
                  </button>
                </div>
              </div>
              <br></br>
              <hr></hr>
            </div>
          );
        })}
    </div>
  );
}

export default ArticleList;
