

import React from "react";

const PaymentDetailsForm = ({
  onNext,
  onBack,
  paymentDetails,
  setPaymentDetails,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation
    if (!paymentDetails.cardNumber.match(/^\d{16}$/)) {
      alert("Card number must be 16 digit");
      return;
    }
    console.log("Payment data:", paymentDetails);
    onNext();
  };

  return (
    <div  style={{
      border: "solid 1px black",
      marginTop: "30px",
      width: "50%",
      display: "flex",
      margin: "auto",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
    >
      <h2>Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Card Name</label>
          <input
            type="text"
            name="cardName"
            value={paymentDetails.cardName}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div>
          <label>Card Number</label>
          <input
            type="text"
            name="cardNumber"
            value={paymentDetails.cardNumber}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div>
          <label>Expiry Date</label>
          <input
            type="text"
            name="expiryDate"
            required
            placeholder="MM/YY"
            title="Expiry date must be MM/YY"
            pattern="(0[1-9]|1[0-2])\/([0-9]{2})"
            value={paymentDetails.expiryDate}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>CVV</label>
          <input
            type="text"
            name="cvv"
            required
            pattern="\d{3}"
            title="CVV must be 3 digits"
            value={paymentDetails.cvv}
            onChange={handleChange}
          ></input>
        </div>

        <div style={{ marginTop: "20px" }}>
          <button type="button" onClick={onBack}>
            Back
          </button>
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default PaymentDetailsForm;