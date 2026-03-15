import { createBrowserRouter } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from './const';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import FavoritesPage from './pages/FavoritesPage';
import OfferPage from './pages/OfferPage';
import NoFoundPage from './pages/NoFoundPage';
import App from './App';
import PrivateRoute from './private-route';
import { OffersResult } from './types/offers';

export const createAppRouter = (offersCount: number, offers: OffersResult[]) => createBrowserRouter([
  {
    path: AppRoute.Login,
    element: <LoginPage />,
  },
  {
    path: AppRoute.Main,
    element: <App />,
    errorElement: <NoFoundPage />,
    children: [
      {
        index: true,
        element: <MainPage offersCount={offersCount} offers={offers} />,
      },
      {
        path: AppRoute.Favorite,
        element:
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <FavoritesPage favorites={offers} />
            </PrivateRoute>
      },
      {
        path: AppRoute.Offer,
        element: <OfferPage />,
      },
    ],
  },
]);

