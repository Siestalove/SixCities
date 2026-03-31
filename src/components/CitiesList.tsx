import {cities} from '../const';

type CitiesListProps = {
  cityName: string;
  handleCityClick: (cityName: string) => void;
}

export default function CitiesList({cityName, handleCityClick} : CitiesListProps) {
  return(
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li className="locations__item" key={city}>
          <a
            className={`locations__item-link tabs__item ${
              cityName === city ? 'tabs__item--active' : ''
            }`}
            href="#"
            onClick={(evt) => {
              evt.preventDefault();
              handleCityClick(city);
            }}
          >
            <span>{city}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
