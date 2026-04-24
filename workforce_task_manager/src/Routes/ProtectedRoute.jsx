import { Navigate } from "react-router-dom"
import { useAuth } from "../Context/AuthContext"
import { Children } from "react"

export const ProtectedRoute = ({chidren, role}) =>{
    const {user} = useAuth()

    if(!user) return < Navigate to="/"  replace />

    if(role && user.role !== role) return <Navigate to="/" replace/>

    return chidren
}