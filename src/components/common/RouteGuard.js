import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext"


export const RouteGuard = ({ children }) => {
    const { isAuthenticated } = useAuthContext();

    if (!isAuthenticated) { <Navigate to="/auth/login" /> }

    return children ? children : <Outlet />
}