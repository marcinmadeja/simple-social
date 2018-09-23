import React from 'react';
import styled from 'styled-components';
import PostItem from 'components/PostItem';
import { GUTTER } from 'constants/style';

const PostsListStyled = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > * {
    width: calc(33.3333% - ${GUTTER * 2}px);
    margin: 0 ${GUTTER / 2}px ${GUTTER}px;
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
          key={item.id}
          title={item.title}
        />
      ))}
    </PostsListStyled>
  );
};

export default PostsList;
