import { Outlet } from "react-router-dom"
import { Navbar } from "../../Component/Navbar"
import { StatCard } from "../../Component/StateCard";
import { FilterBtn } from "../../Component/FilterBtn";
import { TaskCard } from "../../Component/TaskCard";
import { useTask } from "../../Context/TaskContext";
import { useAuth } from "../../Context/AuthContext";
import { useEffect, useState } from "react";
import useDebounce from "../../Hooks/UseBounce";

export const EmployeeDashboard =() => {

    const {data} = useTask()
    const {user} = useAuth();
    let  tasks = data.tasks;

    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all")
    const debounceSearch = useDebounce(search, 500);
    
    const UserTasks = tasks.filter((task) =>{
        return task.assignedTo.toLowerCase() === user.name.toLowerCase();
    })

    const searchTasks = UserTasks.filter((task) =>
        task.title.toLowerCase().includes(debounceSearch.toLowerCase())
    )

    const finalTasks = searchTasks.filter((task)=>{
        if(filter === "all") return true;

        return task.status === filter;
    })

    useEffect(()=>{
        console.log(UserTasks)
    },[filter, setFilter])

  return (
    <div className="p-6 bg-[#0f0f0f] min-h-5/6 text-white overflow-hidden" >
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">My Tasks</h1>
        <p className="text-gray-400 text-sm">
          Track and manage your assigned work
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        < StatCard label="Total Tasks" value={tasks.length} />
        <StatCard label="To Do" value="1" />
        <StatCard label="In Progress" value="4" />
        <StatCard label="Completed" value="3" />
      </div>

      <div className="flex items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search your tasks..."
          className="flex-1 bg-[#1c1c1c] border border-gray-700 px-4 py-2 rounded-md outline-none"
        />

        <div className="flex gap-3">
          < FilterBtn />
        </div>
      </div>

      {/* Task List */}
      <div className="space-y-4">

        < TaskCard
        finalTasks={finalTasks}
        />
      </div>
    </div>
  );
}