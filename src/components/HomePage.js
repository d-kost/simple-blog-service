import React from 'react';
import BlogPostListContainer from '../containers/BlogPostListContainer';
import AddBlogPost from '../containers/AddBlogPost';
import PageHeader from '../containers/PageHeader';
import UserProfile from '../containers/UserProfile';

const HomePage = () => (
  <>
    <PageHeader />
    <UserProfile nickname='cat' />
    <AddBlogPost />
    <BlogPostListContainer />
  </>
)

export default HomePage;
