import React from "react";
import { useForm } from "@tanstack/react-form";
import SearchInput from "../common/input/input";

interface Values {
  inDate: string;
  exitdate: string;
  people: number;
}

const HouseReserveMobile = () => {
  const form = useForm<
    Values,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any
  >({
    defaultValues: {
      inDate: "",
      exitdate: "",
      people: 0,
    },
    onSubmit: async ({ value }) => {
      console.log("form submitting", value);
    },
  });
  return (
    <div className="pt-8">
      <span className="font-bold text-[20px] text-[#7575fefe]">
        {" "}
        همین حالا رزرو کنید{" "}
      </span>
      <div className="pt-8">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
          className="grid grid-cols-2 gap-[25px]"
        >
          <div className="">
            <div className="pt-3">
              <form.Field
                name="inDate"
                children={(field) => (
                  <SearchInput
                    value={field.state.value}
                    onChange={(e: any) => field.handleChange(e.target.value)}
                    key="outside"
                    placeholder="تاریخ ورود خود را مشخص کنید"
                  />
                )}
                validators={{
                  onChange: ({ value }) =>
                    !value ? "نام الزامی است " : undefined,
                }}
              />
            </div>
          </div>

          <div className="">
            <div className="pt-3">
              <form.Field
                name="exitdate"
                children={(field) => (
                  <SearchInput
                    value={field.state.value}
                    onChange={(e: any) => field.handleChange(e.target.value)}
                    key="outside"
                    placeholder="تاریخ خروج خود را مشخص کنید"
                  />
                )}
                validators={{
                  onChange: ({ value }) =>
                    !value ? "نام الزامی است " : undefined,
                }}
              />
            </div>
          </div>

          <div className="">
            <div className="pt-3">
              <form.Field
                name="people"
                children={(field) => (
                  <SearchInput
                    value={
                      field.state.value !== undefined
                        ? String(field.state.value)
                        : ""
                    }
                    onChange={(e: any) => field.handleChange(e.target.value)}
                    key="outside"
                    placeholder="تعداد نفرات خود را مشخص کنید"
                  />
                )}
                validators={{
                  onChange: ({ value }) =>
                    !value ? "نام الزامی است " : undefined,
                }}
              />
            </div>
          </div>

          <div className="pt-6">
            <button
              type="button"
              className="bg-[#7575fefe] py-3 px-7 rounded-md "
              onClick={() => form.handleSubmit()}
            >
              بده برعه
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HouseReserveMobile;
