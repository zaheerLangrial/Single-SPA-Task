import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@pp/header",
  app: () =>
    System.import<LifeCycles>('@pp/header'),
    activeWhen: ['/'],
});

registerApplication({
  name: "@pp/products",
  app: () =>
    System.import<LifeCycles>('@pp/products'),
  activeWhen: (location) => location.pathname === '/',
});

registerApplication({
  name: "@pp/cart",
  app: () =>
    System.import<LifeCycles>('@pp/cart'),
  activeWhen: (location) => location.pathname === '/cart',
});


start({
  urlRerouteOnly: true,
});
