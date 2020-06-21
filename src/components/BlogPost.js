import React from 'react';
import PropTypes from 'prop-types';

const BlogPost = ({ post }) => (
  <div>
    <p>{post.author}</p>
    <p>{post.text}</p>
  </div>
)

BlogPost.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    author: PropTypes.string,
    text: PropTypes.string
  })
}

export default React.memo(BlogPost);