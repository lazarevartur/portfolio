import { motion } from "framer-motion";
import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";
import { AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";

import { useOnClickOutside } from "../hooks/useOnClickOutside";

import { fadeInUp, stagger } from "../../animations";

import type { IImageMetaData, IProject } from "../types";
import { mapImageToSliderData } from "../utils";

interface IProjectCardProps {
  project: IProject;
  activeCardHandler?: (cardName?: string) => void;
}

const ProjectCard: FC<IProjectCardProps> = ({
  project: {
    name,
    image_path,
    deployed_url,
    description,
    github_url,
    key_techs,
    folderPath,
    tasks,
  },
  activeCardHandler,
}) => {
  const [showDetail, setShowDetail] = useState(false);
  const projectCardRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<ReactImageGalleryItem[] | null>(null);
  const [activeCard, setActiveCard] = useState<string>("");

  const closeModal = () => {
    setShowDetail(false);
    setActiveCard("");
  };

  useOnClickOutside(projectCardRef, closeModal);

  const onClickHandler = () => {
    setShowDetail(true);
  };

  useEffect(() => {
    if (activeCard) {
      (async () => {
        activeCardHandler?.();

        const results = await fetch("/api/search", {
          method: "POST",
          body: JSON.stringify({
            expression: `folder=${activeCard || ""}`,
          }),
        }).then((res) => res.json());
        const { resources } = results;
        const images = mapImageToSliderData(resources as IImageMetaData[]);
        setImages(images);
      })();
    }
  }, [activeCard]);

  return (
    <motion.div
      variants={fadeInUp}
      className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
      onClick={() => {
        setActiveCard(folderPath);
      }}
      ref={projectCardRef}
    >
      <div>
        <Image
          src={image_path}
          alt={name}
          className="cursor-pointer"
          onClick={onClickHandler}
          layout="responsive"
          height="150"
          width="300"
        />
        <p className="my-2 text-center">{name}</p>

        {showDetail && (
          <div
            ref={cardRef}
            className="absolute top-0 left-0 z-10 grid w-full p-4 text-black bg-gray-100 rounded-xl shadow-custom-light dark:shadow-custom-dark md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100 "
          >
            <motion.div variants={stagger} initial="initial" animate="animate">
              <motion.div
                variants={fadeInUp}
                className="border-4 border-gray-200"
              >
                {images && (
                  <ImageGallery
                    additionalClass="max-w-[250px] sm:max-w-full lg:max-w-full"
                    items={images}
                    showPlayButton={false}
                  />
                )}
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="flex justify-center my-4 space-x-3"
              >
                {deployed_url && (
                  <a
                    href={deployed_url}
                    className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillProject /> <span>Project</span>
                  </a>
                )}
              </motion.div>
            </motion.div>

            <div>
              <motion.h2
                variants={fadeInUp}
                className="mb-3 text-xl font-medium md:text-2xl"
              >
                {name}
              </motion.h2>
              <motion.h3 variants={fadeInUp} className="mb-3 font-medium">
                {description}
              </motion.h3>

              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap my-5 text-sm tracking-wider"
              >
                <div className="flex self-center underline mr-1">Stack:</div>
                {key_techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 my-1 mr-1 bg-gray-200 dark:bg-dark-200 round-sm"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
              {tasks && (
                <>
                  <motion.div className="font-bold" variants={fadeInUp}>
                    What tasks did I solve?
                  </motion.div>
                  <motion.ul variants={fadeInUp}>
                    {tasks.map((task, index) => (
                      <li key={index}>&#183; {task}</li>
                    ))}
                  </motion.ul>
                </>
              )}
            </div>

            <motion.button
              variants={fadeInUp}
              onClick={closeModal}
              className="absolute p-1 bg-gray-200 rounded-full -top-5 -right-5 focus:outline-none dark:bg-dark-200"
            >
              <MdClose size={30} />
            </motion.button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
