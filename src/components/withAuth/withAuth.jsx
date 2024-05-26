import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function withAuth(Component) {
  const WrappedComponent = (props) => {
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
      // console.log("MOUNTED");
      return () => {
        // console.log("UNMOUNTED");
      };
    }, []);

    if (!user) return <Navigate to="/login" />;

    return <Component {...props} />;
  };

  return WrappedComponent;
}
