export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorite = '/favorite',
  Offer = '/offer/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
