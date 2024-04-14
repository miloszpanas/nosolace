export type NavigationItem = {
  path: string;
  name: string;
};

export const NAVIGATION_BUTTONS: NavigationItem[] = [
  {
    path: "/cassettes",
    name: "Cassettes"
  },
  {
    path: "/apparel",
    name: "Apparel"
  },
  {
    path: "/cds",
    name: "CDs"
  },
  {
    path: "/lps",
    name: "Long plays"
  }
];
