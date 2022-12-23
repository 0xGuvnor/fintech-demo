import Image, { StaticImageData } from "next/image";

interface Props {
  id: string;
  content: string;
  name: string;
  title: string;
  img: StaticImageData;
}

const FeedbackCard = ({ content, name, title, img }: Props) => {
  return (
    <div className="flex flex-col justify-between max-w-sm px-10 py-12 transition duration-300 ease-in-out rounded-2xl hover:bg-gradient-to-tl from-zinc-900/50 to-zinc-700/50 hover:scale-110">
      <Image src="/quotes.svg" alt="Quote Bubble" width={42} height={27} />
      <p className="my-10 text-lg leading-8 text-primary-content">{content}</p>
      <div className="flex items-center">
        <Image
          src={img}
          alt={name}
          width={48}
          height={48}
          className="rounded-full"
        />
        <div className="flex flex-col ml-4">
          <h4 className="text-xl font-semibold leading-8 text-primary-content">
            {name}
          </h4>
          <p className="leading-6 text-neutral-content">{title}</p>
        </div>
      </div>
    </div>
  );
};
export default FeedbackCard;
