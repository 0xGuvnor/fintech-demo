import { stats } from "../constants";
import { motion } from "framer-motion";
import { statItem, container } from "../utils/motion";

const Stats = () => {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex flex-wrap items-center justify-center mb-6 sm:mb-20"
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.id}
          variants={statItem}
          className="flex items-center justify-start flex-1 m-3"
        >
          <h4 className="text-3xl font-semibold text-white sm:text-4xl sm:leading-[52px] leading-[43px]">
            {stat.value}
          </h4>
          <p className="text-lg sm:text-xl sm:leading-[26px] leading-[21px] uppercase ml-3 bg-gradient-to-r from-teal-300 to-white text-transparent bg-clip-text">
            {stat.title}
          </p>
        </motion.div>
      ))}
    </motion.section>
  );
};
export default Stats;
