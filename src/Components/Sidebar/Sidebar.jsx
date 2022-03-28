import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen font-semibold bg-sky-200">
      <div>
        <div className="mt-10 text-4xl text-center">
          <Link to={"/"}>Logo</Link>
        </div>
        <div className="flex flex-col items-center justify-center h-full mt-32 space-y-10">
          <NavLink to={"/orders"}>Orders</NavLink>
          <NavLink to={"/profile"}>Profile</NavLink>
          <NavLink to={"/sign-up"}>SignUp</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
