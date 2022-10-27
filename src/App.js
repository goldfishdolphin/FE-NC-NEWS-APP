import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import AllArticles from './Components/AllArticles';
import Home from './Pages/Home';
import TopicsPage from './Pages/TopicsPage';
import ArticlesByTopicPage from './Pages/ArticlesByTopicPage';
import Article from './Pages/Article';
import Comments from './Components/Comments';
import Users from './Components/Users';
import { useContext } from 'react';
import { UserContext } from './contexts/User';
import NonExistingPage from './Pages/NonExistingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <BrowserRouter>
      <Container className="App " style={{ 'background-color': '#DBDAE0', "min-height": "100vh" }}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}>  </Route>
          <Route path='/articles' element={<AllArticles />}>  </Route>
          <Route path='/topics' element={<TopicsPage />}>  </Route>
          <Route path='/topics/:topic' element={<ArticlesByTopicPage />}>  </Route>
          <Route path='/articles/:article_id' element={<Article />}>  </Route>
          <Route path='/articles/:article_id/comments' element={<Comments />}>  </Route>
          <Route path='/users' element={<Users />}>  </Route>
          <Route path="*" element={<NonExistingPage />}></Route>
          {/* <Route path="/articles/notAnId" element={<NonExistingArticle />}></Route> */}
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
