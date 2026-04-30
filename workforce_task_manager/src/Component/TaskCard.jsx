import { useState } from "react";
import { useTask } from "../Context/TaskContext";

export const TaskCard = ({ finalTasks }) => {
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState("");
    const { updateTaskStatus } = useTask();

    const statusColor = {
        done: "bg-green-600",
        inprogress: "bg-blue-600",
        todo: "bg-orange-400 text-black",
    };

    const priorityColor = {
        high: "bg-red-600 text-white",
        medium: "bg-yellow-500",
        low: "bg-green-500 text-white",
    };

    const handleStatusChange = (taskId, value) => {
        setSelectedStatus(value);
        updateTaskStatus(taskId, value);
        setEditingTaskId(null);
    };

    return (
        <>
            {finalTasks.map((task) => {
                const isTaskEditing = editingTaskId === task.id;

                return (
                    <div className="bg-[var(--color-dark-bg)] p-4 rounded-lg border border-[var(--color-border)]" key={task.id}>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                            <div>
                                <h3 className="text-lg font-semibold text-[var(--color-primary-text)]">{task.title}</h3>
                            </div>

                            <div className="flex items-center gap-2">
                                {!isTaskEditing ? (
                                    <>
                                        <span className={`text-sm px-3 py-1 rounded-full font-semibold ${statusColor[task.status] || "bg-[var(--color-secondary-btn)]"}`}>
                                            {task.status === "done" ? "completed" : task.status}
                                        </span>
                                        <button
                                            className="bg-[var(--color-dark-btn)] text-[var(--color-primary-text)] px-2 py-1 rounded-lg ml-2.5"
                                            onClick={() => {
                                                setEditingTaskId(task.id);
                                                setSelectedStatus(task.status);
                                            }}
                                        >
                                            Change Status
                                        </button>
                                    </>
                                ) : (
                                    <select
                                        value={selectedStatus}
                                        className="bg-[var(--color-search)] border border-[var(--color-border)] px-3 py-1 rounded-md"
                                        onChange={(e) => handleStatusChange(task.id, e.target.value)}
                                    >
                                        <option value="todo">To Do</option>
                                        <option value="inprogress">In Progress</option>
                                        <option value="done">Completed</option>
                                    </select>
                                )}
                            </div>
                        </div>

                        <p className="text-[var(--color-secondary-text)] mb-3">{task.description}</p>

                        <div className="flex items-center gap-2 mb-3">
                            <span className={`text-xs px-2 py-1 rounded font-semibold ${priorityColor[task.priority] ?? "bg-gray-600"}`}>
                                {task.priority} Priority
                            </span>
                        </div>

                        <div className="flex justify-between items-center text-sm text-[var(--color-secondary-text)]">
                            <span>{task.assignedTo}</span>
                            <span>{task.date}</span>
                        </div>
                    </div>
                );
            })}
        </>
    );
};