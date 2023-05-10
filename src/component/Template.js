import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { FcGoogle } from "react-icons/fc";
import frameImage from "../assets/frame.png";
const Template = ({
  title,
  description1,
  description2,
  img,
  formType,
  setIsLoggedIn,
}) => {
  return (
    <div className="flex justify-between w-11/12 mx-auto py-12 max-w-[1160px] gap-y-12">
      <div className="w-11/12 max-w-[450px]">
        <h1 className="text-richBlack-5 font-semibold text-[1.875rem] leading-[2.375rem]">
          {title}
        </h1>
        <p className="text-[1.125rem] leading-[1.625rem] mt-4">
          <span className="text-richBlack-100">{description1}</span>
          <br />
          <span className="text-blue-100 italic">{description2}</span>
        </p>

        {/* conditional statements */}
        {formType === "signup" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm  setIsLoggedIn={setIsLoggedIn}  />
        )}

        <div className="flex w-full items-center my-4 gap-x-2">
          <div className="w-full h-[1px] bg-richBlack-700"></div>
          <p className="text-richBlack-700 font-medium leading-[1.875rem]">
            OR
          </p>
          <div className="w-full h-[1px] bg-richBlack-700"></div>
        </div>

        <button className="w-full flex justify-center items-center border border-richBlack-100 px-[12px] py-[8px] mt-6 rounded-[8px] font-medium text-richBlack-100">
          <FcGoogle />
          <p>Sign Up with Google</p>
        </button>
      </div>

      <div className="relative w-11/12 max-w-[450px]">
        <img
          src={frameImage}
          alt="Pattern"
          width={558}
          height={304}
          loading="lazy"
        />
        <img
          src={img}
          alt="Students"
          width={558}
          height={304}
          loading="lazy"
          className="absolute -top-4 right-4"
        />
      </div>
    </div>
  );
};

export default Template;
