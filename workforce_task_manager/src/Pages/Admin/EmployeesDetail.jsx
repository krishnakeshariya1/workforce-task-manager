import { Outlet } from "react-router-dom"
import { Navbar } from "../../Component/Navbar"
import { CreateEmployeeForm } from "../../Component/CreateEmployeeForm"
import { useEffect, useState } from "react"
import { getData } from "../../Utils/localStorage"
import { AllEmployeeLayout } from "../../Component/AllEmployeeLayout"

export const EmployeesDetail = () =>{
    return(
        <div className="w-full min-h-screen bg-[var(--color-page-bg)] flex flex-col gap-4 px-3 sm:px-4 py-4 overflow-x-hidden">
           <AllEmployeeLayout />
           <CreateEmployeeForm />
        </div>
    )
}