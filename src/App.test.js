import { render, screen } from "@testing-library/react";

import App from "./App";

describe("<App/>", () => {
  it("renders application header", () => {
    render(<App />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("renders Todo list by default", () => {
    render(<App />);

    expect(screen.getByText(/Todo list/)).toBeInTheDocument();
  });
});
