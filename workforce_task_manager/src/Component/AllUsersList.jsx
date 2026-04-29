export const AllUsersList = ({users, selected, setSelected}) =>{
    return(
  <div className="bg-slate-900 rounded-2xl border border-slate-800 flex flex-col overflow-hidden ">

          <div className="flex-1 overflow-y-auto divide-y divide-slate-800/60">
            {users.map((user) =>  (
              <button
                key={user.id}
                onClick={() => setSelected(user)}
                className={`w-full flex items-center gap-3 p-4 text-left transition-all duration-150 hover:bg-slate-800/60
                  ${selected?.id === user.id
                    ? "bg-slate-800 border-l-2 border-violet-500"
                    : "border-l-2 border-transparent"
                  }`}
              >
                <div className="flex-1 min-w-0 ml-5">
                  <p className="text-sm font-medium text-slate-200 truncate">{user.name}</p>
                  <p className="text-xs text-slate-500 truncate">{user.role}</p>
                </div>
                <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium shrink-0`}>
                  <span className={`w-1.5 h-1.5 rounded-full`}></span>
                  {user.status}
                </div>
              </button>
            ))}
          </div>
        </div> 
    )
}