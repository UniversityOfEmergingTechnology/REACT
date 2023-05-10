import React from "react";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link , useNavigate} from "react-router-dom";
import Toast from 'react-hot-toast'
const LoginForm = ({setIsLoggedIn}) => {
  const [password, showPassword] = useState(false);
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  function inputHandler(event) {
    setFormData((prevData) => {
      return { ...prevData, [event.target.name]: event.target.value };
    });
  }
  function handleSubmit(event){
    event.preventDefault();
    setIsLoggedIn(true)
    console.log(formData)
    navigate('/dashboard')
    Toast.success("Logged in Successfully")

  }
  return (
    <form className="mt-6 flex flex-col w-full gap-y-4" onSubmit={handleSubmit}>
      <label className="text-richBlack-5 mb-1 leading-[1.375rem] text-[0.875rem]">
        Email Address <sup className="text-pink-200">*</sup>
        <input
          required
          type="email"
          name="email"
          value={formData.email}
          placeholder="Enter your email address"
          onChange={inputHandler}
          className="bg-richBlack-800 rounded-[0.5rem] p-[12px] w-full text-richBlack-5"
        />
      </label>
      <div className="relative flex flex-col">
        <label className="text-richBlack-5 mb-1 leading-[1.375rem] text-[0.875rem]">
          Password <sup className="text-pink-200">*</sup>
          <input
            type={password ? "text" : "password"}
            required
            value={formData.password}
            placeholder="Enter your password"
            name="password"
            onChange={inputHandler}
            className="bg-richBlack-800 rounded-[0.5rem] p-[12px] w-full text-richBlack-5"
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
        <Link to="#" className="text-xs text-blue-100  max-w-max self-end">
          {" "}
          Forgot Password
        </Link>
      </div>

      <button className="bg-yellow-50 rounded-[8px] font-medium text-richBlack-900 px-[12px] py-[12px] ">
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
