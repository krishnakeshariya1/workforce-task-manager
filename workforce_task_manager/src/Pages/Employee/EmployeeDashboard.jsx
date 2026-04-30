import { Outlet } from "react-router-dom"
import { Navbar } from "../../Component/Navbar"
import { StatCard } from "../../Component/StateCard";
import { FilterBtn } from "../../Component/FilterBtn";
import { TaskCard } from "../../Component/TaskCard";
import { useTask } from "../../Context/TaskContext";
import { useAuth } from "../../Context/AuthContext";
import { useEffect, useState } from "react";
import useDebounce from "../../Hooks/UseBounce";
import { SearchBar } from "../../Component/SearchBar";

export const EmployeeDashboard = () => {

  const { data } = useTask()
  const { user, logOut } = useAuth();
  let tasks = data.tasks;

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all")
  const debounceSearch = useDebounce(search, 500);

  const UserTasks = tasks.filter((task) => {
    return task.assignedTo.toLowerCase() === user.name.toLowerCase();
  })

  const searchTasks = UserTasks.filter((task) =>
    task.title.toLowerCase().includes(debounceSearch.toLowerCase())
  )

  const finalTasks = searchTasks.filter((task) => {
    if (filter === "all") return true;

    return task.status === filter;
  })

  const todo = UserTasks.filter(t => t.status === "todo").length;
  const inprogress = UserTasks.filter(t => t.status === "inprogress").length;
  const done = UserTasks.filter(t => t.status === "done").length;


  return (
      <div className="p-6 bg-[#0f0f0f] h-screen text-white overflow-hidden" >

        <div className=" flex items-center justify-between">
          <div className="mb-6">
          <h1 className="text-2xl font-semibold">My Tasks</h1>
          <p className="text-gray-400 text-sm">
            Track and manage your assigned work
          </p>
        </div>

          < button
            className="bg-red-600 px-3 py-2 rounded-lg font-semibold"
            onClick={()=> logOut()}
          >
             Log Out
          </button>

        </div>

        <div className="grid grid-cols-4 gap-4 mb-6">
          < StatCard label="Total Tasks" value={UserTasks.length} />
          <StatCard label="To Do" value={todo} />
          <StatCard label="In Progress" value={inprogress} />
          <StatCard label="Completed" value={done} />
        </div>

        <div className="flex items-center gap-4 mb-6">
          <SearchBar search={search} setSearch={setSearch}/>

          <div className="flex gap-3">
            < FilterBtn setFilter={setFilter} />
          </div>
        </div>

        <div className="space-y-4">

          < TaskCard
            finalTasks={finalTasks}
          />
        </div>
      </div>
  );
}