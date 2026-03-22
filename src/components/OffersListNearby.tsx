import { OffersResult } from '../types/offers';
import CardNearBy from './CardNearby';

type OffersListNearByProps = {
  offers: OffersResult[];
};

export default function OffersListNearBy({ offers }: OffersListNearByProps) {
  return (
    <div className="near-places__list places__list">
      {offers.map((offer) => (
        <CardNearBy
          key={offer.id}
          offer={offer}
        />
      ))}
    </div>
  );
}
