import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

function EligibilityForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    income: "",
    state: "",
    occupation: "",
    category: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.age || !form.income) {
      alert("Please fill all required fields");
      return;
    }

    navigate("/result", {
      state: {
        ...form,
        age: Number(form.age),
        income: Number(form.income)
      }
    });
  };

  return (
    <div className="form-container">
      <h2>Enter Your Details</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name" onChange={handleChange} />
        <input name="age" type="number" placeholder="Age" onChange={handleChange} />
        <select name="gender" onChange={handleChange}>
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <input name="income" type="number" placeholder="Annual Income" onChange={handleChange} />
        <input name="state" placeholder="State" onChange={handleChange} />
        <select name="occupation" onChange={handleChange}>
          <option value="">Select Occupation</option>
          <option>Student</option>
          <option>Farmer</option>
          <option>Business</option>
          <option>Unemployed</option>
          <option>Employee</option>
        </select>
        <select name="category" onChange={handleChange}>
          <option value="">Select Category</option>
          <option>SC</option>
          <option>ST</option>
          <option>OBC</option>
          <option>General</option>
        </select>
        <button type="submit">Check Now</button>
      </form>
    </div>
  );
}

export default EligibilityForm;