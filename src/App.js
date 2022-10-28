import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import AllArticles from './Components/AllArticles';
import Home from './Pages/Home';
import Topics from './Components/Topics';
import Comments from './Components/Comments';
import Users from './Components/Users';
import NonExistingPage from './Pages/NonExistingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import ArticlesByTopic from "./Components/ArticlesByTopic";
import IndividualArticle from "./Components/IndividualArticle";

function App() {
  return (
    <BrowserRouter>
      <Container className="App " style={{ 'background-color': '#DBDAE0', "min-height": "100vh" }}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}>  </Route>
          <Route path='/articles' element={<AllArticles />}>  </Route>
          <Route path='/topics' element={<Topics />}>  </Route>
          <Route path='/topics/:topic' element={<ArticlesByTopic />}>  </Route>
          <Route path='/articles/:article_id' element={<IndividualArticle />}>  </Route>
          <Route path='/articles/:article_id/comments' element={<Comments />}>  </Route>
          <Route path='/users' element={<Users />}>  </Route>
          <Route path="*" element={<NonExistingPage />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
