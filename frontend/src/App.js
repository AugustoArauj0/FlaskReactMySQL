import './App.css';
import { useEffect, useState } from "react";
import ArticleList from './components/articleList';
import ArticleForm from './components/articleForm';

function App() {

  const [articles, setArticles] = useState([]);
  const [editedArticle, setEditedArticle] = useState(null);
  useEffect(() => {
    fetch('http://localhost:5000/get', {
      'method': 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => setArticles(res))
      .catch(err => console.log(err))

  }, [])

  const editArticle = (article) => {
    setEditedArticle(article)
  }
  const updatedData = (article) => {
    const newArticle = articles.map(myArticle => {
      if (myArticle.id === article.id) {
        return article
      }
      else {
        return myArticle
      }
    })
    setArticles(newArticle)
  }

  return (
    <div className="App">
      <h1>Flask-ReactJS Fullstack Application</h1>
      <ArticleList articles={articles} editArticle={editArticle}></ArticleList>
      {editedArticle ? <ArticleForm article={editedArticle} updatedData={updatedData}></ArticleForm> : null}

    </div>
  );
}

export default App;
