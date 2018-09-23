import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ButtonBase } from 'baseStyled';

const Header = styled.h2`
  margin: 0 0 20px;
  text-align: center;
`;


const Title = styled.h3`
  margin: 0 0 20px;
  font-size: 20px;
  font-weight: 500;
`;

const Body = styled.div`
  font-size: 18px;
  letter-spacing: 0.3px;
  line-height: 1.4;
`;

const ButtonLink = ButtonBase.withComponent(Link).extend`
  width: 100%;
  margin-bottom: 30px;
`;

const PostDetails = ({
  userId,
  id,
  title,
  body,
}) => {
  return (
    <div>
      <ButtonLink to="/">Go back</ButtonLink>

      <div>
        <Header>Details</Header>
        <p>Id: {id}</p>
        <p>UserId: {userId}</p>
        <Title>Title: {title}</Title>

        <Body>
          {body}
        </Body>
      </div>
    </div>
  );
};

PostDetails.propTypes = {
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default PostDetails;
