import { PLAYGROUND_LINKS } from "../routes";
import LanguageTranslator from "../components/LanguageTranslator";
import SpeedTestGame from "../components/SpeedTestGame";

export const PLAYGROUND_COMPONENTS: Record<
  PLAYGROUND_LINKS | string,
  () => JSX.Element
> = {
  [PLAYGROUND_LINKS.LanguageTranslator]: LanguageTranslator,
  [PLAYGROUND_LINKS.SpeedTestGame]: SpeedTestGame,
};
