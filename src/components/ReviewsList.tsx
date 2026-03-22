import Review from './Review';
import { ReviewType } from '../types/reviews';

type ReviewsListProps = {
  reviews: ReviewType[];
}

export default function ReviewsList({reviews} : ReviewsListProps) {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <Review
          key={review.id}
          date={review.date}
          user={review.user}
          comment={review.comment}
          rating={review.rating}
        />
      ))}
    </ul>
  );
}
