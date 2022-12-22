import { motion } from "framer-motion";

const GetStarted = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center justify-center p-[2px] rounded-full cursor-pointer w-36 h-36 bg-gradient-to-tl from-teal-500 to-teal-100"
    >
      <div className="flex flex-col items-center justify-center w-full h-full rounded-full bg-neutral-focus">
        <div className="flex items-start justify-center -ml-2">
          <p className="text-lg font-medium leading-6">
            <span className="text-transparent bg-gradient-to-tr from-teal-500 via-teal-200 to-teal-100 bg-clip-text">
              Get
            </span>
          </p>
          <img
            src="/arrow-up.svg"
            alt="Arrow"
            className="object-contain w-6 h-6"
          />
        </div>

        <p className="text-lg font-medium leading-6">
          <span className="text-transparent bg-gradient-to-tr from-teal-500 via-teal-200 to-teal-100 bg-clip-text">
            Started
          </span>
        </p>
      </div>
    </motion.div>
  );
};
export default GetStarted;
