import { Filters } from "../Config/TaskFunctionality";
import { useTask } from "../Context/TaskContext";

export const StatCard = ({label, value }) => {
    return (
        <div className="bg-[var(--color-section-bg)] p-4 sm:p-5 rounded-lg text-center w-full">
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-primary-text)] break-words">
                {label}
            </h2>

            <p className="text-sm sm:text-base text-[var(--color-secondary-text)] break-words">
                {value}
            </p>
        </div>
    )
}