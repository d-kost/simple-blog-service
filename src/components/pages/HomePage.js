import React from 'react';
import BlogPostListContainer from '../../containers/BlogPostListContainer';
import PageHeader from '../../containers/PageHeader';
import { ALL } from '../../js_modules/blogPostListFilters';

const HomePage = () => (
  <>
    <PageHeader />
    <BlogPostListContainer filter={ALL} user=''/>
  </>
)

export default HomePage;
