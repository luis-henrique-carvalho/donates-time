interface Route {
  title: string;
  href: string;
  actions?: Route[];
}

export interface ConfigRoutes {
  publicRoutes: Route[];
  privateRoutes: Route[];
  authRotes: Route[];
  navMenuRoutes: Route[];
}
