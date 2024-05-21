import React, { useState } from 'react';
import NameInput from './components/NameInput';
import EmailInput from './components/EmailInput';
import PhoneNumberInput from './components/PhoneNumberInput';
import './App.css';

function form () { 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [ errors,setErrors] = useState ({
    name: 'false',
    email: 'false',
    phone: 'false',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: false
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = {
      name:formData.name==='',
      email:formData.email==='',
      phone:formData.phone==='',
    };
     if (newErrors.name|| newErrors.email|| newErrors.phone);{
      setErrors(newErrors);
      alert('please fill in all the fields.');
     return;
     }
     
    alert(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Contact Form</h1>
    <form onSubmit={handleSubmit}>  
    <NameInput value={formData.name} onChange={handleChange} 
    error= {errors.name} />

    <EmailInput value={formData.email} onChange={handleChange}
    error= {errors.email} />

    <PhoneNumberInput value={formData.phone} onChange={handleChange}
    error= {errors.phone} />
     <button type="sub,it">Submit</button>
     </form>
     </header>
     </div>
  );
}
    
  export default Form;                  