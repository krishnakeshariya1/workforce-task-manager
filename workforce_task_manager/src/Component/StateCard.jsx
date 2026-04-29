import { Filters } from "../Config/TaskFunctionality";

export const StatCard = () => {
    return (
        <>
            {Filters.map((ele, ind) => {
                return (
                    <div className="bg-[#1c1c1c] p-4 rounded-lg text-center" key={ind}>
                        <h2 className="text-2xl font-bold text-white">{ele.label}</h2>
                        <p className="text-gray-400">0</p>
                    </div>
                )
            })}
        </>
    );
}