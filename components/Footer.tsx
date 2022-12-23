import Image from "next/image";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className="flex flex-col items-center justify-center py-6 sm:py-16">
      <div className="flex flex-col items-start justify-center w-full mb-8 md:flex-row">
        <div className="flex flex-col justify-start flex-1 mr-10">
          <Image src="/logo.svg" alt="Hoobank Logo" width={266} height={72} />
          <p className="max-w-xs mt-4 text-lg leading-7 text-neutral-content">
            A new paradigm for easy, reliable, and secure payments.
          </p>
        </div>

        <div className="flex-[1.5] w-full flex justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.title}
              className="flex flex-col sm:my-0 my-4 min-w-[150px] space-y-2"
            >
              <h4 className="text-lg font-medium leading-7 text-primary-content">
                {footerLink.title}
              </h4>
              <ul className="space-y-2">
                {footerLink.links.map((link) => (
                  <li
                    key={link.name}
                    className="leading-6 cursor-pointer text-neutral-content hover:text-accent"
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between w-full md:flex-row flex-col pt-6 border-t border-t-[#3f3e45]">
        <p className="text-lg leading-7 text-center text-primary-content">
          2022 © HooBank. All Rights Reserved.
        </p>
        <div className="flex mt-6 space-x-4 md:mt-0">
          {socialMedia.map((social) => (
            <Image
              key={social.id}
              src={social.icon}
              alt="Social Media Icon"
              width={21}
              height={21}
              className="cursor-pointer"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Footer;
