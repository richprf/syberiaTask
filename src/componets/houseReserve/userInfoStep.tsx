// components/reservation/UserInfoStep.tsx
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/types";
import { updateReservation } from "@/redux/slices/reservationSlice";

import { RiArrowLeftSLine } from "react-icons/ri";
import TextInput from "../common/input/textInput";

interface Iprops {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const UserInfoStep: FC<Iprops> = ({ step, setStep }) => {
  const dispatch = useDispatch();
  const { name, email, phone } = useSelector(
    (state: RootState) => state.reservation
  );

  const handleChange = (field: string, value: string) => {
    dispatch(updateReservation({ [field]: value }));
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="p-4 border rounded-xl max-w-md space-y-4">
      <TextInput
        label="نام و نام خانوادگی"
        value={name}
        onChange={(val:any) => handleChange("name", val)}
      />
      <TextInput
        label="ایمیل"
        value={email}
        onChange={(val:any) => handleChange("email", val)}
      />
      <TextInput
        label="شماره تلفن"
        value={phone}
        onChange={(val:any) => handleChange("phone", val)}
      />

      <div className="flex justify-between pt-4">
        {step > 1 && (
          <button
            onClick={prevStep}
            className="flex items-center gap-1 border rounded-xl px-4 py-2"
          >
            <RiArrowLeftSLine /> مرحله قبل
          </button>
        )}
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

export default UserInfoStep;
