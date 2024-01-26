import React from "react";

import { render, waitFor, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import PostDetailPage from "../pages/PostDetailPage";
import axios from "axios";

jest.mock("axios");
const mockPost = {
  data: {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
};
const mockComments = {
  data: [
    {
      postId: 1,
      id: 1,
      name: "id labore ex et quam laborum",
      email: "Eliseo@gardner.biz",
      body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
    },
  ],
};
test("renders loader when loading", async () => {
  (axios.get as jest.Mock).mockResolvedValueOnce(mockPost);

  (axios.get as jest.Mock).mockResolvedValueOnce(mockComments);
  render(
    <MemoryRouter initialEntries={["/posts/1"]}>
      <Routes>
        <Route path="/posts/:id" element={<PostDetailPage />} />
      </Routes>
    </MemoryRouter>
  );

  // Verify that the loader is displayed while loading
  expect(screen.getByTestId("loader")).toBeInTheDocument();
  await waitFor(() => {
    expect(screen.queryByTestId("loader")).toBeNull();
  });

  expect(
    screen.getByText(
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
    )
  ).toBeInTheDocument();
});

test("renders post details and comments", async () => {
  (axios.get as jest.Mock).mockResolvedValueOnce(mockPost);

  (axios.get as jest.Mock).mockResolvedValueOnce(mockComments);
  render(
    <MemoryRouter initialEntries={["/posts/1"]}>
      <Routes>
        <Route path="/posts/:id" element={<PostDetailPage />} />
      </Routes>
    </MemoryRouter>
  );

  await waitFor(() =>
    screen.findByText(
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
    )
  );
});
test("renders error message when there is an error", async () => {
  (axios.get as jest.Mock).mockRejectedValueOnce(new Error("Network error"));

  render(
    <MemoryRouter initialEntries={["/posts/1"]}>
      <Routes>
        <Route path="/posts/:id" element={<PostDetailPage />} />
      </Routes>
    </MemoryRouter>
  );

  // Verify that the error message is displayed when there is an error
  await waitFor(() => {
    expect(screen.getByText("Error: Network error")).toBeInTheDocument();
  });
});
