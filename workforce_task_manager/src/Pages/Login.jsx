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
        <div className="w-full h-screen flex items-center justify-center bg-[var(--color-page-bg)] ">
        < form
            id="loginForm"
            onSubmit={(e)=> handleSubmit(e)}
            className="flex flex-col items-start justify-center gap-5 w-fit py-10 px-15 text-[var(--color-primary-text)] bg-[var(--color-section-bg)] "
        >
            < h2
                className="text-4xl font-bold text-[var(--color-primary-text)] mb-1 font-serif "
            >
                Log In
            </h2>

            < div
                className="flex flex-col text-[var(--color-primary-text)]"
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
                    className="border-[0.3px] rounded w-sm border-[var(--color-border)] placeholder:text-[var(--color-secondary-text)] bg-[var(--color-page-bg)] py-1 px-2 text-lg"
                />
            </div>

            < div className="flex flex-col text-[var(--color-primary-text)]">
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
                    className="border-[0.3px] rounded w-sm border-[var(--color-border)] placeholder:text-[var(--color-secondary-text)] bg-[var(--color-page-bg)] py-1 px-2 text-lg"
                />
            </div>

            < button
                type="submit"
                className=" self-center bg-[var(--color-login-btn)] font-semibold text-lg rounded py-2 px-4"
            >
                LogIn
            </button>

        </form>
        </div>
    )
}