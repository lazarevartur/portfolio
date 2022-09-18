import {motion} from "framer-motion";
import {routeAnimate, stagger} from "../animations";
import ServiceCard from "../src/components/ServiceCard";
import {services} from "../data";

const Index = () => {
  return (
    <motion.div
      variants={routeAnimate}
      initial="initila"
      animate="animate"
      exit="exit"
      className="flex flex-col flex-grow px-6 pt-1"
    >
      <h1 className={"my-3 font-medium"}>
        Creative, highly motivated front-end developer with experience in website design. Have experience in web
        application development with client-side frameworks. Developed and maintained large React/Next.js/Redux applications and
        have experience in many other technologies such as NodeJS, Databases, Tools, and Services.
      </h1>
      <div className="flex-grow p-4 mt-5 -ml-6 -mr-6 bg-gray-400 dark:bg-dark">
        <h6 className="my-3 text-xl font-bold tracking-wide">What I offer</h6>
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="grid gap-6 lg:grid-cols-2"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} services={service} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Index;

// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   const res = await fetch("http://localhost:3000/api/services");
//   const data = await res.json();
//   console.log(data, "SERVER");

//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };

// export const getStaticProps = async (context: GetStaticProps) => {
//   const res = await fetch("http://localhost:3000/api/services");
//   const data = await res.json();
//   console.log(data, "SERVER");

//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };
