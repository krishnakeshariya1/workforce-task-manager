import { Filters } from "../Config/TaskFunctionality";

export const FilterBtn = ({setFilter}) => {
    return (
        <>
        {
            Filters.map((ele, indx) => {
                return (
                    < button className="px-7 py-2 border border-[var(--color-border)] rounded-md hover:bg-[var(--color-hover-bg)] text-[var(--color-primary-text)]" onClick={()=> setFilter(ele.key)} key={indx} >
                        {ele.label}
                    </button >
                )
            })
        }
        </>
    )
}
