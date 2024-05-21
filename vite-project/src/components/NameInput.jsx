import React from 'react';

function NameInput ({
  value, onchanege, error
}) 
{
  return (
    <div>
    <label htmlFor="name">Name:</label>
    <input
      type="text"
      id="name"
      name="name"
      placeholder="Name"
      value={formData.name}
      onChange={handleChange}
      required
    />
    {errors.name && <span className="error"> Name is required</span>}
  </div>
  );
}

export default NameInput;