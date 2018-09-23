import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ContentBase } from 'baseStyled';

const StyledMainContent = styled(ContentBase)``;

const MainContent = ({ children }) => {
  return (
    <StyledMainContent>
      {children}
    </StyledMainContent>
  );
};

MainContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default MainContent;
