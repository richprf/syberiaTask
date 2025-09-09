import { FC } from "react";
import { DateRange } from "react-date-range";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/types";
import { updateReservation } from "@/redux/slices/reservationSlice";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { RiArrowLeftSLine } from "react-icons/ri";

interface TravelDateStepProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const TravelDateStep: FC<TravelDateStepProps> = ({ step, setStep }) => {
  const dispatch = useDispatch();
  const { startDate, endDate } = useSelector(
    (state: RootState) => state.reservation
  );

  // اطمینان از اینکه تاریخ‌ها همیشه Date هستند
  const safeStartDate = startDate ? new Date(startDate) : new Date();
  const safeEndDate = endDate ? new Date(endDate) : new Date();

  const handleSelect = (ranges: any) => {
    dispatch(
      updateReservation({
        startDate: new Date(ranges.selection.startDate),
        endDate: new Date(ranges.selection.endDate),
      })
    );
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="max-w-md mx-auto p-4 border rounded-xl">
      <h3 className="mb-4 font-bold text-lg">تاریخ سفر خود را انتخاب کنید</h3>
      <DateRange
        ranges={[
          {
            startDate: safeStartDate,
            endDate: safeEndDate,
            key: "selection",
          },
        ]}
        onChange={handleSelect}
        moveRangeOnFirstSelection={false}
        rangeColors={["#3b82f6"]}
      />

      {startDate && endDate && (
        <p className="mt-2 text-gray-700">
          انتخاب شده: {safeStartDate.toLocaleDateString()} - {safeEndDate.toLocaleDateString()}
        </p>
      )}

      <div className="flex justify-between mt-6 gap-4">
        <button
          onClick={prevStep}
          className="flex items-center gap-1 border border-gray-700 rounded-xl px-4 py-2 hover:bg-gray-100"
        >
          مرحله قبل
          <RiArrowLeftSLine />
        </button>
        <button
          onClick={nextStep}
          className="flex items-center gap-1 bg-green-400 text-white rounded-xl px-4 py-2 hover:bg-green-500"
        >
          مرحله بعد
          <RiArrowLeftSLine />
        </button>
      </div>
    </div>
  );
};

export default TravelDateStep;
