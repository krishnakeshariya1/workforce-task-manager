import { useState } from "react"
import { useAuth } from "../Context/AuthContext";
import { Navigate, useNavigate} from 'react-router-dom'

export const Login = () => {

    const {login} = useAuth();

    const [form, setForm] = useState({
        email : "",
        password : "",
    });

    const handleSubmit = (e) =>{
        e.preventDefault();

        const user = login(form.email, form.password);

        if(!user) alert("Invalide Credential");

        if(user.role === "admin") console.log("done") 

    }

    return (
        <div className="w-full h-screen flex items-center justify-center bg-black ">
        < form
            id="loginForm"
            onSubmit={(e)=> handleSubmit(e)}
            className="flex flex-col items-start justify-center gap-5 w-fit py-10 px-15 text-[var(--primary-text-Color)] bg-[#0f0f0f] "
        >
            < h2
                className="text-4xl font-bold text-[var(--primary-text-Color)] mb-1 font-serif "
            >
                Log In
            </h2>

            < div
                className="flex flex-col text-[var(--primary-text-Color)]"
            >
                < label
                    className="text-lg mb-1"
                >
                    Enter Email
                </label>

                < input
                    type="email"
                    placeholder="Enter Email..."
                    required
                    value={form.email}
                    onChange={(e)=> setForm({...form, email : e.target.value})}
                    className="border-[0.3px] rounded w-sm border-gray-600 placeholder:text-[var(--secondary-text-Color)] bg-[var(--body-background-Color)] py-1 px-2 text-lg"
                />
            </div>

            <div className="flex flex-col text-[var(--primary-text-Color)]">
                < label
                    className="text-lg mb-1"
                >
                    Enter Password
                </label>

                < input
                    type="password"
                    placeholder="Enter Password..."
                    value={form.password}
                    required
                    onChange={(e)=> setForm({...form, password : e.target.value})}
                    className="border-[0.3px] rounded w-sm border-gray-600 placeholder:text-[var(--secondary-text-Color)] bg-[var(--body-background-Color)] py-1 px-2 text-lg"
                />
            </div>

            < button
                type="submit"
                className=" self-center bg-[var(--primary-button-Color)] font-semibold text-lg rounded py-2 px-4"
            >
                LogIn
            </button>

        </form>
        </div>
    )
}