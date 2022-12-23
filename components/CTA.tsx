import Button from "./Button";

const CTA = () => {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-4 my-6 shadow-lg sm:my-16 sm:px-16 sm:py-12 sm:flex-row bg-black-gradient-2 rounded-2xl">
      <div className="flex flex-col flex-1">
        <h2 className="font-semibold sm:text-5xl text-4xl text-primary-content sm:leading-[76.8px] leading-[66.8px] w-full">
          What are you waiting for!
        </h2>
        <p className="max-w-lg mt-5 text-lg leading-8 text-neutral-content">
          Join us today for everything you need to accept card payments and grow
          your business anywhere on the planet.
        </p>
      </div>

      <div className="flex items-center justify-center flex-1 max-w-md mt-5 ml-0 sm:ml-10 sm:mt-0">
        <Button text="Join today" styles="flex flex-1 justify-center" />
      </div>
    </section>
  );
};
export default CTA;
