import { Outlet } from "react-router-dom"
import { Navbar } from "../../Component/Navbar"
import { CreateEmployeeForm } from "../../Component/CreateEmployeeForm"
import { StatCard } from "../../Component/StateCard"
import { Filters } from "../../Config/TaskFunctionality"
import { useState } from "react"
import { FilterBtn } from "../../Component/FilterBtn"
import { TaskCard } from "../../Component/TaskCard"
import { useTask } from "../../Context/TaskContext"

export const AdminDashboard = () =>{

    const {data} = useTask();
    const [search, setSearch] = useState("")

    
    return (

        <div className="w-full h-auto bg-[var(--body-background-Color)] flex flex-col gap-4 px-4">
            <div className="grid grid-cols-4 gap-4 mb-6">
                < StatCard />
            </div>

            <div className="flex items-center gap-4 mb-6">

                <input
                    value={search}
                    type="text"
                    placeholder="Search by task title..."
                    className="flex-1 bg-[#1c1c1c] border border-gray-700 px-4 py-2 rounded-md outline-none placeholder:text-gray-500"
                    onChange={(e) => setSearch(e.target.value)}
                />

                <div className="flex gap-3">
                    <FilterBtn />
                </div>
            </div>

            <div className=" h-96 overflow-y-scroll flex  flex-col gap-4" id="taskCardContainer">
                <TaskCard />
            </div>


        </div>
    )
}