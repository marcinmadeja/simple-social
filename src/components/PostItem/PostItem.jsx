import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SHADOWS, COLORS } from 'config/theme';
import { GUTTER } from 'constants/style';
import AccountCircle from '@material-ui/icons/AccountCircle';

const PostItemStyled = styled.div`
  display: flex;
  padding: ${GUTTER}px;
  background: #fff;
  box-shadow: ${SHADOWS[3]};
`;

const Avatar = styled.div`
  margin-right: 20px;

  svg {
    width: 40px;
    height: 40px;
    color: ${COLORS.primary};
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;

  & > *:last-child {
    margin-top: auto;
  }
`;

const Title = styled.h4`
  margin: 0 0 15px;
  font-size: 19px;
  font-weight: 400;

  strong {
    min-width: 60px;
    display: inline-block;
  }
`;

const User = styled.div`
  margin-bottom: 20px;
  strong {
    min-width: 60px;
    display: inline-block;
  }
`;

const LinkButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  box-shadow: ${SHADOWS[4]};

  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  transition: 0.25s all;

  &:hover {
    box-shadow: ${SHADOWS[6]};
  }
`;

const PostItem = ({
  userId,
  id,
  title,
  body,
}) => {
  return (
    <PostItemStyled>
      <Avatar>
        <AccountCircle />
      </Avatar>

      <Content>
        <Title>
          <strong>Title:</strong>
          {title}
        </Title>

        <User>
          <strong>UserId:</strong>
          user{userId}
        </User>

        <LinkButton to={`posts/${id}`}>See more</LinkButton>
      </Content>
    </PostItemStyled>
  );
};

export default PostItem;
