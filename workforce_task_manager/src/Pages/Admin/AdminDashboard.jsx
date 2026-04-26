import { Outlet } from "react-router-dom"
import { Navbar } from "../../Component/Navbar"

export const AdminDashboard = () =>{
    return(
        <div className="w-full h-screen bg-[var(--body-background-Color)]">
            < Navbar />
            < Outlet />
        </div>
    )
}