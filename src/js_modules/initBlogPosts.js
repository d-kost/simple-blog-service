import initUsers from './initUsers';

const initBlogPosts = [
  {
    id: 0,
    author: {
      nickname: initUsers[1].nickname,
      picture: initUsers[1].picture
    },
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
      'Vestibulum sit amet pulvinar purus. Cras molestie quis nibh et hendrerit. Morbi.'
  },
  {
    id: 1,
    author: {
      nickname: initUsers[2].nickname,
      picture: initUsers[2].picture
    },
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
      'Duis purus ligula, tempus suscipit ligula a, gravida euismod nisl. Mauris consectetur.'
  }
]

export default initBlogPosts;