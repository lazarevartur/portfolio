import { FC, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../types";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../animations";

const ProjectCard: FC<IProject> = ({
  name,
  image_path,
  category,
  deployed_url,
  description,
  github_url,
  key_techs,
}) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <motion.div
      variants={fadeInUp}
      className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
    >
      <div>
        <Image
          src={image_path}
          alt={name}
          className="cursor-pointer"
          onClick={() => setShowDetail(true)}
          layout="responsive"
          height="150"
          width="300"
        />
        {/* <img
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(true)}
      /> */}
        <p className="my-2 text-center">{name}</p>

        {showDetail && (
          <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
            <motion.div variants={stagger} initial="initial" animate="animate">
              <motion.div variants={fadeInUp}>
                <Image
                  src={image_path}
                  alt={name}
                  layout="responsive"
                  height="150"
                  width="300"
                />
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="flex justify-center my-4 space-x-3"
              >
                <a
                  href={github_url}
                  className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                >
                  <AiFillGithub /> <span>Github</span>
                </a>
                <a
                  href={deployed_url}
                  className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                >
                  <AiFillProject /> <span>Project</span>
                </a>
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
                className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
              >
                {key_techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounde-sm"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>

            <motion.button
              variants={fadeInUp}
              onClick={() => setShowDetail(false)}
              className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
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
