import React, { useState } from "react";
import {
  HiEye,
  HiEyeOff,
  HiCheck,
  HiRadio,
  HiSelector,
} from "react-icons/hi";

const InputTypes = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState(null);
  const [selectedCheckbox, setSelectedCheckbox] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#3498db");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleRadioChange = (value) => {
    setSelectedRadio(value);
  };

  const handleCheckboxChange = () => {
    setSelectedCheckbox(!selectedCheckbox);
  };

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded shadow-md mt-8">
      <h2 className="text-2xl font-semibold mb-6">Input Types</h2>

      {/* Text Input */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="text">
          Text Input
        </label>
        <input
          type="text"
          id="text"
          name="text"
          placeholder="Enter text"
          className="w-full p-2 border rounded-md"
        />
      </div>

      {/* Email Input */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email Input
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter email"
          className="w-full p-2 border rounded-md"
        />
      </div>

      {/* Password Input with Toggle */}
      <div className="mb-4 relative">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password Input
        </label>
        <input
          type={passwordVisible ? "text" : "password"}
          id="password"
          name="password"
          placeholder="Enter password"
          className="w-full p-2 border rounded-md pr-10"
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute top-2 right-2 text-gray-600"
        >
          {passwordVisible ? <HiEyeOff /> : <HiEye />}
        </button>
      </div>

      {/* Radio Buttons */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Radio Buttons
        </label>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="radioGroup"
              value="option1"
              checked={selectedRadio === "option1"}
              onChange={() => handleRadioChange("option1")}
              className="mr-2"
            />
            <span className="text-gray-700">Option 1</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="radioGroup"
              value="option2"
              checked={selectedRadio === "option2"}
              onChange={() => handleRadioChange("option2")}
              className="mr-2"
            />
            <span className="text-gray-700">Option 2</span>
          </label>
        </div>
      </div>

      {/* Checkboxes */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Checkbox
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={selectedCheckbox}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          <span className="text-gray-700">Check me</span>
        </label>
      </div>

      {/* Range Input */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="range">
          Range Input
        </label>
        <input
          type="range"
          id="range"
          name="range"
          className="w-full"
        />
      </div>

      {/* Color Picker */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="color">
          Color Picker
        </label>
        <input
          type="color"
          id="color"
          name="color"
          value={selectedColor}
          onChange={handleColorChange}
        />
      </div>

      {/* Date Picker */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
          Date Picker
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </div>

      {/* File Input */}
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file">
          File Input
        </label>
        <input
          type="file"
          id="file"
          name="file"
          onChange={handleFileChange}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </div>
  );
};

export default InputTypes;
