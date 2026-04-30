import { useState, useEffect, use } from "react"
import { getData } from "../Utils/localStorage";
import { AllUsersList } from "./AllUsersList";
import { useAuth } from "../Context/AuthContext";
import { useTask } from "../Context/TaskContext";

export const AllEmployeeLayout = () =>{

    const {data} = useTask()

    const users = data.users;
    // const [users, setUsers] = useState([]);
    const [selected, setSelected] = useState(users[0])

    return(
        <div className=" bg-[var(--color-page-bg)] text-[var(--color-primary-text)] p-4 flex flex-col gap-4 overflow-hidden">

      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-3">
          <div className=" py-2 px-3 rounded-lg text-[var(--color-primary-btn)] flex items-center justify-center text-3xl font-serif underline underline-offset-4 font-bold">
            All Users 
          </div>
        </div>
        <span className="text-xs text-[var(--color-secondary-text)]">{users.length} Total Users</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-4 flex-1 h-80  overflow-y-hidden">
        < AllUsersList  users={users} selected={selected} setSelected={setSelected}/>

        {selected ? (
          <div className="bg-[var(--color-section-bg)] rounded-2xl border border-[var(--color-border)] overflow-y-auto flex flex-col">

            <div className="px-6 pb-4 border-b border-[var(--color-border)] relative">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br  flex items-center justify-center text-2xl font-bold shadow-xl -mt-10 border-4 border-[var(--color-section-bg)]`}>
                {selected.avatar}
              </div>
              <div className="mt-3 flex items-start justify-between flex-wrap gap-2">
                <div>
                  <h2 className="text-xl font-bold text-[var(--color-primary-text)]">{selected.name}</h2>
                  <p className="text-[var(--color-secondary-text)] text-sm">{selected.role}</p>
                </div>
                <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold `}>
                  <span className={`w-2 h-2 rounded-full`}></span>
                  {selected.status}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 divide-x divide-[var(--color-border)] border-b border-[var(--color-border)]">
              {[
                { label: "Projects", value: selected.projects },
                { label: "Tasks", value: selected.tasks },
              ].map((stat) => (
                <div key={stat.label} className="py-5 text-center">
                  <p className="text-2xl font-bold text-[var(--color-primary-text)]">{stat.value}</p>
                  <p className="text-xs text-[var(--color-secondary-text)] mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: "✉️", label: "Email", value: selected.email },
                { icon: "📞", label: "Phone", value: selected.phone },
                { icon: "📍", label: "Location", value: selected.location },
                { icon: "📅", label: "Joined", value: selected.joined },
              ].map((info) => (
                <div
                  key={info.label}
                  className="flex items-start gap-3 bg-[var(--color-card-bg)] rounded-xl p-4 border border-[var(--color-card-border)]"
                >
                  <span className="text-lg">{info.icon}</span>
                  <div>
                    <p className="text-xs text-[var(--color-secondary-text)] mb-0.5">{info.label}</p>
                    <p className="text-sm text-[var(--color-third-text)] font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-[var(--color-section-bg)] rounded-2xl border border-[var(--color-border)] flex items-center justify-center text-[var(--color-secondary-text)] text-sm">
            Select a user to view details
          </div>
        )}
      </div>
    </div>
    )
}