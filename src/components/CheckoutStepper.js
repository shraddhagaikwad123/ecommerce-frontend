import React, { useState } from "react";
import ShippingAddressForm from "./ShippingAddressForm";
import PaymentDetailsForm from "./PaymentDetailsForm";
import ReviewSubmit from "./ReviewSubmit";

const steps = ["Shipping Address", "Payment Details", "Review & Submit"];

const CheckoutStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [shippingDetails, setShippingDetails] = useState({
    firstName: "",
    lastName: "",
    address: "",
    contactNo: "",
  });

  const [paymentDetails, setPaymentDetails] = useState({
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <ShippingAddressForm
            onNext={handleNext}
            shippingDetails={shippingDetails}
            setShippingDetails={setShippingDetails}
          />
        );
      case 1:
        return (
          <PaymentDetailsForm
            onNext={handleNext}
            onBack={handleBack}
            paymentDetails={paymentDetails}
            setPaymentDetails={setPaymentDetails}
          />
        );
      case 2:
        return (
          <ReviewSubmit
            onBack={handleBack}
            shippingDetails={shippingDetails}
            paymentDetails={paymentDetails}
          />
        );

      default:
        break;
    }
  };

  return (
    <div>
      <div>
        {steps.map((label, index) => (
          <div
            key={index}
            style={{
              display: "inline-block",
              marginRight: "20px",
              fontWeight: activeStep === index ? "bold" : "normal",
            }}
          >
            {label}
          </div>
        ))}
      </div>

      <div>{getStepContent(activeStep)}</div>
    </div>
  );
};

export default CheckoutStepper;


