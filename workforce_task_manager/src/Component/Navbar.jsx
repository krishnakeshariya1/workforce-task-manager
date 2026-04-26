import { navLinks } from "../Config/navLinks";
import { useAuth } from "../Context/AuthContext"
import { Link } from "react-router-dom";

export const Navbar = () => {
    const { user } = useAuth();

    if (!user) return;

    const links = navLinks[user.role];

    return (
        < div
            className="w-full py-4 px-15 gap-2 flex items-center justify-between ">
            <div className="text-5xl">Logo</div>
            <nav className="bg-[var(--navbar-color)] text-[var(--primary-text-Color)] py-2.5 px-7 flex items-center justify-between gap-7 rounded-3xl">
                {links.map((link) => {
                    return (
                        <Link key={link.path} to={link.path} className="text-lg font-semibold text-white">
                            {link.name}
                        </Link>
                    )
                })}
            </nav>
            <img src="" alt="logout img" />
        </div>
    )
}