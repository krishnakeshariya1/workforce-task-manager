import { useState } from "react"
import { useTask } from "../Context/TaskContext"

export const CreateTaskForm = () => {

    const {createEmployee} = useTask()

    const [Form, setForm] = useState({
        name: "",
        email: "",
        password: null,
    })

    const handleSubmit = (e) =>{
        e.preventDefault();

        createEmployee(Form)
    }

    return (

        < div
            className="w-full h-auto bg-[var(--body-background-Color) border-2 border-amber-50 flex items-center justify-center py-3 px-5"
        >
            < form
                onSubmit={handleSubmit}
                className="bg-[var(--primary-page-Color)] text-[var(--primary-text-Color)] flex flex-col gap-7 items-start justify-center py-4 px-10 rounded-4xl"
            >
                < h2
                    className="text-4xl font-bold text-[var(--primary-button-Color)] font-serif "
                >
                    Log In
                </h2>
                <div className=" flex flex-col gap-2 text-start">
                    < label
                        htmlFor="name"
                        className="font-semibold"
                    >
                        Enter Employee Name :
                    </label>
                    < input
                        value={Form.name}
                        required
                        type="text"
                        placeholder="Ex. Dhruv singh"
                        id="name"
                        className="border-[0.3px] border-gray-400 rounded py-1 px-4 w-sm"
                        onChange={(e) => setForm({...Form, name : e.target.value})} />
                </div>

                <div className=" flex flex-col gap-2 text-start">
                    < label
                        htmlFor="email"
                        className="font-semibold"
                    >
                        Enter Employee Email :
                    </label>
                    < input 
                        value={Form.email}
                        required
                        type="email"
                        placeholder="Ex. dhruv@gmail.com"
                        id="email"
                        className="border-[0.3px] border-gray-400 rounded py-1 px-4 w-sm"
                        onChange={(e) => setForm({ ...Form, email : e.target.value})} />
                </div>

                <div className=" flex flex-col gap-2 text-start">
                    < label
                        htmlFor="password"
                        className="font-semibold"
                    >
                        Enter Password in Numbers :
                    </label>
                    < input
                        value={Form.password}
                        required
                        type="password"
                        placeholder="Ex. dhruv@gmail.com"
                        id="password"
                        className="border-[0.3px] border-gray-400 rounded py-1 px-4 w-sm"
                        onChange={(e) => setForm({ ...Form, password : Number(e.target.value)})} />
                </div>

                < button
                  className="bg-[var(--primary-button-Color)] px-6 py-2 rounded-xl font-semibold self-center"
                  type="submit"
                >
                     Create
                </button>
            </form>
        </div>
    )
}