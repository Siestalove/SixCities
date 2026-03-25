import { useState } from 'react';
import Map from '../components/Map';
import OffersList from '../components/OffersList';
import CitiesList from '../components/CitiesList';
import {useAppDispatch, useAppSelector} from '../hooks';
import { setCity } from '../store/action';


export default function MainPage() {

  const dispatch = useAppDispatch();

  const currentCityName = useAppSelector((state) => state.currentCity);
  const allOffers = useAppSelector((state) => state.offers);

  const [activeOfferId, setActiveOfferId] = useState<string>('');

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

  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList CityName={currentCityName} handleCityClick={handleCityClick}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersLength} places to stay in {currentCityName}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <OffersList offers={filteredOffers} onOfferHover={handleOfferHover} block="cities" />
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
