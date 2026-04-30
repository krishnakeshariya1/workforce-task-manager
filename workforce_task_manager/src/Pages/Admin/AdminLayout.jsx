import { Outlet } from "react-router-dom"
import { Navbar } from "../../Component/Navbar"

export const AdminLayout = () =>{
    return(
        <div className="w-full h-screen  bg-[var(--color-page-bg)]">
            <Navbar/>
            <Outlet />
        </div>
    )
}