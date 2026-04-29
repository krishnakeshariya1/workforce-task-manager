import { Outlet } from "react-router-dom"
import { Navbar } from "../../Component/Navbar"
import { CreateEmployeeForm } from "../../Component/CreateEmployeeForm"
import { StatCard } from "../../Component/StateCard"
import { Filters } from "../../Config/TaskFunctionality"
import { useEffect, useState } from "react"
import { FilterBtn } from "../../Component/FilterBtn"
import { TaskCard } from "../../Component/TaskCard"
import { useTask } from "../../Context/TaskContext"
import { useAuth } from "../../Context/AuthContext"
import useDebounce from "./UseBounce"

export const AdminDashboard = () => {

    const { data } = useTask();
    const { user } = useAuth();
    

    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("all")
    const debounceSearch = useDebounce(search, 500)

    const tasks = data.tasks

    const searchTasks = tasks.filter((task) =>
        task.title.toLowerCase().includes(debounceSearch.toLowerCase())
    )
    
    const finalTasks = searchTasks.filter((task)=>{
        if(filter === "all") return true;

        return task.status === filter;
    })

    const total = tasks.length;
    const todo = tasks.filter(t => t.status === "todo").length;
    const inprogress = tasks.filter(t => t.status === "inprogress").length;
    const done = tasks.filter(t => t.status === "done").length;

    useEffect(()=>{
        console.log(finalTasks)
    },[filter])

    return (

        <div className="w-full h-auto bg-[var(--body-background-Color)] flex flex-col gap-4 px-4">
            <div className="grid grid-cols-4 gap-4 mb-6">
                < StatCard label="Total" value={total} />
                < StatCard label="Todo" value={todo} />
                < StatCard label="In Progress" value={inprogress} />
                < StatCard label="Completed" value={done} />
            </div>

            <div className="flex items-center gap-4 mb-6">

                <input
                    value={search}
                    type="text"
                    placeholder="Search by task title..."
                    className="flex-1 bg-[#1c1c1c] border border-gray-700 px-4 py-2 rounded-md outline-none placeholder:text-gray-500 text-white"
                    onChange={(e) => setSearch(e.target.value)}
                />

                <div className="flex gap-3">
                    <FilterBtn setFilter={setFilter}/>
                </div>
            </div>

            <div className=" h-96 overflow-y-scroll flex  flex-col gap-4" id="taskCardContainer">
                <TaskCard finalTasks={finalTasks} />
            </div>


        </div>
    )
}