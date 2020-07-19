import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const BlogPost = ({ post, userPicture, visiblePostVolume }) => {

  let history = useHistory();

  const goToUserPage = () => {
    const userPagePath = `/${post.authorNickname}`;
    history.push(userPagePath);
  };

  const splitText = (text) => {
    const visibleText = text.slice(0, visiblePostVolume);
    const invisibleText = text.slice(visiblePostVolume);
    return [visibleText, invisibleText];
  }

  let [visibleText, invisibleText] = splitText(post.text);

  return (

    <div className='post'>

      <div className='post-author'>
        <img
          src={userPicture}
          alt={post.authorNickname}
          className='post-author__picture'
          onClick={goToUserPage}
        />

        <p className='post-author__nickname' onClick={goToUserPage}>
          {post.authorNickname}
        </p>
      </div>

      <div className='post__content'>
        {/* <div className='post__text'>{post.text}</div> */}
        <div className='post__text'>
          {visibleText}
          <div className='post__text post__text--hidden'>{invisibleText}</div>
        </div>
      </div>

    </div>
  )
}

BlogPost.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    authorNickname: PropTypes.string,
    text: PropTypes.string
  }),
  userPicture: PropTypes.string,
  visiblePostVolume: PropTypes.number
}

export default React.memo(BlogPost);