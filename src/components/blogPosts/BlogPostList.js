import React, { useState, useEffect } from 'react';
import BlogPost from './BlogPost';
import PropTypes from 'prop-types';
import '../../sass/BlogPosts.sass';

const BlogPostList = ({ blogPosts, users, currentUserNickname, likePost }) => {

  function getPostVolume() {
    const width = window.innerWidth;

    //breakpoints: 320px, 480px, 767px
    //max width of app = 1500px
    if (width <= 320) {
      return 150;
    }

    if (width <= 480 && width > 320) {
      return 250;
    }

    if (width <= 767 && width > 480) {
      return 400;
    }

    if (width > 767) {
      return 550;
    }

  }

  const [visiblePostVolume, setVisiblePostVolume] = useState(getPostVolume());

  useEffect(() => {
    function handleResize() {

      const postVolume = getPostVolume();
      if (postVolume !== visiblePostVolume) {

        setVisiblePostVolume(postVolume);
      }
      
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

  }, [visiblePostVolume]);



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
          visiblePostVolume={visiblePostVolume}
          currentUserNickname={currentUserNickname}
          likePost={likePost}
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
  likePost: PropTypes.func
}

export default BlogPostList;