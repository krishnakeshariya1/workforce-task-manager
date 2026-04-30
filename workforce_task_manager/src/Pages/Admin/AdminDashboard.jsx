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
import useDebounce from "../../Hooks/UseBounce"
import { SearchBar } from "../../Component/SearchBar"
import { useTheme } from "../../Context/ThemeContext"

export const AdminDashboard = () => {

    const { data } = useTask();
    const { user } = useAuth();
    const { toggleTheme } = useTheme()


    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("all")
    const debounceSearch = useDebounce(search, 500)

    const tasks = data.tasks

    const searchTasks = tasks.filter((task) =>
        task.title.toLowerCase().includes(debounceSearch.toLowerCase())
    )

    const finalTasks = searchTasks.filter((task) => {
        if (filter === "all") return true;

        return task.status === filter;
    })

    const total = tasks.length;
    const todo = tasks.filter(t => t.status === "todo").length;
    const inprogress = tasks.filter(t => t.status === "inprogress").length;
    const done = tasks.filter(t => t.status === "done").length;

    return (

        <div className="w-full h-auto bg-[var(--color-page-bg)] flex flex-col gap-4 px-4">
            < button
                className="bg-[var(--color-secondary-btn)] px-3 py-2 rounded-lg font-semibold w-fit text-[var(--color-primary-text)] self-end"
                onClick={() => toggleTheme()}
            >
                Toggle Theme
            </button>

            <div className="grid grid-cols-4 gap-4 mb-6">
                < StatCard label="Total" value={total} />
                < StatCard label="Todo" value={todo} />
                < StatCard label="In Progress" value={inprogress} />
                < StatCard label="Completed" value={done} />
            </div>

            <div className="flex items-center gap-4 mb-6">
                <SearchBar search={search} setSearch={setSearch} />

                <div className="flex gap-3">
                    <FilterBtn setFilter={setFilter} />
                </div>
            </div>

            <div className=" h-96 overflow-y-scroll flex  flex-col gap-4" id="taskCardContainer">
                <TaskCard finalTasks={finalTasks} />
            </div>


        </div>
    )
}