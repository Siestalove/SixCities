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

  return (
    <div className={`${block}__list places__list`}>
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
