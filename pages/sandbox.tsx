import { FC, ReactNode } from "react";

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
  return <Center>div</Center>;
};

export default Sandbox;
