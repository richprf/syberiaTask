import { FC } from "react";
import { Slider, cn } from "@heroui/react";

interface PriceSliderProps {
  min: number;
  max: number;
  step?: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
}

const PriceSlider: FC<PriceSliderProps> = ({ min, max, step = 1, value, onChange }) => {
  return (
    <div className="pt-[26px] rounded-xl">
      <div className="flex justify-between">
        <span className="flex gap-4">
          <span className="text-[#878787]">قیمت از</span>
          <span className="font-bold">{value[0].toLocaleString()}</span>
        </span>
        <span className="flex gap-4">
          <span className="text-[#878787] text-sm">قیمت تا</span>
          <span className="font-bold">{value[1].toLocaleString()}</span>
        </span>
      </div>
      <Slider
        size="md"
        minValue={min}
        maxValue={max}
        step={step}
        value={value}
        onChange={(val) => {
          if (Array.isArray(val)) onChange([val[0], val[1]]);
        }}
        classNames={{
          base: "gap-3",
          filler:
            "bg-gradient-to-r from-pink-300 to-cyan-300 dark:from-pink-600 dark:to-cyan-800",
        }}
        renderThumb={({ index, ...props }) => (
          <div
            {...props}
            className={cn(
              "group p-1 top-1/2 bg-background border-small border-default-200 dark:border-default-400/50 shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing",
              index === 0
                ? "from-pink-200 to-pink-500 dark:from-pink-400 dark:to-pink-600"
                : "from-cyan-200 to-cyan-600 dark:from-cyan-600 dark:to-cyan-800"
            )}
          >
            <span className="transition-transform bg-gradient-to-br shadow-small rounded-full w-5 h-5 block group-data-[dragging=true]:scale-80" />
          </div>
        )}
      />
    </div>
  );
};

export default PriceSlider;
