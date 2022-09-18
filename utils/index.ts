import { pages } from "../routes";

export const findPageNameByLink = (pathname: string) =>
  pages.find((item) => item.link === pathname)?.name;
