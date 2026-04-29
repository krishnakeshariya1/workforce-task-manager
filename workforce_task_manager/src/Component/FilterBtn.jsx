import { Filters } from "../Config/TaskFunctionality";

export const FilterBtn = ({setFilter}) => {
    return (
        <>
        {
            Filters.map((ele, indx) => {
                return (
                    < button className="px-7 py-2 border border-gray-600 rounded-md hover:bg-[#2a2a2a] text-white" onClick={()=> setFilter(ele.key)} key={indx} >
                        {ele.label}
                    </button >
                )
            })
        }
        </>
    )
}
