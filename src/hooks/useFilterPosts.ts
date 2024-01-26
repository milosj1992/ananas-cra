import { useEffect, useState } from "react";
import { Post, User } from "../types/post";

export function useFilterPosts(posts: Post[], users: User[]) {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    // Filter posts based on user name
    if (filter) {
      const filtered = posts.filter((post: Post) => {
        const user = users.find((u: User) => u.id === post.userId);
        return user && user.name.toLowerCase().includes(filter.toLowerCase());
      });
      setFilteredPosts(filtered);
    } else {
      if (posts.length > 0) {
        setFilteredPosts(posts);
      }
    }
  }, [filter, posts, users]);

  return { filteredPosts, filter, setFilter };
}
