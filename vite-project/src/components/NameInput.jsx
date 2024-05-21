import React from 'react';

function NameInput({ value, onChange, error }) {
  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Name"
        value={value}
        onChange={onChange}
        required
      />
      {error && <span className="error">Name is required</span>}
    </div>
  );
}

export default NameInput;
