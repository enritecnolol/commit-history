import { render, screen, waitFor } from "@testing-library/react";
import { describe, it } from "vitest";
import CommitHistoryPage from "./CommitHistoryPage";
import { server } from "../mocks/server";
import { rest } from "msw";
import { API_URL } from "../config";

describe("Commit history page", () => {

  it("should render Loading component when isLoading is true", async () => {
    render(<CommitHistoryPage />);
    const loadingElement = screen.getByTestId("loading");
    expect(loadingElement).toBeInTheDocument();
  });

  it("should render CommitHistoryPage component without crashing", async () => {
    render(<CommitHistoryPage />);
    await waitFor(() => {
        const textElement = screen.getByTestId("commitText");
        expect(textElement).toBeInTheDocument();
    })
  });

  it("should render CommitHistoryPage component with 1 commit", async () => {
    render(<CommitHistoryPage />);
    await waitFor(() => {
        const containerElement = screen.getByTestId("commitContainer");
        const childDivs = containerElement.querySelectorAll("div");
        expect(childDivs.length).toBeGreaterThan(1);
    })
  });

  it("should render CommitHistoryPage component with crash message", async () => {
    server.use(
      rest.get(
        `${API_URL}/github/commits?owner=fakeOwner&repo=fakeRepo`,
        (_, res, ctx) => {
          return res(ctx.status(500), ctx.json({
            data: [],
            statusCode: 500,
            timestamp: new Date().toISOString()
          }))
        }
      )
    )
    render(<CommitHistoryPage />);
    await waitFor(() => {
      const containerElement = screen.getByTestId("commitContainer");
      const childDivs = containerElement.querySelectorAll("div");
      expect(childDivs.length).toBe(1);
    })
  });
});
