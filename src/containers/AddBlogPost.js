import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addBlogPost } from '../redux/actions/index';
import PropTypes from 'prop-types';

const AddBlogPost = ({ dispatch, currentUser }) => {

  const [text, setText] = useState('');
  // const { dispatch } = props;

  const handleTextChange = event => {
    setText(event.target.value);
  }

  const handleFormSubmit = event => {
    event.preventDefault();

    dispatch(addBlogPost(text, currentUser.nickname));
    setText('');
  }

  return (
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
  })
}

const mapStateToProps = state => ({
  currentUser: state.users.find(user => user.nickname === state.currentUserNickname)
});

export default connect(mapStateToProps)(AddBlogPost);