import { Navigate } from "react-router-dom"
import { useAuth } from "../Context/AuthContext"
import { Children } from "react"

export const ProtectedRoute = ({children, role}) =>{
    const {user, loading} = useAuth()


    if(loading) return <p>Loading...</p>

    if(!user) return < Navigate to="/"  replace />

    if(role && user.role !== role) return <Navigate to="/" replace/>

    return children
}