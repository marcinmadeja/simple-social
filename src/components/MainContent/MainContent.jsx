import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { WIDTH, MAX_WIDTH, GUTTER } from 'constants/style';

const StyledMainContent = styled.div`
  max-width: ${MAX_WIDTH};
  width: ${WIDTH};
  margin: 10px auto 0;
  padding: ${GUTTER};
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
