import { render, screen } from "@testing-library/react";
import HomePage from "./page";

describe("HomePage", () => {
  it("renders the engineering foundation status and approved boundaries", () => {
    render(<HomePage />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "The engineering foundation is active."
    );
    expect(screen.getByRole("link", { name: "Review foundation" })).toHaveAttribute(
      "href",
      "#foundation"
    );
    expect(screen.getByText("Guest-first appointment booking")).toBeInTheDocument();
  });
});
