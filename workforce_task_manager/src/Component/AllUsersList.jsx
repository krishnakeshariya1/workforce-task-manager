export const AllUsersList = ({users, selected, setSelected}) =>{
    return(
  <div className="bg-[var(--color-section-bg)] rounded-2xl border border-[var(--color-border)] flex flex-col overflow-hidden">

          <div className="flex-1 overflow-y-auto divide-y divide-[var(--color-border)] max-h-[300px] lg:max-h-full">
            {users.map((user) =>  (
              <button
                key={user.id}
                onClick={() => setSelected(user)}
                className={`w-full flex items-center gap-3 p-3 sm:p-4 text-left transition-all duration-150 hover:bg-[var(--color-hover-bg)]
                  ${selected?.id === user.id
                    ? "bg-[var(--color-secondary-btn)] border-l-2 border-[var(--color-accent)]"
                    : "border-l-2 border-transparent"
                  }`}
              >
                <div className="flex-1 min-w-0 ml-2 sm:ml-5">
                  <p className="text-sm font-medium text-[var(--color-third-text)] truncate">
                    {user.name}
                  </p>

                  <p className="text-xs text-[var(--color-secondary-text)] truncate">
                    {user.role}
                  </p>
                </div>

                <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium shrink-0`}>
                  <span className={`w-1.5 h-1.5 rounded-full`}></span>
                  <span className="truncate max-w-[70px] sm:max-w-none">
                    {user.status}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div> 
    )
}