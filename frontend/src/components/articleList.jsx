import React from "react";

function ArticleList(props) {
  const editArticle = (article) => {
    props.editArticle(article);
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
                  <button className="btn btn-danger">Delete</button>
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
