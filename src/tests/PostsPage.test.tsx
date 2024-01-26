import React from "react";

import { render, waitFor, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import PostsPage from "../pages/PostsPage";
import axios from "axios";

jest.mock("axios");
const mockPost = {
  data: [
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
  ],
};
const mockUser = {
  data: [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    },
  ],
};
test("renders loading state", async () => {
  (axios.get as jest.Mock).mockResolvedValueOnce(mockPost);
  (axios.get as jest.Mock).mockResolvedValueOnce(mockUser);

  render(
    <MemoryRouter initialEntries={["/posts"]}>
      <Routes>
        <Route path="/posts" element={<PostsPage />} />
      </Routes>
    </MemoryRouter>
  );

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

  (axios.get as jest.Mock).mockResolvedValueOnce(mockUser);
  render(
    <MemoryRouter initialEntries={["/posts"]}>
      <Routes>
        <Route path="/posts" element={<PostsPage />} />
      </Routes>
    </MemoryRouter>
  );

  await waitFor(() =>
    screen.findByText(
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
    )
  );
  expect(
    screen.getByText(
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
    )
  ).toBeInTheDocument();
});
test("renders error state", async () => {
  (axios.get as jest.Mock).mockRejectedValueOnce(new Error("Network error"));

  render(
    <MemoryRouter initialEntries={["/posts"]}>
      <Routes>
        <Route path="/posts" element={<PostsPage />} />
      </Routes>
    </MemoryRouter>
  );

  await waitFor(() => {
    expect(screen.getByText("Error: Network error")).toBeInTheDocument();
  });
});
test("renders when no posts available", async () => {
  (axios.get as jest.Mock).mockResolvedValueOnce({ data: [] });

  render(
    <MemoryRouter initialEntries={["/posts"]}>
      <Routes>
        <Route path="/posts" element={<PostsPage />} />
      </Routes>
    </MemoryRouter>
  );

  await waitFor(() => {
    expect(
      screen.getByText("Error: Data is an empty array")
    ).toBeInTheDocument();
  });
});
