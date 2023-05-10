import React from "react";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from 'react-hot-toast'
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate()
  const [accountType, setAccountType] = useState("Student");
  const [password, showPassword] = useState(false);
  const [confirmPassword, showConfirmPassword] = useState(false);

  function handleChange(event) {
    setFormData((prevData) => {
      return { ...prevData, [event.target.name]: event.target.value };
    });
  }

  function handleSubmit(event){
    event.preventDefault();
    
    if(formData.password !== formData.confirmPassword){
      toast.error("Passwords do not match")
      return ;
    }
    // changing the logged in state of user to true
    
    setIsLoggedIn(true)

    toast.success("Account created")
    console.log(formData)
    navigate('/dashboard')

  }
  return (
    <div>
      {/* student or instructor tab */}
      <div className="flex bg-richBlack-800 p-1 gax-x-1 my-6 rounded-full max-w-max">
        <button
          className={`${
            accountType === "Student"
              ? "bg-richBlack-900 text-richBlack-5"
              : "bg-transparent text-richBlack-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("Student")}
        >
          Student
        </button>
        <button
          className={`${
            accountType === "Instructor"
              ? "bg-richBlack-900 text-richBlack-5"
              : "bg-transparent text-richBlack-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("Instructor")}
        >
          Instructor
        </button>
      </div>

      <form onSubmit= {handleSubmit}>
        <div className="flex flex-row gap-x-4 mt-[20px]">
          <label className="w-full">
            <p className="text-[0.875rem] text-richBlack-5 mb-1 leading-[1.375rem]">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              className="bg-richBlack-800 text-richBlack-5 rounded-[0.5rem] w-full p-[12px]"
              required
              name="firstName"
              onChange={handleChange}
              placeholder="Enter your first name"
              value={formData.firstName}
            />
          </label>
          <label className="w-full">
            <p className="text-[0.875rem] text-richBlack-5 mb-1 leading-[1.375rem]">
              Last Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              className="bg-richBlack-800 text-richBlack-5 rounded-[0.5rem] w-full p-[12px]"
              required
              name="lastName"
              onChange={handleChange}
              placeholder="Enter your last name"
              value={formData.lastName}
            />
          </label>
        </div>
        {/* email part */}
        <div className="mt-[20px]">
          <label className="w-full">
            <p className="text-[0.875rem] text-richBlack-5 mb-1 leading-[1.375rem]">
              Email Address <sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              className="bg-richBlack-800 text-richBlack-5 rounded-[0.5rem] w-full p-[12px]"
              required
              name="email"
              onChange={handleChange}
              placeholder="Enter your email"
              value={formData.email}
            />
          </label>
        </div>

        {/* password and confirm password */}
        <div className="flex flex-row gap-x-4 mt-[20px]">
          <label className="w-full relative">
            <p className="text-[0.875rem] text-richBlack-5 mb-1 leading-[1.375rem]">
              Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              type={password ? "text" : "password"}
              className="bg-richBlack-800 text-richBlack-5 rounded-[0.5rem] w-full p-[12px]"
              required
              name="password"
              onChange={handleChange}
              placeholder="Enter your password"
              value={formData.password}
            />
            <span
              className="absolute top-[38px] right-3 cursor-pointer"
              onClick={() => showPassword(!password)}
            >
              {password ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF"></AiOutlineEye>
              )}
            </span>
          </label>
          <label className="w-full relative">
            <p className="text-[0.875rem] text-richBlack-5 mb-1 leading-[1.375rem]">
              Confirm Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              type={confirmPassword ? "text" : "password"}
              className="bg-richBlack-800 text-richBlack-5 rounded-[0.5rem] w-full p-[12px]"
              required
              name="confirmPassword"
              onChange={handleChange}
              placeholder="Confirm Password "
              value={formData.confirmPassword}
            />
            <span
              className="absolute top-[38px] right-3 cursor-pointer"
              onClick={() => showConfirmPassword(!confirmPassword)}
            >
              {confirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF"></AiOutlineEye>
              )}
            </span>
          </label>
        </div>

        <button className="w-full bg-yellow-50 rounded-[8px] font-medium text-richBlack-900 px-[12px] py-[8px] mt-6">Create Account</button>
      </form>
    </div>
  );
};

export default SignupForm;
