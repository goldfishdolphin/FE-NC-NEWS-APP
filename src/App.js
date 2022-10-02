import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Articles from './Pages/Articles';
import Home from './Pages/Home';
import TopicsPage from './Pages/TopicsPage';
import ArticlesByTopicPage from './Pages/ArticlesByTopicPage';
import Article from './Pages/Article';
import Comments from './Components/Comments';
import Users from './Components/Users';
import { useContext } from 'react';
import { UserContext } from './contexts/User';
import NonExistingPage from './Pages/NonExistingPage';

function App() {
  const value = useContext(UserContext);
  return (
    <BrowserRouter>
      <div className="App">
        <button onClick={() => { value.setLoggedInUser(null); }}>Log out</button>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}>  </Route>
          <Route path='/articles' element={<Articles />}>  </Route>
          <Route path='/topics' element={<TopicsPage />}>  </Route>
          <Route path='/topics/:slug' element={<ArticlesByTopicPage />}>  </Route>
          <Route path='/articles/:article_id' element={<Article />}>  </Route>
          <Route path='/articles/:article_id/comments' element={<Comments />}>  </Route>
          <Route path='/users' element={<Users />}>  </Route>
          <Route path="*" element={<NonExistingPage />}></Route>
          {/* <Route path="/articles/notAnId" element={<NonExistingArticle />}></Route> */}
        </Routes>
      </div>
    </BrowserRouter >
  );
}

export default App;
