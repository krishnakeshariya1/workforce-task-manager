import { Outlet } from "react-router-dom"
import { Navbar } from "../../Component/Navbar"
import { CreateEmployeeForm } from "../../Component/CreateEmployeeForm"
import { useEffect, useState } from "react"
import { getData } from "../../Utils/localStorage"
import { AllEmployeeLayout } from "../../Component/AllEmployeeLayout"

export const EmployeesDetail = () =>{

    

    return(
        <div className="w-full h-auto  bg-[var(--body-background-Color)] flex flex-col">
            {/* <div className=" grid grid-cols-[auto_auto] text-2xl justify-start gap-8 bg-[var(--navbar-color)] py-2 px-8">
                <div className="flex flex-col gap-1 bg-gray-200 p-4 rounded-2xl w-md">
                    <h1 className="text-2xl text-[var(--primary-button-Color)] font-bold font-serif underline underline-offset-4 mb-5 text-center">All Employee Info :</h1>
                    <div className="flex flex-col gap-4 w-full">
                    {users.map((user)=>{
                        return <h3 className="font-semibold text-lg text-black bg-gray-400 py-1 px-2 rounded max-w-xs cursor-pointer ">{user.name}</h3>
                    } )}
                    </div>
                </div>
                <h2 className="text-start border-2 border-amber-50 ">keshariya</h2>
            </div> */}
           <AllEmployeeLayout />
        </div>
    )
}