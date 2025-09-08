"use client";
import { FC, useRef, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { IoTrashOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { setFilters } from "@/redux/slices/houseSlice";
import { motion, useMotionValue, useSpring } from "framer-motion";
import DestinationInput from "./destinationInput";
import PriceSlider from "./priceSlider";
import RateSelect from "./rateSelect";


const FilterModal: FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const dispatch = useDispatch();
  const buttonRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000000]);
  const [destination, setDestination] = useState("");
  const [rate, setRate] = useState<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (!rect) return;
    const offestX = e.clientX - (rect.left + rect.width / 2);
    const offestY = e.clientY - (rect.top + rect.height / 2);
    const distance = Math.sqrt(offestX ** 2 + offestY ** 2);
    if (distance < 150) {
      x.set(offestX * 0.6);
      y.set(offestY * 0.6);
    }
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const applyFilterChange = (field: string, value: any) => {
    dispatch(setFilters({ [field]: value }));
  };

  return (
    <>
      <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <motion.div
          ref={buttonRef}
          style={{ x: springX, y: springY }}
          className="sticky top-0"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          drag
          dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
          whileDrag={{ scale: 1.05, rotate: 2 }}
        >
          <Button
            color="primary"
            className="rounded-[100px]"
            onPress={onOpen}
            size="lg"
          >
            فیلتر ها
          </Button>
        </motion.div>
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="2xl"
        className="pr-[56px] pl-[36px]"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <div className="flex justify-between pl-9">
                <ModalHeader className="flex flex-col gap-1">فیلتر ها</ModalHeader>
                <div className="flex gap-1 text-red-500">
                  <IoTrashOutline className="mt-[18px]" size={18} />
                </div>
              </div>
              <ModalBody className="flex flex-col gap-6">
                <DestinationInput
                  value={destination}
                  onChange={(val) => {
                    setDestination(val);
                    applyFilterChange("destination", val);
                  }}
                />
                <PriceSlider
                  min={0}
                  max={2000}
                  value={priceRange}
                  onChange={(val) => {
                    setPriceRange(val);
                    applyFilterChange("minPrice", val[0]);
                    applyFilterChange("maxPrice", val[1]);
                  }}
                />
                <RateSelect
                  value={rate}
                  onChange={(val) => {
                    setRate(val);
                    applyFilterChange("minRate", val);
                  }}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default FilterModal;
