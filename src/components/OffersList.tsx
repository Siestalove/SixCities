import { OffersResult } from '../types/offers';
import Card from './Card';

type OffersListProps = {
  offers: OffersResult[];
  onOfferHover: (id: string) => void;
  block: 'cities' | 'near-places';
}

export default function OffersList({ offers, onOfferHover, block }: OffersListProps) {
  const handleMouseEnter = (id: string) => {
    if (onOfferHover) {
      onOfferHover(id);
    }
  };

  const handleMouseLeave = () => {
    if (onOfferHover) {
      onOfferHover('');
    }
  };

  const listClassName = block === 'cities'
    ? 'cities__places-list places__list tabs__content'
    : 'near-places__list places__list';

  return (
    <div className={listClassName}>
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          block={block}
        />
      ))}
    </div>
  );
}
