import catAvatar from '../images/cat.png';
import user1Avatar from '../images/user1.png';
import user2Avatar from '../images/user2.png';
export const GUEST_USER = 'GUEST_USER';

const initUsers = [
  {
    nickname: 'cat',
    firstName: 'Viktor',
    lastName: 'Cat',
    picture: catAvatar
    // picture: 'https://api.adorable.io/avatars/285/cat.png'
  },
  {
    nickname: 'user1',
    firstName: 'Mary',
    lastName: 'Smith',
    picture: user1Avatar
  },
  {
    nickname: 'user2',
    firstName: 'Anna',
    lastName: 'Johnson',
    picture: user2Avatar
  }
]

export default initUsers;