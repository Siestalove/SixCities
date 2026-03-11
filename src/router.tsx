import { createBrowserRouter } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from './const';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import FavoritesPage from './pages/FavoritesPage';
import OfferPage from './pages/OfferPage';
import NoFoundPage from './pages/NoFoundPage';
import ErrorPage from './pages/ErrorPage';
import App from './App';
import PrivateRoute from './private-route';

export const createAppRouter = (offersCount: number) => createBrowserRouter([
  {
    path: AppRoute.Login,
    element: <LoginPage />,
  },
  {
    path: AppRoute.Main,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage offersCount={offersCount} />,
      },
      {
        path: AppRoute.Favorite,
        element:
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <FavoritesPage />
            </PrivateRoute>
      },
      {
        path: AppRoute.Offer,
        element: <OfferPage />,
      },
      {
        path: '*',
        element: <NoFoundPage />,
      },
    ],
  },
]);

