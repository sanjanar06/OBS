import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { isAdmin, isLoggedIn } from "./services/auth";

const Root = () => {
    const loggedIn = isLoggedIn();
    const admin = isAdmin();
    const navigate = useNavigate();

    useEffect(() => {
        if (!loggedIn) {
            navigate("/home");
        }
    }, [loggedIn, navigate]);

    return (
        <>
            <Outlet />
        </>
    )
}

export default Root;