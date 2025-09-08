import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Select,
  SelectItem,
  Slider,
  cn,
} from "@heroui/react";

import { useDispatch } from "react-redux";
import { IoTrashOutline } from "react-icons/io5";
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { setFilters } from "@/redux/slices/houseSlice";
import { useAppSelector } from "@/redux/hooks";

export default function App() {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000000]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const dispatch = useDispatch();
  const { filters, filteredHouses } = useAppSelector((state) => state.houses);

  const buttonRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);

  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (!rect) return;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const offestX = mouseX - centerX;
    const offestY = mouseY - centerY;

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

  const handleFilterChange = (field: string, value: any) => {
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
            {" "}
            فیلتر ها{" "}
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
              <div className="flex justify-between pl-9  ">
                <ModalHeader className="flex flex-col gap-1 ">
                  فیلتر ها
                </ModalHeader>
                <div className="flex gap-1 text-red-500">
                  <IoTrashOutline className="mt-[18px]" size={18} />
                </div>
              </div>
              <ModalBody>
                <div className="flex gap-8 bg-gray-700">
                  <input
                    type="text"
                    placeholder="Destination"
                    className="border p-2 rounded flex-1"
                    onChange={(e) =>
                      handleFilterChange("destination", e.target.value)
                    }
                  />
                </div>
                <div className="pt-[26px] rounded-xl">
                  <div className="flex justify-between">
                    <span className="flex gap-4">
                      <span className="text-[#878787] "> قیمت از </span>{" "}
                      <span className="font-bold">
                        {" "}
                        {priceRange[0].toLocaleString()}{" "}
                      </span>
                    </span>
                    <span className="flex gap-4">
                      <span className="text-[#878787] text-sm"> قیمت تا </span>
                      <span className="font-bold">
                        {" "}
                        {priceRange[1].toLocaleString()}
                      </span>
                    </span>
                  </div>
                  <Slider
                    size="md"
                    minValue={0}
                    maxValue={2000} // اگر حداکثر قیمت 2,000,000 هست، تقسیم بر 1000 کردیم
                    step={1}
                    defaultValue={[0, 2000]}
                    onChange={(value: number | number[]) => {
                      if (Array.isArray(value)) {
                        setPriceRange([value[0], value[1]]);
                        handleFilterChange("minPrice", value[0]);
                        handleFilterChange("maxPrice", value[1]);
                      } else {
                        handleFilterChange("maxPrice", value);
                      }
                    }}
                    classNames={{
                      base: "gap-3",
                      filler:
                        "bg-gradient-to-r from-pink-300 to-cyan-300 dark:from-pink-600 dark:to-cyan-800",
                    }}
                    renderThumb={({ index, ...props }) => (
                      <div
                        {...props}
                        className="group p-1 top-1/2 bg-background border-small border-default-200 dark:border-default-400/50 shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
                      >
                        <span
                          className={cn(
                            "transition-transform bg-gradient-to-br shadow-small rounded-full w-5 h-5 block group-data-[dragging=true]:scale-80",
                            index === 0
                              ? "from-pink-200 to-pink-500 dark:from-pink-400 dark:to-pink-600"
                              : "from-cyan-200 to-cyan-600 dark:from-cyan-600 dark:to-cyan-800"
                          )}
                        />
                      </div>
                    )}
                  />
                </div>
                <div className="flex gap-8 pt-[28px]">
                <select
  value={filters.minRate ?? 0}
  onChange={(e) =>
    handleFilterChange("minRate", Number(e.target.value))
  }
>
  <option value={0}>Any</option>
  <option value={20}>20+</option>
  <option value={40}>40+</option>
  <option value={60}>60+</option>
  <option value={80}>80+</option>
  <option value={100}>100</option>
</select>



                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                {/* <Button color="primary" onPress={onClose}>
                  Action
                </Button> */}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
