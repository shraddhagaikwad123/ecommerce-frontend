import React from "react";

const ShippingAddressForm = ({
  onNext,
  shippingDetails,
  setShippingDetails,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Shipping Data:", shippingDetails);
    onNext();
  };

  return (
    <div>
      <h2>Shipping Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={shippingDetails.firstName}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={shippingDetails.lastName}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={shippingDetails.address}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div>
          <label>Contact No</label>
          <input
            type="text"
            name="contactNo"
            value={shippingDetails.contactNo}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div style={{ marginTop: "20px" }}>
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default ShippingAddressForm;