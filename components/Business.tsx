import Image from "next/image";
import { features } from "../constants";
import Button from "./Button";

interface Props {
  id: string;
  icon: any;
  title: string;
  content: string;
  index: number;
}

const Business = () => {
  return (
    <section id="features" className="flex flex-col py-6 md:flex-row sm:py-16">
      <div className="flex flex-col items-start justify-center flex-1">
        <h2 className="font-semibold sm:text-5xl text-4xl text-white sm:leading-[76.8px] leading-[66.8px] w-full">
          You do the business, <br className="hidden sm:block" />
          we'll handle the money.
        </h2>
        <p className="max-w-md mt-5 text-lg leading-8 text-gray-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
          suscipit, consequuntur nobis tenetur iure eos quasi. Deleniti,
          blanditiis dignissimos est sunt necessitatibus ut voluptas eaque
          laudantium sit architecto possimus quidem.
        </p>
        <Button text="Get Started" styles="mt-10" />
      </div>

      <div className="relative flex flex-col items-center justify-center flex-1 mt-10 ml-0 md:ml-10 md:mt-0">
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};
export default Business;

const FeatureCard = ({ icon, title, content, index }: Props) => {
  return (
    <div className="flex p-6 rounded-3xl hover:bg-base-300">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-neutral">
        <Image src={icon} alt="Icon" width={24} height={24} />
      </div>
      <div className="flex flex-col flex-1 ml-3">
        <h4 className="mb-1 text-lg font-semibold leading-6 text-primary-content">
          {title}
        </h4>
        <p className="text-base leading-6 text-neutral-content">{content}</p>
      </div>
    </div>
  );
};
