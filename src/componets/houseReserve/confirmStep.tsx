import { useState, FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/types";
import { resetReservation } from "@/redux/slices/reservationSlice";
import { RiArrowLeftSLine } from "react-icons/ri";
import ConfirmationAnimation from "../common/confirmationAnimation/confirmationAnimation";
import { addReservation } from "@/redux/slices/userReservationsSlice";

interface Iprops {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const ConfirmationStep: FC<Iprops> = ({ step, setStep }) => {
  const [showAnimation, setShowAnimation] = useState(false);
  const dispatch = useDispatch();
  const reservation = useSelector((state: RootState) => state.reservation);
  const selectedHouse = useSelector(
    (state: RootState) => state.houseDetail.house
  );

  const startDate = reservation.startDate
    ? new Date(reservation.startDate)
    : null;
  const endDate = reservation.endDate ? new Date(reservation.endDate) : null;

  const handleSubmit = () => {
    dispatch(
      addReservation({
        house: selectedHouse,
        startDate: startDate?.toISOString() || "",
        endDate: endDate?.toISOString() || "",
        status: "confirmed",
      })
    );
    setShowAnimation(true);

    dispatch(resetReservation());
  };

  const prevStep = () => setStep(step - 1);

  return (
    <div className=" bg-zinc-800">
      <h2 className="text-xl font-bold mb-4">تایید نهایی رزرو</h2>
      <ul className="space-y-2 text-gray-200 p-5">
        <li>
          <strong>نام و نام خانوادگی:</strong> {reservation.name}
        </li>
        <li>
          <strong>ایمیل:</strong> {reservation.email}
        </li>
        <li>
          <strong>شماره تلفن:</strong> {reservation.phone}
        </li>
        <li>
          <strong>تاریخ سفر:</strong>{" "}
          {startDate ? startDate.toLocaleDateString() : "-"} -{" "}
          {endDate ? endDate.toLocaleDateString() : "-"}
        </li>
        <li>
          <strong>شماره کارت:</strong>{" "}
          {reservation.cardNumber
            ? `**** **** **** ${reservation.cardNumber.slice(-4)}`
            : "-"}
        </li>
      </ul>

      <div className="flex justify-between mt-6 gap-4 ">
        <button
          onClick={prevStep}
          className="flex items-center gap-1 border px-4 py-2 rounded-xl hover:bg-zinc-700"
        >
          <RiArrowLeftSLine />
          مرحله قبل
        </button>

        <div>
          <button
            className="bg-green-400 text-white px-4 py-2 rounded"
            onClick={handleSubmit}
          >
            ثبت نهایی رزرو
          </button>

          <ConfirmationAnimation
            setStep={setStep}
            show={showAnimation}
            onClose={() => setShowAnimation(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmationStep;
