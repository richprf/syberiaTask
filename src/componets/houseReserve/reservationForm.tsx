"use client";

import React, { useState } from "react";
;import UserInfoStep from "./userInfoStep";
import TravelDatePicker from "./step2Dates";
import PaymentStep from "./payment";
import ConfirmationStep from "./confirmStep";

const ReservationForms = () => {
  const [step, setStep] = useState(1);

  return (
    <div>
      {step === 1 && <UserInfoStep step={step} setStep={setStep} />}
      {step === 2 && <TravelDatePicker step={step} setStep={setStep} />}
      {step === 3 && <PaymentStep step={step} setStep={setStep} />}
      {step === 4 && <ConfirmationStep step={step} setStep={setStep} />}
    </div>
  );
};

export default ReservationForms;
