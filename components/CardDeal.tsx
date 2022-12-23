import { motion } from "framer-motion";
import Image from "next/image";
import { cardImgVariant } from "../utils/motion";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className="flex flex-col items-center justify-center py-6 md:flex-row sm:py-16">
      <div className="flex flex-col items-start justify-center flex-1">
        <h2 className="font-semibold sm:text-5xl text-4xl text-primary-content sm:leading-[76.8px] leading-[66.8px] w-full">
          Find a better card deal <br className="hidden sm:block" /> in a few
          simple steps.
        </h2>
        <p className="max-w-lg mt-5 text-lg leading-8 text-neutral-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quidem
          doloribus deleniti, sunt vel velit fuga. Quis maiores veniam deserunt
          ducimus sapiente laborum soluta, amet a dignissimos vel labore ipsam?
        </p>
        <Button text="Apply now" styles="mt-10" />
      </div>

      <div className="flex items-center justify-center flex-1 mt-5 md:mt-0">
        <motion.div
          variants={cardImgVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.8 }}
          className="relative flex-1 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px]"
        >
          <Image
            src="/card.png"
            alt="Card Graphic"
            fill
            className="object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};
export default CardDeal;
