import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const BlogPost = ({ post }) => {

  let history = useHistory();

  const goToUserPage = () => {
    const userPagePath = `/${post.author.nickname}`;
    history.push(userPagePath);
  };


  return (
    <div className='post'>

      <div className='post-author'>
        <img
          src={post.author.picture}
          alt={post.author.nickname}
          className='post-author__picture'
          onClick={goToUserPage}
        />

        <p className='post-author__nickname' onClick={goToUserPage}>
          {post.author.nickname}
        </p>
      </div>

      <div className='post__content'>
        <p className='post__text'>{post.text}</p>
      </div>

    </div>
  )
}

BlogPost.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    author: PropTypes.shape({
      nickname: PropTypes.string,
      picture: PropTypes.string
    }),
    text: PropTypes.string
  })
}

export default React.memo(BlogPost);