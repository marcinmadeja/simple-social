import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from 'Api';
import { POST_APPEAR_DELAY } from 'constants/index';
import Info from 'components/Info';
import PostsList from 'components/PostsList';
import Header from './Header';

class HomePage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      posts: [],
      visiblePosts: [],
      postsRequest: true,
      postSuccess: false,
      postFailure: false,

      searchValue: '',
    };

    this.setTimeoutId = null;

    this.postRequestSuccess = this.postRequestSuccess.bind(this);
    this.postRequestFailure = this.postRequestFailure.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.displayPost = this.displayPost.bind(this);
    this.displayNextPost = this.displayNextPost.bind(this);
    this.filterBySearchValue = this.filterBySearchValue.bind(this);
  }

  componentDidMount() {
    this.initPostRequest();
  }

  componentWillUnmount() {
    this.clearTimeout();
  }

  handleSearchChange(event) {
    const searchValue = event.target.value;
    this.setState({ searchValue });
  }

  initPostRequest() {
    api.getPosts()
      .then(this.postRequestSuccess)
      .catch(this.postRequestFailure);
  }

  postRequestSuccess(posts) {
    this.setState({
      posts: this.sortPosts(posts),
      postsRequest: false,
      postSuccess: true,
      postFailure: false,
    }, this.displayPost);
  }

  postRequestFailure(error) {
    error = error || {};
    const status = error.status;
    this.props.openModal(error.message || status);

    this.setState({
      postsRequest: false,
      postSuccess: false,
      postFailure: true,
    });
  }

  displayPost() {
    const { posts, visiblePosts } = this.state;
    const newPosts = [...posts];
    const displayPost = newPosts.shift();
    const newVisiblePost = [...visiblePosts, displayPost];
    this.setState({ posts: newPosts, visiblePosts: newVisiblePost }, this.displayNextPost);
  }

  displayNextPost() {
    if (this.state.posts.length) {
      this.setTimeoutId = setTimeout(this.displayPost, POST_APPEAR_DELAY);
    }
  }

  clearTimeout() {
    if (this.setTimeoutId) clearTimeout(this.setTimeoutId);
  }

  sortPosts(posts) {
    return posts.sort((a, b) => (a.id <= b.id ? 1 : -1));
  }

  canShowList() {
    const { postSuccess, posts, visiblePosts } = this.state;
    return postSuccess && (posts.length > 0 || visiblePosts.length > 0);
  }

  filteredPost(posts) {
    return posts.filter(this.filterBySearchValue);
  }

  filterBySearchValue(item) {
    return this.itContains(item.title) || this.itContains(item.body);
  }

  itContains(string) {
    const { searchValue } = this.state;
    if (!string) return true;
    return (new RegExp(searchValue, 'gmi')).test(string);
  }

  render() {
    const { postsRequest, postFailure, visiblePosts, searchValue } = this.state;
    const { logOutUser } = this.props;
    const filteredPost = this.filteredPost(visiblePosts);

    return (
      <div>
        {postsRequest && <Info progress>Fetching data</Info>}
        {postFailure && <Info>Data was not fetched</Info>}
        {this.canShowList() && (
          <React.Fragment>
            <Header
              logOutUser={logOutUser}
              onSearchChange={this.handleSearchChange}
              searchValue={searchValue}
            />
            <PostsList posts={filteredPost} />
          </React.Fragment>
        )}
      </div>
    );
  }
}

HomePage.propTypes = {
  logOutUser: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default HomePage;
