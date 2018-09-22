import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledMainContent = styled.div`
  display: flex;
`;

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
