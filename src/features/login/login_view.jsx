import React from "react";
import { useAuth } from "../../core/auth/hook/use_auth";

const LoginView = () => {
    const { login } = useAuth();
    return 
    <div>
        <h1>React films</h1>
        <button
        onClick={login}>Iniciar Sesión</button>
    </div>;
};

export default LoginView;