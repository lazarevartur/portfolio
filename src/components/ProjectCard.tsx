import { motion } from "framer-motion";
import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";
import { AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";

import { useOnClickOutside } from "../hooks/useOnClickOutside";

import { fadeInUp, stagger } from "../../animations";

import type { IImageMetaData, IProject } from "../types";

const mapImageToSliderData = (
  images: IImageMetaData[]
): ReactImageGalleryItem[] =>
  images.map((image) => ({
    original: image.secure_url,
    thumbnail: image.secure_url,
  }));

const ProjectCard: FC<IProject> = ({
  name,
  image_path,
  category,
  deployed_url,
  description,
  github_url,
  key_techs,
  folderPath,
}) => {
  const [showDetail, setShowDetail] = useState(false);
  const projectCardRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<ReactImageGalleryItem[] | null>(null);
  const closeModal = () => {
    setShowDetail(false);
  };

  useOnClickOutside(projectCardRef, closeModal);

  const onClickHandler = () => {
    setShowDetail(true);
  };

  const images2 = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  useEffect(() => {
    if (folderPath) {
      (async () => {
        const results = await fetch("/api/search", {
          method: "POST",
          body: JSON.stringify({
            expression: `folder=${folderPath || ""}`,
          }),
        }).then((res) => res.json());
        const { resources } = results;
        const images = mapImageToSliderData(resources as IImageMetaData[]);
        setImages(images);
      })();
    }
  }, [folderPath]);
  return (
    <motion.div
      variants={fadeInUp}
      className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
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
          <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-xl shadow-custom-light dark:shadow-custom-dark md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
            <motion.div variants={stagger} initial="initial" animate="animate">
              <motion.div
                variants={fadeInUp}
                className="border-4 border-gray-200"
              >
                {images && (
                  <ImageGallery items={images} showPlayButton={false} />
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
                className="flex flex-wrap mt-5 text-sm tracking-wider"
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
