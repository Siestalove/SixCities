import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { OfferForId } from '../types/offers';
import { mockReviews } from '../mocks/reviews';
import ReviewForm from '../components/ReviewForm';
import ReviewsList from '../components/ReviewsList';
import Map from '../components/Map';
import OffersListNearBy from '../components/OffersListNearby';

export default function OfferPage() {

  const { id } = useParams();
  const [offer, setOffer] = useState<OfferForId | null>(null);

  const reviewsCount = mockReviews.length;

  useEffect(() => {
    const foundOffer = mocksOffersForId.find((item) => item.id === id);
    setOffer(foundOffer || null);
  }, [id]);

  if (!offer) {
    return <div>Loading...</div>;
  }

  // const handleReviewSubmit = (review: { rating: number; comment: string }) => {
  //   console.log('New review:', review);
  // };

  const pointsForMap = mockNearbyOffers.map((nearby) => ({
    id: nearby.id,
    latitude: nearby.location.latitude,
    longitude: nearby.location.longitude,
  }));

  pointsForMap.push({
    id: offer.id,
    latitude: offer.location.latitude,
    longitude: offer.location.longitude,
  });

  return (
    <div className="page">
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offer.images.map((image) => (
                <div key={image} className="offer__image-wrapper">
                  <img className="offer__image" src={image} alt={offer.title} />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{offer.title}</h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${Math.round(offer.rating) * 20}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price}</b>
                <span className="offer__price-text">&nbsp; night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {offer.goods.map((good) => (
                    <li key={good} className="offer__inside-item">{good}</li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className={`offer__avatar-wrapper ${offer.host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                    <img className="offer__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">{offer.host.name}</span>
                  {offer.host.isPro && <span className="offer__user-status">Pro</span>}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {offer.description}
                  </p>
                  <p className="offer__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCount}</span></h2>
                <ReviewsList reviews={mockReviews} />
                <ReviewForm/>
              </section>
            </div>
          </div>
          <section className="offer__map map">
            <Map
              city={offer.city}
              points={pointsForMap}
              selectedPointId={offer.id}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OffersListNearBy offers={mockNearbyOffers} />
          </section>
        </div>
      </main>
    </div>
  );
}
