import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addBlogPost } from '../redux/actions/index';
import PropTypes from 'prop-types';

const AddBlogPost = ({ dispatch, currentUser, isOwnProfile }) => {

  const [text, setText] = useState('');
  // const { dispatch } = props;

  const handleTextChange = event => {
    setText(event.target.value);
  }

  const handleFormSubmit = event => {
    event.preventDefault();

    if (currentUser) {
      dispatch(addBlogPost(text, currentUser.nickname));
      setText('');
    }
  }

  return (
    isOwnProfile &&
    <form onSubmit={handleFormSubmit}>
      <textarea type='text' value={text} onChange={handleTextChange} />
      <button>Post</button>
    </form>
  )

}

AddBlogPost.propTypes = {
  currentUser: PropTypes.shape({
    nickname: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    picture: PropTypes.string
  }),
  isOwnProfile: PropTypes.bool
}

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.users.find(user => user.nickname === state.currentUserNickname),
  isOwnProfile: ownProps.userNickname === state.currentUserNickname
});

export default connect(mapStateToProps)(AddBlogPost);