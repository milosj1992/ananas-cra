import React from "react";

import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const DefaultLayout = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white flex flex-col">
      <Header />
      <main className="container py-8 mx-auto flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

export default DefaultLayout;
