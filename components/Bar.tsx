import { motion } from "framer-motion";
import { FC } from "react";
import { barAnimate } from "../animations";
import { ISkill } from "../types";

const Bar: FC<ISkill> = ({ Icon, level, name }) => {
  const barLvl = `${level}%`;

  return (
    <div className="relative my-2 text-white bg-gray-300 rounded-full dark:bg-dark-200">
      <motion.div
        variants={barAnimate(barLvl)}
        initial="initial"
        animate="animate"
        className="flex items-center h-8 px-4 py-1 rounded-full ms-center reflex bg-gradient-to-r from-green to-blue-600"
      >
        <Icon className="mr-3" />
      </motion.div>
      <span className="absolute top-1 left-11">{name}</span>
    </div>
  );
};

export default Bar;
