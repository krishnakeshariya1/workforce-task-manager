import { Outlet } from "react-router-dom"
import { Navbar } from "../../Component/Navbar"

export const EmployeeLayout = () =>{
    return(
        <div className="w-full h-screen bg-[var(--body-background-Color)]">
            <Navbar/>
            <Outlet />
        </div>
    )
}