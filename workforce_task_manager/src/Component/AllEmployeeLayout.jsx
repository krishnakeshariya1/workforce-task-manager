import { useState, useEffect } from "react"
import { getData } from "../Utils/localStorage";
import { AllUsersList } from "./AllUsersList";

export const AllEmployeeLayout = () =>{

    const [users, setUsers] = useState([]);
    const [selected, setSelected] = useState(users[0])

    useEffect(()=>{
        const appData = getData();
        setUsers(appData.users)
    },[])

    return(
        <div className="min-h-screen bg-slate-950 text-white p-4 flex flex-col gap-4">

      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-3">
          <div className=" py-2 px-3 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-md font-bold">
            All Users 
          </div>
        </div>
        <span className="text-xs text-slate-500">{users.length} Total Users</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-4 flex-1">
        < AllUsersList  users={users} selected={selected}/>

        {/* RIGHT — User Detail */}
        {selected ? (
          <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-y-auto flex flex-col">

            {/* Banner */}
            <div className={`h-28 bg-gradient-to-r relative rounded-t-2xl`}>
              <div
                className="absolute inset-0 opacity-20 rounded-t-2xl"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />
            </div>

            {/* Avatar + Name */}
            <div className="px-6 pb-4 border-b border-slate-800 relative">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br  flex items-center justify-center text-2xl font-bold shadow-xl -mt-10 border-4 border-slate-900`}>
                {selected.avatar}
              </div>
              <div className="mt-3 flex items-start justify-between flex-wrap gap-2">
                <div>
                  <h2 className="text-xl font-bold text-white">{selected.name}</h2>
                  <p className="text-slate-400 text-sm">{selected.role}</p>
                </div>
                <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold `}>
                  <span className={`w-2 h-2 rounded-full`}></span>
                  {selected.status}
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 divide-x divide-slate-800 border-b border-slate-800">
              {[
                { label: "Projects", value: selected.projects },
                { label: "Tasks", value: selected.tasks },
                { label: "Rating", value: `${selected.rating}★` },
              ].map((stat) => (
                <div key={stat.label} className="py-5 text-center">
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Info Cards */}
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: "✉️", label: "Email", value: selected.email },
                { icon: "📞", label: "Phone", value: selected.phone },
                { icon: "📍", label: "Location", value: selected.location },
                { icon: "📅", label: "Joined", value: selected.joined },
              ].map((info) => (
                <div
                  key={info.label}
                  className="flex items-start gap-3 bg-slate-800/50 rounded-xl p-4 border border-slate-700/40"
                >
                  <span className="text-lg">{info.icon}</span>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">{info.label}</p>
                    <p className="text-sm text-slate-200 font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="px-6 pb-6 flex gap-3 flex-wrap">
              <button className={`flex-1 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r ${selected.color} text-white shadow-lg hover:opacity-90 transition`}>
                Edit User
              </button>
              <button className="flex-1 py-2.5 rounded-xl text-sm font-semibold bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 transition">
                Send Message
              </button>
              <button className="py-2.5 px-4 rounded-xl text-sm font-semibold bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20 transition">
                Remove
              </button>
            </div>

          </div>
        ) : (
          <div className="bg-slate-900 rounded-2xl border border-slate-800 flex items-center justify-center text-slate-600 text-sm">
            Select a user to view details
          </div>
        )}
      </div>
    </div>
    )
}