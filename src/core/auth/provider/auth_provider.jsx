import { AuthContext } from "../context/auth_context";

export const AuthProvider = () => ({children}) =>{
    return <AuthContext.Provider value={{}}>
        {children}
    </AuthContext.Provider>
}