import { FC } from "react";
import { useRouter } from "next/router";
import { playgroundMenuItems } from "../../routes";
import Link from "next/link";

const Index: FC = () => {
  const router = useRouter();

  return (
    <div className="min-h-[532px]">
      {playgroundMenuItems.map((item) => (
        <Link href={item.link}>
          <a className="mx-2 my-1 cursor-pointer">{item.name}</a>
        </Link>
      ))}
    </div>
  );
};

export default Index;
