import { FC, useMemo } from "react";
import { DateRange } from "react-date-range";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/types";
import { updateReservation } from "@/redux/slices/reservationSlice";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { RiArrowLeftSLine } from "react-icons/ri";

interface Iprops {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const TravelDatePicker: FC<Iprops> = ({ step, setStep }) => {
  const dispatch = useDispatch();
  const { startDate, endDate } = useSelector(
    (state: RootState) => state.reservation
  );

  const start = useMemo(
    () => (startDate ? new Date(startDate) : new Date()),
    [startDate]
  );
  const end = useMemo(
    () => (endDate ? new Date(endDate) : new Date()),
    [endDate]
  );

  const handleSelect = (ranges: any) => {
    dispatch(
      updateReservation({
        startDate: ranges.selection.startDate,
        endDate: ranges.selection.endDate,
      })
    );
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="max-w-md mx-auto p-4 border rounded-xl space-y-4">
      <h3 className="text-lg font-bold mb-2">تاریخ سفر</h3>
      <DateRange
        ranges={[
          {
            startDate: start,
            endDate: end,
            key: "selection",
          },
        ]}
        onChange={handleSelect}
        moveRangeOnFirstSelection={false}
        rangeColors={["#3b82f6"]}
      />

      {startDate && endDate && (
        <div className="mt-2 text-gray-700">
          انتخاب شده:{" "}
          <span className="font-semibold">
            {new Date(startDate).toLocaleDateString()} -{" "}
            {new Date(endDate).toLocaleDateString()}
          </span>
        </div>
      )}

      <div className="flex justify-between gap-4 pt-6">
        <button
          onClick={prevStep}
          className="flex items-center gap-2 border border-black px-3 py-2 rounded-xl"
        >
          مرحله قبل <RiArrowLeftSLine className="mt-1" />
        </button>
        <button
          onClick={nextStep}
          className="flex items-center gap-2 bg-[#8cff45] px-3 py-2 rounded-xl"
        >
          مرحله بعد <RiArrowLeftSLine className="mt-1" />
        </button>
      </div>
    </div>
  );
};

export default TravelDatePicker;
