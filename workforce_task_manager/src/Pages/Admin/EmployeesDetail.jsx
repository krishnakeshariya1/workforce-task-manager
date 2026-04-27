import { Outlet } from "react-router-dom"
import { Navbar } from "../../Component/Navbar"
import { CreateEmployeeForm } from "../../Component/CreateEmployeeForm"

export const EmployeesDetail = () =>{
    return(
        <div className="w-full h-auto  bg-[var(--body-background-Color)] flex flex-col gap-10 ">
            <div className=" grid grid-cols-[30%_69%] text-2xl text-white justify-center gap-2 ">
                <h1 className="text-center border-2 border-amber-50">krishna </h1>
                <h2 className="text-start border-2 border-amber-50 ">keshariya</h2>
            </div>
           
        </div>
    )
}