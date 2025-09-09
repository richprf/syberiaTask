// components/reservation/PaymentStep.tsx
import { FC } from "react";
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

  const handleChange = (val: string) => dispatch(updateReservation({ cardNumber: val }));

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="p-4 border rounded-xl max-w-md space-y-4">
      <CardInput label="شماره کارت" value={cardNumber} onChange={handleChange} />

      <div className="flex justify-between pt-4">
        <button
          onClick={prevStep}
          className="flex items-center gap-1 border rounded-xl px-4 py-2"
        >
          <RiArrowLeftSLine /> مرحله قبل
        </button>
        <button
          onClick={nextStep}
          className="bg-green-400 rounded-xl px-4 py-2 text-white"
        >
          مرحله بعد
        </button>
      </div>
    </div>
  );
};

export default PaymentStep;
