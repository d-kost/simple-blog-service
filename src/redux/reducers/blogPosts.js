import initBlogPosts from '../../js_modules/initBlogPosts';

const blogPosts = (state = initBlogPosts, action) => {
  switch (action.type) {
    case 'ADD_BLOGPOST':
      return [
        ...state,
        {
          id: action.id,
          author: action.author,
          text: action.text
        }
      ];

    default:
      return state;
  }
}

export default blogPosts;