import React from 'react';
import BlogPost from './BlogPost';
import PropTypes from 'prop-types';
import '../sass/BlogPosts.sass';

const BlogPostList = ({ blogPosts }) => {

  return (
    <div className='blog-posts'>
      {blogPosts.map(post => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  )

}

BlogPostList.propTypes = {
  blogPosts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      author: PropTypes.shape({
        nickname: PropTypes.string,
        picture: PropTypes.string
      }),
      text: PropTypes.string
    })
  )
}

export default BlogPostList;