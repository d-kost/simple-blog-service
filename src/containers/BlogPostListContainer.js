import { connect } from 'react-redux';
import BlogPostList from '../components/BlogPostList';
import { ALL, USER_FILTER } from '../js_modules/blogPostListFilters';

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
  blogPosts: filterBlogPosts(state.blogPosts, ownProps.user, ownProps.filter),
  users: state.users
});

export default connect(mapStateToProps)(BlogPostList);