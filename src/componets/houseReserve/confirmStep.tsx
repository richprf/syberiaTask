import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/types";
import { resetReservation } from "@/redux/slices/reservationSlice";
import { RiArrowLeftSLine } from "react-icons/ri";

interface Iprops {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const ConfirmationStep: FC<Iprops> = ({ step, setStep }) => {
  const dispatch = useDispatch();
  const reservation = useSelector((state: RootState) => state.reservation);

  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = () => {
    console.log("Reservation submitted:", reservation);
    alert("رزرو با موفقیت ثبت شد!");
    dispatch(resetReservation());
    setStep(1);
  };

  return (
    <div className="p-6 border rounded-xl max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">تایید نهایی رزرو</h2>

      <div className="mb-4">
        <h3 className="font-semibold">اطلاعات کاربر</h3>
        <p>نام: {reservation.name}</p>
        <p>ایمیل: {reservation.email}</p>
        <p>تلفن: {reservation.phone}</p>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">تاریخ سفر</h3>
        <p>
          {reservation.startDate
            ? new Date(reservation.startDate).toLocaleDateString()
            : "-"}{" "}
          تا{" "}
          {reservation.endDate
            ? new Date(reservation.endDate).toLocaleDateString()
            : "-"}
        </p>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">پرداخت</h3>
        <p>
          شماره کارت: **** **** ****{" "}
          {reservation.cardNumber.slice(-4) || "0000"}
        </p>
      </div>

      <div className="flex justify-between gap-4 mt-6">
        <button
          onClick={prevStep}
          className="flex gap-2 items-center border border-black px-4 py-2 rounded-xl"
        >
          <RiArrowLeftSLine />
          مرحله قبل
        </button>

        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white px-6 py-2 rounded-xl hover:bg-green-600 transition"
        >
          ثبت نهایی رزرو
        </button>
      </div>
    </div>
  );
};

export default ConfirmationStep;
