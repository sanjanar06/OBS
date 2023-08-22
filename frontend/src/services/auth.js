import api from "./api";

export const isLoggedIn = () =>{
    const access= localStorage.getItem("accessToken");
    return(
        access != null 
        || (
        window.location.href.includes("/login") ||
        window.location.href.includes("/register") ||
        window.location.href.includes("/account") 
        )
    )
}

export const apiLogin = async (data) =>{
    try{
        // localStorage.clear();

        const res = await api.post("/auth/login", data);

        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem("refreshToken", res.data.refreshToken);

        return true;
    } catch{
        return false;
    }
}