import { AppProps } from "next/app";
import Sidebar from "../../Sidebar";
import Navbar from "../../Navbar";
import { AnimatePresence } from "framer-motion";

const MainLayout = ({ Component, pageProps, router }: AppProps) => (
  <div className="grid grid-cols-12 gap-6 px-5 lg:px-48 my-14 sm:px-30 md:px-32">
    <div className="col-span-12 p-4 text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
      <Sidebar />
    </div>
    <div className="flex flex-col col-span-12 overflow-hidden bg-white dark:bg-dark-500 lg:col-span-9 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </div>
  </div>
);

export default MainLayout