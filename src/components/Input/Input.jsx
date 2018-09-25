import React from 'react';
import styled from 'styled-components';
import { GUTTER } from 'constants/style';

const InputStyled = styled.input`
  width: 100%;
  height: 30px;
  margin-bottom: ${GUTTER}px;
  padding: 0 ${GUTTER}px;

  border: 1px solid #e3e3e3;
`;

const Input = (props) => {
  return <InputStyled {...props} />;
};

export default Input;
