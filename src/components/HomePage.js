import React from 'react';
import BlogPostListContainer from '../containers/BlogPostListContainer';
import AddBlogPost from '../containers/AddBlogPost';
import PageHeader from '../containers/PageHeader';
import UserProfile from '../containers/UserProfile';
import { connect } from 'react-redux';

const HomePage = ({ currentUserNickname }) => (
  <>
    <PageHeader />
    <UserProfile nickname={currentUserNickname} />
    <AddBlogPost />
    <BlogPostListContainer />
  </>
)

const mapStateToProps = (state) => ({
  currentUserNickname: state.currentUser
})

export default connect(mapStateToProps)(HomePage);
