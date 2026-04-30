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
        < div
            className=" w-full py-4 px-15 gap-2 flex items-center justify-between mb-4 ">
            < Link
                className="w-15"
            >
                < img
                    src="\public\setting_5034601.png"
                    alt="project logo"
                    className="w-full overflow-hidden"
                />
            </Link>

            < nav
                className="bg-[var(--color-section-bg)] text-[var(--color-primary-text)] py-2.5 px-7 flex items-center justify-between gap-7 rounded-3xl"
            >
                {links.map((link) => {
                    return (
                        < NavLink key={link.path} to={link.path} className="text-lg font-semibold text-[var(--color-primary-text)]">
                            {link.name}
                        </NavLink>
                    )
                })}
            </nav>
            < Link className="w-13"
            >
                < img
                    onClick={() => logOut()}
                    src="\public\logout_5544338.png"
                    alt="project logo"
                    className="w-full overflow-hidden cursor-pointer"
                />
            </Link>
        </div>
    )
}