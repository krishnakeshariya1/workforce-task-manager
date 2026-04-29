import { Filters } from "../Config/TaskFunctionality";

export const FilterBtn = () => {
    return (
        <>
        {
            Filters.map((ele) => {
                return (
                    < button className="px-7 py-2 border border-gray-600 rounded-md hover:bg-[#2a2a2a] text-white" >
                        {ele.label}
                    </button >
                )
            })
        }
        </>
    )
}
