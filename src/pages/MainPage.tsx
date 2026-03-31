import { useState } from 'react';
import Map from '../components/Map';
import OffersList from '../components/OffersList';
import CitiesList from '../components/CitiesList';
import Sort from '../components/Sort';
import {useAppDispatch, useAppSelector} from '../hooks';
import { setCity } from '../store/action';
import { SortType } from '../const';
import { OffersResult } from '../types/offers';


export default function MainPage() {

  const dispatch = useAppDispatch();

  const currentCityName = useAppSelector((state) => state.currentCity);
  const allOffers = useAppSelector((state) => state.offers);

  const [activeOfferId, setActiveOfferId] = useState<string>('');
  const [activeSortType, setActiveSortType] = useState<SortType>(SortType.Popular);

  const filteredOffers = allOffers.filter((offer) => offer.city.name === currentCityName);
  const currentCity = filteredOffers[0]?.city;

  const points = filteredOffers.map((offer) => ({
    id: offer.id,
    latitude: offer.location.latitude,
    longitude: offer.location.longitude,
  }));


  const handleOfferHover = (id: string) => {
    setActiveOfferId(id);
  };

  const handleCityClick = (cityName: string) => {
    dispatch(setCity(cityName));
    setActiveOfferId('');
  };

  const offersLength = filteredOffers.length;

  const getSortedOffers = (offers: OffersResult[], sortType: SortType) : OffersResult[] => {
    switch (sortType) {
      case SortType.PriceLowToHigh:
        return [...offers].sort((a, b) => a.price - b.price);
      case SortType.PriceHighToLow:
        return [...offers].sort((a, b) => b.price - a.price);
      case SortType.TopRatedFirst:
        return [...offers].sort((a, b) => b.rating - a.rating);
      case SortType.Popular:
      default:
        return offers;
    }
  };

  const sortedOffers = getSortedOffers(filteredOffers, activeSortType);

  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList cityName={currentCityName} handleCityClick={handleCityClick}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersLength} places to stay in {currentCityName}</b>
              <Sort currentSortType={activeSortType} onSortTypeChange={setActiveSortType} />
              <OffersList offers={sortedOffers} onOfferHover={handleOfferHover} block="cities" />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  city={currentCity}
                  points={points}
                  selectedPointId={activeOfferId}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
