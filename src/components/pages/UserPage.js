import React from 'react';
import BlogPostListContainer from '../../containers/BlogPostListContainer';
import AddBlogPost from '../../containers/AddBlogPost';
import PageHeader from '../../containers/PageHeader';
import UserProfile from '../../containers/UserProfile';
import { useParams } from 'react-router-dom';

const UserPage = () => {
  const { nickname } = useParams();

  return (
    <>
      <PageHeader />
      <UserProfile nickname={nickname} />
      <AddBlogPost />
      <BlogPostListContainer />
    </>
  )
}

export default UserPage;