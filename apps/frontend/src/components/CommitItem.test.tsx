import { render, screen } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import CommitItem from "./CommitItem";
import { commitHistory } from "../mocks/commitHistoryMock";

describe("Commit Item", () => {
  it("redirectToCode opens the correct URL in a new tab", async () => {

    const spyWindowOpen = vi.spyOn(window, 'open');
    spyWindowOpen.mockImplementation(vi.fn());

    render(<CommitItem commitData={commitHistory} />);
    // Simulate a click on the element that triggers redirectToCode
    const codeLink = screen.getByTestId("commitMessage");
    codeLink.click();

    expect(spyWindowOpen).toHaveBeenCalledWith(
      commitHistory.htmlUrl,
      "_blank",
      "noreferrer"
    );
  });

  test('redirectToGithubProfile opens the correct URL in a new tab', () => {
    const spyWindowOpen = vi.spyOn(window, 'open');
    spyWindowOpen.mockImplementation(vi.fn());

    render(<CommitItem commitData={commitHistory} />);
    
    // Simulate a click on the element that triggers redirectToGithubProfile
    const profileLink = screen.getByTestId('profileImg');
    profileLink.click();
  
    expect(window.open).toHaveBeenCalledWith(`https://github.com/${commitHistory.authorUsername}`, '_blank', 'noreferrer');
  });
});
