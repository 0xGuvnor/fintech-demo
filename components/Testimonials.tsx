import { motion } from "framer-motion";
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <section
      id="clients"
      className="relative flex flex-col items-center justify-center w-full py-6 sm:py-16"
    >
      <div className="absolute z-0 w-3/5 h-3/5 -right-[50%] rounded-full blue__gradient"></div>

      <div className="relative z-10 flex flex-col items-center justify-between w-full mb-6 md:flex-row sm:mb-16">
        <h1 className="font-semibold sm:text-5xl text-4xl text-primary-content sm:leading-[76.8px] leading-[66.8px] w-full">
          What people are <br className="hidden sm:block" /> saying about us.
        </h1>
        <div className="w-full mt-6 md:mt-0">
          <p className="text-left max-w-md text-neutral-content text-lg leading-[30.8px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
            nulla provident quibusdam enim aliquam ipsa veritatis.
          </p>
        </div>
      </div>

      <div className="relative z-10 flex flex-wrap justify-between w-full space-x-2 space-y-1 sm:justify-start">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};
export default Testimonials;
