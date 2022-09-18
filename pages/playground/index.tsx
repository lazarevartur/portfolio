import { FC } from "react";
import { useRouter } from "next/router";
import { playgroundMenuItems } from "../../src/routes";
import Link from "next/link";

import s from "../../src/styles/styles.module.scss";

const Index: FC = () => {
  const router = useRouter();

  return (
    <div className="min-h-[532px]">
      <div className="mx-2">
        <h3 className='font-bold'>My personal little apps.</h3>
        <h5 className='text-[12px]'>* Most without responsive layout.</h5>
      </div>
      {playgroundMenuItems.map((item, index) => (
        <Link href={item.link} key={index}>
          <a className={`mx-2 my-1 cursor-pointer ${s.hover_link}`}>{item.name}</a>
        </Link>
      ))}
    </div>
  );
};

export default Index;
