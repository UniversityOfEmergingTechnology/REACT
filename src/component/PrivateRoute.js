import { Navigate } from "react-router-dom";

const PrivateRoute = (props) => {

  // props.children is a special prop that allows you to pass children component to a parent component
  if (props.isLoggedIn) {
    // if user is logged in render my child component
    return props.children;
    
  } else {
    // this component will navigate to a different route in your application
    // this is a component based version of react useNavigate hook 
    // this component should only be used as a child of a route component
    return <Navigate to='/login'/>;
  }
};

export default PrivateRoute;
