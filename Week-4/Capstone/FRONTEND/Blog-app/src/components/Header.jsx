import {NavLink} from "react-router";

function Header(){
    return (
        <div className="flex justify-between items-center bg-gray-800 text-white p-4">
            <h1 className="text-2xl font-bold">My Blog</h1>
            <nav>
                <NavLink to="/" className="mx-2" activeClassName="underline">Home</NavLink>
                <NavLink to="/about" className="mx-2" activeClassName="underline">Register</NavLink>
                <NavLink to="/contact" className="mx-2" activeClassName="underline">Login</NavLink>
            </nav>
        </div>
    );
}