import { motion } from "framer-motion";
import Image from "next/image";
import { clients } from "../constants";

const Clients = () => {
  return (
    <section className="flex items-center justify-center my-4">
      <div className="flex flex-wrap items-center justify-center w-full space-y-1 md:space-y-0">
        {clients.map((client) => (
          <div
            key={client.id}
            className="flex items-center justify-center flex-1 sm:min-w-[200px] min-w-[120px] hover:bg-neutral p-4 rounded-2xl hover:scale-110 transition duration-300 ease-in-out"
          >
            <Image
              src={client.logo}
              alt="Client Logo"
              width={200}
              height={200}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
export default Clients;
