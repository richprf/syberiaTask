import { FC } from "react";
import { motion } from "framer-motion";
import { HouseProps } from "@/types/house";
import HouseCardImage from "./houseCardImage";
import HouseCardInfo from "./housreCardInfo";

interface Props {
  house: HouseProps;
}

const HouseCard: FC<Props> = ({ house }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        rotate: 1,
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        backgroundColor: "#7575fefe",
      }}
      transition={{ type: "spring", stiffness: 100, damping: 15, mass: 0.8 }}
      className="rounded-2xl overflow-hidden shadow-md dark:bg-zinc-800 dark:border dark:border-zinc-600"
    >
      <HouseCardImage house={house} />
      <HouseCardInfo house={house} />
    </motion.div>
  );
};

export default HouseCard;
