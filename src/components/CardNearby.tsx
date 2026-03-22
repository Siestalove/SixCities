import Card from './Card';
import { OffersResult } from '../types/offers';

type CardNearByProps = {
  offer: OffersResult;
};

export default function CardNearBy({ offer }: CardNearByProps) {
  return (
    <Card
      offer={offer}
      block="near-places"
    />
  );
}
