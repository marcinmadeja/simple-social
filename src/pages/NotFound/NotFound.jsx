import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonBase } from 'baseStyled';

const LinkButton = ButtonBase.withComponent(Link);

const NotFound = () => {
  return (
    <div>
      Page not found.<br />
      <LinkButton to="/">Return to home page</LinkButton>
    </div>
  );
};

export default NotFound;
