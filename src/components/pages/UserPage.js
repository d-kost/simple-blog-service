import React from 'react';
import BlogPostListContainer from '../../containers/BlogPostListContainer';
import AddBlogPost from '../../containers/AddBlogPost';
import PageHeaderContainer from '../../containers/PageHeaderContainer';
import UserProfile from '../../containers/UserProfile';
import { useParams } from 'react-router-dom';
import { USER_FILTER } from '../../js_modules/blogPostListFilters';

const UserPage = () => {
  const { nickname } = useParams();

  return (
    <>
      <PageHeaderContainer />
      <UserProfile nickname={nickname} />
      <AddBlogPost userNickname={nickname}/>
      <BlogPostListContainer filter={USER_FILTER} userNickname={nickname}/>
    </>
  )
}

export default UserPage;