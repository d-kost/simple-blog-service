import { connect } from 'react-redux';
import BlogPostList from '../components/BlogPostList';

const mapStateToProps = state => ({
  blogPosts: state.blogPosts
});

export default connect(mapStateToProps)(BlogPostList);