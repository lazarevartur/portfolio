import { FC, ReactNode } from "react";
import LanguageTranslator from "../components/LanguageTranslator";
import SpeedTestGame from "../components/SpeedTestGame";

interface CenterProps {
  children: ReactNode;
}

const Center: FC<CenterProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-full h-full bg-cyan-500">
      {children}
    </div>
  );
};

const Sandbox = () => {
  return (
    <Center>
      <SpeedTestGame />
    </Center>
  );
};

export default Sandbox;
