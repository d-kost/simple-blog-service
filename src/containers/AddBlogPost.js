import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addBlogPost } from '../redux/actions/index';

const AddBlogPost = ({ dispatch, currentUser }) => {

  const [text, setText] = useState('');
  // const { dispatch } = props;

  const handleTextChange = event => {
    setText(event.target.value);
  }

  const handleFormSubmit = event => {
    event.preventDefault();

    dispatch(addBlogPost(text, currentUser));
    setText('');
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <textarea type='text' value={text} onChange={handleTextChange} />
      <button>Post</button>
    </form>
  )

}

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default connect(mapStateToProps)(AddBlogPost);