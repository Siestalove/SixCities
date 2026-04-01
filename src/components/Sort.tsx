import { useState } from 'react';
import { SortType } from '../const';

type SortProps = {
  currentSortType: SortType;
  onSortTypeChange: (sortType: SortType) => void;
};

const sortTypeDescriptions: Record<SortType, string> = {
  [SortType.Popular]: 'Popular',
  [SortType.PriceLowToHigh]: 'Price: low to high',
  [SortType.PriceHighToLow]: 'Price: high to low',
  [SortType.TopRatedFirst]: 'Top rated first',
};

const sortTypes = Object.values(SortType);

export default function Sort({ currentSortType, onSortTypeChange }: SortProps) {
  const [isOpened, setIsOpened] = useState(false);

  const handleToggleOpen = () => {
    setIsOpened((prev) => !prev);
  };

  const handleSortOptionClick = (type: SortType) => {
    onSortTypeChange(type);
    setIsOpened(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleToggleOpen}>
        {sortTypeDescriptions[currentSortType]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened ? 'places__options--opened' : ''}`}>
        {sortTypes.map((type) => (
          <li
            key={type}
            className={`places__option ${currentSortType === type ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => handleSortOptionClick(type)}
          >
            {sortTypeDescriptions[type]}
          </li>
        ))}
      </ul>
    </form>
  );
}
