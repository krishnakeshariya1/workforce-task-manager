import { useState } from "react"
import { useAuth } from "../Context/AuthContext";
import { Navigate, useNavigate} from 'react-router-dom'

export const Login = () => {

    const {login} = useAuth();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email : "",
        password : "",
    });

    const handleSubmit = (e) =>{
        e.preventDefault();

        const user = login(form.email, form.password);

        if(!user) {
            alert("Invalide Credential")
            return;
        }

        if(user.role === "admin") {
            navigate("/admin");
        }
        else{
            navigate("/employee")
        }

    }

    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-[var(--color-page-bg)] px-3 sm:px-4">
        
        <form
            id="loginForm"
            onSubmit={(e)=> handleSubmit(e)}
            className="flex flex-col items-start justify-center gap-5 w-full max-w-md py-8 sm:py-10 px-5 sm:px-10 md:px-15 text-[var(--color-primary-text)] bg-[var(--color-section-bg)] rounded-xl"
        >
            <h2
                className="text-3xl sm:text-4xl font-bold text-[var(--color-primary-text)] mb-1 font-serif"
            >
                Log In
            </h2>

            <div
                className="flex flex-col text-[var(--color-primary-text)] w-full"
            >
                <label
                    className="text-base sm:text-lg mb-1"
                >
                    Enter Email
                </label>

                <input
                    type="email"
                    placeholder="Enter Email..."
                    required
                    value={form.email}
                    onChange={(e)=> setForm({...form, email : e.target.value})}
                    className="border-[0.3px] rounded w-full border-[var(--color-border)] placeholder:text-[var(--color-secondary-text)] bg-[var(--color-page-bg)] py-2 px-3 text-base sm:text-lg outline-none"
                />
            </div>

            <div className="flex flex-col text-[var(--color-primary-text)] w-full">
                <label
                    className="text-base sm:text-lg mb-1"
                >
                    Enter Password
                </label>

                <input
                    type="password"
                    placeholder="Enter Password..."
                    value={form.password}
                    required
                    onChange={(e)=> setForm({...form, password : e.target.value})}
                    className="border-[0.3px] rounded w-full border-[var(--color-border)] placeholder:text-[var(--color-secondary-text)] bg-[var(--color-page-bg)] py-2 px-3 text-base sm:text-lg outline-none"
                />
            </div>

            <button
                type="submit"
                className="self-center bg-[var(--color-login-btn)] font-semibold text-base sm:text-lg rounded py-2 px-6 w-full sm:w-auto"
            >
                LogIn
            </button>

        </form>
        </div>
    )
}