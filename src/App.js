import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Articles from './Pages/Articles';
import Home from './Pages/Home';
import TopicsPage from './Pages/TopicsPage';
import ArticlesByTopicPage from './Pages/ArticlesByTopicPage';
import Article from './Pages/Article';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}>  </Route>
        <Route path='/articles' element={<Articles />}>  </Route>
        <Route path='/topics' element={<TopicsPage />}>  </Route>
        <Route path='/topics/:topic' element={<ArticlesByTopicPage />}>  </Route>
        <Route path='/articles/:article_id' element={<Article />}>  </Route>

      </Routes>




    </div>
  );
}

export default App;
