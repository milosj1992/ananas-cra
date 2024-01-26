import React from "react";

import { Link } from "react-router-dom";
import useDataFetching from "../hooks/useDataFetching";
import { useFilterPosts } from "../hooks/useFilterPosts";
import { fetchPosts, fetchUsers } from "../services/postService";
import Loader from "../components/Loader";
import Error from "../components/error/NetworError";
import { Post, User } from "../types/post";

const PostsPage = () => {
  const { loading, error, data } = useDataFetching(
    { func: () => fetchPosts(), name: "posts" },
    { func: () => fetchUsers(), name: "users" }
  );
  const { posts, users } = data;
  const { filteredPosts, filter, setFilter } = useFilterPosts(
    posts ?? [],
    users ?? []
  );

  return loading ? (
    <Loader loading />
  ) : error ? (
    <Error error={error} />
  ) : (
    <header className="bg-gray-900 text-white p-4">
      <h1 className="text-3xl mb-4">Posts</h1>
      <div className="relative mb-3" data-te-input-wrapper-init>
        <input
          type="text"
          role="searchbox"
          aria-label="Search by user"
          placeholder="Search by user"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="bg-gray-700 text-white rounded py-2 px-4 mb-4 w-full max-w-xl"
        />
      </div>

      <section>
        <ul>
          {filteredPosts &&
            filteredPosts.map((post: Post) => (
              <li key={post.id} className="mb-2">
                <article>
                  <Link
                    to={`/post/${post.id}`}
                    className="text-blue-500 hover:underline"
                  >
                    {post.title}
                  </Link>{" "}
                  by{" "}
                  <span className="text-gray-400">
                    {users?.find((u: User) => u.id === post.userId)?.name}
                  </span>
                </article>
              </li>
            ))}
        </ul>
      </section>
    </header>
  );
};

export default PostsPage;
