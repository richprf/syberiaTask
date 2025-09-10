import { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/types";
import { updateReservation } from "@/redux/slices/reservationSlice";
import { RiArrowLeftSLine } from "react-icons/ri";
import CardInput from "../common/input/cardInput";

interface Iprops {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const PaymentStep: FC<Iprops> = ({ step, setStep }) => {
  const dispatch = useDispatch();
  const { cardNumber } = useSelector((state: RootState) => state.reservation);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (val: string) =>
    dispatch(updateReservation({ cardNumber: val }));

  useEffect(() => {
    if (!cardNumber) setError("شماره کارت نمی‌تواند خالی باشد");
    else if (cardNumber.length < 16 || cardNumber.length > 16 ) setError("شماره کارت معتبر نیست");
    else setError(null);
  }, [cardNumber]);

  const nextStep = () => {
    if (!error) setStep(step + 1);
  };
  const prevStep = () => setStep(step - 1);

  return (
    <div className="">
      <CardInput
        label="شماره کارت"
        value={cardNumber}
        onChange={handleChange}
        error={error}
      />

      <div className="flex justify-between pt-4">
        <button
          onClick={prevStep}
          className="flex items-center gap-1 border rounded-xl px-4 py-2"
        >
          <RiArrowLeftSLine /> مرحله قبل
        </button>
        <button
          onClick={nextStep}
          disabled={!!error}
          className={`bg-green-400 rounded-xl px-4 py-2 text-white ${
            error
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-400 hover:bg-green-500"
          }`}
        >
          مرحله بعد
        </button>
      </div>
    </div>
  );
};

export default PaymentStep;
