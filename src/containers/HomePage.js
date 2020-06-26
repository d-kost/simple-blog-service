import React from 'react';
// import BlogPostListContainer from './BlogPostListContainer';
// import AddBlogPost from './AddBlogPost';
import PageHeader from './PageHeader';
// import UserProfile from './UserProfile';
import { connect } from 'react-redux';

const HomePage = () => (
  <PageHeader />
)

const mapStateToProps = (state) => ({
  currentUserNickname: state.currentUser
})

export default connect(mapStateToProps)(HomePage);
