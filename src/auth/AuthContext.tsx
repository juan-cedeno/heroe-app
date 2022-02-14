import { createContext } from "react";
import { authSate } from "./authReducer";


export interface authContextProps {
    authState : authSate,
    Login : (name : string) => void,
    LogOut: () => void
}

export const AuthContext = createContext<authContextProps>({} as authContextProps)