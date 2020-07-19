import initUsers from './initUsers';

const initBlogPosts = [
  {
    id: 0,
    authorNickname: initUsers[1].nickname,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
      'Vestibulum sit amet pulvinar purus. Cras molestie quis nibh et hendrerit. Morbi.'
  },
  {
    id: 1,
    authorNickname: initUsers[2].nickname,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
      'Duis purus ligula, tempus suscipit ligula a, gravida euismod nisl. Mauris consectetur.'
  }
]

export default initBlogPosts;