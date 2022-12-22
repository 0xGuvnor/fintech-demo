import Image from "next/image";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className="flex items-start justify-center">
      <div className="w-full lg:max-w-7xl">
        <div className="flex flex-col py-6 md:flex-row sm:py-16">
          <div className="flex flex-col items-start justify-center flex-1 px-6 sm:px-16 xl:px-0">
            <div className="flex py-1.5 items-center mb-2 px-4 rounded-xl bg-discount-gradient">
              <img
                src="/Discount.svg"
                alt="Discount Icon"
                className="w-8 h-8"
              />
              <div className="ml-2 leading-8 whitespace-pre text-neutral-content">
                <span className="text-accent">20%</span> Discount for{" "}
                <span className="text-accent">1 Month</span> Accounts
              </div>
            </div>

            <div className="flex items-center justify-between w-full">
              <h1 className="flex-1 text-5xl font-semibold leading-[75px] sm:leading-[100.8px] text-white sm:text-7xl">
                The Next <br className="hidden sm:block" />
                <span className="text-transparent bg-gradient-to-tr from-teal-500 via-teal-200 to-teal-100 bg-clip-text">
                  Generation
                </span>
              </h1>

              <div className="hidden mr-0 md:mr-4 sm:flex">
                <GetStarted />
              </div>
            </div>

            <h1 className="w-full text-5xl font-semibold leading-[75px] sm:leading-[100.8px] text-white sm:text-7xl">
              Payment Method.
            </h1>
            <p className="max-w-lg mt-5 text-lg leading-8 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, beatae veritatis maxime voluptas nobis id. Rerum,
              error atque nulla quam dolore veritatis excepturi nisi, quis
              blanditiis itaque, temporibus eum eos?
            </p>
          </div>

          <div className="relative flex items-center justify-center flex-1 my-10 md:my-0">
            <img
              src="/robot.png"
              alt="Robot Hand"
              className="relative z-40 w-full h-full"
            />
            <div className="absolute z-0 w-2/5 h-[35%] top-0 pink__gradient"></div>
            <div className="absolute z-10 w-4/5 rounded-full h-4/5 bottom-40 white__gradient"></div>
            <div className="absolute z-20 w-1/2 h-1/2 bottom-20 right-20 blue__gradient"></div>
          </div>

          <div className="flex items-center justify-center sm:hidden">
            <GetStarted />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
