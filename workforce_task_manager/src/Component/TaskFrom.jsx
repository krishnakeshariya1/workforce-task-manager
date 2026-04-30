import { useEffect, useState } from "react"
import { useTask } from "../Context/TaskContext";

export const TaskForm = () => {

    const {createTask, data} = useTask();

    const users = data.users;

    const [Form, setForm] = useState({
        title: "",
        description: "",
        status : "",
        priority: "",
        assignedTo: "",
        deadline: ""
    })

    const handleChange = (e) => {
        setForm({ ...Form, [e.target.name]: e.target.value });
    };
    const resetForm = () =>{
        setForm({ 
        title: "",
        description: "",
        status : "",
        priority: "",
        assignedTo: "",
        deadline: ""
    })
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        createTask(Form);
        resetForm();
    }

    return (
        <div className="bg-[var(--color-page-bg)] min-h-screen text-[var(--color-primary-text)] flex justify-center items-center p-6">
            <form className="w-full max-w-4xl bg-[var(--color-section-bg)] p-6 rounded-xl border border-[var(--color-border)] space-y-6"
             onSubmit={submitHandler}>
                <h2 className="text-xl font-semibold text-[var(--color-third-text)]">CREATE TASK</h2>
                <div>
                    <label className="block mb-2 text-sm text-[var(--color-third-text)]">
                        Title <span className="text-[var(--color-logout-btn)]">*</span>
                    </label>
                    <input
                        type="text"
                        name="title"
                        placeholder="e.g. Redesign landing page hero section"
                        value={Form.title}
                        onChange={handleChange}
                        className="w-full bg-[var(--color-search)] border border-[var(--color-border)] px-4 py-2 rounded-md outline-none"
                    />
                </div>
                <div>
                    <label className="block mb-2 text-sm text-[var(--color-third-text)]">
                        Description
                    </label>
                    <textarea
                        name="description"
                        placeholder="What needs to be done? Add context, goals, or acceptance criteria..."
                        value={Form.description}
                        onChange={handleChange}
                        rows={4}
                        className="w-full bg-[var(--color-search)] border border-[var(--color-border)] px-4 py-2 rounded-md outline-none"
                    />
                </div>
                <h3 className="text-sm text-[var(--color-third-text)] border-t border-[var(--color-border)] pt-4">
                    DETAILS
                </h3>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-2 text-sm text-[var(--color-third-text)]">
                            Status <span className="text-[var(--color-logout-btn)]">*</span>
                        </label>
                        <select
                            name="status"
                            value={Form.status}
                            onChange={handleChange}
                            className="w-full bg-[var(--color-search)] border border-[var(--color-border)] px-4 py-2 rounded-md"
                        >
                            <option value="">— Select status —</option>
                            <option value="todo">To Do</option>
                            <option value="inprogress">In Progress</option>
                            <option value="done">Completed</option>
                        </select>
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-[var(--color-third-text)]">
                            Priority <span className="text-[var(--color-logout-btn)]">*</span>
                        </label>
                        <select
                            name="priority"
                            value={Form.priority}
                            onChange={handleChange}
                            className="w-full bg-[var(--color-search)] border border-[var(--color-border)] px-4 py-2 rounded-md"
                        >
                            <option value="">— Select priority —</option>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-[var(--color-third-text)]">
                            Assignee <span className="text-[var(--color-logout-btn)]">*</span>
                        </label>
                        <select
                            name="assignedTo"
                            value={Form.assignedTo}
                            onChange={handleChange}
                            className="w-full bg-[var(--color-search)] border border-[var(--color-border)] px-4 py-2 rounded-md"
                        >
                            <option value="">— Select assignee —</option>
                            {users.map((ele) =>{
                                return(
                                    <option value={ele.name.toLowerCase().trim()} key={ele.id}>{ele.name}</option>
                                )
                            })}
                        </select>
                    </div>


                    <div>
                        <label className="block mb-2 text-sm text-[var(--color-third-text)]">
                            Due date <span className="text-[var(--color-logout-btn)]">*</span>
                        </label>
                        <input
                            type="date"
                            name="deadline"
                            value={Form.deadline}
                            onChange={handleChange}
                            className="w-full bg-[var(--color-search)] border border-[var(--color-border)] px-4 py-2 rounded-md"
                        />
                    </div>
                </div>

                <div className="flex gap-4 pt-4">
                    <button
                        type="reset"
                        className="flex-1 border border-[var(--color-border)] py-2 rounded-md hover:bg-[var(--color-hover-bg)]"
                        onClick={resetForm}
                    >
                        Reset
                    </button>

                    <button
                        type="submit"
                        className="flex-1 bg-[var(--color-submit-bg)] text-[var(--color-submit-text)] font-semibold py-2 rounded-md hover:opacity-90"
                    >
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    )

}