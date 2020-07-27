import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { GUEST_USER } from '../../js_modules/initUsers';

const BlogPost = ({
  post,
  userPicture,
  visiblePostVolume,
  currentUserNickname,
  likePost,
  deletePost
}) => {

  const [isTextOpened, setIsTextOpened] = useState(false);

  const splitText = (text) => {
    const visibleText = text.slice(0, visiblePostVolume);
    const invisibleText = text.slice(visiblePostVolume);
    return [visibleText, invisibleText];
  }

  let [visibleText, invisibleText] = splitText(post.text);

  const likePostHandler = () => {
    if (currentUserNickname !== GUEST_USER) {
      likePost(post.id, currentUserNickname);
    }
  }

  return (

    <div className='post'>

      <div className='post__header'>
        <Link to={`/${post.authorNickname}`} className="post-author">
          <img
            src={userPicture}
            alt={post.authorNickname}
            className='post-author__picture'
          />

          <p className='post-author__nickname'>
            {post.authorNickname}
          </p>
        </Link>
        
        {currentUserNickname === post.authorNickname &&
          <button className='post__delete-btn x-button' onClick={() => deletePost(post.id)}>
            &#10006;
          </button>}
      </div>

      <div className='post__content'>
        <p className='post__text'>
          {visibleText}
          <span
            className={isTextOpened ? 'post__hiding-text post__hiding-text--shown' : 'post__hiding-text'}
          >
            {invisibleText}
          </span>
        </p>

        {invisibleText.length !== 0 &&
          <button
            onClick={() => setIsTextOpened(!isTextOpened)}
            className='post__open-btn post-button'
          >
            {isTextOpened ? 'Hide text' : 'Show more'}
          </button>}
      </div>

      <div className='post-like'>
        <button
          className='post-like__button post-button'
          onClick={likePostHandler}
        >
          {post.likes.includes(currentUserNickname) ? 'Dislike' : 'Like'}
        </button>

        <p className='post-like__amount'>Likes: {post.likes.length}</p>
      </div>

    </div>
  )
}

BlogPost.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    authorNickname: PropTypes.string,
    likes: PropTypes.arrayOf(PropTypes.string),
    text: PropTypes.string
  }),
  userPicture: PropTypes.string,
  visiblePostVolume: PropTypes.number,
  currentUserNickname: PropTypes.string,
  likePost: PropTypes.func,
  deletePost: PropTypes.func
}

export default React.memo(BlogPost);