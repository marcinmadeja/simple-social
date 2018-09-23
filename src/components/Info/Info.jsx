import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';
import { SHADOWS, COLORS } from 'config/theme';

const InfoStyled = styled.div`
  display: flex;
  align-items: center;
  min-width: 200px;
  height: 68px;
  padding: 0 18px;

  background: #ebebeb;
  border-radius: 5px;
  box-shadow: ${SHADOWS[1]};

  letter-spacing: 0.5px;
  font-size: 17px;
`;

const ProgressHolder = styled.div`
  margin-right: 20px;
`;

const Info = ({
  progress,
  children,
}) => {
  return (
    <InfoStyled>
      {progress && (
        <ProgressHolder>
          <CircularProgress style={{ color: COLORS.primary }} />
        </ProgressHolder>
      )}
      {children}
    </InfoStyled>
  );
};

Info.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  progress: PropTypes.bool,
};

Info.defaultProps = {
  progress: false,
};

export default Info;
