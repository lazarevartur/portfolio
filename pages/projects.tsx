import React, { FC, useMemo, useState } from "react";

import ProjectCard from "../components/ProjectCard";

import { projects } from "../data";
import { Category, IProject } from "../types";

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

const Projects = () => {
  const navBarItems = useMemo(() => createProjectNavItems(projects), []);
  const [activeTab, setActiveTab] = useState<Category>("all");
  
  const projectList = useMemo(() => onDisplayItems(projects, activeTab), [activeTab])

  return (
    <div className="px-5 py-2 overflow-y-scroll " style={{ height: "65vh" }}>
      <nav className="flex px-3 py-2 space-x-3">
        {navBarItems.map((item, index) => (
          <ProjectNavItem
            key={index}
            name={item}
            activeTab={activeTab}
            onClick={setActiveTab}
          />
        ))}
      </nav>
      <div className="relative grid grid-cols-12 gap-4 my-3">
        {projectList.map((item, index) => (
          <ProjectCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
