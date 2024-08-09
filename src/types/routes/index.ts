interface Route {
  title: string;
  href: string;
}

export interface ConfigRoutes {
  publicRoutes: Route[];
  privateRoutes: Route[];
  authRotes: Route[];
}
