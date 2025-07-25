import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../../../utils/tokenUtils";

const PrivateRoute = ({ children }) => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  
  // Check both Redux state and localStorage
  const isAuth = isAuthenticated() && token && user;
  
  if (isAuth) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;