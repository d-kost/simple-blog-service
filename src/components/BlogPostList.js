import React from 'react';
import BlogPost from './BlogPost';
import PropTypes from 'prop-types';
import '../sass/BlogPosts.sass';

const BlogPostList = ({ blogPosts, users }) => {

  const getUserPictureByNickname = (nickname) => {
    const user = users.find(user => user.nickname === nickname);
    return user.picture;
  }

  return (
    <div className='blog-posts'>
      {blogPosts.map(post => (
        <BlogPost
          key={post.id}
          post={post}
          userPicture={getUserPictureByNickname(post.authorNickname)}
        />
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