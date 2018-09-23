import HomePage from 'pages/HomePage';
import PostDetails from 'pages/PostDetails';
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
    component: PostDetails,
    name: 'Post details',
  },
];
