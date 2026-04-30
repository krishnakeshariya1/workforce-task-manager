import { Filters } from "../Config/TaskFunctionality";
import { useTask } from "../Context/TaskContext";

export const StatCard = ({label, value }) => {
    return (
        <div className="bg-[var(--color-section-bg)] p-4 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-[var(--color-primary-text)]">{label}</h2>
            <p className="text-[var(--color-secondary-text)]">{value}</p>
        </div>
    )
}