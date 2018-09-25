import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from 'Api';
import styled from 'styled-components';
import { ContentBase } from 'baseStyled';
import { GUTTER } from 'constants/style';
import { SHADOWS } from 'config/theme';
import Info from 'components/Info';
import PostDetails from 'components/PostDetails';

const PostStyled = styled(ContentBase)`
  background: #fff;
  padding: ${GUTTER}px;
  box-shadow: ${SHADOWS[1]};
`;

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: false,
      postRequest: true,
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
    const id = this.props.match.params.id;
    api.getPost(id)
      .then(this.postRequestSuccess)
      .catch(this.postRequestFailure);
  }

  postRequestSuccess(post) {
    this.setState({
      post,
      postRequest: false,
      postSuccess: true,
      postFailure: false,
    });
  }

  postRequestFailure(error) {
    error = error || {};
    const status = error.status;
    this.props.openModal(error.message || status);

    this.setState({
      postRequest: false,
      postSuccess: status === 404 ? true : false,
      postFailure: status === 404 ? false : true,
    });
  }

  wasPostNotFound() {
    const { postSuccess, post } = this.state;
    return postSuccess && !post;
  }

  canDisplayDetails() {
    const { postSuccess, post } = this.state;
    return postSuccess && post;
  }

  render() {
    const { postRequest, postFailure, post } = this.state;

    return (
      <PostStyled>
        {postRequest && <Info progress>Fetching data</Info>}
        {postFailure && <Info>Data was not fetched</Info>}
        {this.wasPostNotFound() && <p>test</p>}
        {this.canDisplayDetails() && <PostDetails {...post} />}
      </PostStyled>
    );
  }
}

Post.propTypes = {
  match: PropTypes.object,
  openModal: PropTypes.func.isRequired,
};

Post.defaultProps = {
  match: { params: { id: 0 } },
};

export default Post;
