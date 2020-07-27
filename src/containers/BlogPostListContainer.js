import { connect } from 'react-redux';
import BlogPostList from '../components/blogPosts/BlogPostList';
import { ALL, USER_FILTER } from '../js_modules/blogPostListFilters';
import { likeBlogPost, deleteBlogPost } from '../redux/actions/index';

const filterBlogPosts = (blogPosts, userNickname, filter) => {
  switch (filter) {
    case ALL:
      return blogPosts;
    case USER_FILTER:
      return blogPosts.filter(post => post.authorNickname === userNickname);
    default:
      return blogPosts;
  }
}

const mapStateToProps = (state, ownProps) => ({
  blogPosts: filterBlogPosts(state.blogPosts, ownProps.userNickname, ownProps.filter),
  users: state.users,
  currentUserNickname: state.currentUserNickname
});

const mapDispatchToProps = dispatch => ({
  likePost: (postId, userNickname) => dispatch(likeBlogPost(postId, userNickname)),
  deletePost: (postId) => dispatch(deleteBlogPost(postId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostList);