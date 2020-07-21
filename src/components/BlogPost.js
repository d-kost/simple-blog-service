import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BlogPost = ({ post, userPicture, visiblePostVolume }) => {

  const [isTextOpened, setIsTextOpened] = useState(false);

  const splitText = (text) => {
    const visibleText = text.slice(0, visiblePostVolume);
    const invisibleText = text.slice(visiblePostVolume);
    return [visibleText, invisibleText];
  }

  let [visibleText, invisibleText] = splitText(post.text);

  return (

    <div className='post'>

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

      <div className='post__content'>
        <p className='post__text'>
          {visibleText}
          <span
            className={isTextOpened ? 'post__hiding-text post__hiding-text--shown' : 'post__hiding-text'}
          >
            {invisibleText}
          </span>
          
          {post.text !== visibleText &&
            <button
              onClick={() => setIsTextOpened(!isTextOpened)}
              className='post__open-btn'
            >
              {isTextOpened ? 'Hide text' : 'Show more'}
            </button>}

        </p>
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