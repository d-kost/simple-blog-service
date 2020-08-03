import React, { useState, useEffect } from 'react';
import BlogPost from './BlogPost';
import PropTypes from 'prop-types';
import '../../sass/BlogPosts.sass';

const BlogPostList = ({ blogPosts, users, currentUserNickname, likePost, deletePost }) => {

  function getPostVolume() {
    const width = window.innerWidth;

    //breakpoints: 320px, 480px, 767px
    //max width of app = 1500px
    if (width <= 320) {
      return 85;
    }

    if (width <= 480 && width > 320) {
      return 85;
    }

    if (width <= 767 && width > 480) {
      return 130;
    }

    if (width > 767) {
      return 150;
    }

  }

  const [visiblePostHeight, setVisiblePostHeight] = useState(getPostVolume());

  useEffect(() => {
    function handleResize() {

      const postVolume = getPostVolume();
      if (postVolume !== visiblePostHeight) {

        setVisiblePostHeight(postVolume);
      }
      
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

  }, [visiblePostHeight]);



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
          visiblePostHeightProp={visiblePostHeight}
          currentUserNickname={currentUserNickname}
          likePost={likePost}
          deletePost={deletePost}
        />
      ))}
    </div>
  )

}

BlogPostList.propTypes = {
  blogPosts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      authorNickname: PropTypes.string,
      likes: PropTypes.arrayOf(PropTypes.string),
      text: PropTypes.string
    })
  ),
  currentUserNickname: PropTypes.string,
  likePost: PropTypes.func,
  deletePost: PropTypes.func
}

export default BlogPostList;