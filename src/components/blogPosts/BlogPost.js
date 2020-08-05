import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { GUEST_USER } from '../../js_modules/initUsers';
import ImagePolyfill from '../common/ImagePolyfill';

const BlogPost = ({
  post,
  userPicture,
  visiblePostHeightProp,
  currentUserNickname,
  likePost,
  deletePost
}) => {

  const [isTextOpened, setIsTextOpened] = useState(false);
  const [isTextOverflow, setIsTextOverflow] = useState(false);
  const [visiblePostHeight, setVisiblePostHeight] = useState(visiblePostHeightProp);

  const likePostHandler = () => {
    if (currentUserNickname !== GUEST_USER) {
      likePost(post.id, currentUserNickname);
    }
  }

  const postTextRef = useRef(null);
  const postTextWrapperRef = useRef(null);

  useEffect(() => {

    const heightDifference = visiblePostHeightProp - postTextRef.current.clientHeight;

    if (heightDifference < 0 && heightDifference > -30) {

      setVisiblePostHeight(postTextRef.current.clientHeight);
      setIsTextOverflow(false);

    } else {

      const textOverflow = visiblePostHeightProp < postTextRef.current.clientHeight;
      setIsTextOverflow(textOverflow);

      //on window resize
      setVisiblePostHeight(visiblePostHeightProp);
    }


  }, [visiblePostHeightProp])

  //change wrapper max height 
  const openPostText = () => {
    const textHeight = postTextRef.current.clientHeight + 'px';
    let wrapperStyle = postTextWrapperRef.current.style;

    wrapperStyle.maxHeight = wrapperStyle.maxHeight !== textHeight ?
      textHeight : visiblePostHeight + 'px';

    setIsTextOpened(!isTextOpened)
  }

  return (

    <div className='post'>

      <div className='post__header'>
        <Link to={`/${post.authorNickname}`} className="post-author">
          <ImagePolyfill
            src={userPicture}
            alt={post.authorNickname}
            imgClass='post-author__picture user-small-picture'
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
        <div className={'post__text-wrapper'} ref={postTextWrapperRef} style={{ maxHeight: visiblePostHeight + 'px' }}>
          <p className={'post__text'} ref={postTextRef}>
            {post.text}
          </p>
        </div>

        {isTextOverflow &&
          <button
            onClick={openPostText}
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
  visiblePostHeightProp: PropTypes.number,
  currentUserNickname: PropTypes.string,
  likePost: PropTypes.func,
  deletePost: PropTypes.func
}

export default React.memo(BlogPost);