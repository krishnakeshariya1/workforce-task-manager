import { navLinks } from "../Config/navLinks";
import { useAuth } from "../Context/AuthContext"
import { Link, NavLink } from "react-router-dom";


export const Navbar = () => {
    const { user, logOut } = useAuth();

    if (!user) return;

    const links = navLinks[user.role];

    return (
        < div
            className="w-full py-4 px-15 gap-2 flex items-center justify-between mb-10 ">
            < Link
                className="bg-black w-15"
            >
                < img
                    src="\public\setting_5034601.png"
                    alt="project logo"
                    className="w-full overflow-hidden"
                />
            </Link>

            < nav
                className="bg-[var(--navbar-color)] text-[var(--primary-text-Color)] py-2.5 px-7 flex items-center justify-between gap-7 rounded-3xl"
            >
                {links.map((link) => {
                    return (
                        < NavLink key={link.path} to={link.path} className="text-lg font-semibold text-white">
                            {link.name}
                        </NavLink>
                    )
                })}
            </nav>
            < Link
                className="bg-black w-13"
            >
                < img
                    onClick={()=>logOut()}
                    src="\public\logout_5544338.png"
                    alt="project logo"
                    className="w-full overflow-hidden cursor-pointer"
                />
            </Link>
        </div>
    )
}