import { Outlet } from "react-router-dom"
import { Navbar } from "../../Component/Navbar"
import { CreateEmployeeForm } from "../../Component/CreateEmployeeForm"
import { StatCard } from "../../Component/StateCard"
import { Filters } from "../../Config/TaskFunctionality"
import { useState } from "react"
import { FilterBtn } from "../../Component/FilterBtn"
import { TaskCard } from "../../Component/TaskCard"
import { useTask } from "../../Context/TaskContext"
import { TaskForm } from "../../Component/TaskFrom"

export const CreateTask = () => {
    return (
        <div className="text-[var(--color-page-bg)]">
            <TaskForm />
        </div>
    )
}