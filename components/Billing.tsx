import Image from "next/image";
import { motion } from "framer-motion";
import { billingImgVariant } from "../utils/motion";

const Billing = () => {
  return (
    <section
      id="products"
      className="flex flex-col-reverse py-6 md:flex-row sm:py-16"
    >
      <div className="relative flex items-center justify-center flex-1 mt-5 mr-0 md:mr-10 md:mt-0">
        <motion.div
          variants={billingImgVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.8 }}
          className="relative z-30 flex-1 w-[420px] h-[420px] md:h-[550px] md:w-[550px]"
        >
          <Image
            src="/bill.png"
            alt="Billing"
            fill
            className="object-contain"
          />
        </motion.div>
        <div className="absolute top-0 z-10 w-1/2 rounded-full -left-1/2 h-1/2 white__gradient"></div>
        <div className="absolute bottom-0 z-0 w-1/2 rounded-full -left-1/2 h-1/2 pink__gradient"></div>
      </div>

      <div className="flex flex-col items-start justify-center flex-1">
        <h2 className="font-semibold sm:text-5xl text-4xl text-primary-content sm:leading-[76.8px] leading-[66.8px] w-full">
          Easily control your <br className="hidden sm:block" />
          billing & invoicing.
        </h2>
        <p className="max-w-lg mt-5 text-lg leading-8 text-neutral-content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui veniam
          eius quidem repellendus neque beatae molestiae. Corrupti quibusdam
          soluta quaerat repudiandae, repellendus distinctio doloremque id
          placeat neque dolorem assumenda quam.
        </p>

        <div className="flex flex-wrap mt-6 space-x-4 sm:mt-10">
          <Image
            src="/apple.svg"
            alt="Apple App Store"
            width={128.86}
            height={42.05}
            className="cursor-pointer"
          />
          <Image
            src="/google.svg"
            alt="Google Play Store"
            width={128.86}
            height={42.05}
            className="cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};
export default Billing;
