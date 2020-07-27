import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addBlogPost } from '../redux/actions/index';
import PropTypes from 'prop-types';
import '../sass/AddBlogPost.sass';

const AddBlogPost = ({ dispatch, currentUser, isOwnProfile }) => {

  const [text, setText] = useState('');
  // const { dispatch } = props;

  const handleTextChange = event => {
    setText(event.target.value);
  }

  const handleFormSubmit = event => {
    event.preventDefault();

    if (!text.trim().length) {
      return;
    }

    if (currentUser) {
      dispatch(addBlogPost(text, currentUser.nickname));
      setText('');
    }
  }

  return (
    isOwnProfile &&
    // <div className='post-form-wrapper'>
      <form onSubmit={handleFormSubmit} className='post-form'>
        <textarea
          type='text'
          value={text}
          onChange={handleTextChange}
          className='post-form__textarea'
          placeholder='Type here...'
        />
        <button className='post-form__submit'>Post</button>
      </form>
    // </div>
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