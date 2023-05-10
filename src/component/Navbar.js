import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import Toast from 'react-hot-toast'
const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedin = props.setIsLoggedin;

  return (
    <div className="flex justify-between items-center w-11/12 mx-auto py-4 max-w-[1160px]">
      <Link to="/">
        <img src={logo} alt="logo" width={160} height={32} loading="lazy" />
      </Link>
      <nav>
        <ul className="text-richBlack-100 flex gap-x-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      {/* login signup logout dashboard */}
      <div className="flex items-center gap-x-4">
        {!isLoggedIn && (
          <Link to="/login">
            <button className="bg-richBlack-800 text-richBlack-100 border border-richBlack-700 px-[12px] py-[8px] rounded-[8px]">
              Log In
            </button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            <button className="bg-richBlack-800 text-richBlack-100 border border-richBlack-700 px-[12px] py-[8px] rounded-[8px]">
              Sign Up
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            {" "}
            <button className="bg-richBlack-800 text-richBlack-100 border border-richBlack-700 px-[12px] py-[8px] rounded-[8px]"
            onClick={() => {
              setIsLoggedin(false)
              Toast.success("Logged out successfully")
            }}
            >
              Log Out
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            {" "}
            <button className="bg-richBlack-800 text-richBlack-100 border border-richBlack-700 px-[12px] py-[8px] rounded-[8px]">
              Dashboard
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
