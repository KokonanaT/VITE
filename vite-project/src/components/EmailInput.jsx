import React from 'react';

function EmailInput({
   value, onchange, error
})
{
  return (
    <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
             {errors.email && <span className="error"> Email is required</span>}
          </div>
  );
};

export default EmailInput;