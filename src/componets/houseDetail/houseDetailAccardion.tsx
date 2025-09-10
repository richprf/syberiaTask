import React from "react";
import { Accordion, AccordionItem } from "@heroui/react";
import { useForm } from "@tanstack/react-form";
import HouseFacilities from "./houseFacilities";
import HouseDescribe from "./houseDescribe";
import HouseReserveMobile from "./houseReserveMobile";
const HouseDetailAccardion = () => {
  interface Values {
    inDate: string;
    exitdate: string;
    people: number;
  }
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
    <div>
      <Accordion>
        <AccordionItem key="1" aria-label="Accordion 1" title="امکانات هتل">
          <HouseFacilities />
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="درباره هتل">
          <HouseDescribe />
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Accordion 3"
          title="همین حالا رزرو کنید"
        >
          <HouseReserveMobile />
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default HouseDetailAccardion;
