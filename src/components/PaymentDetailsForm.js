import React, { useState } from "react";

const PaymentDetailsForm = ({ onNext, onBack }) => {
  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation
    if (!formData.cardNumber.match(/^\d{16}$/)) {
      alert("Card number must be 16 digit");
      return;
    }
    console.log("Payment data:", formData);
    onNext();
  };

  return (
    <div>
      <h2>Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Card Name</label>
          <input
            type="text"
            name="cardName"
            value={formData.cardName}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div>
          <label>Card Number</label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
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
            value={formData.expiryDate}
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
            value={formData.cvv}
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