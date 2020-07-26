import initBlogPosts from '../../js_modules/initBlogPosts';
import { ADD_BLOGPOST, LIKE_BLOGPOST } from '../constants';

const blogPosts = (state = initBlogPosts, action) => {
  switch (action.type) {
    case ADD_BLOGPOST:
      return [
        {
          id: action.id,
          authorNickname: action.authorNickname,
          likes: action.likes,
          text: action.text
        },
        ...state
      ];

    case LIKE_BLOGPOST:
      return state.map(post => {
        if (post.id === action.postId) {

          const updatedLikes = post.likes.includes(action.userNickname) ?
            post.likes.filter(nickname => nickname !== action.userNickname) :
            [...post.likes, action.userNickname];

          // if (post.likes.includes(action.userNickname)) {
          //   updatedLikes = post.likes.filter(nickname => nickname !== action.userNickname);
          // } else {
          //   updatedLikes = [...post.likes, action.userNickname];
          // }

          return {
            id: post.id,
            authorNickname: post.authorNickname,
            likes: updatedLikes,
            text: post.text
          }
        }
        return post;
      });

    default:
      return state;
  }
}

export default blogPosts;