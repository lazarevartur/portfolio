import { motion } from "framer-motion";
import { FC, useEffect, useMemo, useRef, useState } from "react";
import { routeAnimate, stagger } from "../animations";

import ProjectCard from "../src/components/ProjectCard";

import { projects } from "../data";
import { Category, IImageMetaData, IProject } from "../src/types";
import { mapImagesResources } from "../src/lib/cloudinary";

const createProjectNavItems = (data: IProject[]) =>
  data.reduce<Category[]>(
    (acc, item) => [...new Set([...acc, ...item.category])],
    ["all"]
  );

const onDisplayItems = (projects: IProject[], filter: Category) => {
  const filteredItems = projects.filter((project) =>
    project.category.includes(filter)
  );
  return filteredItems.length ? filteredItems : projects;
};

interface ProjectNavItemProps {
  name: Category;
  activeTab: Category;
  onClick: (name: Category) => void;
}

const ProjectNavItem: FC<ProjectNavItemProps> = ({
  name,
  activeTab,
  onClick,
}) => {
  const isActive = name === activeTab;

  let className = "capitalize cursor-pointer hover:text-green";
  if (isActive) className += " text-green";

  return (
    <div onClick={() => onClick(name)} className={className}>
      {name}
    </div>
  );
};

interface IProjects {
  images: any[];
  mainImages: any[];
  folders: any[];
  nextCursor: string;
}

const Projects: FC<IProjects> = ({
  images: defaultImages,
  mainImages: defaultMainImages,
  folders: defaultFolders,
  nextCursor: defaultNextCursor,
}) => {
  const navBarItems = useMemo(() => createProjectNavItems(projects), []);
  const navBarRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<Category>("all");

  const [images2, setImages] = useState(defaultImages);
  const [nextCursor, setNextCursor] = useState<string | undefined>(
    defaultNextCursor
  );
  const [folderPath, setFolderPath] = useState("");

  const projectList = useMemo(
    () => onDisplayItems(projects, activeTab),
    [activeTab]
  );

  const getMoreImagesHandler = async () => {
    const results = await fetch("/api/search", {
      method: "POST",
      body: JSON.stringify({
        nextCursor,
        expression: `folder=${folderPath}`,
      }),
    }).then((res) => res.json());
    console.log(results);
    const { resources, next_cursor: updateNextCursor } = results;
    const images = mapImagesResources(resources as IImageMetaData[]);

    // setImages((prev) => [...prev, ...images]);
    // setNextCursor(updateNextCursor);
  };

  const getFolderPathHandler = (event: any) => {
    const folderPath = event.target.dataset.folderPath;
    setFolderPath(folderPath);
    setNextCursor(undefined);
    setImages([]);
  };

  const activeCardHandler = () => {
    if (navBarRef.current) {
      navBarRef.current.scrollIntoView();
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    if (folderPath) {
      (async () => {
        const results = await fetch("/api/search", {
          method: "POST",
          body: JSON.stringify({
            nextCursor,
            expression: `folder=${folderPath || ""}`,
          }),
        }).then((res) => res.json());
        const { resources, next_cursor: updateNextCursor } = results;
        const images = mapImagesResources(resources as IImageMetaData[]);
        setImages((prev) => [...prev, ...images]);
        setNextCursor(updateNextCursor);
      })();
    }
  }, [folderPath]);

  return (
    <motion.div
      variants={routeAnimate}
      initial="initila"
      animate="animate"
      exit="exit"
      className="px-5 py-2 overflow-y-scroll "
      style={{ height: "70vh" }}
    >
      <nav ref={navBarRef} className="flex px-3 py-2 space-x-3 overflow-x-auto">
        {navBarItems.map((item, index) => (
          <ProjectNavItem
            key={index}
            name={item}
            activeTab={activeTab}
            onClick={setActiveTab}
          />
        ))}
      </nav>
      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="relative grid grid-cols-12 gap-4 my-3"
      >
        {projectList.map((item, index) => (
          <ProjectCard
            key={index}
            {...item}
            activeCardHandler={activeCardHandler}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;

