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
  },
  {
    id: 2,
    authorNickname: initUsers[2].nickname,
    text: 'This is a long post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' + 
    'Pretium. Duis maximus malesuada tempus. Ut lobortis metus ut mi volutpat, vitae vehicula enim  ' + 
    'vestibulum. Proin purus massa, semper ut bibendum sit amet, euismod vel tellus. In vitae vestibulum ' + 
    'lacus. Curabitur aliquam, quam eget faucibus vulputate, orci nulla ornare sem, sit amet accumsan ' + 
    'leo leo in ipsum. Donec facilisis vestibulum turpis in ultricies. Orci varius natoque penatibus et ' + 
    'magnis dis parturient montes, nascetur ridiculus mus. \n\n' + 
    'Nulla facilisi. Cras at lorem sit amet lacus euismod malesuada in ut dui. Morbi pretium eleifend ' + 
    'nulla, id facilisis elit rhoncus non. Morbi non ligula nec erat maximus iaculis ac non nisi. ' + 
    'Pellentesque vitae lacus dapibus, tempor purus in, tempor felis. Etiam vel dui elit. Praesent ' + 
    'auctor iaculis augue, eu faucibus tellus interdum a. Phasellus laoreet nunc elit, nec suscipit arcu ' + 
    'consequat malesuada. Vestibulum laoreet tortor a erat posuere, tincidunt ultricies dolor posuere. ' + 
    'Praesent at fermentum quam. Nullam id pellentesque purus. Nam sed turpis lacinia, volutpat neque ' + 
    'blandit, luctus metus. In blandit, ipsum in consequat iaculis, eros libero mattis libero, sit amet ' + 
    'facilisis eros ex sed neque. Sed nec venenatis ante, nec vulputate tellus. Nulla sodales pharetra velit ' + 
    'et volutpat. Vestibulum neque ante, porta ut turpis volutpat, egestas venenatis purus.'
  }
]

export default initBlogPosts;