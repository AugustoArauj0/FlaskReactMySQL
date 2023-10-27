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
  const createdData = (article) => {
    const createdArticle = [...articles, article]
    setArticles(createdArticle)
  }
  const deleteArticle = (article) => {
    const deletedArticle = articles.filter(myArticle => {
      if (myArticle.id === article.id) {
        return false
      }
      else {
        return true
      }
    })
    setArticles(deletedArticle)
  }
  const openForm = () => {
    setEditedArticle({ title: '', body: '' })
  }

  return (
    <div className='App'>
      <div className='row'>
        <div className='col'>
          <h1>Flask-ReactJS Fullstack Application</h1>
        </div>
        <div className='col'>
          <button className='btn btn-success' onClick={openForm}>Create New Post</button>
        </div>
      </div>

      <ArticleList articles={articles} editArticle={editArticle} deleteArticle={deleteArticle}></ArticleList>
      {editedArticle ? <ArticleForm article={editedArticle} updatedData={updatedData} createdData={createdData} ></ArticleForm> : null}

    </div>
  );
}

export default App;
