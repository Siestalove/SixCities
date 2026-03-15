import { OffersResult } from '../types/offers';
import Card from './Card';

type OffersListProps = {
  offers: OffersResult[];
  onOfferHover: (id: string) => void;
}

export default function OffersList({ offers, onOfferHover }: OffersListProps) {
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

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
}
