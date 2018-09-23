import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PostItem from 'components/PostItem';
import { GUTTER } from 'constants/style';
import { media } from 'styles/media';

const PostsListStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  & > * {
    width: calc(33.3333% - ${GUTTER * 2}px);
    margin: 0 ${GUTTER / 2}px ${GUTTER}px;

    ${media.lessThan('tablet')`
      width: calc(50% - 15px);
    `};

    ${media.lessThan('phone')`
      width: 100%;
      margin: 0 0 20px;
    `};
  }
`;

const PostsList = ({
  posts,
}) => {
  return (
    <PostsListStyled>
      {posts.map(item => (
        <PostItem
          id={item.id}
          userId={item.userId}
          key={item.id}
          title={item.title}
        />
      ))}
    </PostsListStyled>
  );
};

PostsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    userId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })).isRequired,
};

export default PostsList;
