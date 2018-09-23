import styled from 'styled-components';
import { WIDTH, MAX_WIDTH, GUTTER } from 'constants/style';

export const ContentBase = styled.div`
  max-width: ${MAX_WIDTH};
  width: ${WIDTH};
  margin: 10px auto 0;
  padding: ${GUTTER};
`;
