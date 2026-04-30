import { Outlet } from "react-router-dom"
import { Navbar } from "../../Component/Navbar"
import { CreateEmployeeForm } from "../../Component/CreateEmployeeForm"
import { useEffect, useState } from "react"
import { getData } from "../../Utils/localStorage"
import { AllEmployeeLayout } from "../../Component/AllEmployeeLayout"

export const EmployeesDetail = () =>{
    return(
        <div className="w-full h-auto  bg-[var(--color-page-bg)] flex flex-col gap-7">
           <AllEmployeeLayout />
           <CreateEmployeeForm />
        </div>
    )
}