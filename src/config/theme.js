/* eslint-disable quote-props */
import lightBlue from '@material-ui/core/colors/lightBlue';
import indigo from '@material-ui/core/colors/indigo';
import { createMuiTheme } from '@material-ui/core/styles';

const DARK_COLORS = {
  main: '#1b1e24',
  text: '#8b91a0',
  contrast: '#ffffff',
  lighter: '#22262e',
};

const SUCCESS_COLOR = '#0aa699';
const FAILURE_COLOR = '#f35958';

const theme = createMuiTheme({
  palette: {
    primary: lightBlue,
    secondary: indigo,
  },
  success: SUCCESS_COLOR,
  failure: FAILURE_COLOR,
});


export const COLORS = {
  primary: theme.palette.primary[500],
  secondary: theme.palette.secondary[500],
  dark: DARK_COLORS.main,
  darkLighter: DARK_COLORS.lighter,
  darkContrast: DARK_COLORS.contrast,
  darkText: DARK_COLORS.text,
  background: '#e5e9ec',
  success: SUCCESS_COLOR,
  failure: FAILURE_COLOR,
};

export const SHADOWS = theme.shadows;

export default theme;
