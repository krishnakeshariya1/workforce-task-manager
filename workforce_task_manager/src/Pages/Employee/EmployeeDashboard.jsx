import { Outlet } from "react-router-dom"
import { Navbar } from "../../Component/Navbar"

export const EmployeeDashboard = () =>{
    return(
        <div>
            <h1>employee sahab</h1>
            <Navbar />
            <Outlet />
        </div>
    )
}