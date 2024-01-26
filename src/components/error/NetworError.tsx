import React from "react";

interface ErrorProps {
  error: Error;
}

const Error: React.FC<ErrorProps> = ({ error }) => {
  return (
    <div className="text-center text-red-500">
      <p>Error: {error.message}</p>
    </div>
  );
};

export default Error;
