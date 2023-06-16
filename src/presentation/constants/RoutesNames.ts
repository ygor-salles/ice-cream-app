export enum routesNames {
  DASHBOARD = 'dashboard',
  PRODUCTS = 'products',
  LOGIN = 'login',
}

export type Nav = { navigate: (value: routesNames) => void };
