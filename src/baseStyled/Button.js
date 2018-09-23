import styled from 'styled-components';
import { SHADOWS } from 'config/theme';

export const ButtonBase = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
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
