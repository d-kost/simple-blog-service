import React from 'react';
import BlogPost from './BlogPost';
import PropTypes from 'prop-types';

const BlogPostList = ({ blogPosts }) => {

  return (
    blogPosts.map(post => (
      <BlogPost key={post.id} post={post} />
    ))
  )


}

BlogPostList.propTypes = {
  blogPosts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      author: PropTypes.string,
      text: PropTypes.string
    })
  )
}

export default BlogPostList;