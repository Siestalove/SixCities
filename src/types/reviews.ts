export type userType = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type ReviewType = {
  id: string;
  date: string;
  user: userType;
  comment: string;
  rating: number;
}
