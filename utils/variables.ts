export const siteName = "DK Consult";
export const SEODescription =
  "DK Consult provides expert IT advice and creative technical solutions to help businesses achieve their objectives. Contact us for consultations and project builds.";

export const defaultImage = "../public/favicon/meta_image.png";
export const defaultImageDescription =
  "DK Consult - Providing Expert IT Solutions";

export const twitterHandle = "@dkconsult";

export const authorName = "DK Consult Team";
export const siteUrl = "https://www.dkconsult.com";

import { convertObjectToArray } from "./_functions";
import { RouteType } from "./types";

export const nav = "nav",
  Routes: { [name: string]: RouteType } = {
    Home: {
      // Icon: ChevronDownIcon,
      Icon: undefined,
      path: "/",
      label: "Solutions",
      showIn: [nav],
      type: "link",
      activeIn: ["/"],
      subRoutes: {},
    },
    Partners: {
      Icon: undefined,
      path: "/partners",
      label: "Our Partners",
      showIn: [nav],
      type: "link",
      activeIn: ["/partners"],
      subRoutes: undefined,
    },
    About: {
      // Icon: ChevronDownIcon,
      Icon: undefined,
      path: "/about",
      label: "About",
      showIn: [nav],
      type: "link",
      activeIn: ["/about"],
      subRoutes: {},
    },
    Careers: {
      // Icon: ChevronDownIcon,
      Icon: undefined,
      path: "/careers",
      label: "Careers",
      showIn: [nav],
      type: "link",
      activeIn: ["/careers"],
      subRoutes: {},
    },
  },
  allRoutes = convertObjectToArray(Routes),
  navRoutes = allRoutes.filter((link) => link.showIn.includes(nav));
