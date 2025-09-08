import { FC, useState } from "react";
import { motion } from "framer-motion";

interface DestinationInputProps {
  value: string;
  onChange: (value: string) => void;
}

const DestinationInput: FC<DestinationInputProps> = ({ value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.02 }}
      animate={{ scale: isFocused ? 1.03 : 1 }}
      className="w-full relative"
    >
      <input
        type="text"
        value={value}
        className={`
          w-full
          border-2 
          rounded-xl 
          p-3
          transition-all 
          duration-300
          outline-none
          ${isFocused ? "border-blue-500 shadow-lg" : "border-gray-300"}
          text-black
          placeholder-gray-400
        `}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => onChange(e.target.value)}
      />
      <motion.label
        initial={{ y: 0, opacity: 0 }}
        animate={{
          y: value ? -24 : 0,
          opacity: value ? 1 : 0.5,
        }}
        className="absolute left-3 top-3 text-gray-500 text-sm pointer-events-none"
      >
        Destination
      </motion.label>
    </motion.div>
  );
};

export default DestinationInput;
