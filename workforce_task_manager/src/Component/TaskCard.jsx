import { useTask } from "../Context/TaskContext";

export const TaskCard = () => {

    const { data } = useTask()

    const tasks = data.tasks

    const statusColor = {
        "Completed": "bg-green-600",
        "In Progress": "bg-blue-600",
        "To Do": "bg-gray-600"
    };

    const priorityColor = {
        high: "bg-red-600",
        medium: "bg-yellow-500",
        low: "bg-green-500"
    };

    return (
        <>
            {tasks.map((task) => {
                return (
                    <div className="bg-[#1c1c1c] p-4 rounded-lg border border-gray-700" key={task.id}>

                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-lg font-semibold text-white">{task.title}</h3>

                            <span className={`text-sm px-3 py-1 rounded-full ${statusColor[status]}`}>
                                {task.status}
                            </span>
                        </div>

                        <p className="text-gray-400 mb-3">{task.description}</p>

                        <div className="flex items-center gap-2 mb-3">
                            <span className={`text-xs px-2 py-1 rounded font-semibold ${priorityColor[task.priority] ? priorityColor[task.priority] : "bg-gray-600"}  `}>
                                {task.priority} Priority
                            </span>
                        </div>

                        <div className="flex justify-between items-center text-sm text-gray-400">
                            <span>{task.assignedTo}</span>
                            <span>{task.date}</span>
                        </div>
                    </div>
                )
            })}

        </>
    );
}