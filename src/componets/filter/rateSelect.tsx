import { FC, useState } from "react";
import { motion } from "framer-motion";

interface RateSelectProps {
  value: number | null;
  onChange: (value: number) => void;
}

const RateSelect: FC<RateSelectProps> = ({ value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.02 }}
      animate={{ scale: isFocused ? 1.03 : 1 }}
      className="w-full relative"
    >
      <select
        value={value ?? 0}
        onChange={(e) => onChange(Number(e.target.value))}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`
          w-full
          border-2
          rounded-xl
          p-3
          text-black
          placeholder-gray-400
          transition-all
          duration-300
          outline-none
          ${isFocused ? "border-blue-500 shadow-lg" : "border-gray-300"}
          bg-white dark:bg-gray-800
        `}
      >
        <option value={0}>Any</option>
        <option value={20}>20+</option>
        <option value={40}>40+</option>
        <option value={60}>60+</option>
        <option value={80}>80+</option>
        <option value={100}>100</option>
      </select>
      <motion.label
        initial={{ y: 0, opacity: 0 }}
        animate={{
          y: value ? -24 : 0,
          opacity: value ? 1 : 0.5,
        }}
        className="absolute left-3 top-3 text-gray-500 text-sm pointer-events-none"
      >
        Minimum Rate
      </motion.label>
    </motion.div>
  );
};

export default RateSelect;

