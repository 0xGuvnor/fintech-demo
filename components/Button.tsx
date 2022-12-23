import { motion } from "framer-motion";

interface Props {
  styles?: string;
  text: string;
}

const Button = ({ styles, text }: Props) => {
  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-6 py-4 text-lg font-medium outline-none bg-gradient-to-tl from-teal-400 to-teal-100 text-neutral rounded-lg ${styles}`}
    >
      {text}
    </motion.button>
  );
};
export default Button;
