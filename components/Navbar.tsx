import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";

const pages = [
  { name: "About", link: "/" },
  { name: "Projects", link: "/projects" },
  { name: "Resume", link: "/resume" },
  { name: "Sandbox", link: "/sandbox" },
];

const findPageNameByLink = (pathname: string) =>
  pages.find((item) => item.link === pathname)?.name;

interface LinkItemProps {
  disable: boolean;
  link: string;
  name: string;
  onClick: (activePage: string) => void;
}

const LinkItem: FC<LinkItemProps> = ({ disable, link, name, onClick }) => {
  if (disable) return null;

  return (
    <Link href={link}>
      <a onClick={() => onClick(name)}>
        <span className="transition-colors hover:text-green">{name}</span>
      </a>
    </Link>
  );
};

function Navbar() {
  const router = useRouter();

  const [activePage, setActivePage] = useState<string | undefined>(() =>
    findPageNameByLink(router.pathname)
  );

  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold border-b-4 text-green border-green md:text-2xl">
        {activePage}
      </span>
      <div className="flex space-x-3 text-lg text-dark dark:text-white">
        {pages.map(({ link, name }, index) => (
          <LinkItem
            key={index}
            disable={activePage === name}
            link={link}
            name={name}
            onClick={setActivePage}
          />
        ))}
      </div>
    </div>
  );
}

export default Navbar;
