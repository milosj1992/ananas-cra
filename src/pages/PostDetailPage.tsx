import React from "react";
import { useParams } from "react-router-dom";
import useDataFetching from "../hooks/useDataFetching";
import { fetchPostById, fetchCommentsByPostId } from "../services/postService";
import Loader from "../components/Loader";
import Error from "../components/error/NetworError";
import { Comment } from "../types/post";


const PostDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  const { loading, error, data } = useDataFetching(
    {
      func: () => (id ? fetchPostById(id) : Promise.resolve(null)),
      name: "post",
    },
    {
      func: () => (id ? fetchCommentsByPostId(id) : Promise.resolve([])),
      name: "comments",
    }
  );
  const { post, comments } = data;

  return loading ? (
    <Loader loading />
  ) : error ? (
    <Error error={error} />
  ) : (
    <article className="p-4">
      <header>
        <h1 className="text-2xl font-bold mb-2">{post?.title}</h1>
      </header>
      <section>
        <p className="text-gray-800 text-lg bg-blue-500 bg-opacity-50 p-2 rounded-lg mb-4">
          {post?.body}
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-2">Comments</h2>
        <ul className="list-disc ml-6">
          {comments &&
            comments.map((comment: Comment) => (
              <li key={comment.id} className="mb-2">
                <strong className="text-blue-500">{comment.name}</strong>:{" "}
                {comment.body}
              </li>
            ))}
        </ul>
      </section>
    </article>
  );
};

export default PostDetailPage;
