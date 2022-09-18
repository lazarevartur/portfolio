import { motion } from "framer-motion";
import React, { FC } from "react";
import { fadeInUp } from "../../animations";
import { IServices } from "../types";

interface ServiceCardProps {
  services: IServices;
}

const ServiceCard: FC<ServiceCardProps> = ({ services }) => {
  const { Icon, about, title } = services;

  const createMarkUp = () => ({
    __html: about,
  });

  return (
    <motion.div
      variants={fadeInUp}
      className="bg-gray-200 rounded-lg dark:bg-dark-300 lg:col-span-1"
    >
      <div className="flex items-center p-2 space-x-4">
        <Icon className="w-12 h-12 text-green" />{" "}
        <div>
          <h4 className="font-bold">{title}</h4>
          <p dangerouslySetInnerHTML={createMarkUp()} />
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
