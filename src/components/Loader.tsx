import React from "react";
import { FadeLoader } from "react-spinners";

interface LoaderProps {
  loading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ loading }) => {
  return (
    <div className="text-center" data-testid="loader">
      <FadeLoader color={"#007BFF"} loading={loading} />
    </div>
  );
};

export default Loader;
