import React from 'react';
import BlogPostListContainer from '../../containers/BlogPostListContainer';
import AddBlogPost from '../../containers/AddBlogPost';
import PageHeaderContainer from '../../containers/PageHeaderContainer';
import UserProfile from '../../containers/UserProfile';
import Page404 from './Page404';
import { useParams } from 'react-router-dom';
import { USER_FILTER } from '../../js_modules/blogPostListFilters';
import PropTypes from 'prop-types';

const UserPage = ({ users }) => {
  const { nickname } = useParams();

  const checkUserExists = () => {
    return users.some(user => user.nickname === nickname);
  }

  return (
    <>
      <PageHeaderContainer />
      {checkUserExists() ?
        <>
          <UserProfile nickname={nickname} />
          <AddBlogPost userNickname={nickname} />
          <BlogPostListContainer filter={USER_FILTER} userNickname={nickname} />
        </>
        :
        <Page404 />
      }
    </>
  )
}

UserPage.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    nickname: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    picture: PropTypes.string,
  })),
}

export default UserPage;