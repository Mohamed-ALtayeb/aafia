import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="grid items-center w-screen grid-cols-2">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Dashboard;
