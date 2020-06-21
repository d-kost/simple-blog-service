import React from 'react';
import './App.css';
import BlogPostListContainer from './containers/BlogPostListContainer';
import AddBlogPost from './containers/AddBlogPost';
import PageHeader from './containers/PageHeader';

function App() {
  return (
    <div className="App">
      <PageHeader/>
      <AddBlogPost />
      <BlogPostListContainer />
    </div>
  );
}

export default App;
