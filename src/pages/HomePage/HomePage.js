import React, { Component } from 'react';
import api from 'Api';
import Info from 'components/Info';
import PostsList from 'components/PostsList';

class HomePage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      posts: [],
      postsRequest: true,
      postSuccess: false,
      postFailure: false,
    };

    this.postRequestSuccess = this.postRequestSuccess.bind(this);
    this.postRequestFailure = this.postRequestFailure.bind(this);
  }

  componentDidMount() {
    this.initPostRequest();
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
    });
  }

  postRequestFailure() {
    this.setState({
      postsRequest: false,
      postSuccess: false,
      postFailure: true,
    });
  }

  sortPosts(posts) {
    return posts.sort((a, b) => (a.id <= b.id ? 1 : -1));
  }

  canShowList() {
    const { postSuccess, posts } = this.state;
    return postSuccess && posts.length > 0;
  }

  render() {
    const { postsRequest, postFailure, posts } = this.state;

    return (
      <div>
        {postsRequest && <Info progress>Fetching data</Info>}
        {postFailure && <Info>Data was not fetched</Info>}
        {this.canShowList() && <PostsList posts={posts} />}
      </div>
    );
  }
}

export default HomePage;
