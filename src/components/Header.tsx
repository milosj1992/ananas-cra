import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-blue-500 py-4 sticky top-0">
      <div className="container mx-auto flex items-center ">
        <ul className="flex space-x-4 pl-4">
          <li>
            <Link
              to="/"
              className="text-lg font-semibold text-white transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/posts"
              className="text-lg font-semibold text-white transition-colors"
            >
              Posts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
