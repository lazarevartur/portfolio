import { FC, ReactNode } from "react";
import LanguageTranslator from "../components/LanguageTranslator";

interface CenterProps {
  children: ReactNode;
}

const Center: FC<CenterProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      {children}
    </div>
  );
};

const Sandbox = () => {
  return (
    <Center>
      <LanguageTranslator />
    </Center>
  );
};

export default Sandbox;
