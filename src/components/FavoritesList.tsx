import { OffersResult } from '../types/offers';
import FavoriteCard from './FavoriteCard';

type FavoriteListProps = {
  favorites: OffersResult[];
}

export default function FavoriteList({ favorites }: FavoriteListProps) {

  const favoritesByCity: { [key: string]: OffersResult[] } = {};

  favorites.forEach((offer) => {
    const cityName = offer.city.name;

    if (!favoritesByCity[cityName]) {
      favoritesByCity[cityName] = [];
    }

    favoritesByCity[cityName].push(offer);
  });

  return (
    <ul className="favorites__list">
      {Object.entries(favoritesByCity).map(([city, cityFavorites]) => (
        <li key={city} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{city}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {cityFavorites.map((offer) => (
              <FavoriteCard key={offer.id} offer={offer} />
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}
