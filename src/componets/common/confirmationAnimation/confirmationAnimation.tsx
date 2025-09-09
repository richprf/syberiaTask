// components/reservation/ConfirmationAnimation.tsx
import { FC, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

interface IProps {
  show: boolean;
  onClose: () => void;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const ConfirmationAnimation: FC<IProps> = ({ show, onClose , setStep }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
        setStep(1)
      }, 3000); // بعد از 3 ثانیه بسته شود
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="bg-white dark:bg-zinc-900 p-8 rounded-2xl flex flex-col items-center gap-4 shadow-lg"
          >
            <IoIosCheckmarkCircleOutline className="text-green-500" size={64} />
            <h2 className="text-xl font-bold">رزرو شما با موفقیت ثبت شد!</h2>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConfirmationAnimation;
