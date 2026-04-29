export const TaskCard = ({
  title,
  description,
  status,
  priority,
  tags,
  user,
  date
}) => {
  const statusColor = {
    "Completed": "bg-green-600",
    "In Progress": "bg-blue-600",
    "To Do": "bg-gray-600"
  };

  const priorityColor = {
    High: "bg-red-600",
    Medium: "bg-yellow-500",
    Low: "bg-green-500"
  };

  return (
    <div className="bg-[#1c1c1c] p-4 rounded-lg border border-gray-700">

      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">{title}</h3>

        <span className={`text-sm px-3 py-1 rounded-full ${statusColor[status]}`}>
          {status}
        </span>
      </div>

      <p className="text-gray-400 mb-3">{description}</p>

      <div className="flex items-center gap-2 mb-3">
        <span className={`text-xs px-2 py-1 rounded ${priorityColor[priority]}`}>
          {priority} Priority
        </span>

        {tags.map((tag, i) => (
          <span key={i} className="text-xs bg-gray-700 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center text-sm text-gray-400">
        <span>{user}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}