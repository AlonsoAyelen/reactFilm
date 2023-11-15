import React from "react";
import { useAuth } from "../../core/auth/hook/use_auth";

const HomeView = () => {
    const { isLoggedIn } = useAuth();
    console.log("isLoggedIn", isLoggedIn);
    return <div></div>;
};

export default HomeView;