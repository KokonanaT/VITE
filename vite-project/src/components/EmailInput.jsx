import React from 'react';

function EmailInput({ value, onChange, error }) {
  return (
    <div>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        value={value}
        onChange={onChange}
        required
      />
      {error && <span className="error">Email is required</span>}
    </div>
  );
}

export default EmailInput;
