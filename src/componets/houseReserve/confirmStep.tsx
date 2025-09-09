// components/houseReserve/ConfirmationStep.tsx
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

  // تبدیل تاریخ‌ها به Date واقعی
  const startDate = reservation.startDate ? new Date(reservation.startDate) : null;
  const endDate = reservation.endDate ? new Date(reservation.endDate) : null;

  const handleSubmit = () => {
    // ارسال اطلاعات به سرور یا درگاه پرداخت
    console.log("ارسال اطلاعات رزرو:", reservation);

    alert("رزرو با موفقیت ثبت شد!");

    // ریست کردن فرم
    dispatch(resetReservation());
    setStep(1);
  };

  const prevStep = () => setStep(step - 1);

  return (
    <div className="p-6 max-w-md mx-auto border rounded-xl bg-white dark:bg-zinc-800">
      <h2 className="text-xl font-bold mb-4">تایید نهایی رزرو</h2>
      <ul className="space-y-2 text-gray-700 dark:text-gray-200">
        <li><strong>نام و نام خانوادگی:</strong> {reservation.name}</li>
        <li><strong>ایمیل:</strong> {reservation.email}</li>
        <li><strong>شماره تلفن:</strong> {reservation.phone}</li>
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

      <div className="flex justify-between mt-6 gap-4">
        <button
          onClick={prevStep}
          className="flex items-center gap-1 border px-4 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-zinc-700"
        >
          <RiArrowLeftSLine />
          مرحله قبل
        </button>

        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white px-6 py-2 rounded-xl hover:bg-green-600"
        >
          ثبت نهایی رزرو
        </button>
      </div>
    </div>
  );
};

export default ConfirmationStep;
