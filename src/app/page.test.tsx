import { render, screen } from "@testing-library/react";
import HomePage from "./page";

describe("HomePage", () => {
  it("renders the public value proposition and primary booking actions", () => {
    render(<HomePage />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Precision that holds up after you leave the chair."
    );
    expect(screen.getByRole("link", { name: "Book an appointment" })).toHaveAttribute(
      "href",
      "/book"
    );
    expect(screen.getByText("Private hair-system consultations")).toBeInTheDocument();
    expect(screen.getByText("Authentic proof only")).toBeInTheDocument();
  });
});
