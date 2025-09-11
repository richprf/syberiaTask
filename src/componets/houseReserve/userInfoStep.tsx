import { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/types";
import { updateReservation } from "@/redux/slices/reservationSlice";
import { parsePhoneNumberFromString } from "libphonenumber-js";
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

  const phoneNumber = parsePhoneNumberFromString(phone, "IR");

  const handleChange = (field: string, value: string) => {
    dispatch(updateReservation({ [field]: value }));
  };

  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string }>({});

  useEffect(() => {
    const newErrors: typeof errors = {};

    if (!name.trim()) newErrors.name = "نام و نام خانوادگی نمی‌تواند خالی باشد";

    if (!email.trim()) newErrors.email = "ایمیل نمی‌تواند خالی باشد";
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))
      newErrors.email = "ایمیل معتبر نیست";

      if (!phone.trim()) {
        newErrors.phone = "شماره تلفن نمی‌تواند خالی باشد";
      } else if (!phoneNumber || !phoneNumber.isValid()) {
        newErrors.phone = "شماره تلفن معتبر نیست";
      }

    setErrors(newErrors);
  }, [name, email, phone]);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <div className="">
      <TextInput
        label="نام و نام خانوادگی"
        value={name}
        onChange={(val) => handleChange("name", val)}
        error={errors.name}
        placeholder="مثلاً: علی رضایی"
      />
      <TextInput
        label="ایمیل"
        value={email}
        onChange={(val) => handleChange("email", val)}
        error={errors.email}
        placeholder="example@mail.com"
      />
      <TextInput
        label="شماره تلفن"
        value={phone}
        onChange={(val) => handleChange("phone", val)}
        error={errors.phone}
        placeholder="مثلاً: 09123456789"
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
          type="button"
          onClick={nextStep}
          disabled={hasErrors} 
          className={`rounded-xl px-4 py-2 text-white ${
            hasErrors ? "bg-gray-400 cursor-not-allowed" : "bg-green-400"
          }`}
        >
          مرحله بعد
        </button>
      </div>
    </div>
  );
};

export default UserInfoStep;
