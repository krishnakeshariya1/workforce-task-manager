export const Login = () => {
    return (
        <form className="flex flex-col items-start justify-center gap-5 w-fit py-10 px-15 text-[var(--primary-text-Color)]">
            <h2 className="text-4xl font-bold text-[var(--primary-text-Color)] mb-1 font-serif ">Log In</h2>
            <div className="flex flex-col text-[var(--primary-text-Color)]">
                <label className="text-lg mb-1">Enter Email</label>
                < input
                    type="email"
                    placeholder="Enter Email..."
                    required
                    className="border-[0.3px] rounded w-sm border-gray-600 placeholder:text-[var(--secondary-text-Color)] bg-[var(--body-background-Color)] py-1 px-2 text-lg"
                />
            </div>

            <div className="flex flex-col text-[var(--primary-text-Color)]">
                <label className="text-lg mb-1">Enter Password</label>
                < input
                    type="password"
                    placeholder="Enter Password..."
                    required
                    className="border-[0.3px] rounded w-sm border-gray-600 placeholder:text-[var(--secondary-text-Color)] bg-[var(--body-background-Color)] py-1 px-2 text-lg"
                />
            </div>
            <button className=" self-center bg-[var(--primary-button-Color)] font-semibold text-lg rounded py-2 px-4">LogIn</button>
        </form>
    )
}