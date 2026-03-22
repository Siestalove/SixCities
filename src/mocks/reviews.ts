import { ReviewType } from '../types/reviews';

export const mockReviews: ReviewType[] = [
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
    date: '2024-04-01T12:00:00.000Z',
    user: {
      name: 'Max',
      avatarUrl: 'https://16.design.htmlacademy.com/static/avatar/1.jpg',
      isPro: false
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    rating: 4
  },
  {
    id: 'c78eefg6-c064-4b41-9d2c-ec1847f9e83b',
    date: '2024-03-28T08:30:00.000Z',
    user: {
      name: 'Anna',
      avatarUrl: 'https://16.design.htmlacademy.com/static/avatar/2.jpg',
      isPro: true
    },
    comment: 'Perfect location, very clean and comfortable. The host was extremely helpful. Would definitely stay again!',
    rating: 5
  },
  {
    id: 'd89fghh7-d175-5c52-0e3d-fd2958g0f94c',
    date: '2024-03-15T15:45:00.000Z',
    user: {
      name: 'John',
      avatarUrl: 'https://16.design.htmlacademy.com/static/avatar/3.jpg',
      isPro: false
    },
    comment: 'Nice apartment but a bit noisy at night. Good value for money though.',
    rating: 3
  },
  {
    id: 'e90gijj8-e286-6d63-1f4e-ge3069h1g05d',
    date: '2024-02-20T09:20:00.000Z',
    user: {
      name: 'Sophie',
      avatarUrl: 'https://16.design.htmlacademy.com/static/avatar/4.jpg',
      isPro: true
    },
    comment: 'Absolutely loved our stay! The interior is stunning and the bed is super comfortable. Great communication from the host.',
    rating: 5
  }
];
