import React, { useState } from "react";

const App = () => {
  const [form, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    course: "",
    agree: false,
  });

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevForm) => ({
      ...prevForm,
      [name]: type === "checkbox" ? checked : value, // Handle checkboxes separately
    }));
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.agree) {
      alert("You must agree to the terms and conditions.");
      return;
    }
    localStorage.setItem("studentData",JSON.stringify(FormData));
    alert("Student registered successfully");
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-md shadow-lg">
      <h2 className="text-xl font-bold mb-4">Registration Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Name Field */}
        <div>
          <label className="block">Full Name</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block">Email</label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Age Field */}
        <div>
          <label className="block">Age</label>
          <input
            type="number"
            name="age"
            required
            value={form.age}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Gender Selection */}
        <div>
          <label className="block">Choose Gender</label>
          <select
            id="gender"
            name="gender"
            value={form.gender}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        {/* Course Selection */}
        <div>
          <label className="block">Select a Course</label>
          <select
            name="course"
            value={form.course}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Course</option>
            <option value="Btech">B.Tech</option>
            <option value="MCA">MCA</option>
            <option value="BSc">B.Sc</option>
          </select>
        </div>

        {/* Agreement Checkbox */}
        <div>
          <label htmlFor="agree" className="flex items-center gap-2">
            <input
              type="checkbox"
              id="agree"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              className="w-4 h-4"
            />
            <span>I agree to the terms and conditions</span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full p-2 text-white font-bold rounded ${
            form.agree ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!form.agree}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default App;
