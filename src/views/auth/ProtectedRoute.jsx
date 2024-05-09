import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ redirectedPath, isAllowed, children }) => {
    if (isAllowed) return children;

    return <Navigate to={redirectedPath} replace />;
};

export default ProtectedRoute;
