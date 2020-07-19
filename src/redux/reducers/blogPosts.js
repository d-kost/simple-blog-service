import initBlogPosts from '../../js_modules/initBlogPosts';
import { ADD_BLOGPOST } from '../constants';

const blogPosts = (state = initBlogPosts, action) => {
  switch (action.type) {
    case ADD_BLOGPOST:
      return [
        {
          id: action.id,
          authorNickname: action.authorNickname,
          text: action.text
        },
        ...state        
      ];

    default:
      return state;
  }
}

export default blogPosts;