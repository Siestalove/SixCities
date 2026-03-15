import { OffersResult } from '../types/offers';
import FavoriteList from '../components/FavoritesList';

type FavoritesPageProps = {
  favorites: OffersResult[];
}

export default function FavoritesPage({ favorites }: FavoritesPageProps) {

  const favoriteOffers = favorites.filter((offer) => offer.isFavorite === true);

  return (
    <div className="page">
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoriteList favorites={favoriteOffers} />
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}
