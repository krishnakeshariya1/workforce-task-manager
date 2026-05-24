import { Outlet } from "react-router-dom"
import { Navbar } from "../../Component/Navbar"

export const EmployeeLayout = () =>{
    return(
        <div className="w-full min-h-screen bg-[var(--body-background-Color)] overflow-x-hidden">
            <Navbar/>
            <Outlet />
        </div>
    )
}