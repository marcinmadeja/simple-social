import { css } from 'styled-components';

const BREAKPOINTS = {
  phone: '480px',
  smallTablet: '768px',
  tablet: '991px',
  desktop: '1199px',
  bigDesktop: '1599px',
};

const getSizeFromBreakpoint = (breakpointValue) => BREAKPOINTS[breakpointValue] || '';

const lessThan = (breakpoint) => (style) => (
  css`
    @media (max-width: ${getSizeFromBreakpoint(breakpoint)}) {
      ${css(style)};
    }
  `);

const greaterThan = (from, to) => (style) => (
  css`
    @media (min-width: ${getSizeFromBreakpoint(from)}) and (max-width: ${getSizeFromBreakpoint(to)}) {
      ${css(style)};
    }
  `);

export const media = {
  lessThan,
  greaterThan,
};
