import React from "react";

function ArticleList(props) {
  return (
    <div>
      {props.articles &&
        props.articles.map((article) => {
          return (
            <div key={article.id}>
              <br></br>
              <h3>
                <strong>{article.title}</strong>
              </h3>
              <p>{article.body}</p>
              <p>Created At: {article.date} </p>
              <br></br>
            </div>
          );
        })}
    </div>
  );
}

export default ArticleList;
