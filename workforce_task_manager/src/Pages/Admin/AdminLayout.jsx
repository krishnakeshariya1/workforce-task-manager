import { Outlet } from "react-router-dom"
import { Navbar } from "../../Component/Navbar"

export const AdminLayout = () =>{
    return(
        <div className="w-full min-h-screen bg-[var(--color-page-bg)] overflow-x-hidden">
            <Navbar/>
            <Outlet />
        </div>
    )
}