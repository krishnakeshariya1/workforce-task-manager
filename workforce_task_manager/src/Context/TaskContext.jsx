import { createContext, useState } from "react";
import { getData, setData } from "../Utils/localStorage";
import { useContext } from "react";


const TaskContext = createContext();

export const TaskProvider = ({ children }) => {

    const [data, setAppData] = useState(getData());

    const createEmployee = (user) => {

        const newEmp = {
            ...user,
            id: Date.now().toString(),
            role: "employee"
        };

        const updated = {
            ...data,
            users: [...data.users, newEmp]
        };

        setAppData(updated);
        setData(updated)
    }

    const createTask = (task) => {

        const newTask = {
            ...task,
            id: Date.now().toString(),
            status: "initial",
            comment: [],
        }

        const updated = {
            ...data,
            tasks: [...data.tasks, newTask]
        };

        setAppData(updated)
        setData(updated)
    }
    return (
        <TaskContext.Provider value={{ createEmployee, createTask, data }}>
            {children}
        </TaskContext.Provider>
    )
}
export const useTask = () => useContext(TaskContext)