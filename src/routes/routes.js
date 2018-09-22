import HomePage from 'pages/HomePage/HomePage';
import * as routes from 'routes/routeTypes';

export const mainRoutes = [
  {
    exact: true,
    path: routes.MAIN,
    component: HomePage,
    name: 'Home',
  },
];
