import Java from "./Java";
import Nodejs from "./Nodejs";
import Vue from "./Vue";
import { NavLink, Outlet } from "react-router";

function Technologies() {
  return (
    <div className="p-6">
      <nav className="p-5">
        <ul className="flex justify-center gap-5 text-2xl">
          <li>
            <NavLink to="java">Java</NavLink>
          </li>
          <li>
            <NavLink to="nodejs">Node.js</NavLink>
          </li>
          <li>
            <NavLink to="vue">Vue.js</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Technologies;
