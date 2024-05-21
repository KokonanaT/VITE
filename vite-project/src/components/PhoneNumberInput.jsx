import React from 'react';

function PhoneNumberInput({
   value, onChange, error
}) {
  return(
    <div>
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            {errors.phone && <span className="error"> Phone number is required</span>}
          </div>
  );
}

export default PhoneNumberInput;