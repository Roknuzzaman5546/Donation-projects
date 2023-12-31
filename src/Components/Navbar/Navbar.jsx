import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="mt-4">
            <div className=" flex md:flex-row flex-col gap-2 justify-between items-center w-11/12 mx-auto">
                <div>
                    <img className=" w-40" src="./assest/Logo.png" alt="" />
                </div>
                <ul className=" flex gap-4">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " text-red-300 underline" : ""
                            }>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " text-red-300 underline" : ""
                            }>
                            Donation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " text-red-300 underline" : ""
                            }>
                            Statistics
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;