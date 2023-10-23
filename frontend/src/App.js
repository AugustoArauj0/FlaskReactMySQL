import './App.css';
import { useEffect, useState } from "react";
import ArticleList from './components/articleList';

function App() {

  const [articles, setArticles] = useState([]);
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

  return (
    <div className="App">
      <h1>Flask-ReactJS Fullstack Application</h1>
      <ArticleList articles={articles}></ArticleList>
    </div>
  );
}

export default App;
