import { navLinks } from "../Config/navLinks";
import { useAuth } from "../Context/AuthContext"
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";

export const Navbar = () => {

    const { user, logOut } = useAuth();
    const { toggleTheme } = useTheme();

    if (!user) return;

    const links = navLinks[user.role];

    return (
        <div
            className="w-full py-3 sm:py-4 px-3 sm:px-6 lg:px-15 gap-4 flex flex-col lg:flex-row items-center justify-between mb-4"
        >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[var(--color-login-btn)] font-semibold underline underline-offset-4">
                Vantage
            </h2>

            <nav
                className="bg-[var(--color-section-bg)] text-[var(--color-primary-text)] py-2 sm:py-3 px-3 sm:px-6 flex flex-wrap items-center justify-center gap-3 sm:gap-6 rounded-3xl w-full lg:w-auto"
            >
                {links.map((link) => {
                    return (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className="text-xs sm:text-base lg:text-lg font-semibold text-[var(--color-primary-text)] whitespace-nowrap"
                        >
                            {link.name}
                        </NavLink>
                    )
                })}
            </nav>

            <Link
                className="w-9 sm:w-11 lg:w-13 shrink-0"
            >
                <button
                    onClick={() => logOut()}
                    className="bg-[var(--color-logout-btn)] text-[var(--color-primary-text)] font-semibold text-sm sm:text-base lg:text-lg py-1 sm:py-2 px-3 sm:px-4 rounded"
                >
                    Logout
                </button>
            </Link>
        </div>
    )
}