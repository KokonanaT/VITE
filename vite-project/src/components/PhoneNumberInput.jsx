import React from 'react';

function PhoneNumberInput({ value, onChange, error }) {
  return (
    <div>
      <label htmlFor="phone">Phone:</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="Phone"
        value={value}
        onChange={onChange}
        required
      />
      {error && <span className="error">Phone number is required</span>}
    </div>
  );
}

export default PhoneNumberInput;
