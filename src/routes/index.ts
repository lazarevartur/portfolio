export enum APP_LINKS {
  about = "/",
  projects = "/projects",
  resume = "/resume",
  playground = "/playground",
}

export enum PLAYGROUND_LINKS {
  LanguageTranslator = "/lt",
  SpeedTestGame = "/spt",
}

export const pages = [
  { name: "About", link: APP_LINKS.about },
  { name: "Projects", link: APP_LINKS.projects },
  { name: "Resume", link: APP_LINKS.resume },
  { name: "Playground", link: APP_LINKS.playground },
  // { name: "Sandbox", link: "/sandbox" },
];

export const playgroundMenuItems = [
  {
    name: "LanguageTranslator",
    link: APP_LINKS.playground + PLAYGROUND_LINKS.LanguageTranslator,
  },
  {
    name: "SpeedTestGame",
    link: APP_LINKS.playground + PLAYGROUND_LINKS.SpeedTestGame,
  },
];
