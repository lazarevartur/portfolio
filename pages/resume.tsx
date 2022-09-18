import { motion } from "framer-motion";
import { fadeInUp, routeAnimate } from "../animations";

import Bar from "../src/components/Bar";
import { languages, tools } from "../data";

const Resume = () => {
  return (
    <motion.div
      variants={routeAnimate}
      initial="initila"
      animate="animate"
      exit="exit"
      className="px-6 py-2"
    >
      {/* {edu} */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Computer Science Engineering
            </h5>
            <p>Dnipro Industrial College (2010-2014)</p>
          </div>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Professional Training (React.js, JS)
            </h5>
            <p>
              <a href="pages/resume" rel="noreferrer" target="_blank">
                DevEducation (2020)
              </a>
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Front-End Developer 2021 - present
            </h5>
            <p>
              <a href="pages/resume" target="_blank" rel="noreferrer">
                Blaize
              </a>
            </p>
          </div>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Full Stack Developer 2019-2021
            </h5>
            <p>Mirax company</p>
          </div>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Full Stack Developer 2017-2018
            </h5>
            <p>Freelance</p>
          </div>
        </motion.div>
      </div>

      {/* {lang} */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-xl font-bold">Languages</h5>
          <div className="my-2">
            {languages.map((item, index) => (
              <Bar {...item} key={index} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((item, index) => (
              <Bar {...item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
