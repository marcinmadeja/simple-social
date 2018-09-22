import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from 'config/theme';
import 'normalize.css';
import './index.css';

import Root from './Root/Root';
import registerServiceWorker from './registerServiceWorker';

const history = createHistory();

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Router history={history}>
      <Root />
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root'),
);

registerServiceWorker();
