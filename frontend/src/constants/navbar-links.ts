import { TNavbarLink } from "../types/navbar-links";
import { getAppsPath } from "../lib/config";

const { homePath, categoryPath, cartPath, aboutPath } = getAppsPath();

export const navbarLinks: TNavbarLink[] = [
  {
    id: 1,
    name: "Home",
    href: homePath,
  },
  {
    id: 2,
    name: "Categories",
    href: categoryPath,
  },
  {
    id: 3,
    name: "Cart",
    href: cartPath,
  },
  {
    id: 4,
    name: "About",
    href: aboutPath,
  },
];
