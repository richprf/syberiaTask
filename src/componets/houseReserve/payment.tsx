import { FC, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/types";
import { updateReservation } from "@/redux/slices/reservationSlice";
import { RiArrowLeftSLine } from "react-icons/ri";
import { Input } from "@heroui/react";

interface Iprops {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const PaymentStep: FC<Iprops> = ({ step, setStep }) => {
  const dispatch = useDispatch();
  const { cardNumber } = useSelector((state: RootState) => state.reservation);
  const [cardInput, setCardInput] = useState(cardNumber);

  const maskedCard = useMemo(() => {
    const digits = cardInput.replace(/\D/g, "");
    const masked = digits
      .split("")
      .map((c, i) => (i < digits.length - 4 ? "*" : c))
      .join("");
    return masked.replace(/(.{4})/g, "$1 ").trim();
  }, [cardInput]);

  const cardType = useMemo(() => {
    if (/^4/.test(cardInput)) return "Visa";
    if (/^5[1-5]/.test(cardInput)) return "MasterCard";
    return "Card";
  }, [cardInput]);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleCardChange = (value: string) => {
    setCardInput(value);
    dispatch(updateReservation({ cardNumber: value }));
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-xl space-y-4">
      <h3 className="text-lg font-bold mb-2">پرداخت</h3>

      <div className="relative">
        <Input
          placeholder="شماره کارت"
          value={cardInput}
          onChange={(e) => handleCardChange(e.target.value)}
          variant="bordered"
          classNames={{
            inputWrapper:
              "h-14 rounded-[16px] transition-shadow focus-within:shadow-lg",
            input: "tracking-widest text-lg",
          }}
        />
        <span className="absolute top-2 right-3 text-gray-400 font-bold">
          {cardType}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Input
          placeholder="تاریخ انقضا (MM/YY)"
          variant="bordered"
          classNames={{
            inputWrapper:
              "h-14 rounded-[16px] transition-shadow focus-within:shadow-lg",
          }}
        />
        <Input
          placeholder="CVV"
          variant="bordered"
          classNames={{
            inputWrapper:
              "h-14 rounded-[16px] transition-shadow focus-within:shadow-lg",
          }}
        />
      </div>

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

      <div className="mt-2 text-gray-500 text-sm">
        کارت وارد شده: {maskedCard}
      </div>
    </div>
  );
};

export default PaymentStep;
