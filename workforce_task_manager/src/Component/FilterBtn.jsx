import { Filters } from "../Config/TaskFunctionality";

export const FilterBtn = ({setFilter}) => {
    return (
        <div className="flex flex-wrap gap-3 w-full">
        {
            Filters.map((ele, indx) => {
                return (
                    <button
                        className="px-4 sm:px-7 py-2 border border-[var(--color-border)] rounded-md hover:bg-[var(--color-hover-bg)] text-[var(--color-primary-text)] text-sm sm:text-base w-full sm:w-auto"
                        onClick={() => setFilter(ele.key)}
                        key={indx}
                    >
                        {ele.label}
                    </button>
                )
            })
        }
        </div>
    )
}