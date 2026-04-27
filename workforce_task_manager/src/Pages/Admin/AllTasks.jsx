import { Outlet } from "react-router-dom"
import { Navbar } from "../../Component/Navbar"
import { CreateTaskForm } from "../../Component/CreateTaskForm"

export const AllTasks = () =>{
    return(
        <div className="text-white ">
            <CreateTaskForm />
        </div>
    )
}