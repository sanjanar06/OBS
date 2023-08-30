import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { isAdmin } from "../../services/auth";

const Admin = () => {
    const admin = isAdmin();
    const navigate = useNavigate();

    useEffect(() => {
        if (!admin) {
            navigate("/home");
        }

    }, [admin, navigate])

    return (
        <>
            <Outlet />
        </>
    )
};

export default Admin;