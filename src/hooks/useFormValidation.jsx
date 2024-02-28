import { useState } from "react";


// eg initial state  const initialState = {
  //   username: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  // };

// eg validation rules
// const validationRules = {
//   username: [
//     {
//       condition: (value) => value.trim() === "",
//       message: "Username is required",
//     },
//     {
//       condition: (value) => value.trim().length < 4,
//       message: 'Username must be at least 4 characters',
//     },
//   ],
//   email: [
//     {
//       condition: (value) => !/^\S+@\S+\.\S+$/.test(value),
//       message: "Invalid email address",
//     },
//   ],
//   password: [
//     {
//       condition: (value) => value.length < 8,
//       message: "Password must be at least 8 characters",
//     },
//     {
//       condition: (value) => !/[A-Z]/.test(value),
//       message: "Password must contain at least one uppercase letter",
//     },
//     {
//       condition: (value) => !/[a-z]/.test(value),
//       message: "Password must contain at least one lowercase letter",
//     },
//     {
//       condition: (value) => !/\d/.test(value),
//       message: "Password must contain at least one digit",
//     },
//     {
//       condition: (value) => !/[!@#$%^&*()-=_+[\]{}|;:'",.<>/?\\]/.test(value),
//       message: "Password must contain at least one special character",
//     },
//   ],
//   confirmPassword: [
//     {
//       condition: (value, formData) => value !== formData.password,
//       message: "Passwords do not match",
//     },
//   ],
// };
export const useFormValidation=(initialState, validationRules)=> {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const validateField = (fieldName, value) => {
    const fieldRules = validationRules[fieldName];
    let fieldError = '';

    if (fieldRules) {
      for (const rule of fieldRules) {
        if (rule.condition(value, formData)) {
          fieldError = rule.message;
          break;
        }
      }
    }

    setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: fieldError }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    validateField(name, value);
  };

  const handleSubmit = (e, onSubmit) => {
    e.preventDefault();

    const newErrors = {};
    for (const fieldName in validationRules) {
      const value = formData[fieldName];
      validateField(fieldName, value);
      if (errors[fieldName]) {
        newErrors[fieldName] = errors[fieldName];
      }
    }

    if (Object.keys(newErrors).length === 0) {
      onSubmit(formData);
    } else {
      setErrors(newErrors);
    }
  };

  return { formData, errors, handleChange, handleSubmit };
}

// eg usage
// const { formData, errors, handleChange, handleSubmit } = useFormValidation(
//   initialState,
//   validationRules
// );

