import React from 'react';
import BlogPostListContainer from '../../containers/BlogPostListContainer';
import PageHeaderContainer from '../../containers/PageHeaderContainer';
import { ALL } from '../../js_modules/blogPostListFilters';

const HomePage = () => (
  <>
    <PageHeaderContainer />
    <BlogPostListContainer filter={ALL} user=''/>
  </>
)

export default HomePage;
