import { useState, useEffect, useRef } from "react";
import { Post, Comment, User } from "../types/post";

interface FetchFunction {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  func: () => Promise<any>;
  name: string;
}

type DataForFetch = {
  [key: string]: Post[] | User[] | Comment[];
  posts: Post[];
  users: User[];
  comments: Comment[];
};
type StateDataFetch = {
  posts: Post[];
  users: User[];
  comments: Comment[];
  post?: {
    body: string;
    title: string;
  };
};

const useDataFetching = (...fetchFunctionsArgs: FetchFunction[]) => {
  const fetchFunctionsRef = useRef(fetchFunctionsArgs);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<StateDataFetch>({} as StateDataFetch);
  useEffect(() => {
    const fetchDataFunctions = async () => {
      const dataForFetch: DataForFetch = {} as DataForFetch;

      for (const { func, name } of fetchFunctionsRef.current) {
        const functionName = name.toLowerCase();
        const response = await func();
        if (response && response.data) {
          if (Array.isArray(response.data) && response.data.length === 0) {
            throw new Error("Data is an empty array");
          }
          dataForFetch[functionName] = response.data;
        } else {
          throw new Error("Data not found");
        }
      }
      return dataForFetch;
    };

    const fetchData = async () => {
      try {
        const fetchedData = await fetchDataFunctions();
        setData(fetchedData);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error("Unknown error"));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loading, error, data };
};

export default useDataFetching;
