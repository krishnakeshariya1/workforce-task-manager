import { Filters } from "../Config/TaskFunctionality";
import { useTask } from "../Context/TaskContext";

export const StatCard = ({label, value }) => {
    return (
        <div className="bg-[#1c1c1c] p-4 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-white">{label}</h2>
            <p className="text-gray-400">{value}</p>
        </div>
    )
}