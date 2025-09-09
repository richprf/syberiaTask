import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { updateReservation } from "@/redux/slices/reservationSlice";
import { RootState } from "@/types";
import { Input } from "@heroui/react";
import { useForm } from "@tanstack/react-form";
import React from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
interface Iprops {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const UserInfoStep = ({ step, setStep }: Iprops) => {
  const dispatch = useAppDispatch();
  const { name, email, phone } = useAppSelector(
    (state: RootState) => state.reservation
  );

  const form = useForm({
    defaultValues: {
      name,
      email,
      phone,
    },
    onSubmit: ({ value }) => {
      dispatch(updateReservation(value));
    },
  });

  const nextStep = async () => {
    const isValid = await form.validate("submit");
    if (isValid) {
      dispatch(updateReservation(form.state.values));
      setStep((prev) => prev + 1);
    } else {
      alert("پر کن ");
    }
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit(e);
        }}
      >
        <form.Field
          name="name"
          validators={{
            onChange: ({ value }) => (!value ? "نام الزامی است" : undefined),
          }}
        >
          {(field) => (
            <div>
              <label className="relative top-3 right-4 z-10  bg-white dark:bg-zinc-900 pr-1 pl-1">
                {" "}
                نام ملک :
              </label>
              <Input
                variant="bordered"
                classNames={{
                  inputWrapper: "h-14 rounded-[16px]",
                }}
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {field.state.meta.errors && (
                <div> {field.state.meta.errors.join(", ")} </div>
              )}
            </div>
          )}
        </form.Field>
        <form.Field
          name="email"
          validators={{
            onChange: ({ value }) => (!value ? "ایمیل الزامی است" : undefined),
          }}
        >
          {(field) => (
            <div>
              <label className="relative top-3 right-4 z-10  bg-white dark:bg-zinc-900 pr-1 pl-1">
                {" "}
                  ایمیل :
              </label>
              <Input
                variant="bordered"
                classNames={{
                  inputWrapper: "h-14 rounded-[16px]",
                }}
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {field.state.meta.errors && (
                <div> {field.state.meta.errors.join(", ")} </div>
              )}
            </div>
          )}
        </form.Field>  
        <form.Field
          name="phone"
          validators={{
            onChange: ({ value }) => (!value ? "شماره همراه الزامی است" : undefined),
          }}
        >
          {(field) => (
            <div>
              <label className="relative top-3 right-4 z-10  bg-white dark:bg-zinc-900 pr-1 pl-1">
                {" "}
                 شماره همراه :
              </label>
              <Input
                variant="bordered"
                classNames={{
                  inputWrapper: "h-14 rounded-[16px]",
                }}
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {field.state.meta.errors && (
                <div> {field.state.meta.errors.join(", ")} </div>
              )}
            </div>
          )}
        </form.Field>     
      </form>
      <div className="flex justify-end gap-12 pt-4 " >
        <div className="flex gap-2 bg-[#8cff45] pt-2 pb-[6px] px-3 rounded-xl"> 
        {step < 3 && <button onClick={nextStep}>مرحله بعد</button>}
        <RiArrowLeftSLine className="mt-1"/>
        </div>
      </div>
    </div>
  );
};

export default UserInfoStep;
