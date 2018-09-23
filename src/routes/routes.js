import HomePage from 'pages/HomePage';
import Post from 'pages/Post';
import * as routes from 'routes/routeTypes';

export const mainRoutes = [
  {
    exact: true,
    path: routes.MAIN,
    component: HomePage,
    name: 'Home',
  },
  {
    exact: true,
    path: routes.POST_DETAILS,
    component: Post,
    name: 'Post details',
  },
];
