import React from "react";

import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="bg-gray-900 text-white p-4">
      <h1 className="text-3xl mb-4">404 - Not Found</h1>
      <p className="text-gray-400 mb-4">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" className="text-blue-400">
        Back to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
