// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'
import './app.css'

// Pages/Components
import Categories from './components/Categories';
import Article from './components/Article';
import { About } from './components/About';
import Blog from './components/Blog';
import { ReadMoreArticle } from './components/ReadMoreArticle';
import CreateBlogForm from './components/CreateBlogForm';

function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap all routes in DefaultLayout */}
        <Route path="/" element={
          
          <Layout />
          }>
 <Route path="about" element={<About />} />
 <Route path="blog" element={<Blog />} />
 <Route path="ReadMoreArticle" element={<ReadMoreArticle />} />
 <Route path="post-blog"   element={ <CreateBlogForm/>} />

            
          {/* Index route => renders Categories by default */}
          <Route index element={<Categories />} />

          {/* Example route for an Article page, using a param for category */}
          <Route path="/articles/:category/:subCategory" element={<Article />} />


          {/* You can add more nested routes as needed */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
